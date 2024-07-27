import NumberTicker from '@/components/magicui/number-ticker'
import { SectionLayout } from '@/layouts/SectionLayout'

const NumberTickerComponent = () => {
  return (
    <SectionLayout className="flex flex-row gap-16 items-center">
      <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap text-5xl font-medium">
          <NumberTicker value={100} />+
        </p>
        <p className="gradient-text">Users active</p>
      </div>
      <div className="w-0.5 h-12 bg-white" />
      <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={45} />
          K+
        </p>
        <p className="gradient-text">Trusted by Company</p>
      </div>
      <div className="w-0.5 h-12 bg-white" />
      <div className="flex flex-col items-center">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={230} />
          M+
        </p>
        <p className="gradient-text">Transactions</p>
      </div>
    </SectionLayout>
  )
}

export default NumberTickerComponent
