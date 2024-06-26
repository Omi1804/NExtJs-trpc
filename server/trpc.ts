import { initTRPC } from "@trpc/server";
import { Todo, User } from "./database";

const t = initTRPC
  .context<{ db: { Todo: typeof Todo; User: typeof User }; userId?: string }>()
  .create();

export const router = t.router;
export const publicProcedure = t.procedure;
