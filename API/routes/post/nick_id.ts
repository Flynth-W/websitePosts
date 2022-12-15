import { UserCtrl } from "../../controller/user/main.ts"

export function _nick_id(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.POST.NICK_ID.options(req)
    case "GET"    : return UserCtrl.POST.NICK_ID.get(req)
    case "PUT"    : return UserCtrl.POST.NICK_ID.put(req)
    case "DELETE" : return UserCtrl.POST.NICK_ID.delete(req)
  }
  return new Response()
}

