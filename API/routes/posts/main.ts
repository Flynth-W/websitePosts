import { UserCtrl } from "../../controller/user/main.ts"
export function _posts(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.posts.options(req) 
    case "GET"    : return UserCtrl.posts.get(req) 
    case "POST"   : return UserCtrl.posts.post(req) 
    case "PUT"    : return UserCtrl.posts.put(req) 
    case "DELETE" : return UserCtrl.posts.delete(req) 
  }
  return new Response()
}

