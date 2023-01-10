import { environmet } from "../../evironmet"

export async function MyProfile(token:string){

  const url=`${environmet.urlAPI}/profile/nick_id`
  const resp = await fetch(url,{
    method:"GET",
    headers:{
      'jwt':token
    },
  })
  return await resp.json()
}

