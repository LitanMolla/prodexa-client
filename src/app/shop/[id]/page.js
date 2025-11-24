'use client'
import React from 'react'
import { useRouter } from 'next/navigation'

const ProductDetails = () => {
    const router = useRouter()
    const product = {
        id: 1,
        title: "Wireless Noise Cancelling Headphone",
        description:
            "Experience immersive, high-fidelity sound with advanced noise cancellation technology. Designed for all-day comfort with soft ear cushions, long-lasting battery life, and seamless wireless connectivity. Perfect for work, travel, gaming, and music lovers who want both style and performance.",
        image:
            "https://images.pexels.com/photos/3394653/pexels-photo-3394653.jpeg",
        price: 120,
        date: "2025-01-20",
        priority: "High",
    }

    return (
        <div className="my-10 lg:my-20">
            <div className="container">
                <div className="max-w-5xl mx-auto">
                    <div className="bg-white rounded-3xl shadow-lg border border-slate-200/80 overflow-hidden">

                        {/* Top small gradient bar */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">

                            {/* LEFT: Image */}
                            <div className="relative">
                                <div className="w-full h-64 sm:h-80 rounded-2xl overflow-hidden bg-slate-100">
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className="w-full h-full object-cover object-center"
                                    />
                                </div>

                                {/* Badge */}
                                <div className="absolute top-3 left-3">
                                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-600 text-white shadow-sm">
                                        Featured
                                    </span>
                                </div>

                                {/* Small meta box bottom-left on image */}
                                <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm border border-slate-200 text-xs text-slate-700 px-3 py-2 rounded-xl shadow-sm flex flex-col gap-1">
                                    <span><span className="font-semibold">Date:</span> {product.date}</span>
                                    <span><span className="font-semibold">Priority:</span> {product.priority}</span>
                                </div>
                            </div>

                            {/* RIGHT: Text Content */}
                            <div className="flex flex-col h-full">
                                {/* Title */}
                                <h1 className="heading">
                                    {product.title}
                                </h1>

                                {/* Price */}
                                <div className="mt-3 flex items-center gap-3">
                                    <p className="text-2xl font-semibold text-slate-900">
                                        ${product.price}
                                    </p>
                                    <span className="px-3 py-1 rounded-full bg-emerald-50 text-emerald-600 text-xs font-medium border border-emerald-100">
                                        In stock
                                    </span>
                                </div>

                                {/* Short meta line */}
                                <p className="mt-2 text-sm text-slate-500">
                                    Premium wireless audio • Noise cancellation • All-day comfort
                                </p>

                                {/* Description */}
                                <p className="mt-5 text-slate-700 leading-relaxed text-[15px]">
                                    {product.description}
                                </p>

                                {/* Divider */}
                                <div className="my-6 h-px bg-slate-100" />

                                {/* Buttons */}
                                <div className="mt-auto flex flex-col sm:flex-row gap-3">
                                    <button
                                        onClick={() => router.back()}
                                        className="w-full sm:w-auto px-5 py-2.5 text-sm font-medium bg-slate-100 text-slate-800 rounded-md hover:bg-slate-200 border border-slate-200 transition cursor-pointer"
                                    >
                                        Go Back
                                    </button>

                                    <button
                                        className="btn-primary flex-1"
                                    >
                                        Add to Cart
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
