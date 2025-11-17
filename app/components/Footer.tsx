'use client'

import { useApp } from '@/app/context/AppContext'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'

export default function Footer() {
  const { t } = useApp()
  const currentYear = new Date().getFullYear()
  const { ref, isVisible } = useScrollReveal()

  return (
    <footer
      ref={ref}
      className={`bg-gray-dark text-white py-12 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Suum</h3>
            <p className="text-gray-400">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.company}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.footer.about}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.footer.services}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.footer.portfolio}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.footer.privacy}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  {t.footer.terms}
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">{t.footer.social}</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-suum-blue hover:bg-suum-coral transition flex items-center justify-center text-sm">
                𝕏
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-suum-mint hover:bg-suum-coral transition flex items-center justify-center text-sm">
                in
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-suum-purple hover:bg-suum-coral transition flex items-center justify-center text-sm">
                ⚙
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
          <p>&copy; {currentYear} Suum. {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
