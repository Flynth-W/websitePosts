import { UserCtrl } from "../../controller/user/main.ts"

export function _random(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.POST.RANDOM.options(req) 
    case "GET"    : return UserCtrl.POST.RANDOM.get(req) 
  }
  return new Response()
}

