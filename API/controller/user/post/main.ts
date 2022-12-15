import { _options } from "./options.ts";
import { _get } from "./get.ts";
import { _post } from "./post.ts";
import { _put } from "./put.ts";
import { _delete } from "./delete.ts";
import { _AUTHOR } from "./author/main.ts"

export const _POST={
  options:_options,
  get:_get,
  post:_post,
  put:_put,
  delete:_delete,
  AUTHOR:_AUTHOR
}

