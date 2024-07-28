import { BorderBeam } from '@/components/ui/magicui/border-beam'
import { IconLogo } from '@/components/icons'
import { Button } from '../ui/button'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-7xl items-center mx-auto w-full">
      <Link href="/" className="flex gap-2 items-center">
        <div className="hover:animate-rotate text-white cursor-pointer">
          <IconLogo className="text-white" />
        </div>
        <p className="hover:text-muted-foreground transition ease-in-out duration-200">Arc Engineering</p>
       
      </Link>
      <ul className="flex gap-4 sub-text">
        <Link href="#services" className="sub-text clickable-text">Services</Link>
        <Link href="#testimonials" className="sub-text clickable-text">Testimonials</Link>
        <Link href="#contact"className="sub-text clickable-text">Contact</Link>
      </ul>
      <div className="relative flex items-center p-1 overflow-hidden cursor-pointer">
        <Button>
          Book a Call
        </Button>
        <BorderBeam size={100} duration={12} delay={9} className="rounded-lg" />
      </div>
    </nav>
  )
}

export default Navbar
