import { create  } from "../../deps.ts"
import type { response } from "../../deps.ts"
import type { Payload , Header } from "../../deps.ts"
import { JWTbase } from "./base.ts"



const algorithm = "HS256"

const header: Header = {
  alg: algorithm,
  typ: "JWT",
};


export async function _create(body:any):Promise<response>{
    try{
        const payload: Payload = {
        //  iss: environmet.JWT.iss,
        //  exp: getNumericDate(300),
          body
        };
        const jwt = await create(header, payload, JWTbase)
        return {body:jwt,message:"ok",ok:true}

    }catch(_e){
        return {body,message:_e,ok:false}
    }
}

// TEST:
// const jwt = await _create({name:"juan",age:3})
// console.log(jwt)






