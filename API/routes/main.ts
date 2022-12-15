import { _route } from "../utils/routes.ts"

import { _account  }  from "./account/main.ts"
import { _profile  }  from "./profile/main.ts"
import { _posts    }  from "./posts/main.ts"
import { _comments }  from "./comments/main.ts"
import { _savePost }  from "./savePost/main.ts"
import { _notice   }  from "./notice/main.ts"
import { _setting  }  from "./setting/main.ts"

export function RouteHandler(req:Request){
  const routes =_route(req.url)
  switch (routes[0]){
    case "account"  : return _account(req)
    case "profile"  : return _profile(req)
    case "posts"    : return _posts(req)
    case "comments" : return _comments(req)
    case "savePost" : return _savePost(req)
    case "notice"   : return _notice(req)
    case "setting"  : return _setting(req)
  }
  return new Response()
}
