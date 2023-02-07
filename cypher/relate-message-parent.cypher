MATCH (m:Khoros:Message), (p:Khoros:Message)
WHERE m.parent_id = p.id
MERGE (m)-[:PARENT]->(p)
