import { environmet } from "../evironmet"

export async function CreatePub(_body:{}){
  const token = localStorage.getItem("token")
  const url=`${environmet.urlAPI}/post/`
  const resp = await fetch(url,{
    method:"POST",
    headers:{
      'Content-Type':'application/json',
      'jwt':token
    },
    body:JSON.stringify(_body)
  })
  return resp
}

