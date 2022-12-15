import { UserCtrl } from "../../controller/user/main.ts"
import { _route } from "../../utils/routes.ts"
import { _author } from "./author.ts"
import { _nick_id } from "./nick_id.ts"
import { _random } from "./random.ts"
export function _post(req:Request){
  const routes = _route(req.url)
  console.log(routes)
  switch ( routes[1] ){
    case "nick_id": return  _nick_id(req)
    case "author" : return  _author(req) 
    case "random" : return  _random(req)
  }

  const method =req.method
  

  switch ( method ){
    case "OPTIONS": return UserCtrl.POST.options(req) 
  //  case "GET"    : return UserCtrl.posts.get(req) 
    case "POST"   : return UserCtrl.POST.post(req) 
  //  case "PUT"    : return UserCtrl.posts.put(req) 
  //  case "DELETE" : return UserCtrl.posts.delete(req) 
  }
  return new Response()
}

