'use client'
import ProductCard from '@/components/ProductCard/ProductCard'
import useAuth from '@/hooks/useAuth'
import React from 'react'

const Shop = () => {
  const { user } = useAuth()
  // console.log(user)
  return (
    <>
      <div className="my-10 lg:my-20">
        <div className="container">
          <h1 className='heading text-center mb-5'>Our Products</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((item, i) => (
              <ProductCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop