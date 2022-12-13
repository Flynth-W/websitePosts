import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"

export type TypeUserPost = {
  nick_id       ?: property | number    // default API
  author        ?: property | number    // default API
  num_like      ?: property | number    // default API
  num_comment   ?: property | number    // default API
  text          ?: property | string    //  require 
  image         ?: property | any       //  require | null
}

const _Model:TypeUserPost= {
  text:{ 
    check:{
      post:ModelChecks.string.length(1,1000),
      put:ModelChecks.string.length(1,1000)
    }
  },
  image:{
    check:{
      post:ModelChecks.default ,
      put:ModelChecks.default
    }
  }
}

export const ModelUserPost = new Model(_Model)

// TEST :
// const user:TypeUserPost={
//     text:"exampleNe" ,
//     image:"exasd" ,
// }
// 
// console.log( ModelUserPost.Put(user))


