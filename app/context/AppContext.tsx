'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import i18nData from '@/app/i18n.json'

type Language = 'es' | 'en'
type Theme = 'light' | 'dark'

interface AppContextType {
  language: Language
  theme: Theme
  changeLanguage: (lang: Language) => void
  changeTheme: (theme: Theme) => void
  t: typeof i18nData['es']
  mounted: boolean
  isContactModalOpen: boolean
  openContactModal: () => void
  closeContactModal: () => void
}

const AppContext = createContext<AppContextType | undefined>(undefined)

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('es')
  const [theme, setTheme] = useState<Theme>('light')
  const [mounted, setMounted] = useState(false)
  const [isContactModalOpen, setIsContactModalOpen] = useState(false)

  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = typeof navigator !== 'undefined' ? navigator.language : 'es'
    const lang = browserLang.split('-')[0] as Language
    const supportedLang = ['es', 'en'].includes(lang) ? (lang as Language) : 'es'

    // Detectar tema del navegador
    const prefersDark =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-color-scheme: dark)').matches

    // Verificar localStorage
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('suum-language') : null
    const savedTheme = typeof window !== 'undefined' ? localStorage.getItem('suum-theme') : null

    const finalLang = (savedLang as Language) || supportedLang
    const finalTheme = (savedTheme as Theme) || (prefersDark ? 'dark' : 'light')

    setLanguage(finalLang)
    setTheme(finalTheme)
    setMounted(true)

    // Aplicar tema al documento
    if (finalTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('suum-language', newLang)
    }
  }

  const changeTheme = (newTheme: Theme) => {
    setTheme(newTheme)
    if (typeof window !== 'undefined') {
      localStorage.setItem('suum-theme', newTheme)
    }
    // Aplicar tema al documento
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  const openContactModal = () => setIsContactModalOpen(true)
  const closeContactModal = () => setIsContactModalOpen(false)

  const t = i18nData[language]

  return (
    <AppContext.Provider value={{ language, theme, changeLanguage, changeTheme, t, mounted, isContactModalOpen, openContactModal, closeContactModal }}>
      {children}
    </AppContext.Provider>
  )
}

export function useApp() {
  const context = useContext(AppContext)
  if (context === undefined) {
    throw new Error('useApp must be used within AppProvider')
  }
  return context
}
