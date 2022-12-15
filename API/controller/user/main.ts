import { _account } from "./account/main.ts"
import { _comments } from "./comments/main.ts"
import { _notice } from "./notice/main.ts"
import { _POST }  from "./post/main.ts"
import { _profile } from "./profile/main.ts"
import { _savePost } from "./savePost/main.ts"
import { _setting } from "./setting/main.ts"

export const UserCtrl = {
  account:_account ,
  comments:_comments,
  notice:_notice,
  POST:_POST,
  profile:_profile,
  savePost:_savePost,
  setting:_setting
}
