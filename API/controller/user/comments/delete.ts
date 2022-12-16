import { _route } from "../../../utils/routes.ts"

import { headCore } from "../../../service/headCore/main.ts"
import { Authenticate } from "../../../middleware/Authentication.ts"
import { UserDB }  from "../../../db/user/main.ts"

export async function _delete(req:Request){
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ 
    return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers)} )
  }
  // require http://api/comment/<nick_id comment>
  const nick_id =Number.parseInt(  (_route(req.url))[1]  )
  
  if( !nick_id && (nick_id != 0) ){ return new Response(JSON.stringify({ message:"eeror" }),{status:500,headers:headCore(req.headers)})}

  try{
    // delete mongo
    await UserDB.comments.deleteOne({nick_id})
    return new Response(null , {status:200 , headers:headCore(req.headers)})


  }catch(_e){
    return new Response(null,{status:404,headers:headCore(req.headers)})
  }
}

