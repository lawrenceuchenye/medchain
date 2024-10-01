import { Hono } from "hono";
import { router as authRouter } from "./routes/auth";
import { router as userRouter } from "./routes/user";

export const app = new Hono()
  .basePath("/api")
  .route("/auth", authRouter)
  .route("/user", userRouter);

export type App = typeof app;
