"use client";

import React, {useMemo} from "react";
import {cacheExchange, createClient, fetchExchange, ssrExchange, UrqlProvider} from "@urql/next";


export function GraphqlProvider({ children }: React.PropsWithChildren) {
    const [client, ssr] = useMemo(() => {
        const isClient = typeof window !== "undefined";
        const _ssr = ssrExchange({
            isClient,
        });
        const _client = createClient({
            url: "/api/graphql",
            exchanges: [cacheExchange, _ssr, fetchExchange],
            suspense: true,
        });
        return [_client, _ssr]
    }, [])

    return (
        <UrqlProvider  client={client} ssr={ssr}>
            {children}
        </UrqlProvider>
    );
}
