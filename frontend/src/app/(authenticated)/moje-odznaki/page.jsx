import Badges from '@/components/badges'
import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import React from 'react'

const Page = () => {
  return (
    <>
        <Navigation />
        <Sidebar>
            <Badges />
        </Sidebar>
    </>
  )
}

export default Page