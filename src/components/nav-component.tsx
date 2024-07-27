import { BorderBeam } from '@/components/magicui/border-beam'

const NavComponent = () => {
  return (
    <nav className="flex justify-between max-w-6xl items-center mx-auto w-full">
      Arc Engineering
      <ul className="flex gap-4 sub-text">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
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

export default NavComponent
