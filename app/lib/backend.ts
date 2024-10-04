import { hc } from "hono/client";
import type { App } from "@/pages/api/app";

export namespace BackendService {
  export const client = hc<App>("/");
}
