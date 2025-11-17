'use client'

import { useApp } from '@/app/context/AppContext'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'

export default function Clients() {
  const { t } = useApp()
  const { ref, isVisible } = useScrollReveal()

  const clients = [
    { id: 1, key: 'client1' },
    { id: 2, key: 'client2' },
    { id: 3, key: 'client3' },
  ]

  return (
    <section
      id="clientes"
      ref={ref}
      className={`py-20 bg-white px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-dark">
          {t.clients.title}
        </h2>
        <p className="text-center text-gray-600 mb-16 max-w-2xl mx-auto">
          {t.clients.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {clients.map((client) => {
            const clientData = t.clients[client.key as keyof typeof t.clients]
            return (
              <div
                key={client.id}
                className="bg-gray-light rounded-2xl p-8 shadow-md hover:shadow-xl transition group cursor-pointer"
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-suum-blue to-suum-mint flex items-center justify-center text-white text-2xl font-bold">
                      {clientData.initials}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-dark">{clientData.name}</h3>
                      <p className="text-sm text-gray-600">{clientData.company}</p>
                    </div>
                  </div>
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-suum-yellow text-xl">★</span>
                    ))}
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed italic">
                  &quot;{clientData.testimonial}&quot;
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
