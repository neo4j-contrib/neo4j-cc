// Ninjas from Discourse Group
MATCH (n:DiscourseGroup {name:"ninja"})--(du:DiscourseUser)--(u:User) 
RETURN apoc.map.merge(properties(du), properties(u)) as users