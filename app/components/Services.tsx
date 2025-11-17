'use client'

import { useApp } from '@/app/context/AppContext'
import Image from 'next/image'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'

export default function Services() {
  const { t } = useApp()
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id="servicios"
      ref={ref}
      className={`py-24 bg-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-black">
          {t.services.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Desarrollo Web - Verde Menta */}
          <div className="bg-[#6CC9A8] rounded-3xl p-5 shadow-md hover:shadow-xl transition group cursor-pointer relative overflow-hidden min-h-[160px]">
            <h3 className="text-xl font-bold mb-3 text-black">
              {t.services.web.title}
            </h3>
            <div className="text-sm leading-relaxed whitespace-pre-line text-black/80 pr-12">
              {t.services.web.desc}
            </div>
            <button className="absolute bottom-4 right-4 bg-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
              <Image
                src="/assets/Forward.png"
                alt="Forward"
                width={16}
                height={16}
                className="invert"
              />
            </button>
          </div>

          {/* Aplicaciones Mobiles - Negro */}
          <div className="bg-black rounded-3xl p-5 shadow-md hover:shadow-xl transition group cursor-pointer relative overflow-hidden min-h-[160px]">
            <h3 className="text-xl font-bold mb-3 text-white">
              {t.services.mobile.title}
            </h3>
            <div className="text-sm leading-relaxed whitespace-pre-line text-white/90 pr-12">
              {t.services.mobile.desc}
            </div>
            <button className="absolute bottom-4 right-4 bg-white w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
              <Image
                src="/assets/Forward.png"
                alt="Forward"
                width={16}
                height={16}
              />
            </button>
          </div>

          {/* Automatización con IA - Morado */}
          <div className="bg-[#B89FD9] rounded-3xl p-5 shadow-md hover:shadow-xl transition group cursor-pointer relative overflow-hidden min-h-[160px]">
            <h3 className="text-xl font-bold mb-3 text-white">
              {t.services.ai.title}
            </h3>
            <div className="text-sm leading-relaxed whitespace-pre-line text-white/90 pr-12">
              {t.services.ai.desc}
            </div>
            <button className="absolute bottom-4 right-4 bg-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
              <Image
                src="/assets/Forward.png"
                alt="Forward"
                width={16}
                height={16}
                className="invert"
              />
            </button>
          </div>

          {/* Sistemas Personalizados - Amarillo */}
          <div className="bg-[#F5D547] rounded-3xl p-5 shadow-md hover:shadow-xl transition group cursor-pointer relative overflow-hidden min-h-[160px]">
            <h3 className="text-xl font-bold mb-3 text-black">
              {t.services.custom.title}
            </h3>
            <div className="text-sm leading-relaxed whitespace-pre-line text-black/80 pr-12">
              {t.services.custom.desc}
            </div>
            <button className="absolute bottom-4 right-4 bg-black w-10 h-10 rounded-full flex items-center justify-center hover:scale-110 transition shadow-lg">
              <Image
                src="/assets/Forward.png"
                alt="Forward"
                width={16}
                height={16}
                className="invert"
              />
            </button>
          </div>
        </div>

        <p className="text-center text-gray-800 max-w-4xl mx-auto text-xl leading-relaxed mt-20">
          Ofrecemos un <span className="bg-[#B89FD9] text-black font-semibold px-2 py-1 rounded-md">servicio adaptado a tus necesidades,</span> problemas y recursos, creando soluciones hechas a medida para vos.
        </p>
      </div>
    </section>
  )
}
