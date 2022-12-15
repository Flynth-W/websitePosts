import { ModelUserPost } from "../../../../model/user/post.ts"

import { _route } from "../../../../utils/routes.ts"
import { headCore } from "../../../../service/headCore/main.ts"
import { Authenticate } from "../../../../middleware/Authentication.ts"
import { UserDB }  from "../../../../db/user/main.ts"

export async function _delete(req:Request){
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ 
    return new Response(JSON.stringify({message:resp.message}) , { status:406 , headers:headCore(req.headers)} )
  }

  try{

  // mongo post
  const nick_id =Number.parseInt(  (_route(req.url))[2]  )
  if( !nick_id ){ return new Response(JSON.stringify({ message:"eeror" }),{status:500,headers:headCore(req.headers)})}
  await UserDB.posts.deleteOne({nick_id})

  return new Response(null,{status:200,headers:headCore(req.headers)})


  }catch(_e){
    return new Response(null,{status:405,headers:headCore(req.headers)})
  }
  
}

