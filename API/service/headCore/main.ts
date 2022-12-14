export function headCore(head:Headers):Headers{
  const access = {
    headers : head.get("access-control-request-headers") || "" ,
    origin : head.get("origin") || "" ,
    method : head.get("access-control-request-method") || ""
  }

  const headers= new Headers()
  headers.append("Access-Control-Allow-Origin"  , access.origin )
  headers.append("Access-Control-Allow-Headers" , access.headers )
  headers.append("Access-Control-Allow-Methods" , access.method)
  return headers
}

