'use client'

import { useApp } from '@/app/context/AppContext'

export default function Hero() {
  const { t, openContactModal } = useApp()

  return (
    <section className="min-h-screen bg-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="w-full flex flex-col items-center">
        <div className="flex flex-col items-center text-center max-w-3xl mb-12">
          <h1 className="text-6xl md:text-7xl font-bold text-black mb-4 leading-tight mt-8">
            {t.hero.title}
          </h1>
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            {t.hero.subtitle}
          </p>

          {/* Contact Button */}
          <button
            onClick={openContactModal}
            className="px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition font-medium whitespace-nowrap"
          >
            {t.hero.signUp}
          </button>
        </div>

        {/* Línea divisora */}
        <div className="border-b border-black w-[60vw]"></div>
      </div>
    </section>
  )
}
