import { UserCtrl } from "../../controller/user/main.ts"
export function _account(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.account.options(req)
    case "LOGIN"  : return UserCtrl.account.login(req)
    case "POST"   : return UserCtrl.account.post(req)
    case "PUT"    : return UserCtrl.account.put(req)
    case "DELETE" : return UserCtrl.account.delete(req)
  }

  return new Response()
}
