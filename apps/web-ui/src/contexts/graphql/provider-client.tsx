"use client";

import React, { useMemo } from "react";
import {cacheExchange, createClient, fetchExchange, ssrExchange, UrqlProvider} from "@urql/next";


export function GraphqlClientProvider({ children }: React.PropsWithChildren) {
    const [client, ssr] = useMemo(() => {
        const _ssr = ssrExchange({
            isClient: true,
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
