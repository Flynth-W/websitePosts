import { useForm } from "react-hook-form";
import { login } from "../../db/account/login";
import { setDataUser } from "./setDataUser";

import { useRouter } from 'next/router'

export function Login(){
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
  }

  return (
    <div className="HeaderSearch">
      <form  onSubmit={handleSubmit(_onSubmit)}>
        <input  type="text" {...register('user',{required:true})} />
        <input  type="text" {...register('password',{required:true})} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}
