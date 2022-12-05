import { Connect  } from "../../deps.ts"
import { environmet } from "../../deps.ts"

// connect to mongodb
const data={
    urlmongo:environmet.MongoUrl,
    dbs:"siteWeb",
    clltn:"savePost"
}

export const savePost=await Connect(data.urlmongo,data.dbs,data.clltn)

// TEST: find
// console.log( await savePost.find().toArray() )

