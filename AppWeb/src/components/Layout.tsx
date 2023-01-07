import { Header } from "./Header/main"
import { Notify } from "./Notify/main"

import { useState } from "react"
import { _Layout } from "./onLayout/main"
import { Pages } from "./Pages/main"

import { Authenticate } from "../data/token"
import { LoginPage } from "./Login/main"

export default function Layout(props:any){
  const [_show,_setShow]=useState(false)
  const [_data,_setData]=useState(<></>)
  const [_access,_setAccess]=useState(1)
  const notify={
    show:{get:_show,set:_setShow},
    data:{get:_data,set:_setData}
  }
  const _tk:boolean = Authenticate()

  if( _tk ){
    return (
    <div className="App" >
      <Header notify={notify} />
      <Pages children={props.children} notify={notify}/ >
      <Notify  notify={notify}/>
    </div>
    )
  }else{
    return(
      <LoginPage/>
    )
  }

}
