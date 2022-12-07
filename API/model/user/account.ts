import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"

export type TypeUserAccount = {
  nick_id ?: property | number      // default 
  name    ?: property | string      // require 
  password?: property | string      // require
  profile ?: property | number      // default
  dataUser?: property | number      // default
}

const _accountModel:TypeUserAccount= {
  name:{ 
    check:{
      post:ModelChecks.string.length(1,10),
      put:ModelChecks.string.length(1,10)
    }
  },
  password:{
    check:{
      post:ModelChecks.string.length(1,10),
      put:ModelChecks.string.length(1,10)
    }
  }
}

export const ModelUserAccount = new Model(_accountModel)

// TEST :
// const user:TypeUserAccount={
//     name:"exampleNe" ,
//     password:"exasd" ,
// }
// 
// console.log( ModelUserAccount.Put(user))
