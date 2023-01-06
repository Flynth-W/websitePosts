import { useState } from "react"
export function Emogi(props:any){
  const n:number = props.num
  const [num,setNum]=useState(n)
  function _onclick(x){
    if( num === n ){
      setNum(n+1)
    }else{
      setNum(num-1)
    }
  }

  return (
  <div className="PA-Emogi" onClick={_onclick}>
   Like ({num})
  </div>
      ) 
}
