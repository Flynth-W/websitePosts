import { useState } from "react"
import { _put_post } from "../../../../db/post/nick_id/put"

export function Emogi(props:any){
  const token = localStorage.getItem("token")
  const n:number = props.num
  const [num,setNum]=useState(n)
  function _onclick(x){
    if( num === n ){
      setNum(n+1)
      _put_post(token,props.nick_id,{ num_like: n + 1 })
    }else{
      setNum(num-1)
      _put_post(token, props.nick_id, { num_like: num - 1 })
    }
  }

  return (
  <div className="PA-Emogi" onClick={_onclick}>
   Like ({num})
  </div>
      ) 
}
