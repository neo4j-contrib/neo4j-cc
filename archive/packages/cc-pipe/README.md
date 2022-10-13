# cc-batch

Library of batch import/export utilities. 

## 

- GitHub
- Discourse

##

Convert projects.json to a csv with header:
```
cat data/projects.json |jq -r '["id", "url", "name", "owner", "nameWithOwner", "createdAt", "updatedAt", "topics", "languages", "forkCount"], (.[] | [.id, .url, .name, .owner.login, .nameWithOwner, .createdAt, .updatedAt, ([( .repositoryTopics.nodes[] | .topic.name ) ] | join(",") ), ([( .languages.nodes[] | .name ) ] | join(",") ), .forks.totalCount   ]) | @csv' > data/gh-neo4j.csv
```