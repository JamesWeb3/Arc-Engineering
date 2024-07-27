import React from 'react'
import clsx from 'clsx'
interface MainLayoutV2Props {
  children: React.ReactNode
  className?: string
}

export function SectionLayout({ children, className }: MainLayoutV2Props) {
  return <div className={clsx("max-w-6xl mx-auto w-full", className)}>{children}</div>
}
