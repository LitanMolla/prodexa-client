import Link from 'next/link'
import React from 'react'
import CustomLink from '../ui/CustomLink'

const Navbar = () => {
    return (
        <header className='sticky top-0 py-3 bg-white shadow-sm'>
            <nav className="container">
                <div className="flex justify-between items-center">
                    <Link className='logo' href='/'>Prodexa</Link>
                    <ul className='flex gap-5'>
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
                    </ul>
                    <Link className='btn-primary' href='/login'>Login</Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar