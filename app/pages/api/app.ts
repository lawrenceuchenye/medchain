import { Hono } from "hono";
import { router as authRouter } from "./routes/auth/router";
import { router as userRouter } from "./routes/user";
import { router as consultationRouter } from "./routes/consultation";

export const app = new Hono()
	.basePath("/api")
	.route("/auth", authRouter)
	.route("/users", userRouter)
	.route("/consultations", consultationRouter);

export type App = typeof app;
