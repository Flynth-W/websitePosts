import { headCore } from "../../../service/headCore/main.ts"
import { Authenticate } from "../../../middleware/Authentication.ts"
import { ModelUserAccount } from "../../../model/user/account.ts"
import { UserDB }  from "../../../db/user/main.ts"

export async function _put(req:Request){
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers) }) } 

  const body= await req.json()
  const ok_account = await ModelUserAccount.Put( body )
  if ( ! ok_account.ok ){ return new Response(JSON.stringify({message:ok_account.message}) , { status:404 , headers:headCore(req.headers) }) }

  const nick_id = (resp.body ).nick_id
  
  await UserDB.accounts.updateOne({nick_id},{$set:body})
  return new Response(null , {status:200 , headers:headCore(req.headers)})
}
