import React from 'react'
import { BarChartHero } from '@/components/visual/money-in-out'
import { DonutChartUsageExample } from '@/components/visual/sectors-donuts'

export default function Bank(): JSX.Element {
  return (
    <div>
      <h3>Monthly Income vs Expense</h3>
      <BarChartHero />
      <DonutChartUsageExample />
    </div>
  )
}
