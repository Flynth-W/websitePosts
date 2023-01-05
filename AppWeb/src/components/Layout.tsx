import { Header } from "./Header/main"
import { Notify } from "./Notify/main"

import { useState } from "react"
import { _Layout } from "./onLayout/main"
import { Pages } from "./Pages/main"

export default function Layout(props:any){
  const [_show,_setShow]=useState(false)
  const [_data,_setData]=useState(<></>)
  const [_access,_setAccess]=useState(1)
  const notify={
    show:{get:_show,set:_setShow},
    data:{get:_data,set:_setData}
  }


  return (
  <div className="App" >
    <Header notify={notify} />
    <Pages children={props.children} notify={notify}/ >
    <Notify  notify={notify}/>
  </div>
      )
}
