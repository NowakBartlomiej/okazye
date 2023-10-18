'use client'

import Link from 'next/link'
import { useAuth } from '@/hooks/useAuth'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Button, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Input } from '@nextui-org/react'
import { SearchIcon } from '@/icons/searchIcon';
import { useState } from 'react'

const Head = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const { user, logout } = useAuth({ middleware: 'guest' })

    return (
        <Navbar
            isMenuOpen={isMenuOpen}
            onMenuOpenChange={setIsMenuOpen}
            maxWidth='2xl'
            className='bg-[#0D1321]'
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
                <Input
                    classNames={{
                        base: "max-w-full sm:max-w-[10rem] h-10",
                        mainWrapper: "h-full",
                        input: "text-small",
                        inputWrapper: "h-full font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20",
                    }}
                    placeholder="Type to search..."
                    size="sm"
                    startContent={<SearchIcon size={18} />}
                    type="search"
                />

                {user ? (
                    <>
                        <Button className='bg-[#28B67E] text-white rounded hover:bg-[#28b67dd2] hidden lg:flex'>
                            <Link href='/'>Dodaj okazję</Link>
                        </Button>
                        <Button className='bg-[#28B67E] text-white rounded hover:bg-[#28b67dd2]'>
                            <Link onClick={logout} href='/'>Konto</Link>
                        </Button>
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
                                className="w-full text-[#28B67E] hover:text-[#28b67dd2] focus:text-[#28b67dd2] transition-colors"
                                href="/register"
                                onClick={() => setIsMenuOpen(false)}
                            >
                                Dodaj Okazję
                            </Link>
                            </NavbarMenuItem>
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

export default Head