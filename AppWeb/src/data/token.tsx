export function Authenticate():boolean{
  if (typeof window !== 'undefined') {
    // Perform localStorage action
    // localStorage.setItem('token','randomToken')
    const token = localStorage.getItem('token')
    if( token != null ){
      return true
    }
  }

  return false
}
