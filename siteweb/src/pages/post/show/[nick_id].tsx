import  { useRouter } from "next/router"

export default ()=>{
  const route = useRouter()
  const  { nick_id} = route.query
  
  return (
    <div>Page show/number*{nick_id}</div>
      )
}
