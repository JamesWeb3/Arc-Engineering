import { BorderBeam } from '@/components/ui/magicui/border-beam'
import { IconLogo } from '@/components/icons'

const Navbar = () => {
  return (
    <nav className="flex justify-between max-w-6xl items-center mx-auto w-full">
      <div className="flex gap-2 items-center">
        <div className="hover:animate-rotate text-white">
          <IconLogo className="text-white" />
        </div>
        Arc Engineering
      </div>
      <ul className="flex gap-4 sub-text">
        <li className="sub-text clickable-text">Services</li>
        <li className="sub-text clickable-text">Testimonials</li>
        <li className="sub-text clickable-text">Contact</li>
      </ul>
      <div className="relative flex items-center p-2 overflow-hidden rounded-lg">
        <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300/80 bg-clip-text text-center font-semibold leading-none">
          Book a Call
        </span>
        <BorderBeam size={100} duration={12} delay={9} />
      </div>
    </nav>
  )
}

export default Navbar
