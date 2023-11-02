import Navigation from '@/components/navigation'
import React from 'react'

const GuestLayout = ({children}) => {
  return (
    <>
        <Navigation />
        {children}
    </>
  )
}

export default GuestLayout