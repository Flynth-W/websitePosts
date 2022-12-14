import { headCore } from "../../../service/headCore/main.ts"

export function _options(req:Request){
  console.log( " this si OPTIONS" )
  return new Response(null,{status:202 ,headers:headCore(req.headers )})
}
