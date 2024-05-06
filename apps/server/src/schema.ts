import { readFileSync } from 'node:fs'
import { createSchema } from "graphql-yoga";
import type { Resolvers } from './__generated__'

// Note: we need to use next/server::readFile to safely read the schema
// in the NextJS environment

/* To dos
 * - disable GraphiQL in production
 *
 */

export interface Context {
  timeNow: Date
}

// const typeDefs = readFileSync('./schema.graphql', 'utf8')

const typeDefs = `
type Query {
  ping: String
}
`

const resolvers: Resolvers<Context> = {
      Query: {
          ping(_, _args, {timeNow}) {
              return timeNow.toString();
          }
      }
}

export const schema = createSchema<Context>({
  typeDefs,
  resolvers,
});
