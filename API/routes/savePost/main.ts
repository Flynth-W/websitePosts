import { UserCtrl } from "../../controller/user/main.ts"

export function _savePost(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": return UserCtrl.savePost.options(req) 
    case "GET"    : return UserCtrl.savePost.get(req) 
    case "POST"   : return UserCtrl.savePost.post(req) 
    case "PUT"    : return UserCtrl.savePost.put(req) 
    case "DELETE" : return UserCtrl.savePost.delete(req) 
  }

  return new Response()
}


