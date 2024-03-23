import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { IconNotes, IconMicrophone } from '@/components/icons'

const Navbar: React.FC = ({}) => {
  return (
    <nav className="flex items-center justify-between space-x-8">
      <ThemeToggle />

      <div className="flex gap-6">
        <div className="space-x-12 border p-2 rounded-md">
          <Link href={''}>Home</Link>
          <Link href={''}>Trading</Link>
          <Link href={''}>Bank</Link>
          <Link href={''}>Nutrition</Link>
        </div>

        <div className="rounded-full flex border p-2 cursor-pointer">
          <IconNotes />
        </div>

        <div className="bg-muted rounded-full flex items-center p-2 cursor-pointer">
          <IconMicrophone />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
