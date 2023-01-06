import  Image  from "next/image"
import React, { useState  } from 'react';

export function Avatar (){

  return (
    <div className="HUAvatar" >
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
