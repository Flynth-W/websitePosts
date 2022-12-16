import { headCore } from "../../../service/headCore/main.ts"
import { Authenticate } from "../../../middleware/Authentication.ts"
import { UserDB }  from "../../../db/user/main.ts"


export async function _delete(req:Request){
  // authneticate jwt
  const jwt = req.headers.get("jwt") || ""
  const resp = await Authenticate(jwt)
  if(!resp.ok){ return new Response(JSON.stringify({message:resp.message}) , { status:404 , headers:headCore(req.headers) }) } 
  
  // delete user to db
  const nick_id = (resp.body ).nick_id
  try{ 
    // delete account(account)
    await UserDB.accounts.deleteOne({ nick_id })
    // delete profile(profile)
    await UserDB.profiles.deleteOne({ nick_id })
    // delete setting(base)
    await UserDB.setting.deleteOne({ nick_id })
    // delete savePost(base)
    await UserDB.setting.deleteOne({ nick_id})
    // delete notifiacion ( nick_id )
    await UserDB.notices.deleteMany({nick_id})
    // delete post     ( autho:nick_id )
    await UserDB.posts.deleteMany({author:nick_id})
    // delete comment   ( author: nick_id )
    await UserDB.comments.deleteMany({author:nick_id})
    // delete comment  ( nick_id ) :: stop
    // await UserDB.comments.deleteMany({ nick_id })
    //
    return new Response(null , {status:200 , headers:headCore(req.headers)})
  }catch(_e){
    return new Response(JSON.stringify({message:_e}), {status:404 , headers:headCore(req.headers)})
  }
}
