import { LogIn } from "./logIn"
import { CreateAccount } from "./createAccount"
export function LoginPage(){
  return (
  <div className="LoginPage">
    <LogIn/>
    <CreateAccount/>
  </div>
      )
}
