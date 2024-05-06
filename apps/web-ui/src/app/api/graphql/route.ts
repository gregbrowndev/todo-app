import type {NextRequest} from "next/server";
import {createHttpExecutor} from "@/lib/server.ts";

const handler = async (request: NextRequest, context: Record<string, string>) => {
   const {handleRequest} = await createHttpExecutor();
   return handleRequest(request, context);
};

export {
    handler as GET,
    handler as POST,
    handler as OPTIONS,
}