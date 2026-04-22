'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return (
      <div className={cn('w-9 h-9 rounded-lg', className)} aria-hidden />
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className={cn(
        'flex items-center justify-center w-9 h-9 rounded-lg',
        'border border-[var(--color-border)] bg-[var(--color-card)]',
        'text-[var(--color-muted)] hover:text-[var(--color-foreground)]',
        'hover:border-[var(--color-accent)] transition-all duration-200',
        className
      )}
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
    </button>
  )
}
