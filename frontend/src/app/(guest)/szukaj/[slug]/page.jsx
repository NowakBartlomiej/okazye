import { redirect } from 'next/navigation'
import React from 'react'

const Page = ({params}) => {  
    return redirect(`/szukaj/${params.slug}/okazje`)
}

export default Page