import { createTRPCRouter } from "./trpc";
import { planetRouter } from "./routers/planet";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  planets: planetRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
