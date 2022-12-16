import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"

export type TypeUserComment = {
  nick_id?: property | number   // default API
  post  ?: property | number    // default API
  author?: property | number    // default API
  text  ?: property | string    //  require 
}

const _Model:TypeUserComment= {
  post:{
    check:{
      post:ModelChecks.default ,
      put:ModelChecks.default
    }
  },
  text:{ 
    check:{
      post:ModelChecks.string.length(1,1000),
      put:ModelChecks.string.length(1,1000)
    }
  },
}

export const ModelUserComment = new Model(_Model)

// TEST :NOT
// const user:TypeUserPost={
//     text:"exampleNe" ,
//     image:"exasd" ,
// }
// 
// console.log( ModelUserPost.Put(user))
