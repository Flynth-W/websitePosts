const jwt = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5pY2tfaWQiOjJ9fQ.wtsw-IWT8z8gVC4KsWg0KHc7Sv4GW5ozEj8my9rIOlA"
const _body = {name:"santos_fly"}

const resp = await fetch("http://localhost:8000/profile/",{
  method:"PUT",
  headers:{
    'Content-Type':'application/json',
    'jwt':jwt
  },
  body:JSON.stringify(_body)
})
console.log(resp)
//resp.json().then(x=>console.log(x))
