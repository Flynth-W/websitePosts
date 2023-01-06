import { Image } from "./image"
import { Text } from "./text"

export function PostBody(props:any){
  if( !!props.text ){
    if(!!props.image){
      return(
      <div className="Post-Body">
        <Text text={props.text} />
        <Image/>
      </div>
      )
    }else{
      return(
      <div className="Post-Body">
        <Text text={props.text} />
      </div>
      )

    }

  }else{
    if(!!props.image){
      return(
      <div className="Post-Body">
        <Image/>
      </div>
      )

    }

  }


}
