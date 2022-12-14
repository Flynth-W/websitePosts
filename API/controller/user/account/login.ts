import { UserDB } from "../../../db/user/main.ts"
import { DJWT } from "../../../service/JsonWebToken/main.ts"

export async function _login(req:Request){
  try{
    // autheticate account
    const _account = await req.json()
    const _resp =  await UserDB.accounts.findOne(_account)
    if( _resp == undefined ){ console.log("no account") }

    // return jwt 
    const  nick_id = _resp.nick_id 
    const jwt = await DJWT.Create({nick_id })
    if ( ! jwt.ok ){ console.log(" no jwt") }
    console.log(jwt.body)
    return new Response(JSON.stringify({jwt:jwt.body}))
  }catch(_e){
    return new Response()
  }
}
