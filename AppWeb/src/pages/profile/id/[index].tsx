import  { useRouter } from "next/router"

export default ()=>{
  const route = useRouter()
  const  { word} = route.query
  console.log(route.query) 
  return (
    <div>Page profile/number*{word}</div>
  )
}
