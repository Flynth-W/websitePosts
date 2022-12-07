import { serve } from "https://deno.land/std@0.160.0/http/server.ts";
import { RouteHandler } from "./routes/main.ts"
import { environmet } from "./deps.ts"

const port = environmet.PORT

function  handler(
  request: Request,
  conn: any
){
  return RouteHandler(request)
}




console.log(`HTTP webserver running. Access it at: http://localhost:${port}/`);
await serve(handler, { port });
