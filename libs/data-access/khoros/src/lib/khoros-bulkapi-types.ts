
export type KhorosBulkResponse = {
  records: Partial<KhorosEventRecord>[]
}

export type KhorosActionKey =  
    'badges.award'
  | 'kudos.give'
  | 'messages.edit'
  | 'messages.first_reply'
  | 'messages.publish'
  | 'messages.view' 
  | 'moderation.approve'
  | 'moderation.mark-read'
  | 'moderation.notes.add'
  | 'moderation.reject'
  | 'rss.feed-request'
  | 'searches.search'
  | 'solutions.accept'
  | 'solutions.first_solution'
  | 'survey.prompt'
  | 'survey.prompt.response'
  | 'survey.submit'
  | 'users.registration'
  | 'view'
  | 'visits.member-entrance'
  | 'visits.visit-summary'

  export type KhorosMessageType = 'answer' | 'article' | 'comment' | 'idea' | 'reply' | 'review' | 'question' | 'topic'

  export type PosixTimeInMillis = number

  export type KhorosEventRecord = {
    // 	Unique identifier for each event
    'document.id': string

    // 	Defines the type of event that has been logged. See action.key events.
    'action.key': string

    // Full Unix timestamp of the event - Epoch time in milliseconds
    // Example: 1405027061483
    'event.time.ms': PosixTimeInMillis

    // Unique ID of message being acted on. This field is also used to denote Private messages
    // Example: 123456
    'message.uid': string
    
    // The subject field of the message being acted on
    // Example: CX Live Sydney Recap
    'message.subject': string

    // 	TRUE or FALSE statement whether the message was the creation of the thread
    // Example: TRUE
    'message.is_topic': string

    // Type of the message, if the action took place on a message:
    // 
    // - answer - answer to Q&A
    // - article - new thread in TKB
    // - comment - reply to TKB, Q&A, Blog, Idea, Contest
    // - idea - new thread for Idea
    // - reply - reply to Forum or Group
    // - review - reply to Review
    // - question - new thread in Q&A
    // - topic - new thread in Forum or Q&A
    'message.type': KhorosMessageType

    // If the action that took place was on a message, this column would include the names of any labels on the message
    // Example: wireless
    'labels': string

    // If the action that took place was on a message, this column would include the names of any tags on the message
    // Example: knitting
    'tags': string

    // 	Unique identifier of the thread on which this action took place. You can make a Community API request to convert this unique ID to thread content. This field is also used to denote the thread UID for Private messages.
    // Example: 123456
    'conversation.uid': string

    // 	The parent.conversation_uid will be the unique identifier for the parent conversation of a thread. This field can be used to determine the uid of the parent broadcast Private message when a reply is sent for a broadcast Private message
    // Example: 1234
    'parent.conversation_uid': string

    // Title of thread on which this action took place
    // Example: Troubleshooting Product XYZ
    'conversation.title': string

    // 	Unique identifier of the board on which this action took place
    // Example: 123
    'board.uid':string

    // 	Title of the board on which this action took place
    // Example: Product XYZ
    'board.title': string

    // 	Type of discussion style (forum, blog, idea, TKB, Q&A, etc.) on which the event took place
    // Example: forum
    'community_app': string

    // The location in the Khoros Community, specifically the category container and board that this event took place in. You can find the corresponding Category and Board name using Community API. For more information about how to find it, see Interpretation of the node.ancestor_path.
    // Example: /1/2/1440/1197/1222/
    'node.ancestor_path': string

    // True or False statement whether this action was a page view on a thread that has a reply marked as an accepted solution
    // Example: TRUE
    'action.is_solution_view': boolean

    // Unique identifier of the Group hub on which this action took place\
    // Example: 123
    'grouphub.uid': string

    // 	The status of the Idea on which the action happened. For a status change action, this field will hold the updated status
    // Example: Submitted
    'status':string

    // Unique identifier for registered members of your community. You can make a Community API request to convert this unique ID to the user name.
    // Example: 98765
    'user.uid': string	

    // Username of the person performing this action\
    // Example: SuzieH
    'user.login': string

    // SSO ID of the user performing this action, if SSO ID is available
    // Example: 123ABC
    'user.sso.id': string

    // Comma-separated list of all roles associated with the user id that took action
    // Example: Moderator
    'user.community.role_name': string

    // The rank of registered users that have initiated the event. A null value indicates the user has no rank or the user is anonymous.
    // Example: Rank15
    'user.community.rank_name': string

    // The registration status of the user who performed the action
    // Example: PARTIALLY_REGISTERED, FULLY_REGISTERED
    'user.registration_status': string

    // A unique ID that can be used to track unique visitors to your community and how often the same visitor logs events in your community.
    // Example: B19EFCE0660132A51BACFAF2105C4686
    // 
    // If the Communitycookie banner is enabled on the community, and the user has denied permission to drop cookies, then Community Analytics sets a random internal ID as the value of visitor.id, rather than a trackable session cookie. The random internal ID is not persistent and cannot be used to track unique visitors.
    'visitor.id': string

    // Unique identifier of the series of actions the user took as part of the same visit (entry and exit) in community
    // Example: 987654321
    'visit.id':string

    // Unique user ID of the user being acted on. For example, user.uid is the person who kudoed, but target.user.uid is the author of the content that was kudoed.
    // Example: 98765
    'target.user.uid': string

    // Username of the person being acted on
    // Example: SuzieH
    'target.user.login': string

    // SSO ID of the user being acted on if SSO ID is available
    // Example: 123ABC
    'target.user.sso_id': string	

    // 	Role of the user being acted on. The field returns a comma-separated list of all values.
    // Example: Employee
    'target.user.community.role_name': string

    // 	Rank of the user being acted on
    // Example: Expert
    'target.user.community.rank_name': string

    // Registration status of the user who this action acted upon.
    // In the case where a user hasn't completed the required steps to access the community (e.g., SSO configuration on an SSO-required community) a value of PARTIALLY_REGISTERED is returned.
    // Example: FULLY_REGISTERED
    'target.user.registration_status': string	

    // Visit duration in seconds
    // Example: 720
    'action.duration': number

    // Duration in seconds for the time to first reply or time to first solution
    // Example: 7200
    'action.span.seconds': number

    // Used by communities to weight actions of select users higher than other users. Not relevant if the Community does not to use weight. Primarily used for kudos where kudos by some users are weighted higher than kudos by other users.
    // 1 for any users, 2 for super user
    // Example: 2
    'action.weight': number

    // 	True if the action was initiated by a moderator
    // Example: true
    'action.is_moderator_action': boolean

    // Unique identifier of which badge on which this action took place
    // Example: 123
    'badge.uid': string	

    // The title of the badge
    // Example: Rock Star
    'badge.title': string	

    // Indicates whether a badge is applied retroactively or not
    // Example: true
    'badge.is_retroactive': boolean

    // The date on which this badge was activated
    // Example: 1405027061483
    'badge.activation_date': string

    // The ID of the survey the user interacted with
    // Example: 246
    'survey.id': string

    // The user's response to a survey.
    // Example: survey_response"" : [ {
    //   ""question_id"" : ""valuesurvey.impact.question.purpose"",
    //   ""question_label"" : ""What is your purpose for visiting {0}?"",
    //   ""answer_id"" : ""info"",
    //   ""answer_label"" : ""Looking for information""
    //   }
    //   ......
    //   ......
    //   }]
    'survey.response': Record<string, unknown>[]	

    // This indicates the type of the survey.
    // Example: impact
    'survey.type': string

    // The entity on which the search was performed
    // Example: users
    'search.entity.type': string

    // 	The search terms used for a search
    // Example: How to monitor mobile app traffic
    'search.terms': string

    // 	Indicates whether a search had search results or not
    // Example: true
    'search.has_results': boolean

    // The page number of search results page
    //Exmaple: 1
    'search.page_number': number

    // The filters used while performing the search
    // This field will not be populated today and is kept as a placeholder for future enhancement
    'search.filters': string	

    // The location in the Khoros community, where the search was performed
    // This field will not be populated today and is kept as a placeholder for future enhancement
    'search.location': string

    // The type of Search performed
    // Example: SIMPLE
    'search.type': string

    // Indicates whether the search results contained promoted results or not
    // Example: true
    'search.is_promoted_search_result': boolean	

    // Array having the message.UID, type, and rank of the search results
    //
    // Example: ""search_results"": [
    //   ""3:MESSAGE:1.0"",
    //   ""1:MESSAGE:2.0"",
    //   ""2:MESSAGE:3.0""
    //   ],
    'search.results': string[]

    // The type of private message sent
    // 
    // Example: ONE_TO_ONE_THREAD
    'privatemessage.type': string	

    // Indicates whether a private message is a new conversation or not
    // 
    // Example: false (for a reply to ONE_TO_ONE_THREAD)
    'privatemessage.newthread': string	

    // The start time of the Community event
    // 
    // Example: 1576663394388
    'occasion.start_time': PosixTimeInMillis	

    // The end time of the Community event
    // Example: 1576663394388
    'occasion.end_time': PosixTimeInMillis

    // The RSVP response to the invite of a Community event
    //
    // Example: MAYBE
    'occasion.rsvp_response': string	

    // Indicates whether the RSVP response had an event invite behind it or not
    //
    // Example: true
    'occasion.is_invited': boolean

    // Unique identifier for the product
    //
    // Example: 1234
    'product.uid': string	

    // When a product is mentioned in a message
    //
    // Example: ""product_mentions"" : [ ""Peregrine7"" ]
    'product.mentions': string[]

    // When a product is tagged in a message
    //
    // Example: ""product_tags"" : [ ""Peregrine7"" ]
    'product.tags': string[]

    // Indicates whether the page on which the action took place is a product page or not
    //
    // Example: true
    'product.is_product_page': boolean

    // The title of the product
    //
    // Example: Product ABC
    'product.title': string	

    // Indicates the type of subscription action performed
    //
    // Example: forum-board
    'subscription.type': string

    // The host of the browser initiating the event.
    //
    // Example: community.khoros.com
    'request.url.host': string	

    // User agent of browser initiating event.
    //
    // Example: Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_0 like Mac OS X; en-us) AppleWebKit/528.18 (KHTML, like Gecko) Version/4.0 Mobile/7A341 Safari/528.16
    'request.headers.user_agent': string	

    // 	The URLs of the referrers of the request. A referrer is the site a user came from before entering the community to take the listed action. Depending on type of action, the user’s browser setting, and if your community has SSL disabled, you might not have any referrers for certain actions or might have more than one value. The field returns a comma-separated list of all values.
    //
    // Example: www.google.com, www.google.com/ncr
    'request.headers.referrer.url': string

    // The host part of the referrer URL
    //
    // Example: www.google.com
    'request.headers.referrer.host': string	

    // Whether the action took place by the user on desktop or mobile device as determined by WURFL. Mobile includes tablets and phones.
    //
    // Example: mobile
    'request.device': string	

    // City of user taking action converted from browser IP using IP2Location DB 11. Country mapping of IP address associated with browser that initiated event.
    //
    // Example: San Francisco
    'request.geo.city': string	

    // Country name from ISO 3166 of the user taking action converted from the browser IP using IP2Location DB11
    //
    // Example: United States, Australia, India
    'request.geo.country': string	

    // Two-character country code from ISO 3166 of user taking action converted from browser IP using IP2Location DB11
    //
    // Example: US
    'request.geo.country_code': string	

    // Geohash using latitude and longitude of user taking action converted from browser IP using IP2Location DB11
    //
    // Example: 9q8yyxwqn2uj
    'request.geo.geohash': string	

    // Zip/postal code of user taking action converted from browser IP using IP2Location DB11
    //
    // Example: 94104
    'request.geo.postal': string	

    // Region or state name of user taking action converted from browser IP using IP2Location DB11
    //
    // Example: California
    'request.geo.region': string	

    // Positive (+) or negative (-) hour offset from UTC of the user taking action converted from browser IP using IP2Location DB11
    //
    // Example: -08:00
    'request.geo.timezone': number	

    // Latitude of the user taking action converted from browser IP using IP2Location DB11
    //
    // Example: 37.791257
    'request.geo.latitude': number	


    // Longitude of the user taking action converted from browser IP using IP2Location DB11
    //
    // Example: 37.791257
    'request.geo.longitude': number
  }