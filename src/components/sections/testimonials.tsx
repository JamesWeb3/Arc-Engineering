import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { IconSmallTestimonials } from '@/components/icons'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { SectionLayout } from '@/layouts/SectionLayout'
import { type CarouselApi } from '@/components/ui/carousel'
import Grant from '../../../public/grant.jpeg'
import Alexander from '../../../public/alexander.jpeg'
import Jayce from '../../../public/jayce.jpeg'
import Josh from '../../../public/josh.jpeg'
import Image from 'next/image'

const testimonialData = [
  {
    review:
      '"For anyone to start building their real estate portfolio, no matter the size of your wallet."',
    image: Grant,
    role: 'ReadyRNS founder & Specialiaed Nurse',
    name: 'Grant Ely',
  },
  {
    review:
      '"A very skilled frontend developer, and operations manager. He is a great asset to my team."',
    image: Josh,
    role: 'COO, Morningside AI',
    name: 'Josh Brown',
  },
  {
    review:
      'Utilize advanced analytics to make data-driven decisions and improve your business operations.',
    image: Alexander,
    role: 'Alexander Spoore',
    name: 'CEO Stories',
  },
  {
    review:
      'Utilize advanced analytics to make data-driven decisions and improve your business operations.',
    image: Jayce,
    role: 'Chief Business Woman, CreativesAtWork',
    name: 'Jayce Tham',
  },
  {
    review:
      'Our tools seamlessly integrate with your existing workflows and enhance productivity.',
    image: Jayce,
    role: 'COO at Amazon',
    name: 'Jeff Bezos',
  },
  {
    review:
      'Our solutions grow with your business, ensuring long-term success and sustainability.',
    image: Jayce,
    role: 'Founder at Facebook',
    name: 'Mark Zuckerberg',
  },
]

const Testimonials = () => {
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <SectionLayout id="testimonials">
      <div className="flex flex-col w-full pl-3 mb-4">
        
          <Badge text="TESTIMONIALS" icon={<IconSmallTestimonials />}></Badge>
          <h2 className="sub-heading mt-2">Discover Our Client Testimonials</h2>
          <p className="sub-text max-w-2xl mt-2">
          Explore the testimonials and feedback from our valued customers to
          gain insights into their experiences and satisfaction with our SaaS
          solution.
        </p>
       
       
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent className="ml-1">
          {testimonialData.map((card, index) => (
            <CarouselItem key={index} className="p-2 basis-1/3 ">
              <Card>
                <CardContent className="flex flex-col p-0 gap-2 h-36">
                  <p className="sub-text text-justify">{card.review}</p>
                  <div className="flex items-center gap-3 mt-2">
                    <Image
                      src={card.image}
                      alt={card.name}
                      className="flex rounded-full w-12 h-12"
                    />
                    <div className="mt-2">
                      <p className="text-xs text-gray-500">{card.role}</p>
                      <p>{card.name}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </SectionLayout>
  )
}

export default Testimonials
