import { UserDB } from "../../../db/user/main.ts"
import { DJWT } from "../../../service/JsonWebToken/main.ts"
import { headCore } from "../../../service/headCore/main.ts"

export async function _login(req:Request){
  try{
    // exist account
    const _account = await req.json()
    const _resp =  await UserDB.accounts.findOne(_account)
    if( _resp == undefined ){ return new Response (JSON.stringify({message:"account not exist"}) , { status:404 , headers:headCore(req.headers) }) }
    const  nick_id = _resp.nick_id  

    // return jwt 
    const jwt = await DJWT.Create({nick_id })
    if ( ! jwt.ok ){ return new Response (null , { status:500 , headers:headCore(req.headers) }) }
    return new Response(JSON.stringify({jwt:jwt.body}) , { status:200 , headers:headCore(req.headers) })
  }catch(_e){
    return new Response(JSON.stringify({message:_e}), { status:404 , headers:headCore(req.headers) })
  }
}
