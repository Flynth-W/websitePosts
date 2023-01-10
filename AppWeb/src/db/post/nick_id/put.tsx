import { environmet } from "../../evironmet"

export  async function _put_post(token:string,nick_id:number|string,_body:{}){
  const url = `${environmet.urlAPI}/post/nick_id/${nick_id}`
  console.log(_body)
  const resp = await fetch(url,{
    method:"PUT",
    headers:{
      'Content-Type':'application/json',
      'jwt':token,
    },
    body:JSON.stringify(_body)
  })
  console.log(resp)

}

//console.log(await resp.json().then( x=>{ console.log(x.jwt) } ))

