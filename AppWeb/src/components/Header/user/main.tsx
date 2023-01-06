import Link from "next/link"
import { Avatar } from "./avatar"
import { _onclick } from "./onClick"
import { _onNotify } from "./onNotify"
import { Create } from "./creat.svg"

//      <div id="notify"className="HeaderNotify" onClick={(x)=>{_onNotify("notify",x,cmpts)}}> notify</div>
export function User (props:any){
  const cmpts=props.cmpts
  return (
    <div className="HeaderUser">
      <div id="HUA"  onClick={(x)=>{_onclick("HU",x,cmpts)}}>
        <Avatar/>
      </div>
      <div className="HeaderCreate"> 
        <Link href={"http://0.0.0.0:3000/create"} >
          <div className="HCS"><Create/></div>
        </Link>
      </div>
    </div>
  )
}
