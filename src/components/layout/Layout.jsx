import { Route, Routes } from "react-router-dom"
import Welcome from "../../pages/Welcome"
import Auth from "../auth/Auth"

const Layout = () => {
  return (
   <Routes>
    <Route path='/' element={<Auth/>}/>
    <Route path='/welcome' element={<Welcome/>} />
   </Routes>
  )
}

export default Layout