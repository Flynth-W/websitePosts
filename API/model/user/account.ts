import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"
import { _name } from "./checks/account/name.ts"

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
      post:_name,
      put:ModelChecks.string.length(1,30)
    }
  },
  password:{
    check:{
      post:ModelChecks.string.length(1,30),
      put:ModelChecks.string.length(1,30)
    }
  }
}

export const ModelUserAccount = new Model(_accountModel)

// TEST :
// const user:TypeUserAccount={
//     name:"juansd" ,
//     password:"exasd" ,
// }
// 
// console.log( await ModelUserAccount.Put(user))
// console.log( await ModelUserAccount.Post(user))
