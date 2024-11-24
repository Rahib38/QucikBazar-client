import { Outlet } from "react-router-dom"
import Footer from "../../Components/Footer"
import Navbar from "../../Components/Navbar"

function Main() {
  return (
    <div>
      <div>
        <Navbar></Navbar>
      </div>
      <div className="min-h-screen">
        <Outlet></Outlet>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  )
}

export default Main
