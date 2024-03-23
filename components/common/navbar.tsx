import React from 'react'
import Link from 'next/link'
import { ThemeToggle } from '@/components/common/theme-toggle'
import { IconMicrophone } from '@/components/icons'
import Notes from '@/components/common/notes'

interface NavbarProps {
  setActivePage: (page: string) => void
}

const Navbar: React.FC<NavbarProps> = ({ setActivePage }) => {
  return (
    <nav className="flex items-center justify-between space-x-8">
      <ThemeToggle />

      <div className="flex space-x-4">
        <div className="border p-2 rounded-md text-">
          <Link
            className="px-14 p-2 rounded-md hover:bg-muted"
            onClick={() => setActivePage('home')}
            href={''}
          >
            Home
          </Link>
          <Link
            className="px-14 p-2 rounded-md hover:bg-muted"
            onClick={() => setActivePage('trading')}
            href={''}
          >
            Trading
          </Link>
          <Link
            className="px-14 p-2 rounded-md hover:bg-muted"
            onClick={() => setActivePage('bank')}
            href={''}
          >
            Bank
          </Link>
          <Link
            className="px-14 p-2 rounded-md hover:bg-muted"
            onClick={() => setActivePage('nutrition')}
            href={''}
          >
            Nutrition
          </Link>
        </div>

        <Notes />

        <div className="bg-muted rounded-full flex items-center p-2 cursor-pointer">
          <IconMicrophone />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
