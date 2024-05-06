"use client";

import React, {useMemo} from "react";
import {GraphqlClientProvider} from "@/contexts/graphql/provider-client.tsx";
import {GraphqlServerProvider} from "@/contexts/graphql/provider-server.tsx";

export default function GraphqlProvider({ children }: React.PropsWithChildren) {
    const isBrowser = typeof window !== "undefined";
    // const Provider = useMemo(() => {
    //     // return isBrowser ? GraphqlClientProvider : GraphqlServerProvider;
    //     return GraphqlClientProvider;
    // }, []);

    console.log("DEBUG: isBrowser", isBrowser)
    // const Provider = isBrowser ? GraphqlClientProvider : GraphqlServerProvider

    return (
      <GraphqlClientProvider>
        {children}
      </GraphqlClientProvider>
  );
}
