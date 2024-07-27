import { Button } from '@/components/ui/button'
import AvatarCircles from '../ui/magicui/avatar-circles'
import Image from 'next/image'
import HeroImage from '../../public/hero_image.png'
import { SectionLayout } from '@/layouts/SectionLayout'

const avatarUrls = [
  'https://avatars.githubusercontent.com/u/16860528',
  'https://avatars.githubusercontent.com/u/20110627',
  'https://avatars.githubusercontent.com/u/106103625',
  'https://avatars.githubusercontent.com/u/59228569',
]

const HeroComponent = () => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-2 bg-red-100 w-full items-center">
        <div className="flex flex-col gap-10">
          <h1 className="text-6xl font-medium gradient-text">
            Frontend & Automation
            <br />
            Development Studio
          </h1>
          <p className="sub-text">
            “Innovate. Automate. Thrive.” Our AI-driven solutions empower modern
            businesses to streamline processes, personalize experiences, and
            stay ahead in the digital age.
          </p>
          <div className="flex items-center gap-6">
            <Button>Get Started</Button>
            <AvatarCircles
              className="cursor-pointer"
              numPeople={15}
              avatarUrls={avatarUrls}
            />
            <p>15 + Clients</p>
          </div>
        </div>

        <div className="relative">
          <Image src={HeroImage} alt="Hero Image" />
        </div>
      </div>
    </SectionLayout>
  )
}

export default HeroComponent
