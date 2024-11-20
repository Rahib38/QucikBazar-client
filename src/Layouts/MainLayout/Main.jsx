import { Outlet } from "react-router-dom"
import Navbar from "../../Components/Navbar"

function Main() {
  return (
    <div>
     <Navbar/>
      <Outlet></Outlet>
      <h1>Footer</h1>
    </div>
  )
}

export default Main
