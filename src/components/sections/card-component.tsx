import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { SectionLayout } from '@/layouts/SectionLayout'
import {
  IconSmallServices,
  IconLayers,
  IconFrontends,
  IconAutonomy,
} from '@/components/icons'
const cardsData = [
  {
    title: 'Robust & Scalable Tech Stack',
    description:
      'Our Tech Stack allows us to build quickly andf scalable. Leveraging an eco-system of the latest tools and technologies.',
    icon: <IconLayers />,
  },
  {
    title: 'Custom Frontends & UI/UX Solutions',
    description:
      'Software as a Service integrations allow both clients and creators to extract maximum value from a tool',
    icon: <IconFrontends />,
  },
  {
    title: 'AI & Autonomy',
    description:
      'Grasping the cost of acquiring customers and the price of rendering the service.',
    icon: <IconAutonomy />,
  },
]

const CardComponent = () => {
  return (
    <SectionLayout className="flex flex-col gap-4 items-center text-center">
      <Badge text="SERVICES" icon={<IconSmallServices />}></Badge>
      <h2 className="sub-heading">
        Design and Develop <br />
        Robust Technical Solutions
      </h2>
      <p className="sub-text max-w-2xl">
        Our advanced data analytics feature offers unparalleled real-time
        insights, allowing you to stay ahead of market trends and customer
        preferences.
      </p>

      <div className="grid grid-cols-3 gap-4 mt-4">
        {cardsData.map((card, index) => (
          <Card
            key={index}
            className="relative overflow-hidden hover:border-transparent items-center"
          >
            <div className="absolute inset-0 hover:bg-gradient-tl-br hover:animate-fadeIn"></div>
            <div className="relative p-5 bg-[#252428] border border-[#2E2F32] rounded-xl mb-4">
              {card.icon}
            </div>
            <h3 className="relative">{card.title}</h3>
            <p className="relative sub-text">{card.description}</p>
          </Card>
        ))}
      </div>
    </SectionLayout>
  )
}

export default CardComponent
