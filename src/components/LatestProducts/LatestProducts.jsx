import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

const LatestProducts = () => {
    return (
        <div>
            <div className="my-10 lg:my-20">
                <div className="container">
                    <h1 className='heading text-center mb-5'>Latest Products</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        {Array.from({ length: 6 }).map((item, i) => (
                            <ProductCard key={i} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestProducts