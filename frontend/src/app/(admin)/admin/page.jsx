import AdminSidebar from '@/components/adminSidebar'
import Navigation from '@/components/navigation'
import React from 'react'

const Page = () => {
  return (
    <div>
        <Navigation />
        <AdminSidebar>
            <h1>Hello</h1>
        </AdminSidebar>
    </div>
  )
}

export default Page