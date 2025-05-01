import { Route, Routes } from "react-router-dom"
import Welcome from "../../pages/Welcome"
import Auth from "../auth/Auth"
import { useContext } from "react"
import { AppContext } from "../../context/AppContext"
import { Navigate } from "react-router-dom"

const Layout = () => {
  const {auth}=useContext(AppContext)
  console.log(auth, 'from layout');
  
  return (
   <Routes>
    <Route path='/' element={<Auth/>}/>
    <Route element={
    auth?.isAuthenticated ? <Welcome /> : <Navigate to="/"/>}/>
   </Routes>
  )
}

export default Layout