// src/server/router/_app.ts
import { router } from "../trpc";

import { preprRouter } from "./prepr";

export const appRouter = router({
  prepr: preprRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
