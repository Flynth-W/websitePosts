import { UserDB } from "../../../../db/user/main.ts"
import { ModelChecks } from "../../../../deps.ts"
import type { response } from "../../../../deps.ts"
const length =  ModelChecks.string.length(1,15)

export async function _name(name:string):Promise<response>{
  const resp = length(name)
  if(! resp.ok ){ return resp }

  const only = await UserDB.accounts.findOne({name})
  if(only === undefined ){ return {body: name ,message:"OK",ok:true} }
  return {body: null ,message:"exist account",ok:false}
}

//console.log(await _NameAccount("juan"))
