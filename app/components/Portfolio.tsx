'use client'

import { useApp } from '@/app/context/AppContext'
import { useScrollReveal } from '@/app/hooks/useScrollReveal'

export default function Portfolio() {
  const { t } = useApp()
  const { ref, isVisible } = useScrollReveal()

  const projects = [
    {
      key: 'project1',
      color: 'bg-suum-mint',
      label: 'PROYECTO',
      textDark: true,
      percentage: '7.20%'
    },
    {
      key: 'project2',
      color: 'bg-black text-white',
      label: 'PROYECTO',
      textDark: false,
      percentage: '14.20%'
    },
    {
      key: 'project3',
      color: 'bg-suum-purple text-white',
      label: 'PROYECTO',
      textDark: false,
      percentage: '11.20%'
    },
    {
      key: 'project4',
      color: 'bg-suum-yellow',
      label: 'PROYECTO',
      textDark: true,
      percentage: '8.20%'
    },
  ]

  return (
    <section
      id="portfolio"
      ref={ref}
      className={`py-20 bg-gray-light px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-gray-dark mb-2">
              {t.portfolio.title}
            </h2>
            <p className="text-gray-600">
              {t.portfolio.subtitle}
            </p>
          </div>
          <a
            href="#"
            className="flex items-center gap-2 text-gray-600 hover:text-suum-blue transition font-medium"
          >
            Explorar todos
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {projects.map((project, idx) => {
            const projectData = t.portfolio.projects[project.key as keyof typeof t.portfolio.projects]
            const textColor = project.textDark ? 'text-gray-dark' : 'text-white'
            const labelColor = project.textDark ? 'text-gray-600' : 'text-white/70'

            return (
              <div
                key={project.key}
                className={`${project.color} rounded-2xl p-8 shadow-md hover:shadow-xl transition cursor-pointer group min-h-72 flex flex-col justify-between`}
              >
                <div>
                  <p className={`text-xs font-bold tracking-wider mb-6 ${labelColor}`}>
                    {project.label}
                  </p>
                  <h3 className={`text-2xl font-bold mb-3 ${textColor}`}>
                    {projectData.title}
                  </h3>
                  <p className={`text-sm leading-relaxed ${project.textDark ? 'text-gray-700' : 'text-white/90'}`}>
                    {projectData.category}
                  </p>
                </div>
                <div className="flex items-center justify-between pt-6 border-t border-current border-opacity-20">
                  <span className={`text-3xl font-bold ${textColor}`}>
                    {project.percentage}
                  </span>
                  <button className={`${project.textDark ? 'bg-gray-dark/20 hover:bg-gray-dark/30' : 'bg-white/20 hover:bg-white/30'} rounded-full p-3 transition`}>
                    <svg className={`w-5 h-5 ${textColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
