import { Button } from '@/components/ui/button'

const GetStartedComponent = () => {
  return (
    <div className="flex justify-between items-center bg-custom-gradient p-12 rounded-3xl">
      <div className="flex flex-col gap-2 w-2/3">
        <h2 className="text-3xl">Lets try our service now</h2>
        <p className="sub-text">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money.
        </p>
      </div>
      <Button>Get Started</Button>
    </div>
  )
}

export default GetStartedComponent
