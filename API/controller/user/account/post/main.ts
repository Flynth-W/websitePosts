import { ModelUserAccount } from "../../../../model/user/account.ts"
import { ModelUserProfile } from "../../../../model/user/profile.ts"
import { headCore } from "../../../../service/headCore/main.ts"
import { _create } from "./create.ts"



// req.body={account:... , profile:...}

export async function _post(req:Request){
  const body = await req.json()
  const _check ={
    account:await ModelUserAccount.Post(body.account),
    profile:await ModelUserProfile.Post(body.profile)
  } 
  if( _check.account.ok && _check.profile.ok ){
    // create account(account)
    // create profile(profile)
    // create setting(base)
    // create savePost(base)
    const resp = await _create(body)
    return new Response(JSON.stringify(resp.body),{status:resp.status  , headers:headCore(req.headers) })
    
  }
  return new Response(null,{status:202  , headers:headCore(req.headers) })
}
