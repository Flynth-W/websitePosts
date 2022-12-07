export function _profile(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": console.log("controller user account OPTIONS");break
    case "GET"    : console.log("controller user account GET") ;break
    case "PUT"    : console.log("controller user account PUT") ;break
  }

  return new Response()
}
