import  Image  from "next/image"
import React, { useState  } from 'react';

//      <Image id="imageUser" 
//        src="/favicon.jpg" 
//        alt="my picture"
//        height={60}
//        width={60}
//        style={{
//            borderRadius: "50%", //👈 and here you can select border radius
//          }}
//      />
import { SVGAvatar } from "./avatar.svg";

export function Avatar (){

  return (
    <div className="HUAvatar" >
      <SVGAvatar/>
    </div>
  )
}
