import { useState } from "react"
import { useEffect } from "react"

export function Author(){
  const name= localStorage.getItem("name")
  return(
  <div className="Post-Author">{name}:</div>
  )
}
