import { OrbitingCirclesDemo } from './orbiting-circles-component'
import { Badge } from '@/components/ui/badge'
import { IconSmallIntegration } from '@/components/icons'

const IntegrationComponent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-4 max-w-xl">
      <Badge text="INTEGRATION" icon={<IconSmallIntegration />}></Badge>
        <h2 className="sub-heading">
          Seamless Integration <br />
          for Enhanced Efficiency
        </h2>
        <p className="sub-text max-w-2xl">
          Explore our expansive range of integrations designed to synchronize
          perfectly with our CRM, enhancing your workflow and driving
          efficiency.
        </p>
      </div>
      <OrbitingCirclesDemo />
    </div>
  )
}

export default IntegrationComponent
