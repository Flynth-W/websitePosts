import { JWTbase } from "./base.ts"
import { verify } from "../../deps.ts";
import type { response } from "../../deps.ts"



export async function _verify(jwt:string):Promise<response>{
  try {
    const payload = await verify(jwt, JWTbase); 
    return {body:payload.body,message:"OK",ok:true}
  }
  catch(_e){
    return {body:jwt,message:_e,ok:false}
  }
}
// TEST:
// const jwt="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5hbWUiOiJqdWFuIiwiYWdlIjozfX0.SrdG-DKfGjxRBLeBwFgmHoVPS5KwGqduarsM9XhX2eI"
// 
// const vrf =await _verify(jwt)
// console.log(vrf)
