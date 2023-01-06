import { Options } from "./options"
import { Author } from "./author"

export function PostTop(props:any){
  return(
  <div className="Post-Top">
    <Author author={props.author}/>
  </div>
      )
}

