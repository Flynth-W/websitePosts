import { PostTop } from "./Top/main"
import { PostBody } from "./Body/main"
import { PostBottom } from "./Bottom/main"

export function Desing(){

  return (
  <div className="Post">
    <div className="Post-Top">
      <PostTop/>
    </div>
    <div className="Post-Body">
      <PostBody/>
    </div>
    <div className="Post-Bottom">
      <PostBottom/>
    </div>
  </div>
      )
}
