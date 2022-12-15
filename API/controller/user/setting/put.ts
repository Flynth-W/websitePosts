import { headCore } from "../../../service/headCore/main.ts"
import { Authenticate } from "../../../middleware/Authentication.ts"
import { UserDB }  from "../../../db/user/main.ts"
import { ModelUserSetting } from "../../../model/user/setting.ts"

export async function _put(req:Request){
  console.log(" setting PUT")
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers) }) } 
  // model 
  const body= await req.json()
  const ok_account = await ModelUserSetting.Put( body )
  if ( ! ok_account.ok ){ return new Response(JSON.stringify({message:ok_account.message}) , { status:404 , headers:headCore(req.headers) }) }

  // put mongo
  try{
  const nick_id = (resp.body ).nick_id
  
  await UserDB.setting.updateOne({nick_id},{$set:body})
  return new Response(null , {status:200 , headers:headCore(req.headers)})

  }catch(_e){
    return new Response(JSON.stringify({message:_e}), {status:404 , headers:headCore(req.headers)})
  }
}
