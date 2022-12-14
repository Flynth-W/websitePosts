// req.body= account {name:... , password:...}


const _body={
  name:"dosjuan",
  password:"passjuan"
}

const resp = await fetch("http://localhost:8000/account/",{
  method:"LOGIN",
  headers:{
    'Content-Type':'application/json'
  },
  body:JSON.stringify(_body)
})

console.log(resp)
