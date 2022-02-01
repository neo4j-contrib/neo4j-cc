// store_badges_query = """
MATCH (discourseUser:DiscourseUser {id: $id})
SET discourseUser.lastBadgeRefresh = datetime()
WITH discourseUser
    UNWIND $badges AS badge
MERGE (discourseBadge:DiscourseBadge {id: badge.id})
ON CREATE SET discourseBadge.name = badge.name, discourseBadge.description = badge.description
MERGE (discourseUser)-[:HAS_BADGE]->(discourseBadge)

;

// users_badge_refresh_query = """
MATCH (account:DiscourseUser)
WITH account {
    .id,
    .name,
    lastRefresh: coalesce(account.lastBadgeRefresh, datetime() - duration("PT24H1M"))
}
WHERE account.lastRefresh < datetime() - duration("PT24H")
RETURN account.id AS discourseId, account.name AS userName
LIMIT 100

;

// store_groups_query = """
MATCH (discourseUser:DiscourseUser {id: $id})
SET discourseUser.lastGroupRefresh = datetime()
WITH discourseUser
     UNWIND $groups AS group
MERGE (discourseGroup:DiscourseGroup {id: group.id})
ON CREATE SET discourseGroup.name = group.name
MERGE (discourseUser)-[:IN_GROUP]->(discourseGroup)

;

// users_groups_refresh_query = """
MATCH (account:DiscourseUser)
WITH account {
    .id,
    .name,
    lastRefresh: coalesce(account.lastGroupRefresh, datetime() - duration("PT24H1M"))
}
WHERE account.lastRefresh < datetime() - duration("PT24H")
RETURN account.id AS discourseId, account.name AS userName
LIMIT 100

;

// users_who_passed_query_but_dont_have_badge = """
MATCH (user:User)-[:TOOK]->(exam)
WHERE exists(exam.certificatePath) AND exam.passed
MATCH (user)-[:DISCOURSE_ACCOUNT]->(account)
WHERE not((account)-[:HAS_BADGE]->(:DiscourseBadge {id: 103}))
RETURN DISTINCT user.auth0_key AS externalId,
       account.name AS userName,
       account.id AS discourseId,
       [(account)-[:HAS_BADGE]->(badge) | badge.name] AS badges
ORDER BY size(badges) DESC
LIMIT 100

;

// users_who_passed_query_but_dont_have_group = """
MATCH (user:User)-[:TOOK]->(exam)
WHERE exists(exam.certificatePath) AND exam.passed
MATCH (user)-[:DISCOURSE_ACCOUNT]->(account)
WHERE not((account)-[:IN_GROUP]->(:DiscourseGroup {id: 41}))
RETURN DISTINCT user.auth0_key AS externalId,
       account.name AS userName,
       account.id AS discourseId,
       [(account)-[:IN_GROUP]->(group) | group.name] AS groups,
       [(account)-[:HAS_BADGE]->(badge) | badge.name] AS badges
ORDER BY size(groups) DESC
LIMIT 50

;

// did_user_pass_query = """
MATCH path = (user:User {auth0_key: $externalId})-[:TOOK]->(exam)
WHERE exists(exam.certificatePath) AND exam.passed
WITH count(*) AS count
RETURN CASE WHEN count > 0 THEN true ELSE false END AS certified

;

// did_discourse_user_pass_query = """
MATCH (discourseUser:DiscourseUser {id: $discourseUserId})<-[:DISCOURSE_ACCOUNT]-(user)
MATCH path = (user:User)-[:TOOK]->(exam)
WHERE exists(exam.certificatePath) AND exam.passed
WITH count(*) AS count
RETURN CASE WHEN count > 0 THEN true ELSE false END AS certified

;

// ninjas_api_so_query = """\
WITH $now as currentMonth
Match (u:User:StackOverflow)
match (u)-[:POSTED]->(a:Answer)-[:ANSWERED]->(q:Question)
WHERE apoc.date.format(coalesce(a.created,q.created),'s','yyyy-MM') = currentMonth
with *, apoc.date.format(coalesce(a.created,q.created),'s','yyyy-MM-W') as week
with currentMonth, week, u.name as user, count(*) as total, sum(case when a.is_accepted then 1 else 0 end) as accepted
ORDER BY total DESC
return currentMonth, user, collect([week,total,accepted]) as weekly

;


