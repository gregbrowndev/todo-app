import React from "react";
import {cacheExchange, createClient, ssrExchange, UrqlProvider} from "@urql/next";
import {createLocalExecutor} from "@/lib/server.ts";

export async function GraphqlServerProvider({ children }: React.PropsWithChildren) {
    const ssr = ssrExchange({
        isClient: false,
    })
    const executeExchange = await createLocalExecutor();
    const client = createClient({
        url: "/api/graphql",
        exchanges: [cacheExchange, ssr, executeExchange],
        suspense: true,
    });
    return (
        <UrqlProvider client={client} ssr={ssr}>
            {children}
        </UrqlProvider>
    )
}
