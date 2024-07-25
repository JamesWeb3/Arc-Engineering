import { Button } from '@/components/ui/button'
import AvatarCircles from './magicui/avatar-circles'
import Image from 'next/image'
import HeroImage from '../../public/hero_image.png'

const avatarUrls = [
  'https://avatars.githubusercontent.com/u/16860528',
  'https://avatars.githubusercontent.com/u/20110627',
  'https://avatars.githubusercontent.com/u/106103625',
  'https://avatars.githubusercontent.com/u/59228569',
]

const HeroComponent = () => {
  return (
    <div className="grid grid-cols-2 bg-red-100 w-full items-center">
      <div className="flex flex-col gap-4">
        <h1 className="text-5xl text-white">
          Front-end & Automation Development Studio
        </h1>
        <p className="text-md text-muted-foreground">
          “Innovate. Automate. Thrive.” Our AI-driven solutions empower modern
          businesses to streamline processes, personalize experiences, and stay
          ahead in the digital age.
        </p>
        <div className="flex items-center gap-2">
          <Button>Get Started</Button>
          <AvatarCircles numPeople={99} avatarUrls={avatarUrls} />;
          <p>70 + Clients</p>
        </div>
      </div>

      <div className="relative">
        <Image src={HeroImage} alt="Hero Image" />
      </div>
    </div>
  )
}

export default HeroComponent
