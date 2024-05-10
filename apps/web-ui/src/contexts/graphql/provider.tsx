"use client";
import {GraphqlClientProvider} from "@/contexts/graphql/provider-client.tsx";
import {GraphqlServerProvider} from "@/contexts/graphql/provider-server.tsx";

export const GraphqlProvider = typeof window !== "undefined"
    ? GraphqlClientProvider
    : GraphqlServerProvider;