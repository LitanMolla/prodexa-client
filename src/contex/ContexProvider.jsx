'use client'
import AuthContex from "./AuthContex"

const ContexProvider = ({children}) => {
    const authInfo = {

    }
  return (
    <AuthContex.Provider value={authInfo}>
        {children}
    </AuthContex.Provider>
  )
}

export default ContexProvider