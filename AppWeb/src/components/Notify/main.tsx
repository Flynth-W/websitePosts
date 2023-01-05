import { useState } from "react"

import ReactDOM from 'react-dom';
export function Notify (props:any){ 
  const _notify = props.notify.data

  return (
    <div className="Notify" >
      {_notify.get}
    </div>
  )
}
