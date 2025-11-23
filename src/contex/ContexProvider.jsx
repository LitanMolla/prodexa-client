'use client'
import { useEffect, useState } from 'react'
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendEmailVerification, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { auth } from '@/lib/firbase.config';
import AuthContex from './AuthContex';
const ContexProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const googleProvider = new GoogleAuthProvider()
  // create user
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // login user
  const loginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }
  // update user
  const updateUser = (info) => {
    return updateProfile(auth.currentUser, info)
  }
  // userVerification
  const userVerification = () => {
    return sendEmailVerification(auth.currentUser)
  }
  // sendPasswordResetEmail
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email)
  }
  const userLogOut = () => {
    return signOut(auth)
  }
  // google login
  const googleLogin = () => {
    return signInWithPopup(auth,googleProvider)
  }
  // user observer 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser)
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    loginUser,
    updateUser,
    userVerification,
    resetPassword,
    userLogOut,
    googleLogin
  }
  return (
    <AuthContex value={authInfo}>
      {children}
    </AuthContex>
  )
}

export default ContexProvider