"use client";

import React from "react";
import {GraphqlClientProvider} from "@/contexts/graphql/provider-client.tsx";
import {GraphqlServerProvider} from "@/contexts/graphql/provider-server.tsx";


export function GraphqlProvider({ children }: React.PropsWithChildren) {
    const isClient = typeof window !== "undefined";
    const Provider = isClient ? GraphqlClientProvider : GraphqlServerProvider;

    return (
        <Provider>
            {children}
        </Provider>
    );
}
