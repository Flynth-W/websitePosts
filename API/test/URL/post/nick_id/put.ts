const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5pY2tfaWQiOjJ9fQ.wtsw-IWT8z8gVC4KsWg0KHc7Sv4GW5ozEj8my9rIOlA"

const _body = {num_like:3}
const resp = await fetch("http://localhost:8000/post/nick_id/7",{
  method:"PUT",
  headers:{
    'Content-Type':'application/json',
    'jwt':jwt,
  },
  body:JSON.stringify(_body)
})
console.log(resp)

//console.log(await resp.json().then( x=>{ console.log(x.jwt) } ))

