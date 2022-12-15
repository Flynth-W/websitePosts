import { ModelUserPost } from "../../../model/user/post.ts"
import type { TypeUserPost } from "../../../model/user/post.ts"

import { headCore } from "../../../service/headCore/main.ts"
import { Authenticate } from "../../../middleware/Authentication.ts"
import { UserDB }  from "../../../db/user/main.ts"
import { _nick_id } from "./nick_id.ts"
let nick = await _nick_id()

export async function _post(req:Request){
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ 
    return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers)} )
  } 
  try{
  // model post
  const body= await req.json()
  const _model = await ModelUserPost.Post( body )
  if ( !_model.ok ){ 
    return new Response(JSON.stringify({message:_model.message}) , { status:404 , headers:headCore(req.headers) }) 
  }

  // mongo post
  const nick_id = (resp.body ).nick_id
  const post:TypeUserPost={
    nick_id:nick,
    author:nick_id,
    num_like:0,
    num_comment:0,
    text:_model.body.text || "" ,
    image:undefined 
    
  }
  console.log(post)
  await UserDB.posts.insertOne(post)
  nick++
  return new Response(JSON.stringify({nick_id:nick -1}) , {status:200 , headers:headCore(req.headers)})


  }catch(_e){
    return new Response(null,{status:404,headers:headCore(req.headers)})
  }
  
}

