import { headCore } from "../../../../service/headCore/main.ts"
import { _route } from "../../../../utils/routes.ts"
import { _all } from "./all.ts"
import { nick_id } from "./nick_id.ts"

export async function _get_urls(req:Request,_nick_id:number){
  
  const routes =  _route(req.url)
  switch ( routes[1] ){
    case "all"    : return _all(req)
    case "nick_id": return nick_id(req,routes[2] || _nick_id)
  }
  return new Response( null , {status:404 , headers:headCore(req.headers)} )
}
