// url:https://dns/page/data to ["page","data"]

export function _route(url:string):string[]{
  const div = url.split("/")
  return div.slice(3)
}

// TEST :
// const input = "https://localhost:8080/upload/"
// _routes(input)
