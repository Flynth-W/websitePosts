// req.body={account:... , profile:...}
//  const _body={
//    account:{name:"santos",password:"santos3221"},
//    profile:{
//      name:"santos",
//    }
//  }
import { environmet } from "../evironmet"

export async function PostAccount(_body:{}){
  const url = `${environmet.urlAPI}/account/`
   
  const resp = await fetch(url,{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(_body)
  })
  return resp  
}

