import { useState } from "react"
import { useEffect } from "react"
import { useRouter } from 'next/router'
import { _profileN } from "../../../../db/profile/get/nick_id"

export function Author(props:any){
  const token = localStorage.getItem("token")
  
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    _profileN(token,props.author).then((data) =>{
        setData(data)
        console.log(data.name)
        setLoading(false)
        })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return(
  <div className="Post-Author">{data.name}:</div>
  )
}
