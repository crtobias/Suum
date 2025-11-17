'use client'

import { useApp } from '@/app/context/AppContext'
import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Contact() {
  const { t, isContactModalOpen, closeContactModal } = useApp()
  const [formData, setFormData] = useState({
    email: '',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeContactModal()
    }
    if (isContactModalOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = 'unset'
    }
  }, [isContactModalOpen, closeContactModal])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
      setFormData({ email: '', message: '' })
      closeContactModal()
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  if (!isContactModalOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={closeContactModal}
      />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 p-6 animate-fadeIn">
        {/* Close Button */}
        <button
          onClick={closeContactModal}
          className="absolute top-4 right-4 hover:opacity-70 transition"
        >
          <Image src="/assets/Close.png" alt="Close" width={20} height={20} />
        </button>

        {/* Header */}
        <h2 className="text-2xl font-bold text-gray-dark mb-2">
          Contact email
        </h2>
        <p className="text-sm text-gray-600 mb-6">
          Tell us your idea or problem
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition text-sm"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-transparent outline-none transition resize-none text-sm"
              placeholder="Message..."
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white font-medium py-3 px-6 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2"
          >
            <span>Send</span>
            <Image src="/assets/Paper Plane.png" alt="Send" width={16} height={16} className="invert" />
          </button>
        </form>

        {/* Success Message */}
        {submitted && (
          <div className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <Image src="/assets/Sent.png" alt="Sent" width={60} height={60} className="mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-dark mb-2">
                {t.contact.successTitle}
              </h3>
              <p className="text-gray-600 text-sm">
                {t.contact.successMessage}
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