// ninjas_api_discourse_query = """\
MATCH path = (u)-[:POSTED_CONTENT]->(post:DiscoursePost)-[:PART_OF]->(topic)-[:IN_CATEGORY]->(category)
WHERE post.createdAt.year = $year AND post.createdAt.month = $month
AND post.number > 1
AND not((u)-[:POSTED_CONTENT]->(:DiscoursePost {number: 1})-[:PART_OF]->(topic))
with *, post.createdAt.week as week
with week, u, count(*) as total, collect(DISTINCT {name: category.name, id: category.id}) AS categories
ORDER BY week, total DESC
WITH u, collect([toString(date(toString($year - (week / 52)) + "-W" + toString(week))), total]) as weekly, categories
WITH u, [(u)<-[:DISCOURSE_ACCOUNT]-(user) WHERE exists(user.auth0_key) | u][0] AS discourseUser, weekly, categories
WITH u.name AS user, discourseUser.screenName AS discourseUser,
     exists((discourseUser)-[:IN_GROUP]->(:DiscourseGroup {id: 50})) AS isNinja,
     apoc.map.fromPairs(apoc.coll.toSet(apoc.coll.flatten(collect(weekly)))) AS weekly,
     apoc.coll.toSet(apoc.coll.flatten(collect(categories))) AS categories
RETURN user, discourseUser, weekly, categories, isNinja
ORDER BY size(keys(weekly)) DESC

;

// ninjas_so_query = """\
WITH $now as currentMonth
Match (u:User:StackOverflow)
match (u)-[:POSTED]->(a:Answer)-[:ANSWERED]->(q:Question)
WHERE apoc.date.format(coalesce(a.created,q.created),'s','yyyy-MM') = currentMonth
with *, apoc.date.format(coalesce(a.created,q.created),'s','yyyy-MM-W') as week
with currentMonth, week, u.name as user, count(*) as total, sum(case when a.is_accepted then 1 else 0 end) as accepted
ORDER BY total DESC
return currentMonth, user, collect([week,total,accepted]) as weekly

;

// ninjas_discourse_query = """\
MATCH path = (u)-[:POSTED_CONTENT]->(post:DiscoursePost)-[:PART_OF]->(topic)-[:IN_CATEGORY]->(category)
WHERE datetime({year:$year, month:$month+1}) > post.createdAt >= datetime({year:$year, month:$month })
with *, post.createdAt.week as week
with week, u, count(*) as total, collect(DISTINCT category.name) AS categories
ORDER BY week, total DESC
WITH u, collect([toString(date(toString($year - (week / 52)) + "-W" + toString(week))), total]) as weekly, categories
WITH u, [(u)<-[:DISCOURSE_ACCOUNT]-(user) WHERE exists(user.auth0_key) | user.email][0] AS email, weekly, categories
RETURN u.name AS user, email,
       apoc.map.fromPairs(apoc.coll.toSet(apoc.coll.flatten(collect(weekly)))) AS weekly,
       apoc.coll.toSet(apoc.coll.flatten(collect(categories))) AS categories
ORDER BY size(keys(weekly)) DESC

;

// update_categories_subcategories_query = """\
UNWIND $params AS event
MERGE (category:DiscourseCategory {id: event.id})
SET category.name = event.name, category.description = event.description
WITH category, event
UNWIND event.subcategory_ids AS subCategoryId
MERGE (subCategory:DiscourseCategory {id: subCategoryId})
MERGE (subCategory)-[:CHILD]->(category)

;

// update_categories_query = """\
UNWIND $params AS event
MERGE (category:DiscourseCategory {id: event.id})
SET category.name = event.name, category.description = event.description

;

// update_topics_query = """\
UNWIND $params AS t
MATCH (topic:DiscourseTopic {id: t.id })
SET topic.likeCount = toInteger(t.like_count),
    topic.views = toInteger(t.views),
    topic.replyCount = toInteger(t.replyCount)

;

// store_medium_post_query = """\
MATCH (ma:MediumAuthor {name: $author})
MERGE (mp:MediumPost {guid: $guid})
ON CREATE SET
  mp.title = $title,
  mp.author = $author,
  mp.url = $url,
  mp.content = $content,
  mp.date = $date
MERGE (mp)-[:AUTHORED_BY]->(ma)

;

// get_medium_posts_query = """\
MATCH (mp:MediumPost)-[:AUTHORED_BY]->(ma:MediumAuthor)-[:HAS_DISCOURSE]->(du:DiscourseUser)
WHERE
  mp.discourse_id IS NULL
