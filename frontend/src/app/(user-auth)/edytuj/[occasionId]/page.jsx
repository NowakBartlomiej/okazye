import Navigation from '@/components/navigation'
import OccasionEditForm from '@/components/occasionEditForm'
import React from 'react'

const Page = ({ params }) => {
    return (
        <>
            <Navigation />
            <main className='flex items-center justify-center mt-6'>
                <OccasionEditForm occasionId={params.occasionId}/>
            </main>
        </>
    )
}

export default Page