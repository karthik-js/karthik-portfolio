import { cn } from '@/lib/utils'

interface BadgeProps {
  children: React.ReactNode
  className?: string
  variant?: 'default' | 'accent' | 'outline'
}

export function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium transition-colors',
        {
          'bg-[var(--color-card)] border border-[var(--color-border)] text-[var(--color-muted)] hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]':
            variant === 'default',
          'bg-[var(--color-accent)]/10 border border-[var(--color-accent)]/30 text-[var(--color-accent)]':
            variant === 'accent',
          'border border-[var(--color-border)] text-[var(--color-foreground)]':
            variant === 'outline',
        },
        className
      )}
    >
      {children}
    </span>
  )
}
