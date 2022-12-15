import { UserCtrl } from "../../controller/user/main.ts"
export function _setting(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.setting.options(req)
    case "GET"    : return UserCtrl.setting.get(req)
    case "PUT"    : return UserCtrl.setting.put(req)
  }

  return new Response()
}
