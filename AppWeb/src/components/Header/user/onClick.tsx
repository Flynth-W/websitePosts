import { Options } from "../../Notify/options/main"
export function _onclick(id:string,x:any,cmpts:any){
  let _id:string
  try{
    _id=x.target.attributes.id.nodeValue
  }catch{
    _id=null
  }
  //console.log(_id)
  //if (x.target.attributes.id.nodeValue === id || x.target.attributes.id.nodeValue === "any"){

  if( !cmpts.notify.show.get ){ 
    cmpts.notify.data.set(<Options/>)
    cmpts.notify.show.set(true)
  }
  //} 


}