RETURN
  mp.title AS title,
  mp.url AS url,
  mp.content AS content,
  mp.date AS date,
  mp.guid AS guid,
  du.name AS discourse_user

;

// set_medium_post_posted_query = """\
MATCH (mp:MediumPost)
WHERE
  mp.guid = $mediumId
SET
  mp.discourse_id = $discourseId

;

// community_content_query = """\
MERGE (user:DiscourseUser {id: $params.topic.user_id })
SET user.name = $params.topic.created_by.username,
    user.avatarTemplate = $params.topic.created_by.avatar_template

MERGE (topic:DiscourseTopic {id: $params.topic.id })
SET topic.title = $params.topic.title,
    topic.createdAt = datetime($params.topic.created_at),
    topic.slug = $params.topic.slug,
    topic.approved = $params.approved,
    topic.rating = $params.rating,
    topic.likeCount = toInteger($params.topic.like_count),
    topic.views = toInteger($params.topic.views),
    topic.replyCount = toInteger($params.topic.reply_count),
    topic.categoryId = $params.topic.category_id

MERGE (user)-[:POSTED_CONTENT]->(topic)

;

// community_content_active_query = """\
OPTIONAL MATCH (topic:DiscourseTopic {id: $params.topic.id })
RETURN topic

;

// import_post_query = """\
MERGE (user:DiscourseUser {id: $params.post.user_id })
ON CREATE SET user.name = $params.post.username,
    user.avatarTemplate = $params.post.avatar_template

MERGE (topic:DiscourseTopic {id: $params.post.topic_id })
SET topic.title = $params.post.topic_title, topic.slug = $params.post.topic_slug

MERGE (user)-[:POSTED_CONTENT]->(topic)

MERGE (post:DiscoursePost {id: $params.post.id})
SET post.text = $params.post.cooked, post.createdAt = datetime($params.post.created_at),
    post.number = $params.post.post_number

MERGE (user)-[:POSTED_CONTENT]->(post)
MERGE (post)-[:PART_OF]->(topic)

;

// import_topic_query = """\
MATCH (category:DiscourseCategory {id: $params.topic.category_id})

MERGE (user:DiscourseUser {id: $params.topic.user_id })
ON CREATE SET user.name = $params.topic.created_by.username,
              user.avatarTemplate = $params.topic.created_by.avatar_template
MERGE (topic:DiscourseTopic {id: $params.topic.id })
SET topic.title = $params.topic.title,
    topic.createdAt = datetime($params.topic.created_at),
    topic.slug = $params.topic.slug,
    topic.approved = $params.approved,
    topic.rating = $params.rating,
    topic.likeCount = toInteger($params.topic.like_count),
    topic.views = toInteger($params.topic.views),
    topic.replyCount = toInteger($params.topic.reply_count),
    topic.categoryId = $params.topic.category_id


MERGE (topic)-[:IN_CATEGORY]->(category)
MERGE (user)-[:POSTED_CONTENT]->(topic)

;

// user_events_query = """\
MERGE (discourse:DiscourseUser {id: $params.user.id })
SET discourse.name = $params.user.username,
    discourse.location = $params.user.location,
    discourse.avatarTemplate = $params.user.avatar_template,
    discourse.screenName = $params.user.name
WITH discourse

MERGE (user:User {auth0_key: $params.user.external_id})
ON CREATE SET user.email = $params.user.email
MERGE (user)-[:DISCOURSE_ACCOUNT]->(discourse)

WITH user

OPTIONAL MATCH (twitter:Twitter {screen_name: $params.user.user_fields.`4`})
FOREACH (_ IN CASE twitter WHEN null THEN [] ELSE [1] END |
   MERGE (user)-[:TWITTER_ACCOUNT]->(twitter))

WITH user

OPTIONAL MATCH (github:GitHub {name: $params.user.user_fields.`6`})
FOREACH (_ IN CASE github WHEN null THEN [] ELSE [1] END |
   MERGE (user)-[:GITHUB_ACCOUNT]->(github))


WITH user

OPTIONAL MATCH (so:StackOverflow {id: toInteger($params.user.user_fields.`5`)})
FOREACH (_ IN CASE so WHEN null THEN [] ELSE [1] END |
   MERGE (user)-[:STACKOVERFLOW_ACCOUNT]->(so))

;

