'use client'
import Link from 'next/link'
import React from 'react'
import CustomLink from '../ui/CustomLink'
import useAuth from '@/hooks/useAuth'

const Navbar = () => {
    const { user, userLogOut } = useAuth()
    console.log(user)
    return (
        <header className='sticky top-0 py-3 bg-white shadow-sm z-50'>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <Link className='logo' href='/'>Prodexa</Link>
                    <ul className='flex gap-5 flex-wrap'>
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
                    </ul>
                    {user ? <button onClick={() => userLogOut()} className='btn-primary'>Logout</button> : <Link className='btn-primary' href='/login'>Login</Link>}
                </div>
            </nav>
        </header>
    )
}

export default Navbar