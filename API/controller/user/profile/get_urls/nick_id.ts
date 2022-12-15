import { headCore } from "../../../../service/headCore/main.ts"
import { UserDB }  from "../../../../db/user/main.ts"

export async function nick_id( req:Request ,_nick_id:number|string){
  let nick:number |string ="HHD" 
  if(typeof(_nick_id) === "number") {  nick=_nick_id  }
  if(typeof(_nick_id) === "string") {  nick=Number.parseInt( _nick_id )   }

  try{
    const data = await UserDB.profiles.findOne({nick_id:nick})
    if ( data === undefined ){ return new Response(JSON.stringify({message:"error"}),{status:505,headers:headCore(req.headers)}) }
    return new Response(JSON.stringify(data),{status:202,headers:headCore(req.headers)})
  }catch(_e){
    return new Response(JSON.stringify({message:"error"}),{status:505,headers:headCore(req.headers)})
  }

}
