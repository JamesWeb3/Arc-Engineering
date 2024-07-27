import NumberTicker from '@/components/magicui/number-ticker'
import { SectionLayout } from '@/layouts/SectionLayout'

const NumberTickerComponent = () => {
  return (
    <SectionLayout className="flex flex-row gap-16 items-center justify-center">
      <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap text-5xl font-medium">
          <NumberTicker value={37} />
        </p>
        <p className="gradient-text">Completed Builds</p>
      </div>
      <div className="w-0.5 h-12 bg-white" />
      <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={17} />
          
        </p>
        <p className="gradient-text">Clients </p>
      </div>
      <div className="w-0.5 h-12 bg-white" />
      <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          $
          <NumberTicker value={500} />
          + 
        </p>
        <p className="gradient-text">Saved through Autonomy</p>
      </div>
    </SectionLayout>
  )
}

export default NumberTickerComponent
