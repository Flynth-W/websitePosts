import { environmet } from "../../evironmet"

export async function _randomPosts(token:string){

  const url=`${environmet.urlAPI}/post/random`
  const resp = await fetch(url,{
    method:"GET",
    headers:{
      'jwt':token
    },
  })
  return await resp.json()
}

