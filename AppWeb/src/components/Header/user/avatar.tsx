import  Image  from "next/image"
import React, { useState  } from 'react';
import { Options } from "./options"

export function Avatar (){
  const [data,setData] = useState(true)
   
  function view(props:any){
    if( !data ){ setData(true) }
  }

  return (
    <div className="HUAvatar" onClick={view}>
      <Image id="imageUser" 
        src="/favicon.jpg" 
        alt="my picture"
        height={60}
        width={60}
        style={{
            borderRadius: "50%", //👈 and here you can select border radius
          }}
      />
    </div>
  )
}
