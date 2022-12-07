import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"

export type TypeUserData = {
  nick_id ?: property | number      // default 
  notices ?: property | number      // default
  savePost?: property | number      // default
  setting ?: property | number      // default
}



// TEST :
// const user:TypeUserAccount={
//     name:"exampleNe" ,
//     password:"exasd" ,
// }
// 
// console.log( ModelUserAccount.Put(user))

