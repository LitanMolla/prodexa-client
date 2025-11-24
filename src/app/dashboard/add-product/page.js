'use client'
import React from 'react'
import { useForm } from 'react-hook-form'

const AddProduct = () => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <>
            <div className="my-10 lg:my-20">
                <div className="container">
                    <div className="max-w-3xl mx-auto">
                        <h1 className="heading mb-5 text-center">
                            Add New Product
                        </h1>
                        <form className="bg-white border border-slate-200 p-6 rounded-xl shadow-sm space-y-5">
                            {/* Title */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Product Title
                                </label>
                                <input
                                    {...register('title',{required: 'Title is required'})}
                                    type="text"
                                    placeholder="Enter product title"
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
                                />
                            </div>
                            {/* Short Description */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Short Description
                                </label>
                                <input
                                    {...register('title',{required: 'Short Description is required'})}
                                    type="text"
                                    placeholder="1–2 short lines"
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
                                />
                            </div>

                            {/* Full Description */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Full Description
                                </label>
                                <textarea
                                    {...register('title',{required: 'Full Description is required'})}
                                    rows={4}
                                    placeholder="Enter detailed product description"
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
                                ></textarea>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                                {/* Price */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Price ($)
                                    </label>
                                    <input
                                        {...register('title',{required: 'Price is required'})}
                                        type="number"
                                        placeholder="Price"
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
                                    />
                                </div>
                                {/* Priority */}
                                <div>
                                    <label className="block text-sm font-medium text-slate-700 mb-1">
                                        Priority
                                    </label>
                                    <select
                                        {...register('title',{required: 'Price is required'})}
                                        className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm bg-white focus:ring-2 focus:ring-purple-400 outline-none"
                                    >
                                        <option value="">Select</option>
                                        <option value="High">High</option>
                                        <option value="Medium">Medium</option>
                                        <option value="Low">Low</option>
                                    </select>
                                </div>

                            </div>
                            {/* Optional Image URL */}
                            <div>
                                <label className="block text-sm font-medium text-slate-700 mb-1">
                                    Image URL
                                </label>
                                <input
                                    {...register('title',{required: 'Image URL is required'})}
                                    type="url"
                                    placeholder="https://example.com/image.jpg"
                                    className="w-full border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-purple-400 outline-none"
                                />
                            </div>
                            {/* Submit */}
                            <button
                                type="submit"
                                className="btn-primary w-full"
                            >Add Product
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AddProduct
