import { Header } from "./Header/main"

export default function Layout(props:any){
  return (
  <div>
    <Header/>
    <main>
        {props.children}
    </main>
  </div>
      )
}

