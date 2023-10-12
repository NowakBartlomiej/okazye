import React from 'react'
import Link from 'next/link'

const Head = () => {
    return (
        <div className='bg-white flex justify-between px-6 py-4'>
            <Link href="/">
                <h1 className='text-4xl font-black'><span className='text-purple-700'>Ok</span>azye</h1>
            </Link>

            <div className='flex items-center text-base gap-8'>
                <div className='relative flex items-center rounded-lg bg-white overflow-hidden border-2 px-1 py-1.5 gap-2'>
                    <div className="grid place-items-center h-full text-gray-300">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                    <input className='peer h-full w-36 outline-none text-sm text-gray-700 pr-2' type="search" placeholder='szukaj...' />
                </div>

                <div className='text-base flex items-center gap-4'>
                    <Link href='/login' className='text-gray-700 hover:text-purple-700'>Zaloguj Się</Link>
                    <Link href='/register' className='text-gray-700 border border-gray-300 hover:border-gray-400 rounded px-4 py-2'>Utórz Konto</Link>
                </div>
            </div>
        </div>
    )
}

export default Head