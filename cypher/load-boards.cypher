CALL apoc.load.json("file:///Users/akollegger/Developer/neo4j-contrib/neo4j-cc/exports/khoros/boards.json")
YIELD value
RETURN value LIMIT 1