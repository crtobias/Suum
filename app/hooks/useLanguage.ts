import { useState, useEffect } from 'react'
import i18nData from '@/app/i18n.json'

type Language = 'es' | 'en'

export function useLanguage() {
  const [language, setLanguage] = useState<Language>('es')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Detectar idioma del navegador
    const browserLang = typeof navigator !== 'undefined' ? navigator.language : 'es'
    const lang = browserLang.split('-')[0] as Language

    // Verificar si el idioma es soportado
    const supportedLang = ['es', 'en'].includes(lang) ? (lang as Language) : 'es'

    // Verificar localStorage
    const savedLang = typeof window !== 'undefined' ? localStorage.getItem('suum-language') : null
    const finalLang = (savedLang as Language) || supportedLang

    setLanguage(finalLang)
    setMounted(true)
  }, [])

  const changeLanguage = (newLang: Language) => {
    setLanguage(newLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('suum-language', newLang)
    }
  }

  const t = i18nData[language]

  return { language, changeLanguage, t, mounted }
}
