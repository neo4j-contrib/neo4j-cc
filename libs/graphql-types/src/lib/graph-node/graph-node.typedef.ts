import gql from 'graphql-tag';

export const GraphNodeDefinitionFields = `
_id: Int @cypher(statement: "RETURN id(this)")
_labels: [String!]! @cypher(statement: "RETURN labels(this)")
_properties: JSONObject! @cypher(statement: "RETURN properties(this)")
`;

export const GraphNodeDefinition = gql`
  type GraphNode @node(label: "CC") {
    ${GraphNodeDefinitionFields}
  }

  type Query {
    allNodes: [GraphNode]
      @cypher(
        statement: """
        MATCH (n) RETURN n
        """
      )
  }

  type Mutation {
    createNode(labels:[String!]!, properties: JSONObject): GraphNode
      @cypher(
        statement:"""
        WITH $labels as ls, $properties as ps
        CALL apoc.create.node(ls, ps) YIELD node
        RETURN node
        """
      )
  }  
`;
