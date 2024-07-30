import { BorderBeam } from '@/components/ui/magicui/border-beam'
import { IconLogo } from '@/components/icons'
import { Button } from '../ui/button'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  const handleClick = () => {
    window.open('https://calendly.com/james-at-arc', '_blank')
  }

  return (
    <nav className="flex justify-between max-w-7xl items-center mx-auto w-full">
      <Link
        href="/"
        className="flex gap-2 items-center hover:text-muted-foreground transition ease-in-out duration-200 group"
      >
        <div className="hover:text-muted-foreground">
          <IconLogo />
        </div>
        Arc Engineering
      </Link>
      {router.pathname === '/' && (
        <ul className="flex gap-4 sub-text">
          <Link href="#services" className="sub-text clickable-text">
            Services
          </Link>
          <Link href="#testimonials" className="sub-text clickable-text">
            Testimonials
          </Link>
          <Link href="#contact" className="sub-text clickable-text">
            Contact
          </Link>
          <Link href="/pricing" className="sub-text clickable-text">
            Pricing
          </Link>
        </ul>
      )}
      <div className="relative flex items-center p-1 overflow-hidden cursor-pointer">
        <Button onClick={handleClick}>Book a Call</Button>
        <BorderBeam size={100} duration={12} delay={9} className="rounded-lg" />
      </div>
    </nav>
  )
}

export default Navbar
