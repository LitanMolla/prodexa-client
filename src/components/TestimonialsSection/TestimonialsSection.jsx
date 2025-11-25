'use client'
import React from 'react'
import TestimonialCard from '../TestimonialCard/TestimonialCard'

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "Product Manager",
        message:
            "Prodexa makes it super easy to manage and track all my products in one place. The clean UI saves me a lot of time every day.",
    },
    {
        id: 2,
        name: "Michael Lee",
        role: "Store Owner",
        message:
            "I love how simple and fast it is to add, update, and review products. The dashboard feels modern and very intuitive.",
    },
    {
        id: 3,
        name: "Amina Rahman",
        role: "Freelance Seller",
        message:
            "The product listing and details pages look very professional. It helps me present my products in a better way to clients.",
    },
]

const TestimonialsSection = () => {
    return (
        <section className="bg-slate-100 my-10 lg:my-20">
            <div className="container">
                    <div className="text-center max-w-2xl mx-auto mb-5">
                        <h2 className="heading">
                            What Our Users Say
                        </h2>
                        <p className="mt-3 text-slate-600 text-sm sm:text-base">
                            Prodexa helps creators, sellers and teams manage their products with confidence.
                            Here’s what some of them think.
                        </p>
                    </div>
                    <div className="grid gap-6 md:grid-cols-3">
                        {testimonials.map((item,i) => (
                            <TestimonialCard key={i} item={item} />
                        ))}
                </div>
            </div>
        </section>
    )
}

export default TestimonialsSection
