import React, {useEffect, useMemo, useState} from "react";
import type { Client} from "@urql/next";
import {cacheExchange, createClient, ssrExchange, UrqlProvider} from "@urql/next";
import {createLocalExecutor} from "@/lib/server.ts";


export function GraphqlServerProvider({ children }: React.PropsWithChildren) {
    const ssr = useMemo(() => {
        return ssrExchange({
            isClient: false,
        })
    }, [])

    const [client, setClient] = useState<Client>()

    useEffect(() => {
        const init = async () => {
            const executeExchange = await createLocalExecutor();
            const _client = createClient({
                url: "/api/graphql",
                exchanges: [cacheExchange, ssr, executeExchange],
                suspense: true,
            });
            setClient(_client);
        }
        init();
    }, [ssr])

    return client ?
        <UrqlProvider client={client} ssr={ssr}>{children}</UrqlProvider>
        : <div>Loading...</div>
}
