
export function _onclick(cmpts:any){
  if( !!cmpts.notify.show.get ){ 
    cmpts.notify.data.set(<></>)
    cmpts.notify.show.set(false)
  }
}
