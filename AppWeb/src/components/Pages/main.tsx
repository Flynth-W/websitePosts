import { _onclick } from "./on/onClick"
export function Pages(props:any){
  const _notify = props.notify
  const cmpts = { notify:_notify }
  return (
  <div id="rts" className="Pages" onClick={(x)=>{_onclick("rts",x,cmpts)}}>
    {props.children}
  </div>
      ) 
} 
