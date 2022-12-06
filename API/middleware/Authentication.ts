import type { response } from "../deps.ts"
import { DJWT } from "../service/JsonWebToken/main.ts"
import { UserDB } from "../db/user/main.ts"


export async function Authenticate(jwt:string):Promise<response>{
    
    const verify= await DJWT.Verify(jwt)
    if( !verify.ok ){ return verify }        
    
    if( verify.body === undefined ){ 
       return {body:verify,message:"undefined body",ok:false}  
    }

    const resp = await UserDB.accounts.findOne(verify.body)

    if( resp === undefined ){ 
        return {body:verify,message:"no exist",ok:false}  
    }

    return {body:{resp},message:"OK",ok:true}

}

