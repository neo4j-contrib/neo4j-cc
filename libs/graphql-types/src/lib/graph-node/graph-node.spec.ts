import {
  GraphNodeDefinition,
  GraphNodeDefinitionFields,
} from './graph-node.typedef';
import { ObjectTypeDefinitionNode, Kind } from 'graphql';
import { print } from 'graphql/language/printer';

describe('graph-node', () => {
  it('snippet of field defs matches typedef', () => {
    const def = GraphNodeDefinition.definitions.find(
      (def) => def.kind === Kind.OBJECT_TYPE_DEFINITION
    ) as ObjectTypeDefinitionNode;
    expect(def).toBeDefined();
    expect(def.fields.map((f) => print(f)).join('\n')).toEqual(
      GraphNodeDefinitionFields.trim()
    );
  });
});
