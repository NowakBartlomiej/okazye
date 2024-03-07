import Navigation from '@/components/navigation'
import Sidebar from '@/components/sidebar'
import React from 'react'
import { redirect } from 'next/navigation'

const Page = () => {
  return redirect('/moje-okazje')
}

export default Page