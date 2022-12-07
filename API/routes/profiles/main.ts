export function _profiles(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": console.log("controller user account OPTIONS");break
    case "GET"    : console.log("controller user account GET") ;break
  }

  return new Response()
}
