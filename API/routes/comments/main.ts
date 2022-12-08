import { UserCtrl } from "../../controller/user/main.ts"
export function _comments(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.comments.options(req)
    case "GET"    : return UserCtrl.comments.get(req)
    case "POST"   : return UserCtrl.comments.post(req)
    case "PUT"    : return UserCtrl.comments.put(req)
    case "DELETE" : return UserCtrl.comments.delete(req)
  }
  return new Response()
}

