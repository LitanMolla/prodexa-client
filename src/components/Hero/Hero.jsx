import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='relative'>
            <Image
                src='/hero.avif'
                width={1000}
                height={1000}
                alt='Hero'
                className='w-full'
            />
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
                <div className="container">
                    <div className="text-center space-y-3">
                        <h1 className="text-white text-4xl lg:text-5xl font-bold">
                            Discover the Best Deals Online
                        </h1>
                        <p className="text-white/80  md:text-lg">
                            Shop top-quality products at unbeatable prices.
                        </p>
                        <Link className='btn-primary' href='/shop'>Shop Now</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero