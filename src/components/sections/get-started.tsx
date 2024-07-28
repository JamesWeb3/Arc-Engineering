import { Button } from '@/components/ui/button'
import { SectionLayout } from '@/layouts/SectionLayout'

const GetStarted = () => {
  const handleClick = () => {
    window.open('https://calendly.com/james-at-arc', '_blank')
  }

  return (
    <SectionLayout className="flex justify-between items-center bg-custom-gradient py-16 px-28 rounded-3xl">
      <div className="flex flex-col gap-2 w-2/3">
        <h2 className="sub-heading">Lets try our service now</h2>
        <p className="sub-text">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money.
        </p>
      </div>
      <Button className="w-max" onClick={handleClick}>
        Get Started
      </Button>
    </SectionLayout>
  )
}

export default GetStarted
