import { _get } from "./get.ts"
import { _delete } from "./delete.ts"
import { _put } from "./put.ts"
import { _options } from "./options.ts"

export const _NICK_ID = {
  get:_get,
  delete:_delete,
  put:_put,
  options:_options
}
