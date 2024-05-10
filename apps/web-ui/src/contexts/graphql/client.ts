import {
  type Client,
  type SSRExchange,
  cacheExchange,
  createClient,
  fetchExchange,
  ssrExchange,
} from "@urql/next";
// import {createLocalExecutor} from "@/lib/server.ts";

export const makeGraphQLClient: () => [Client, SSRExchange] = () => {
  const isClient = typeof window !== "undefined";
  const ssr = ssrExchange({
    isClient,
  });

  let transportExchange = fetchExchange;
  if (!isClient) {
    // TODO: does this need to be dynamically imported to avoid server code leaking into client-side bundle?
    // const { schema } = await import("@repo/server/graphql")
    // transportExchange = createLocalExecutor();
  }

  const client = createClient({
    url: "/api/graphql",
    exchanges: [cacheExchange, ssr, transportExchange],
    suspense: true,
  });

  return [client, ssr];
};
