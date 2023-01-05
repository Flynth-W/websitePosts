import { Avatar } from "./avatar"
import { Options } from "./options"
import { _onclick } from "./onClick"

export function User (props:any){
  const cmpts=props.cmpts
  return (
    <div className="HeaderUser">
      <div id="HUA"  onClick={(x)=>{_onclick("HU",x,cmpts)}}>
        <Avatar/>
      </div>
      <div className="HeaderNotify"> notify</div>
      <div className="HeaderCreate"> create </div>
    </div>
  )
}
