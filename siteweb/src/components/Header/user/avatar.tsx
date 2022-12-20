import  Image  from "next/image"
import React, { useState  } from 'react';
import { Options } from "./options"

export function Avatar (){
  const [data,setData] = useState(false)
   
  function view(props:any){
    if( !data ){ setData(true) }
  }

  return (
    <div className="Top-User-Avatar" onClick={view}>
      <Image id="imageUser" 
        src="/favicon.jpg" 
        alt="my picture"
        height={80}
        width={80}
        style={{
            borderRadius: "50%", //👈 and here you can select border radius
          }}
      />
      <Options data={data} setData={setData}/>
    </div>
  )
}
