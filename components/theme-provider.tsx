'use client'

import * as React from 'react'
import { useEffect } from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

function ScrollGradient() {
  useEffect(() => {
    const root = document.documentElement
    const updateGradient = () => {
      const scroll = Math.min(
        1,
        window.scrollY / Math.max(1, document.body.scrollHeight - window.innerHeight),
      )
      root.style.setProperty('--bg-spot-x', `${50 + scroll * 14}%`)
      root.style.setProperty('--bg-spot-y', `${18 + scroll * 20}%`)
      root.style.setProperty('--bg-spot2-x', `${18 + scroll * 10}%`)
      root.style.setProperty('--bg-spot2-y', `${84 - scroll * 12}%`)
    }

    updateGradient()
    window.addEventListener('scroll', updateGradient, { passive: true })
    return () => window.removeEventListener('scroll', updateGradient)
  }, [])

  return null
}

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <ScrollGradient />
      {children}
    </NextThemesProvider>
  )
}
