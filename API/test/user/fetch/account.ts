// req.body={account:... , profile:...}


const _body={
  account:{name:"santos",password:"santos3221"},
  profile:{
    name:"santos",
  }
}

const resp = await fetch("http://localhost:8000/account/",{
  method:"POST",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(_body)
})

console.log(resp)
