import { Model  , ModelChecks } from "../../deps.ts"
import type { property  } from "../../deps.ts"

export type TypeUserSetting = {
  nick_id ?: property | number      // default 
  theme   ?: property | string      // require
}

const _settingModel:TypeUserSetting= {
  theme:{
    check:{
      post:ModelChecks.string._switch(["light","dark"]),
      put:ModelChecks.string._switch(["light","dark"])
    }
  }
}

export const ModelUserSetting = new Model(_settingModel)

// TEST :
// const user:TypeUserSetting={
//     theme:"dark" ,
// }
// 
// console.log( ModelUserSetting.Put(user))
