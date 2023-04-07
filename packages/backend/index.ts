import { type inferRouterInputs, type inferRouterOutputs } from "@trpc/server";

import { type AppRouter, appRouter } from "./trpc/root";

/**
 * Inference helpers for input types
 * @example type HelloInput = RouterInputs['example']['hello']
 **/
export type RouterInputs = inferRouterInputs<AppRouter>;

/**
 * Inference helpers for output types
 * @example type HelloOutput = RouterOutputs['example']['hello']
 **/
export type RouterOutputs = inferRouterOutputs<AppRouter>;

export { type AppRouter, appRouter };
export { createTRPCContext } from "./trpc/trpc";
