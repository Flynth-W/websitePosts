import { PostTop } from "./Top/main"
import { PostBody } from "./Body/main"
import { PostBottom } from "./Bottom/main"

export function Desing(props:any){
  const data:any = props.data
  return (
  <div className="PostB">
    <div className="Post">
      <PostTop author={data.author}/>
      <PostBody text={data.text} image={data.image}/>
      <PostBottom num_like={data.num_like} num_comment={data.num_comment} nick_id={data.nick_id}/>
    </div>
  </div>
      )
}
