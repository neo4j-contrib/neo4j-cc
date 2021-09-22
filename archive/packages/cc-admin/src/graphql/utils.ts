import { flow } from 'fp-ts/lib/function';

import { IntrospectionInputObjectType, IntrospectionSchema } from 'graphql';
import { findFirst } from 'fp-ts/lib/Array';
import { fromOption } from 'fp-ts/lib/Either';

export const findIntrospectionInputObject= (name:string) =>
    flow(    
      (introspectionSchema:IntrospectionSchema) => introspectionSchema.types as IntrospectionInputObjectType[],
      findFirst<IntrospectionInputObjectType>( t => t.kind ==="INPUT_OBJECT" && t.name === name),
      fromOption(() => `Could not find definition of ${name} in IntrospectionSchema`)
    )
    