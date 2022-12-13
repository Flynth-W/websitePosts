import { response } from "../../../../deps.ts"
import { _nick_id } from "./nick_id.ts"
import { UserDB  } from "../../../../db/user/main.ts"

let nick_id = await _nick_id()


export async function _create(body:any){
  try{
    // create account(account)
    await UserDB.accounts.insertOne({...body.account , nick_id,})
    // create profile(profile)
    await UserDB.profiles.insertOne({...body.profile , nick_id,})
    // create setting(base)
    await UserDB.setting.insertOne({ nick_id,theme:"light"})
    // create savePost(base)
    await UserDB.savePost.insertOne({ nick_id})

    nick_id++
    return {body:{message:"ok",ok:true} ,status:202 }
  }catch(_e){
    // delete account(account)
    await UserDB.accounts.deleteOne({...body.account , nick_id,})
    // delete profile(profile)
    await UserDB.profiles.deleteOne({...body.profile , nick_id,})
    // delete setting(base)
    await UserDB.setting.deleteOne({ nick_id,theme:"light"})
    // delete savePost(base)
    await UserDB.setting.deleteOne({ nick_id})
  
    return {body:{message:_e,ok:false} ,status:404 }
  }
  
}
