import { Button } from '@/components/ui/button'
import AvatarCircles from '@/components/ui/magicui/avatar-circles'
import Image from 'next/image'
import HeroImage from '../../../public/hero_image.png'
import { SectionLayout } from '@/layouts/SectionLayout'
import { Badge } from '@/components/ui/badge'
import { IconSmallRocket } from '@/components/icons'
import { useRouter } from 'next/router'

const avatarUrls = [
  'https://avatars.githubusercontent.com/u/16860528',
  'https://avatars.githubusercontent.com/u/20110627',
  'https://avatars.githubusercontent.com/u/106103625',
  'https://avatars.githubusercontent.com/u/59228569',
]

const Hero = () => {
  const router = useRouter();

  const handleClick = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleTestimonialClick = () => {
    router.push('#testimonials');
  };

  return (
    <SectionLayout>
      <div className="grid grid-cols-[60%,40%] w-full items-center mt-8">
        <div className="flex flex-col text-left gap-10">
          <div className="flex flex-col gap-4">
            <Badge
              text="NEXT.JS SASS KICKSTARTER"
              icon={<IconSmallRocket />}
            ></Badge>
            <h1 className="text-6xl font-medium gradient-text">
              Frontend & Automation
              <br />
              Development Studio
            </h1>
          </div>
          <p className="sub-text">
            “Innovate. Automate. Thrive.” Our AI-driven solutions empower modern
            businesses to streamline processes, personalize experiences, and
            stay ahead in the digital age.
          </p>
          <div className="flex items-center gap-6">
            <Button onClick={handleClick}>Get Started</Button>
            <div  onClick={handleTestimonialClick} className="sub-text clickable-text">
              <AvatarCircles
                className="cursor-pointer"
                numPeople={17}
                avatarUrls={avatarUrls}
              />
            </div>
           
          </div>
        </div>
        <div className="relative cursor-pointer-none">
          <Image
            src={HeroImage}
            alt="Hero Image"
            className="absolute top-[-260px] right-[-50px]"
          />
          <div className="bg-radial-fade-hero z-[-1] absolute bottom-[-400px] w-[1200px] h-[1200px]" />
        </div>
      </div>
    </SectionLayout>
  )
}

export default Hero
