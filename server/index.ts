import { router } from "./trpc";
import { todoRouter } from "./routes/todoRouter";
import { userRouter } from "./routes/userRouter";

const appRouter = router({
  user: userRouter,
  todo: todoRouter,
});

export type AppRouter = typeof appRouter;
