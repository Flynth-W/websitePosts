import { _route } from "../../../../utils/routes.ts"
import { headCore } from "../../../../service/headCore/main.ts"
import { Authenticate } from "../../../../middleware/Authentication.ts"
import { UserDB }  from "../../../../db/user/main.ts"

export async function _get(req:Request){
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ 
    return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers)} )
  }

  try{
  const nick_id =Number.parseInt(  (_route(req.url))[2]  )
  if( !nick_id ){ return new Response(JSON.stringify({ message:"eeror" }),{status:500,headers:headCore(req.headers)})}
  
  const data = await UserDB.posts.findOne({nick_id})
  if( !data ){ return new Response(JSON.stringify({ message:"eeror" }), {status:500 , headers:headCore(req.headers)}) }

  return new Response(JSON.stringify(data),{status:200,headers:headCore(req.headers)})
  }catch(_e){

    return new Response(JSON.stringify({ message:"eeror" }), {status:500 , headers:headCore(req.headers)})
  }
}

