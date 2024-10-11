import { Hono } from "hono";
import { AuthMiddleware } from "../middleware/auth";

export const router = new Hono().use(AuthMiddleware.verify);
