import { headCore } from "../../../service/headCore/main.ts"
import { Authenticate } from "../../../middleware/Authentication.ts"
import { UserDB }  from "../../../db/user/main.ts"

export async function _get(req:Request){
  console.log(" setting GET")
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers) }) } 

  // get mongo
  try{
    const nick_id = (resp.body ).nick_id
    const data = await UserDB.setting.findOne({nick_id})
    return new Response(JSON.stringify(data),{status:200 , headers:headCore(req.headers)})

  }catch(_e){
    return new Response(JSON.stringify({message:_e}), {status:404 , headers:headCore(req.headers)})
  }
}
