export function _onclick(id:string,x:any,cmpts:any){
  //console.log(x.target.attributes)
  //if (x.target.attributes.id.nodeValue === id || x.target.attributes.id.nodeValue === "any"){

    if( !!cmpts.notify.show.get ){ 
      cmpts.notify.data.set(<></>)
      cmpts.notify.show.set(false)
    }
  //} 


}

