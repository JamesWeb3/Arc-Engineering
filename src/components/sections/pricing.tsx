import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { IconSmallDiamond } from '@/components/icons'
import Link from 'next/link'

const Pricing = () => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex flex-col items-center gap-4 max-w-xl mt-12">
        <Badge text="PRICING" icon={<IconSmallDiamond />}></Badge>
        <h2 className="sub-heading">
          Choose the perfect Plan
          <br />
          for Your Business
        </h2>
        <p className="sub-text max-w-2xl">
          Unlock Your Full Potential with Flexible Pricing
        </p>
        <Button>
          <Link href="/pricing">See Pricing</Link>
        </Button>
      </div>
    </div>
  )
}

export default Pricing
