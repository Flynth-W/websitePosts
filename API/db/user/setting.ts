import { Connect  } from "../../deps.ts"
import { environmet } from "../../deps.ts"

// connect to mongodb
const data={
    urlmongo:environmet.MongoUrl,
    dbs:"siteWeb",
    clltn:"setting"
}

export const setting=await Connect(data.urlmongo,data.dbs,data.clltn)

// TEST: find
// console.log( await setting.find().toArray() )

