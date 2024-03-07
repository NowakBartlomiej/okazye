'use client'

import { getOccasion } from '@/app/api/fetchOccasions'
import { hasModeratorRole } from '@/app/api/fetchRoles'
import Navigation from '@/components/navigation'
import {useAuth} from '@hooks/useAuth'
import { notFound } from 'next/navigation'


const AuthLayout = ({children, params}) => {
    const {data: isModerator, isLoading: mIsLoading} = hasModeratorRole()
    const {user} = useAuth()
    console.log(isModerator)
    const {data, isLoading} = getOccasion(params.occasionId);

    if(!isLoading && !mIsLoading) {
        // if (user.id != data.user.id && !isModerator) {
        //     return notFound();
        // } else {
        //     return (
        //         <div>
        //             {children}
        //         </div>
        //     )
        // }
        if (user.id == data.user.id || isModerator) {
            return (
                        <div>
                            {children}
                        </div>
                    )
        } else {
            return notFound();
        }
    }
    
    return (
        <Navigation />
    )
}

export default AuthLayout