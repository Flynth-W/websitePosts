import  type { response } from "./response.ts"

function normalResponse():response{
  return {body:{name:"juan"},message:"okey",ok:true}
}
console.log(normalResponse())


async function promiseResponse():Promise<response>{
  return {body:{name:"juan"},message:"okey",ok:true}
}
console.log(promiseResponse())



