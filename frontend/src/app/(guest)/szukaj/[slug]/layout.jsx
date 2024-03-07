'use client'

import React from 'react'
import { useRouter, usePathname} from 'next/navigation'

const Layout = ({ params, children }) => {
  const router = useRouter();
  const pathname = usePathname();
  
  return (
    <div>
      <div className='sticky top-[4rem] z-30 bg-white text-custom-gray-100 text-[19px] sm:text-[22px] lg:text-[24px] font-semibold flex justify-center py-4 mb-6 shadow-md'>
        <div className=' flex justify-center gap-6 px-5 md:gap-10 lg:gap-14 xl:gap-18'>
          <span onClick={() => router.push(`/szukaj/${params.slug}/okazje`)} className={`${pathname == `/szukaj/${params.slug}/okazje` && 'text-custom-green-100'} hover:text-custom-green-100 transition-colors cursor-pointer`}>Okazje</span>
          <span onClick={() => router.push(`/szukaj/${params.slug}/uzytkownicy`)} className={`${pathname == `/szukaj/${params.slug}/uzytkownicy` && 'text-custom-green-100'} hover:text-custom-green-100 transition-colors cursor-pointer`}>Użytkownicy</span>
          <span onClick={() => router.push(`/szukaj/${params.slug}/kategorie`)} className={`${pathname == `/szukaj/${params.slug}/kategorie` && 'text-custom-green-100'} hover:text-custom-green-100 transition-colors cursor-pointer`}>Kategorie</span>
        </div>
      </div>

      <div className='flex flex-col-reverse lg:flex-row'>
        <aside className='lg:w-1/4 '>
          <div className='bg-gray-400 hidden'>Rekalama</div>
        </aside>

        <main className=' w-full lg:w-full grid lg:place-items-center'>
            {children}
        </main>

        <aside className='lg:w-1/4 '>
          <div className='bg-gray-400 hidden'>Rekalama</div>
        </aside>
      </div>
    </div>
  )
}

export default Layout