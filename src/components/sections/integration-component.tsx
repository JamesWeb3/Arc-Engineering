import { OrbitingCirclesDemo } from '../orbiting-circles-component'
import { Badge } from '@/components/ui/badge'
import { IconSmallIntegration } from '@/components/icons'

const IntegrationComponent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-4 max-w-xl mb-[-50px]">
      <Badge text="INTEGRATION" icon={<IconSmallIntegration />}></Badge>
        <h2 className="sub-heading">
          Seamless Integration <br />
          with Your Favourite Tools
        </h2>
        <p className="sub-text max-w-2xl">
          We work with absolutley everything
        </p>
      </div>
      <OrbitingCirclesDemo />
    </div>
  )
}

export default IntegrationComponent
