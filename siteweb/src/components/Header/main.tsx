import {User} from "./user/main"
import { Navigation } from "./navigation/main"
import { Search } from "./search/main"
export function Header (){
  return (
    <div className="Top">
      <User/>
      <Navigation/>
      <Search/>
    </div>
  )
}
