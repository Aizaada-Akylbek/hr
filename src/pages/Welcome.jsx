import { useState } from "react"
import Hr from "../components/hr/Hr"
import User from "../components/user/User"

const Welcome = ({getUser}) => {
    const [isHR, setIsHR]=useState(false)

  return (
    <div className="secondary-box">
        {isHR && <Hr/>}
        {!isHR && <User id={getUser}/>}
    </div>

  )
}

export default Welcome
