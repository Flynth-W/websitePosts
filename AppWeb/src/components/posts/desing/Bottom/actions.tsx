import { Comment } from "./comment"
import { Share } from "./share"
import { Emogi } from "./emogi"

export function Actions(props:any){
  console.log(props.props.num_comment)
  return (
  <div className="Post-Acctions">
    <Emogi num={props.props.num_like}/>
  </div>
      ) 
}
