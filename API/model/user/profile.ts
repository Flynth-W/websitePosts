import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"

export type TypeUserProfile = {
  nick_id?: property | number    // default API
  name   ?: property | string    
  age    ?: property | string
  description?:property | string[]
  avatar ?: property | any
  portada?: property | any
}

const _Model:TypeUserProfile= {
  name:{ 
    check:{
      post:ModelChecks.string.length(1,15),
      put:ModelChecks.string.length(1,15)
    }
  },
  age:{
    check:{
      post:ModelChecks.default ,
      put:ModelChecks.default
    }
  },
  description:{check:{
    post:ModelChecks.default,
    put:ModelChecks.default
  }},
  avatar:{
    check:{
      post:ModelChecks.default ,
      put:ModelChecks.default
    }
  },
  portada:{
    check:{
      post:ModelChecks.default ,
      put:ModelChecks.default
    }
  },
}

export const ModelUserProfile = new Model(_Model)

// TEST 
// const user:TypeUserProfile={
//     name:"exampleNe" ,
// }
// 
// console.log( ModelUserProfile.Post(user))

