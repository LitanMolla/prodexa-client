'use client'
import Link from 'next/link'
import React from 'react'

const ProductCard = () => {

    // 🔥 Static product data
    const product = {
        id: 1,
        title: "Wireless Headphone",
        category: 'Food',
        price: 120,
        image: "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg"
    }

    return (
        <div className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition p-4">

            {/* Image */}
            <div className="w-full h-60 rounded-lg overflow-hidden bg-slate-100">
                <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover object-center"
                />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold text-slate-900mt-2 line-clamp-1">
                {product.title}
            </h3>
            {/* Price */}
            <div className="flex justify-between items-center ">
                <p className="text-base font-semibold text-slate-900">
                    ${product.price}
                </p>
                <p>{product.category}</p>
            </div>
            <Link href={'/'}
                className="btn-primary w-full text-center mt-2"
            >
                View Details
            </Link>

        </div>
    )
}

export default ProductCard
