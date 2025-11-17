'use client'

import { useApp } from '@/app/context/AppContext'

export default function Navbar() {
  const { language, changeLanguage, t, mounted, theme, changeTheme } = useApp()

  if (!mounted) return null

  return (
    <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 ">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-2xl font-bold bg-gradient-to-r from-suum-blue to-suum-mint bg-clip-text text-black">
          Suum
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#servicios" className="text-gray-600 hover:text-suum-blue transition">
            {t.nav.services}
          </a>
          <a href="#portfolio" className="text-gray-600 hover:text-suum-blue transition">
            {t.nav.portfolio}
          </a>
          <a href="#contacto" className="text-gray-600 hover:text-suum-blue transition">
            {t.nav.contact}
          </a>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          

          {/* Language Switch */}
          <button
            onClick={() => changeLanguage(language === 'es' ? 'en' : 'es')}
            className="relative bg-gray-200 rounded-lg p-1 flex items-center w-24 h-10 cursor-pointer hover:bg-gray-300 transition"
          >
            {/* Sliding background */}
            <div
              className={`absolute top-1 bottom-1 w-11 bg-black rounded-md transition-all duration-300 ease-in-out ${
                language === 'es' ? 'left-1' : 'left-12'
              }`}
            />

            {/* ES Label */}
            <span
              className={`relative z-10 flex-1 text-center font-medium text-sm transition-colors duration-300 ${
                language === 'es' ? 'text-white' : 'text-black'
              }`}
            >
              ES
            </span>

            {/* EN Label */}
            <span
              className={`relative z-10 flex-1 text-center font-medium text-sm transition-colors duration-300 ${
                language === 'en' ? 'text-white' : 'text-black'
              }`}
            >
              EN
            </span>
          </button>

          
        </div>
      </div>
    </nav>
  )
}
