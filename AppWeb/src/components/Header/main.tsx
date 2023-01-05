import { User } from "./user/main"
import { Navigation } from "./navigation/main"
import { Search } from "./search/main"
import { _onclick } from "./on/onclick"

export function Header (props:any){
  const cmpts={
    notify:props.notify    
  }

  return (
    <div id="idHeader" className="Header"  onClick={(x)=>{_onclick("idHeader",x,cmpts)}}>
      <User cmpts={cmpts}/>
      <Navigation/>
      <Search/>
    </div>
  )
}
