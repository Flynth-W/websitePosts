import { UserCtrl } from "../../controller/user/main.ts"
export function _profile(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.profile.options(req) 
    case "GET"    : return UserCtrl.profile.get(req) 
    case "PUT"    : return UserCtrl.profile.put(req) 
  }

  return new Response()
}
