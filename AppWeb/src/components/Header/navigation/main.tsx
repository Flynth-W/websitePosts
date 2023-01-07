import { useRouter } from 'next/router'

//      <div>        <Link href={"http://0.0.0.0:3000/seguidos"} >seguidos</Link>      </div>
export function Navigation (){
  const router = useRouter()

  function _onclick(){
    router.push("/")    
  }

  return (
    <div className="HeaderNavigation">
      <div className='HNI'  onClick={_onclick}> 
        inicio
      </div>
    </div>
  )
}
