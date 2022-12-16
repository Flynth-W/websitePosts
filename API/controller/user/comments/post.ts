import { ModelUserComment } from "../../../model/user/comment.ts"
import type { TypeUserComment } from "../../../model/user/comment.ts"

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
  const _model = await ModelUserComment.Post( body )
  if ( !_model.ok ){ 
    return new Response(JSON.stringify({message:_model.message}) , { status:404 , headers:headCore(req.headers) }) 
  }

  // mongo post
  const nick_id = (resp.body ).nick_id
  const comment:TypeUserComment={nick_id:nick, author:nick_id,..._model.body}
  console.log(comment)
  await UserDB.comments.insertOne(comment)
  nick++
  return new Response(null , {status:200 , headers:headCore(req.headers)})


  }catch(_e){
    return new Response(null,{status:404,headers:headCore(req.headers)})
  }
}

