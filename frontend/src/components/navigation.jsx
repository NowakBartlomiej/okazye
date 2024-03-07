'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input } from '@nextui-org/react'

import { useState } from 'react'
import SearchBar from './searchBar';
import { hasAdminRole } from '@/app/api/fetchRoles'

const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logout } = useAuth({ middleware: 'guest' })
    const {data: isAdmin} = hasAdminRole();

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='2xl'
            className='bg-[#0D1321]'
            position='sticky'
        >
            <NavbarContent className="sm:hidden text-white" justify="start">
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarContent className="hidden sm:flex" justify="start">
                <NavbarBrand className="mr-4">
                    <Link href="/">
                        <h1 className='text-4xl font-black text-white'><span className='text-[#28B67E]'>Ok</span>azye</h1>
                    </Link>
                </NavbarBrand>

            </NavbarContent>

            <NavbarContent as="div" className="items-center" justify="end">
                <SearchBar />

                {user ? (
                    <>
                        <Button className='bg-[#28B67E] text-white rounded hover:bg-[#28b67dd2] hidden lg:flex'>
                            <Link href='/dodaj-okazje'>Dodaj okazję</Link>
                        </Button>
                        <Button className='bg-[#28B67E] text-white rounded hover:bg-[#28b67dd2]'>
                            <Link href='/profil'>Konto</Link>
                        </Button>
                        {isAdmin && <Button className='bg-[#28B67E] text-white rounded hidden lg:flex hover:bg-[#28b67dd2]'>
                            <Link href='/admin'>Admin</Link>
                        </Button>}
                    </>
                )
                    : (
                        <>
                            <Link href='/register' className='text-[#28B67E] hover:text-[#28b67dd2] hidden lg:flex transition-colors'>Utórz Konto</Link>
                            <Button className='bg-[#28B67E] text-white rounded hover:bg-[#28b67dd2]'>
                                <Link href='/login'>Zaloguj się</Link>
                            </Button>
                        </>
                    )}


            </NavbarContent>

            <NavbarMenu className='bg-[#0D1321]'>
                    <NavbarMenuItem className='flex justify-center'>
                    <Link href="/">
                        <h1 className='text-4xl font-black text-white'><span className='text-[#28B67E]'>Ok</span>azye</h1>
                    </Link>
                    </NavbarMenuItem>
                
                    {user ?
                        <>
                        <NavbarMenuItem className='text-white'>
                            <Link
                                className="w-full  hover:text-[#28b67dd2] focus:text-[#28b67dd2] transition-colors"
                                href="/dodaj-okazje"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dodaj Okazję
                            </Link>
                            </NavbarMenuItem>
                            {isAdmin && <NavbarMenuItem className='text-white'>
                            <Link
                                className="w-full hover:text-[#28b67dd2] focus:text-[#28b67dd2] transition-colors"
                                href="/admin"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Admin
                            </Link>
                            </NavbarMenuItem>}
                            
                        </>
                        :
                        <>
                            <NavbarMenuItem>
                            <Link
                                className="w-full text-[#28B67E] hover:text-[#28b67dd2] focus:text-[#28b67dd2] transition-colors"
                                href="/register"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Utórz Konto
                            </Link>
                            </NavbarMenuItem>
                        </>}
            </NavbarMenu>
        </Navbar>
    )
}

export default Navigation