import { OrbitingCirclesDemo } from './orbiting-circles-component'
import { Badge } from '@/components/ui/badge'

const IntegrationComponent = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-4 max-w-lg">
        <Badge text="INTEGRATION" />
        <h2 className="sub-heading">
          Seamless integration <br />
          for enhanced efficiency
        </h2>
        <p className="sub-text">
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
