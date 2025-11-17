'use client'

import { useApp } from '@/app/context/AppContext'

export default function Hero() {
  const { t, openContactModal } = useApp()

  return (
    <section className="min-h-screen bg-white pt-20 pb-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center relative overflow-hidden">
      {/* Floating colored blobs */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Verde Menta */}
        <div className="absolute top-[20%] left-[15%] w-40 h-40 bg-[#6CC9A8]/60 rounded-full blur-xl animate-blob" />
        <div className="absolute top-[60%] left-[10%] w-32 h-32 bg-[#6CC9A8]/55 rounded-full blur-lg animate-blob animation-delay-3000" />

        {/* Morado */}
        <div className="absolute top-[30%] right-[20%] w-36 h-36 bg-[#B89FD9]/60 rounded-full blur-xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-[40%] right-[10%] w-28 h-28 bg-[#B89FD9]/55 rounded-full blur-lg animate-blob animation-delay-4000" />

        {/* Amarillo */}
        <div className="absolute bottom-[30%] left-[25%] w-32 h-32 bg-[#F5D547]/55 rounded-full blur-lg animate-blob animation-delay-4000" />
        <div className="absolute top-[50%] right-[30%] w-28 h-28 bg-[#F5D547]/50 rounded-full blur-md animate-blob animation-delay-3000" />

        {/* Azul */}
        <div className="absolute bottom-[20%] right-[25%] w-32 h-32 bg-[#5B9BD5]/55 rounded-full blur-lg animate-blob animation-delay-3000" />
        <div className="absolute top-[40%] left-[20%] w-28 h-28 bg-[#5B9BD5]/50 rounded-full blur-md animate-blob animation-delay-2000" />
      </div>

      <div className="w-full flex flex-col items-center relative z-10">
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
