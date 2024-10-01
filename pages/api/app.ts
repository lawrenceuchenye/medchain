import { Hono } from "hono";
import { router as authRouter } from "./routes/auth";

export const app = new Hono().basePath("/api").route("/auth", authRouter);
export type App = typeof app;