// import_twin4j_query = """\
    MERGE (twin4j:TWIN4j {date: datetime($date) })
    SET twin4j.image = $image, twin4j.summaryText = $summaryText, twin4j.link = $link

    FOREACH(tag IN $allTheTags |
      MERGE (t:TWIN4jTag {tag: tag.tag, anchor: tag.anchor })
      MERGE (twin4j)-[:CONTAINS_TAG]->(t)
    )

    WITH twin4j
    UNWIND $people AS person
    OPTIONAL MATCH (twitter:User:Twitter) WHERE twitter.screen_name = person.screenName
    OPTIONAL MATCH (user:User) where user.id = toInteger(person.stackOverflowId)
    WITH coalesce(twitter, user) AS u, twin4j

    CALL apoc.do.when(u is NOT NULL, 'MERGE (twin4j)-[:FEATURED]->(u)', '', {twin4j: twin4j, u: u}) YIELD value
    RETURN value
    
;

// find_ninja_to_process = """
MATCH (me:DiscourseUser)-[:IN_GROUP]->(:DiscourseGroup {id: 50})
WHERE not((me)<-[:SUGGESTED_FOR]-(:DiscourseRecommendations {week: $weekStarting}))
RETURN me {.name, .id, .screenName} AS u
LIMIT $limit

;

// find_topics_to_recommend = """
MATCH (me:DiscourseUser {id: $userId})
MATCH (me)-[:POSTED_CONTENT]->(post:DiscoursePost)-[:PART_OF]->(topic)-[:IN_CATEGORY]->(category)
WITH me, category, count(*) AS count
ORDER BY count DESC
LIMIT 5
WITH me, collect(category) AS categories

MATCH (u:DiscourseUser)-[:POSTED_CONTENT]->(post:DiscoursePost)-[:PART_OF]->(topic)
WITH me, topic, count(*) AS count, categories
WHERE count = 1
AND exists((topic)-[:IN_CATEGORY]->())
AND topic.createdAt > datetime() - duration({days: 7})
AND not((topic)-[:PART_OF]->(:DiscourseRecommendations)-[:SUGGESTED_FOR]->(me))
MATCH (topic)-[:IN_CATEGORY]->(c)
WHERE c in categories
WITH me, topic, collect(c.name) AS categories
ORDER BY rand()
LIMIT 3

RETURN topic.title AS title,
"https://community.neo4j.com/t/" + topic.id AS link,
categories,
topic.createdAt AS createdAt,
topic.id AS topicId
ORDER BY topic.createdAt DESC

UNION ALL

MATCH (me:DiscourseUser {id: $userId})

MATCH (u:DiscourseUser)-[:POSTED_CONTENT]->(post:DiscoursePost)-[:PART_OF]->(topic)
WITH me, topic, count(*) AS count
WHERE count = 1
AND exists((topic)-[:IN_CATEGORY]->())
AND topic.createdAt > datetime() - duration({days: 7})
AND not((topic)-[:PART_OF]->(:DiscourseRecommendations)-[:SUGGESTED_FOR]->(me))
MATCH (topic)-[:IN_CATEGORY]->(c)
WITH me, topic, collect(c.name) AS categories
ORDER BY rand()

RETURN topic.title AS title,
"https://community.neo4j.com/t/" + topic.id AS link,
categories,
topic.createdAt AS createdAt,
topic.id AS topicId
ORDER BY topic.createdAt DESC

;

// save_recommendations_query = """
MATCH (me:DiscourseUser {id: $userId})
MERGE (recommendations: DiscourseRecommendations {week: $weekStarting, user: $userId})
SET recommendations.sent = datetime()
MERGE (recommendations)-[:SUGGESTED_FOR]->(me)
WITH recommendations
UNWIND $topics AS topicId
MATCH (topic:DiscourseTopic {id: topicId})
MERGE (topic)-[:PART_OF]->(recommendations)

;

// answered_recommendations_query = """
MATCH (topic:DiscourseTopic)-[:PART_OF]->(rec)-[:SUGGESTED_FOR]->(user)
WITH topic, collect(user.name) AS users
OPTIONAL MATCH (answerer)-[:POSTED_CONTENT]->(post:DiscoursePost)-[:PART_OF]->(topic)
WHERE post.number > 1
WITH topic, users, collect(DISTINCT answerer.name) AS answerers
ORDER BY topic.createdAt DESC
return topic.title, toString(topic.createdAt),  users, answerers, size(apoc.coll.intersection(users, answerers)) > 0,
       "https://community.neo4j.com/t/" + topic.id AS link

