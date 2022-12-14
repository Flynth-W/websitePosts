import { UserDB  } from "../../../../db/user/main.ts"

export async function _nick_id():Promise<number>{
  const resp = await UserDB.accounts.find().toArray()
  const leng = resp.length 
  const lastNick= resp[leng -1]
  if( lastNick === undefined ){ return 0 }
  return lastNick.nick_id + 1
}
