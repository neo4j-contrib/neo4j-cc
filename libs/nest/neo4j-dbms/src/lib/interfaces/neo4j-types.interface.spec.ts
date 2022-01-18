
import { isNode, isRelationship } from 'neo4j-driver-core';
import { TaggedNode, TaggedRelationship } from './neo4j-types.interface';

describe('Neo4j Types', () => {

  it('should guard Nodes', () => {
    const n:TaggedNode = {
      __isNode__: true,
      identity: 1,
      labels: [],
      properties: {}
    }

    expect(isNode(n)).toBeTruthy();
  });


  it('should guard Relationships', () => {
    const r:TaggedRelationship = {
      __isRelationship__: true,
      identity: 1,
      type: "",
      properties: {}
    }

    expect(isRelationship(r)).toBeTruthy();
  });
});
