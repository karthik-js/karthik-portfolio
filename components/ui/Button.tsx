import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, forwardRef } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] disabled:opacity-50 disabled:pointer-events-none',
          {
            'bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-hover)] shadow-lg shadow-[var(--color-accent)]/20':
              variant === 'primary',
            'border border-[var(--color-border)] bg-[var(--color-card)] text-[var(--color-foreground)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]':
              variant === 'secondary',
            'text-[var(--color-muted)] hover:text-[var(--color-foreground)]':
              variant === 'ghost',
          },
          {
            'px-3 py-1.5 text-sm': size === 'sm',
            'px-5 py-2.5 text-sm': size === 'md',
            'px-7 py-3.5 text-base': size === 'lg',
          },
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
