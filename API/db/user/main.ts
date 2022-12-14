import { accounts } from "./accounts.ts";
import { comments } from "./comments.ts";
import { notices  } from "./notices.ts";
import { posts    } from "./posts.ts";
import { profiles } from "./profiles.ts";
import { savePost } from "./savePost.ts";
import { setting  } from "./setting.ts";

export const UserDB ={
  accounts  ,
  comments  ,
  notices   ,
  posts     ,
  profiles  ,
  savePost  ,
  setting
}
// RESTORE DBS
// UserDB.accounts.deleteMany({})
// UserDB.comments.deleteMany({})
// UserDB.notices.deleteMany({})
// UserDB.posts.deleteMany({})
// UserDB.profiles.deleteMany({})
// UserDB.savePost.deleteMany({})
// UserDB.setting.deleteMany({})
