export function _savePost(req:Request){
  const method =req.method
  switch ( method ){
    case "OPTIONS": console.log("controller user account OPTIONS");break
    case "GET"    : console.log("controller user account GET") ;break
    case "POST"   : console.log("controller user account GET") ;break
    case "PUT"    : console.log("controller user account GET") ;break
    case "DELETE" : console.log("controller user account GET") ;break
  }

  return new Response()
}


