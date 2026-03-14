'use client'

import { useEffect, useState } from 'react'

export type Theme = 'gold' | 'blue' | 'light'

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>('gold')

  useEffect(() => {
    const saved = localStorage.getItem('theme') as Theme
    if (saved) {
      setTheme(saved)
      document.documentElement.setAttribute('data-theme', saved)
    }
  }, [])

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    document.documentElement.setAttribute('data-theme', newTheme)
    localStorage.setItem('theme', newTheme)
  }

  return { theme, changeTheme }
}
