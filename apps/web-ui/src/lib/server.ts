import {executeExchange} from "@urql/exchange-execute";
import {createYoga} from "graphql-yoga";
// import { type Context} from "@repo/server/graphql";
import { type Exchange} from "urql";
// import {schema } from "@repo/server/graphql";
// TODO: build context to pass to server

// Note: executable schema imported from @repo/server

/** Create a local executor
 *   Returns a URQL exchange for the GraphQL client to use when
 *   server-side rendering. This allows the NextJS server to resolve
 *   graphql queries while rendering without making additional network
 *   requests.
 */
export async function createLocalExecutor(): Promise<Exchange> {
    const { schema } = await import("@repo/server/graphql");
    return executeExchange({
        schema,
        // TODO - does this work with a Promise? Does it work with auth?
        context: () => makeContext()
    })
}

/** Create a GraphQL Yoga server
 *   Returns a server that can be embedded into a NextJS route, so it
 *   can serve graphql requests to the client when client-side rendering.
 */
export async function createHttpExecutor(): Promise<ReturnType<typeof createYoga>> {
    const { schema } = await import("@repo/server/graphql");
    return createYoga({
        schema,
        graphqlEndpoint: "/api/graphql",
        // Yoga needs to know how to create a valid Next response
        fetchAPI: { Response },
        context: () => makeContext()
    })
}

async function makeContext(): Promise<any> {
    // Load environment variables, create DB connection/session, etc.
    return {
        timeNow: new Date()
    };
}
