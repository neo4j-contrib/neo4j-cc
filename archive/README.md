# Neo4j Community Center

The Neo4j Community Center is platform for discovering and promoting
people, the things they do and the stuff they create.

## Design

Target: a website featuring data + code + people

Specifically, the driving deliverable is a website about the community
around Neo4j which amplifies the success of anyone doing anything with Neo4j.

Guidance:

1. "The way it begins is usually the way it ends" > "Move fast and break things"
2. overtly graph-like > powered by a graph
3. graph thinking > neo4j implementation
4. opt-in > opt-out

Inspiration:

- Kaggle as a community based on data
- Github as a community based around code

## Model

- adopt&adapt [schema.org](https://schema.org)'s SEO-friendly ontology of Things
  - shift from OO to graph structure
- [arrows.app diagram](https://drive.google.com/file/d/1BXVOYCIlS2ayl2PljsTpYNfnyuX9Kbir/view?usp=sharing)

## Implementation

Build it in public. 

### Phase 1, a static website:

Create a Neo4j-specific community center. 

- cc-public Gatsby static website

### Phase 2, a dynamic website:

Extract repeatable, generalizable patterns observed from Phase 1 into a dynamic website
which can re-create the Neo4j-specific static website by being data driven.

- cc-admin frontend in reactjs
- cc-components shared components
- cc-server backend in nestjs


## Resources

- [Miro Whiteboard](https://miro.com/app/board/o9J_lYuqqEk=/) used for design exercises

