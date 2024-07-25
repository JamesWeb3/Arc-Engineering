import { Button } from '@/components/ui/button'
import { BorderBeam } from '@/components/magicui/border-beam'

const NavComponent = () => {
  return (
    <nav className="flex flex-row justify-between">
      logo
      <ul className="flex gap-4 sub-text">
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className="relative h-[50px] w-[200px] rounded-xl">
        <BorderBeam />
      </div>
    </nav>
  )
}

export default NavComponent
