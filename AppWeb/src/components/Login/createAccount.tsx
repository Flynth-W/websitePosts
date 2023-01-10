import { useForm } from "react-hook-form";
import { PostAccount } from "../../db/account/post";
import { useState } from "react";
import { useRouter } from 'next/router'


export function CreateAccount(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  
  const [Data, setData] = useState(<></>)
  
  async function _onSubmit(x){
    const _body={
      account:{name:x.account,password:x.password},
      profile:{
        name:x.name,
      }
    }
    const rp= await PostAccount(_body)
    console.log(rp)
    if( rp.status === 202 ){
      setData(<div className="CreateAccount">okey</div>)

    }
//    console.log(x)
  }

  return (
    <div className="LogB">
    <div className="LogIn" onClick={(x)=>{setData(<></>)}}>
      <form  onSubmit={handleSubmit(_onSubmit)}>
        <input className="LI-user" type="text" {...register('account',{required:true})}        placeholder="Cuenta" />
        <br></br>
        <input className="LI-user" type="password" {...register('password',{required:true})}placeholder="Contrasena" />
        <br></br>
        <input className="LI-user" type="text" {...register('name',{required:true})}placeholder="Nombre" />
        <br></br>
        <div className="LI-okB">
          <input className="LI-ok" type="submit" value="crear cuenta" />
        </div>
      </form>
      {Data}
    </div>
    </div>
  )
}
