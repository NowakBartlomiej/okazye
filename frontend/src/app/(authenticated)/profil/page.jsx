import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import React from 'react'

const Page = () => {
  return (
    <>
      <Navigation />
      <Sidebar>
        <div className='lg:w-[70%] lg:mx-auto'>
          <div className='grid lg:place-items-center'>
            Karty
          </div>
        </div>
      </Sidebar>
    </>
  )
}

export default Page