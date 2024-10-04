import { handle } from "hono/vercel";
import { app } from "./app";
import type { PageConfig } from "next";

export const config: PageConfig = {
  runtime: "edge",
};

export default handle(app);
