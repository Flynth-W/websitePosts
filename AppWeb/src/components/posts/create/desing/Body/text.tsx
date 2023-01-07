import { useForm } from "react-hook-form";
import { CreatePub } from "../../../../../db/post/post";
import { useState } from "react";

export function Text(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [Data, setData] = useState(<></>)


  async function _sub(x){
    const data = document.getElementById("PostText")
    const text = data.innerText
    const rp = await CreatePub({text})
    if(rp.ok){
      setData(<div className="CP-Ok">okey</div>)
    }
     
  }
  return (
  <div className="Post-Text">
    <div id="PostText" className="CP-Text" contentEditable="true" onClick={()=>{setData(<></>)}}></div>
    <div className="CP-Pub" onClick={_sub}>Publicar</div>
    {Data}
  </div>
  
      ) 
}
