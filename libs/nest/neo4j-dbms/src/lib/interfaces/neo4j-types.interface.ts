import {Node, Relationship} from 'neo4j-driver';
import { NumberOrInteger } from 'neo4j-driver-core';

export type TaggedNode<T extends NumberOrInteger = number> = Partial<Node<T>> & {
  __isNode__ : unknown
}

export type TaggedRelationship<T extends NumberOrInteger = number> = Partial<Relationship<T>> & {
  __isRelationship__ : unknown
}

export const isNode = (o:unknown) : o is Node => (o && ((o as TaggedNode).__isNode__ !== undefined))

export const isRelationship = (o:unknown) : o is Relationship => (o && ((o as TaggedRelationship).__isRelationship__ !== undefined))