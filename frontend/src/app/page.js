'use client'

import Link from "next/link"
import { useAuth } from "@hooks/useAuth"

export default function Home() {
  const {user} = useAuth()
  
  return (
    <main>
      {user && (
        <h1>Zalogowany</h1>
      )}
    </main>
  )
}