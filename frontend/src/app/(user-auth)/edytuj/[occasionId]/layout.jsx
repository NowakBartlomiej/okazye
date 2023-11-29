'use client'

import { getOccasion } from '@/app/api/fetchOccasions'
import Navigation from '@/components/navigation'
import {useAuth} from '@hooks/useAuth'
import { notFound } from 'next/navigation'

const AuthLayout = ({children, params}) => {
    const {user} = useAuth()
    const {data, isLoading} = getOccasion(params.occasionId);

    if(!isLoading) {
        if (user.id != data.user.id) {
            return notFound();
        } else {
            return (
                <div>
                    {children}
                </div>
            )
        }
    }
    
    return (
        <Navigation />
    )
}

export default AuthLayout