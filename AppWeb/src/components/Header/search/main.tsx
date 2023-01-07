import { useForm } from "react-hook-form";
import { useRouter } from 'next/router'

export function Search (){
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const router = useRouter()
  
  function Show(props){
//    console.log(props.word)
    
    router.push("/search/"+props.word)  
  }

  return (
    <div className="HeaderSearch">
      <form  onSubmit={handleSubmit(Show)}>
        <input  className="HSI" type="text" {...register('word',{required:true})}  placeholder="Buscar.."/>
      </form>
    </div>
  )
}
