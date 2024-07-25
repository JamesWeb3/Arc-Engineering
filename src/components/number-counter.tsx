import NumberTicker from '@/components/magicui/number-ticker'

const NumberTickerComponent = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-2">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={100} />+
        </p>
        <p>Users active</p>
      </div>
      <div className="w-0.5 h-8 bg-white" />
      <div className="flex items-center gap-2">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={45} />K+
        </p>
        <p>Trusted by Company</p>
      </div>
      <div className="w-0.5 h-8 bg-white" />
      <div className="flex items-center gap-2">
        <p className="whitespace-pre-wrap text-5xl font-medium tracking-tighter text-black dark:text-white">
          <NumberTicker value={230} />M+
        </p>
        <p>Transactions</p>
      </div>
      <div className="w-0.5 h-8 bg-white" />
    </div>
  )
}

export default NumberTickerComponent
