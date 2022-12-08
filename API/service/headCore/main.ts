export function headCore(head:Headers):Headers{
  console.log(head)


  const access = {
    headers : head.get("access-control-request-headers") || "" ,
    origin : head.get("origin") || ""
  }

  const headers= new Headers()
  headers.append("Access-Control-Allow-Origin"  , access.origin )
  headers.append("Access-Control-Allow-Headers" , access.headers )
  return headers
}

