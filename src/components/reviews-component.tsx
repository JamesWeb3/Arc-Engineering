import React from 'react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent } from '@/components/ui/card'
import { IconChart } from '@/components/icons'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { SectionLayout } from '@/layouts/SectionLayout'
import { type CarouselApi } from '@/components/ui/carousel'
import GeorgeImage from '../../public/george.png'
import Image from 'next/image'

const reviewData = [
  {
    title: 'Scale your business and sales model.',
    description:
      'For anyone to start building their real estate portfolio, no matter the size of your wallet.',
    image: GeorgeImage,
    role: 'Director at Apple',
    name: 'Chris Johnson',
  },
  {
    title: 'Customize assets and components',
    description:
      'Software as a Service integrations allow both clients and creators to extract maximum value from a tool',
    image: GeorgeImage,
    role: 'Director at Microsoft',
    name: 'Sarah Lee',
  },
  {
    title: 'Real-Time Data Processing',
    description:
      'Grasping the cost of acquiring customers and the price of rendering the service.',
    image: GeorgeImage,
    role: 'CEO at Tesla',
    name: 'Elon Musk',
  },
  {
    title: 'Advanced Analytics',
    description:
      'Utilize advanced analytics to make data-driven decisions and improve your business operations.',
    image: GeorgeImage,
    role: 'CTO at Google',
    name: 'Sundar Pichai',
  },
  {
    title: 'Seamless Integration',
    description:
      'Our tools seamlessly integrate with your existing workflows and enhance productivity.',
    icon: <IconChart />,
    image: GeorgeImage,
    role: 'COO at Amazon',
    name: 'Jeff Bezos',
  },
  {
    title: 'Scalable Solutions',
    description:
      'Our solutions grow with your business, ensuring long-term success and sustainability.',
    icon: <IconChart />,
    image: GeorgeImage,
    role: 'Founder at Facebook',
    name: 'Mark Zuckerberg',
  },
]

const ReviewsComponent = () => {
  const [api, setApi] = React.useState<CarouselApi>()

  return (
    <SectionLayout>
      <div className="flex gap-6 items-center mb-4">
        <div>
          <Badge text="TESTIMONIALS"></Badge>
          <h2 className="sub-heading">
            Discover what our customers say about us
          </h2>
        </div>
        <p className="sub-text max-w-sm">
          Explore the testimonials and feedback from our valued customers to
          gain insights into their experiences and satisfaction with our SaaS
          solution.
        </p>
      </div>
      <Carousel setApi={setApi}>
        <CarouselContent>
          {reviewData.map((card, index) => (
            <CarouselItem key={index} className="p-2 basis-1/3">
              <Card>
                <CardContent className="flex flex-col p-0 gap-2">
                  <h3 className="text-xl font-semibold">{card.title}</h3>
                  <p className="sub-text">{card.description}</p>
                  <div className="flex items-center gap-3">
                    <Image
                      src={card.image}
                      alt={card.name}
                      className="flex rounded-full w-12 h-12"
                    />
                    <div className="mt-2">
                      <p className="text-xs mb-[-5px] text-gray-500">
                        {card.role}
                      </p>
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

export default ReviewsComponent
