import { environmet } from "../../deps.ts";

const encoder = new TextEncoder()
const keyBuf = encoder.encode(environmet.JWTkey);

export const JWTbase = await crypto.subtle.importKey(
  "raw",
  keyBuf,
  {name: "HMAC", hash: "SHA-256"},
  true,
  ["sign", "verify"],
)


