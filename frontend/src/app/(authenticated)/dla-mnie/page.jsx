import Navigation from '@/components/navigation'
import OccasionList from '@/components/occasionList'
import React from 'react'

const Page = () => {
  return (
    <>
        <Navigation />
        <OccasionList occasionFilter={"for-me"}/>
    </>
  )
}

export default Page