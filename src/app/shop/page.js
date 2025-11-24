'use client'
import useAuth from '@/hooks/useAuth'
import React from 'react'

const Shop = () => {
    const {user} = useAuth()
  // console.log(user)
  return (
    <div>Shop</div>
  )
}

export default Shop