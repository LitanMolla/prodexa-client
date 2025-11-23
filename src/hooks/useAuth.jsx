import AuthContex from '@/contex/AuthContex'
import { useContext } from 'react'

const useAuth = () => { 
  return useContext(AuthContex)
}

export default useAuth