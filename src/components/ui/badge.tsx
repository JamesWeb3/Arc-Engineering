import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { IconBadge } from '@/components/icons'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md h-8 bg-custom-gradient border w-max px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
  {
    variants: {
      variant: {
        default:
          'border-transparent text-primary-foreground hover:bg-primary/80',
        secondary:
          'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {
  text: string
  icon?: React.ReactNode
}

function Badge({ className, variant, text, icon, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <div className="absolute items-center">
        <IconBadge />
      </div>

      {icon && (
        <span className="items-center ml-1 justify-center mx-auto relative">
          {icon}
        </span>
      )}
      <span className="ml-2">{text}</span>
    </div>
  )
}

export { Badge, badgeVariants }
