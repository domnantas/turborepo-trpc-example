// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { createNextApiHandler } from "@trpc/server/adapters/next";
import { appRouter } from "backend/";

export default createNextApiHandler({
  router: appRouter,
  createContext: createTRPCContext,
});
