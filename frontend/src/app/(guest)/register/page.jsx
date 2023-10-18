'use client'

import { useAuth } from "@/hooks/useAuth"
import { useState } from "react"
import { Input, Button } from "@nextui-org/react"

const Page = () => {
  const { register, isLoading } = useAuth({
    middleware: 'guest',
    redirectIfAuthenticated: '/',
  })

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [errors, setErrors] = useState([])

  const submitForm = (e) => {
    event.preventDefault()

    register({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
      setErrors,
    })
  }

  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm bg-white px-6 py-4 rounded-md pb-6 animate-fade-in-down">
        <h2 className="text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 my-6">Zarejestruj się</h2>
        <form onSubmit={submitForm} className="space-y-6">
          <div>
            <Input
              classNames={{
                label: "",
                input: "text-black",
              }}
              isInvalid={errors.name ? true : false}
              errorMessage={errors.name && "Błędne dane"}
              type="text" label="Nazwa" variant="bordered" isRequired={true} value={name} onChange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <Input
              classNames={{
                label: "",
                input: "text-black",
              }}
              isInvalid={errors.email ? true : false}
              errorMessage={errors.email && "Błędne dane"}
              type="email" label="Email" variant="bordered" isRequired={true} value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>

          <div className="mt-2">
            <Input
              isInvalid={errors.password ? true : false}
              errorMessage={errors.password && "Błędne dane"}
              type="password" label="Hasło" variant="bordered" isRequired={true} value={password} onChange={(e) => setPassword(e.target.value)} />
          </div>

          <div className="mt-2">
            <Input
              isInvalid={errors.password_confirmation ? true : false}
              errorMessage={errors.password_confirmation && "Błędne dane"}
              type="password" label="Powtórz Hasło" variant="bordered" isRequired={true} value={passwordConfirmation} onChange={(e) => setPasswordConfirmation(e.target.value)} />
          </div>

          <div>
            <Button isLoading={isLoading} type="submit" className="flex w-full justify-center rounded-md bg-[#28B67E] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#28b67de0] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#28b67de0]">Zarejestruj się</Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Page