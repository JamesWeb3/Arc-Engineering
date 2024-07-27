import React, { useEffect, useState, useRef } from 'react'
import clsx from 'clsx'
import { cn } from '@/lib/utils'

function useOnScreen(ref: React.RefObject<HTMLElement>) {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIntersecting(entry.isIntersecting)
      },
      {
        threshold: [0.1, 0.4],
      },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [ref])

  return isIntersecting
}

interface MainLayoutV2Props {
  children: React.ReactNode
  className?: string
  id?: string
}

export function SectionLayout({ children, className, id }: MainLayoutV2Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isVisible = useOnScreen(ref)

  return (
    <div
      ref={ref}
      id={id}
      className={cn(
        `flex flex-col items-center text-center max-w-6xl mx-auto w-full my-20 ${
          isVisible ? 'opacity-100 animate-fadeSlideIn' : 'opacity-0'
        }`,
      )}
    >
      {children}
    </div>
  )
}
