import { useState } from "react"
import Hr from "../components/hr/Hr"
import User from "../components/user/User"

const Welcome = () => {
    const [isHR, setIsHR]=useState(true)

  return (
    <div className="secondary-box">
        {isHR && <Hr/>}
        {!isHR && <User/>}
    </div>

  )
}

export default Welcome
