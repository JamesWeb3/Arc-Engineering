import * as React from 'react'
import { cva, type VariantProps } from 'class-variance-authority'
import { IconBadge } from '@/components/icons'
import { cn } from '@/lib/utils'

const badgeVariants = cva(
  'inline-flex items-center rounded-md bg-custom-gradient border w-max px-2.5 py-0.5 text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
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
}

function Badge({ className, variant, text, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <IconBadge />
      <span className="ml-2">{text}</span> {/* Render the text prop */}
    </div>
  )
}

export { Badge, badgeVariants }
