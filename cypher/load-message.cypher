WITH date("2018-06-01") AS startDate, date("2019-01-01") AS endDate
WITH startDate, duration.inDays(startDate, endDate).days AS days
WITH [day in range(0, days) | startDate + duration({days: day})] AS dates
UNWIND dates as yearly
UNWIND yearly as dayOfYear
CALL apoc.load.json("file:///Users/akollegger/Developer/neo4j-contrib/neo4j-cc/exports/khoros/messages/messages."+toString(date(dayOfYear))+".json")
YIELD value
MERGE (m:Khoros:Message {id:value.id})
ON CREATE
  SET m.author_id = value.author.id
  SET m.board_id = value.board.id
  SET m.body = value.body
  SET m.can_accept_solution = value.can_accept_solution
  SET m.conversation_id = value.conversation.id
  SET m.depth = value.depth
  SET m.edit_frozen = value.edit_frozen
  SET m.excluded_from_kudos_leaderboards = value.excluded_from_kudos_leaderboards
  SET m.href = value.href
  SET m.is_promoted = value.is_promoted
  SET m.is_solution = value.is_solution
  SET m.moderation_status = value.moderation_status
  SET m.parent_id = value.parent.id
  SET m.placeholder = value.placeholder
  SET m.popularity = value.popularity
  SET m.post_time = value.post_time
  SET m.post_time_friendly = value.post_time_friendly
  SET m.read_only = value.read_only
  SET m.search_snippet = value.search_snippet
  SET m.subject = value.subject
  SET m.type = value.type
  SET m.view_href = value.view_href
  SET m.visibility_scope = value.visibility_scope
  SET m.teaser = value.teaser
  SET m.topic_id = value.topic.id 
  SET m.views = value.metrics.views
  SET m.view_href = value.view_href
  SET m.tags = []
  SET m.labels = []
  SET m.custom_tags = []