import { Desing } from "./desing/main"
import { A_data } from "./data"
import { useState } from "react"
import { useEffect } from "react"

export function Show(){


  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    A_data().then((dt) =>{
        setData(dt)
        console.log(dt)
        setLoading(false)
        })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <></>

  return (
  <div> 
    {data}
  </div>
      ) 
}
