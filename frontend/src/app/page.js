'use client'

import Navigation from "@/components/navigation"
import OccasionList from "@/components/occasionList"
import { useAuth } from "@hooks/useAuth"

export default function Home() {
  const {user} = useAuth()
  
  return (
    <main>
      <Navigation />
      <OccasionList />
    </main>
  )
}