export function _account(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": console.log("controller user account OPTIONS");break
    case "LOGIN"  : console.log("controller user account LOGIN") ;break
    case "POST"   : console.log("controller user account POST") ;break
    case "PUT"    : console.log("controller user account PUT") ;break
    case "DELETE" : console.log("controller user account DELETE") ;break
  }

  return new Response()
}
