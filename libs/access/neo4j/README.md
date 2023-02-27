# access-neo4j

Graph access library which blends server-side Cypher
with client-side work.

Layers:

- Neo4j DBMS
- Named Graph (aka database)

## Example

From pure cypher to a blend of cypher and typescript.

### Count nodes

In Cypher:

```cypher
MATCH (n) RETURN count(n)
```

In TypeScript:

```typescript
pipe(cypher`MATCH (n) RETURN n`, count);
```
