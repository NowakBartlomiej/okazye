import Navigation from '@/components/navigation'
import OccasionList from '@/components/occasionList'
import React from 'react'

const Page = () => {
  return (
    <>
        <Navigation />
        <OccasionList occasionFilter={"followed-occasions"}/>
    </>
  )
}

export default Page