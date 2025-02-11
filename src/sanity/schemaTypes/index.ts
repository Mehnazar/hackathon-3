import { type SchemaTypeDefinition } from 'sanity'
import { product } from './product'
import { Category } from './category'
import { signUp } from './signUp'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product,Category,signUp],
}
