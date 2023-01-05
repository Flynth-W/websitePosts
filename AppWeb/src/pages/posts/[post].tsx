import  { useRouter } from "next/router"

export default ()=>{
  const route = useRouter()
  const  { post} = route.query
  
  return (
    <div>Page post/number*{post}</div>
      )
}
