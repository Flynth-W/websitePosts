// req.body= account {name:... , password:...}


const _body={
  name:"santos",
  password:"santos3221"
}

const resp = await fetch("http://localhost:8000/account/",{
  method:"LOGIN",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(_body)
})

console.log(await resp.json().then(x => console.log(x.jwt)))
// jwt = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJib2R5Ijp7Im5pY2tfaWQiOjN9fQ.kf9hONSKDQOjGWEpzxPZSNL5d67Fl8FiCNGz9tLSGtQ
