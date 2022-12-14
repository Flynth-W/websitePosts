import { _options } from "./options.ts"
import { _login   } from "./login.ts"
import { _post    } from "./post/main.ts"
import { _put     } from "./put.ts"
import { _delete  } from "./delete.ts"

export const _account={
  options:_options,
  login:_login,
  post:_post,
  put:_put,
  delete:_delete
} 
