// req.body= account {name:... , password:...}
import { environmet } from "../evironmet" 

export  async function login(name:string,password:string){
  const url= `${environmet.urlAPI}/account/`
  const _body={
    name,
    password
  }
  
  const resp = await fetch(url,{
    method:"LOGIN",
    headers:{
      'Content-Type':'application/json'
    },
    body:JSON.stringify(_body)
  })
  return resp 
}


//console.log(await resp.json().then(x => console.log(x.jwt)))
// jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5pY2tfaWQiOjN9fQ.kf9hONSKDQOjGWEpzxPZSNL5d67Fl8FiCNGz9tLSGtQ
