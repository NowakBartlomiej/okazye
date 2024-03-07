'use client'

import { useAuth } from '@/hooks/useAuth'
import { Button, Input } from '@nextui-org/react'
import React, { useState } from 'react'

const Page = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    })
    
    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState([])
    const [status, setStatus] = useState(null)
    
    const submitForm = async (e) => {
        e.preventDefault()
    
        forgotPassword({ email, setErrors, setStatus })
      }
    
    return (
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white px-6 py-4 rounded-md pb-6 animate-fade-in-down">
            <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 my-6">Przypomnij hasło</h2>
            <form onSubmit={submitForm} className="space-y-6">
            <div>
            <label className='text-sm'>Podaj email aby wysłać mail z nowym hasłem</label>
            <Input
            isInvalid={errors.email ? true : false}
            errorMessage={errors.email && "Błędne dane"}
              type="email" label="Email" variant="bordered" isRequired={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
              </div>
            <div>
            <Button type="submit" className="flex w-full justify-center rounded-md bg-[#28B67E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#28b67de0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28b67de0]">Przypomnij</Button>
          </div>
            </form>
            </div>
        </div>
    )
}

export default Page