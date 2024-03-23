import React from 'react'

const Quote: React.FC = ({}) => {
  return (
    <div className="absolute bottom-8">
      <div className="flex">
        <p className="italic font-semibold">&quot;Train Hard, </p>
        <p className="text-[#F1C524] italic font-semibold">Fight Easy&quot;</p>
      </div>

      <p className="text-xs">- Abraham Lincoln</p>
    </div>
  )
}

export default Quote
