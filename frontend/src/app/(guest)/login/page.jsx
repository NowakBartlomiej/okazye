'use client'

import { useAuth } from "@/hooks/useAuth";
import { Button, Input } from "@nextui-org/react";
import { useRouter } from "next/navigation"
import { useState } from "react";
import InputError from "@/components/inputError";

const Page = () => {
  const router = useRouter();

  const { login, isLoading } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [shouldRemember, setShouldRemember] = useState(false)
  const [errors, setErrors] = useState([])
  const [status, setStatus] = useState(null)

  const submitForm = async (e) => {
    e.preventDefault()

    login({
      email,
      password,
      remember: shouldRemember,
      setErrors,
      setStatus,
    })
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white px-6 py-4 rounded-md pb-6">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 my-6">Zaloguj się</h2>
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <Input 
            classNames={{ 
              label: "",
              input: "text-black",
             }}
            isInvalid={errors.email ? true : false}
            errorMessage={errors.email && "Błędne dane"}
            type="email" label="Email" variant="bordered" isRequired={true} value={email} onChange={(e) => setEmail(e.target.value)}/>
          </div>

          <div>
            <div className="flex justify-end">
              <div className="text-sm">
                <a href="#" className="font-semibold text-[#28B67E] hover:text-[#28b67dd2]">Zapomiałeś hasła?</a>
              </div>
            </div>
            <div className="mt-2">
              <Input
              isInvalid={errors.password ? true : false}
              errorMessage={errors.password && "Błędne dane"}
              type="password" label="Hasło" variant="bordered" isRequired={true} value={password} onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>

          <div>
            <Button isLoading={isLoading} type="submit" className="flex w-full justify-center rounded-md bg-[#28B67E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#28b67de0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28b67de0]">Zaloguj się</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page