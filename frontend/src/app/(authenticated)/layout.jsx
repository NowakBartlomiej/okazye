'use client'

import {useAuth} from '@hooks/useAuth'

const AuthLayout = ({children}) => {
    const {user} = useAuth({middleware: 'auth'})

    if (typeof user === "undefined") {
        return null;
    }

    return (
    <div>
        {children}
    </div>
  )
}

export default AuthLayout