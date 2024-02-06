import {createEnv} from "@t3-oss/env-core";
import {z} from "astro/zod";

export const env = createEnv({
  server: {
    DENO_KV_ACCESS_TOKEN: z.string().min(1),
  },
  runtimeEnv: process.env,
  emptyStringAsUndefined: true,
})