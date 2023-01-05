
export function Header (props:any){
  const _notify = props.notify
    async function _onClick(x){
      console.log("3")
    }
    function showNotify(_x){

      if( !_notify.show.get ){ 
        _notify.data.set(<div className="NotifyBody" onClick={_onClick}>casa sistem</div>)
        _notify.show.set(true)
      }
//        console.log(_notify.set(<div className="NotifyBody">casa sistem</div>)) 
      console.log("2")
    }

  return (
    <div className="Header" onClick={showNotify}>
      header
    </div>
  )
}
