"use client"

import ProtectRoutes from "../routes/ProtectRoutes"

function User(){
  return(
    <ProtectRoutes>
      <div>
        holaaaaaaaa soy protegidaa
      </div>
    </ProtectRoutes>
  )
}

export default User