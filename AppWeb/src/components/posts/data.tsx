import { _randomPosts } from "../../db/post/random/get"
import { Desing } from "./desing/main"
function DesingPosts(data:any){
  return (
    <Desing data={data}/>
  ) 
}


export async function A_data(){
  const token = localStorage.getItem("token")
  
  const rp = await _randomPosts(token) 
  const posts = rp.map( DesingPosts) 
  return (
    <div>
      {posts}
    </div>
  )
}
