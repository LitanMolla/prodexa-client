'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import CustomLink from '../ui/CustomLink'
import useAuth from '@/hooks/useAuth'
import { FaBars, FaWindowClose } from "react-icons/fa";

const Navbar = () => {
    const { user, userLogOut } = useAuth()
    const [isOpen, setIsOpen] = useState(false)
    // console.log(user)
    const link = <>
        <li>
            <CustomLink
                href='/'
                label='Home'
            />
        </li>
        <li>
            <CustomLink
                href='/shop'
                label='Shop'
            />
        </li>
        <li>
            <CustomLink
                href='/about'
                label='About'
            />
        </li>
        <li>
            <CustomLink
                href='/contact'
                label='Contact'
            />
        </li>
        {
            user && <li>
                <CustomLink
                    href='/dashboard/manage'
                    label='Manage Products'
                />
            </li>
        }
        {
            user && <li>
                <CustomLink
                    href='/dashboard/add-product'
                    label='Add Product'
                />
            </li>
        }
    </>
    return (
        <header className='sticky top-0 py-3 bg-white shadow-sm z-50'>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <Link className='logo' href='/'>Prodexa</Link>
                    <ul className='lg:flex gap-5 flex-wrap hidden'>
                        {link}
                    </ul>
                    {!user && <Link className='btn-primary hidden! lg:inline-block' href='/login'>Login</Link>}
                    <button onClick={()=>setIsOpen(!isOpen)} className='text-2xl cursor-pointer lg:hidden'><FaBars /></button>
                </div>
            </nav>
            <div className={`bg-slate-900/80 backdrop-blur-2xl fixed min-h-screen top-0 right-0 w-2/3 duration-700 lg:hidden ${isOpen?'translate-x-0':'translate-x-full'}`}>
                <button onClick={()=>setIsOpen(!isOpen)} className='text-2xl cursor-pointer lg:hidden absolute right-[18px] top-4 text-slate-200'><FaWindowClose /></button>
                <ul className='text-slate-300 text-center mt-20'>
                    {link}
                </ul>
            </div>
        </header>
    )
}

export default Navbar