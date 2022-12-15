import { headCore } from "../../../../service/headCore/main.ts"
import { UserDB }  from "../../../../db/user/main.ts"

export async function _all(req:Request){
  try{
    const data = JSON.stringify( await UserDB.profiles.find().toArray() )
    return new Response(data,{status:200 , headers:headCore(req.headers)})
  }catch(_e){
    return new Response(JSON.stringify({message:_e}),{status:404 , headers:headCore(req.headers)})
  }
}
