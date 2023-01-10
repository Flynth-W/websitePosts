import { environmet } from "../../evironmet"
export async function _profileN (token:string,id:string){
  const url = `${environmet.urlAPI}/profile/nick_id/${id}`
  const resp = await fetch(url,{
    method:"GET",
    headers:{
      'jwt':token,
    },
  })
  return await resp.json()
}
