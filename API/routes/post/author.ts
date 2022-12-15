import { UserCtrl } from "../../controller/user/main.ts"
import { _route } from "../../utils/routes.ts"

export function _author(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.POST.AUTHOR.options(req)
    case "GET"    : return UserCtrl.POST.AUTHOR.get(req) 
  }
  return new Response()
}

