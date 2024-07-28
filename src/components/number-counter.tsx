import NumberTicker from '@/components/ui/magicui/number-ticker'

const NumberTickerr = () => {
  return (
    <div className="flex !flex-row gap-16 my-24 items-center justify-center">
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
          <NumberTicker value={500} />+
        </p>
        <p className="gradient-text">Saved through Autonomy</p>
      </div>
    </div>
  )
}

export default NumberTickerr
