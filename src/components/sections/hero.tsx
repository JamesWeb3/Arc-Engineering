import { Button } from '@/components/ui/button'
import AvatarCircles from '@/components/ui/magicui/avatar-circles'
import Image from 'next/image'
import HeroImage from '../../../public/hero_image.png'
import { SectionLayout } from '@/layouts/SectionLayout'
import { Badge } from '@/components/ui/badge'
import { IconSmallRocket } from '@/components/icons'
import Link from 'next/link'

const avatarUrls = [
  'https://avatars.githubusercontent.com/u/16860528',
  'https://avatars.githubusercontent.com/u/20110627',
  'https://avatars.githubusercontent.com/u/106103625',
  'https://avatars.githubusercontent.com/u/59228569',
]

const Hero = () => {
  return (
    <SectionLayout>
      <div className="grid grid-cols-[60%,40%] w-full items-center mt-8">
        <div className="flex flex-col text-left gap-10">
          <Badge text='NEXT.JS SASS KICKSTARTER'  icon={<IconSmallRocket />}></Badge>
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
            <Link href="#testimonials" className="sub-text clickable-text">
            <AvatarCircles
              className="cursor-pointer"
              numPeople={15}
              avatarUrls={avatarUrls}
            />
            </Link>
            <p>15 + Clients</p>
          </div>
        </div>
        <div className="relative cursor-pointer-none">
          <Image src={HeroImage} alt="Hero Image" className="absolute top-[-260px] right-[-50px]" />
          <div className="bg-radial-fade-hero z-[-1] absolute bottom-[-400px] w-[1200px] h-[1200px]"/>
        </div>
      </div>
    </SectionLayout>
  )
}

export default Hero
