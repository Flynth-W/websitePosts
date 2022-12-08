import { UserCtrl } from "../../controller/user/main.ts"
export function _notice(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.notice.options(req)
    case "GET"    : return UserCtrl.notice.get(req)
  }

  return new Response()
}
