'use client'
import Link from 'next/link'
import React from 'react'
import { useForm } from 'react-hook-form'

const Register = () => {
    const { handleSubmit, register, formState: { errors } } = useForm()
    const handleRegister = (data) => {

        console.log(data)
    }
    return (
        <section className="flex items-center justify-center my-10 lg:my-20">
            <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 border border-slate-200">
                <h1 className="text-3xl font-bold bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center">
                    Register
                </h1>
                {/* Form */}
                <form onSubmit={handleSubmit(handleRegister)} className="space-y-4">
                    <div>
                        <label className="block  text-slate-700 mb-1">Name</label>
                        <input
                            {...register('name', { required: 'Name is required', minLength: { value: 6, message: 'Name must be at least 4 characters long' } })}
                            type="text"
                            placeholder="Your full name"
                            className="w-full border border-slate-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        {errors.name && <p className='text-red-500 mt-1'>{errors.name.message}</p>}
                    </div>

                    <div>
                        <label className="block  text-slate-700 mb-1">Email</label>
                        <input
                            {...register('email', { required: 'Email Address is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Please enter a valid email address.' } })}
                            type="email"
                            placeholder="Your email"
                            className="w-full border border-slate-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        {errors.email && <p className='text-red-500 mt-1'>{errors.email.message}</p>}
                    </div>

                    <div>
                        <label className="block  text-slate-700 mb-1">Password</label>
                        <input
                            {...register('password',{required: 'Password is required', pattern: {value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{6,}$/, message: 'Password must be at least 6 characters long and include at least one uppercase letter, one lowercase letter, and one number.'}})}
                            type="password"
                            placeholder="•••••••"
                            className="w-full border border-slate-300 rounded-md px-3 py-2  focus:outline-none focus:ring-2 focus:ring-purple-400"
                        />
                        {errors.password && <p className='text-red-500 mt-1'>{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        className="w-full btn-primary text-white py-2 rounded-md  font-semibold transition"
                    >Register</button>
                </form>
                <div className="flex items-center gap-3 my-4">
                    <div className="h-px bg-slate-200 flex-1" />
                    <span className="text-xs text-slate-500">OR</span>
                    <div className="h-px bg-slate-200 flex-1" />
                </div>
                <button
                    className="w-full flex items-center justify-center gap-3 border border-slate-300 rounded-md py-2 hover:bg-slate-50 transition  cursor-pointer"
                >
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="google"
                        className="w-5 h-5"
                    />
                    Continue with Google
                </button>

                {/* Footer */}
                <p className="text-center  text-slate-600 mt-4">
                    Already have an account?
                    <Link href="/login" className="text-purple-600 hover:underline">
                        Login
                    </Link>
                </p>

            </div>
        </section>
    )
}

export default Register
