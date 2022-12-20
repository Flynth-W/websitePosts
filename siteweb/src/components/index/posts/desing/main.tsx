import { Actions } from "./actions"
import { Author } from "./author"
import { Image } from "./image"
import { Options } from "./options"
import { Text } from "./text"


export function Desing(){

  return (
  <div>
    <div>
      <Options/>
      <Author/>
    </div>
    <div>
      <Text/>
      <Image/>
    </div>
    <Actions/>
  </div>
      )
}
