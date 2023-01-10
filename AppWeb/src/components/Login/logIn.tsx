import { useForm } from "react-hook-form";
import { login } from "../../db/account/login";
import { setDataUser } from "./setDataUser";

import { useRouter } from 'next/router'

export function LogIn(){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  
  async function _onSubmit(x){
    const rp= await login(x.name,x.password)
    if( rp.status === 200 ){
      const data = await rp.json()
      // local store jwt
      localStorage.setItem('token',data.jwt)
      setDataUser(data.jwt)
      router.push("/")  
    }
//    console.log(x)
  }

  return (
    <div className="LogB">
    <div className="LogIn">
      <form  onSubmit={handleSubmit(_onSubmit)}>
        <input className="LI-user" type="text" {...register('user',{required:true})}        placeholder="Cuenta" />
        <br></br>
        <input className="LI-user" type="password" {...register('password',{required:true})}placeholder="Contrasena" />
        <br></br>
        <div className="LI-okB">
          <input className="LI-ok" type="submit" value="inciciar" />
        </div>
      </form>
    </div>
    </div>
  )
}
