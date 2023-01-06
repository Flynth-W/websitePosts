import { MyProfile } from "../../../db/profile/get/me"
import { useState } from "react"
import { useEffect } from "react"
import { _exit } from "./onExit"
import { useRouter } from 'next/router'

export function Options(){
  const token = localStorage.getItem("token")

  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    MyProfile(token).then((data) =>{
        setData(data)
        console.log(data)
        setLoading(false)
        })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  const routesr = useRouter()
  function _exit(){
    try{
      localStorage.removeItem("token")
      routesr.push("/")  
  
    }catch(x){
      console.log(x) 
    }

  }

  return (
    <div className="OptionsUser">
      <div className="OU-text OU-account">
        account:
      </div>
      <div  className="OU-text OU-name"> 
        {data.name}
      </div>
      <div className="OU-exit">
        <button className="OU-buttom" onClick={_exit}>
          salir
        </button>
      </div>
    </div>
  )
}
