'use client'

import { useAuth } from "@hooks/useAuth"

export default function Home() {
  const {user} = useAuth()
  
  return (
    <main>
      {user && (
        <h1>Zalogowany</h1>
      )}
      <h1>Test</h1>
    </main>
  )
}