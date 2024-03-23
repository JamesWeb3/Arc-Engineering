import React from 'react'

const HomePage: React.FC = ({}) => {
  return (
    <div className="flex flex-col h-full justify-center gap-12">
      <h1 className="text-7xl">Good Morning</h1>
      <p>Google Calendar Goes here</p>
      <div className="flex justify-between w-full">
        <div>
          <p>Sleep Performance</p>
          <p className="text-xl text-[#21BD01]">Poor</p>
        </div>
        <div>
          <p>Money made Today</p>
          <p className="text-xl text-[#21BD01]">+ 1475 €</p>
        </div>
      </div>
    </div>
  )
}

export default HomePage
