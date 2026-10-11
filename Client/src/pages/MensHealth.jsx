import React, { useState } from 'react'
import { FaWhatsapp, FaCheckCircle, FaExclamationTriangle, FaLeaf, FaStar, FaMedkit } from 'react-icons/fa'
import { FiSend, FiPhone, FiUser, FiMessageSquare } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext'

const MensHealth = () => {
  const { t, tRaw, lang } = useLang()
  const [formData, setFormData] = useState({ name: '', phone: '', age: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const symptoms = tRaw('mensHealth.symptoms')
  const treatmentPoints = tRaw('mensHealth.treatmentPoints')

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const namePrefix = t('mensHealth.waPrefixName')
    const phonePrefix = t('mensHealth.waPrefixPhone')
    const agePrefix = t('mensHealth.waPrefixAge')
    const msgPrefix = t('mensHealth.waPrefixMsg')

    const text = `${namePrefix} ${formData.name}%0A${phonePrefix} ${formData.phone}%0A${agePrefix} ${formData.age}%0A${msgPrefix} ${formData.message}`
    window.open(`https://wa.me/919084921048?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 3000)
  }

  const specialCourseMsg = encodeURIComponent(t('mensHealth.courseWaMsg'))

  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 bg-gradient-to-b from-[#f4f9f6] to-white border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary border border-primary-200/60 px-3.5 py-1 rounded-full text-xs font-semibold mb-3">
            <FaMedkit className="text-xs text-gold" /> {t('mensHealth.badge')}
          </span>
          <h1 className="text-2xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            {t('mensHealth.title1')} <span className="text-primary">{t('mensHealth.title2')}</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            {t('mensHealth.subtitle')}
          </p>
        </div>
      </section>

      {/* Symptoms + Treatment */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">

            {/* Symptoms */}
            <div>
              <span className="inline-flex items-center gap-1.5 text-red-600 text-xs font-bold uppercase tracking-wider mb-2">
                <FaExclamationTriangle className="text-xs" /> {t('mensHealth.symptomsTag')}
              </span>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {t('mensHealth.symptomsTitle')}
              </h2>
              <div className="w-14 h-1 bg-gradient-to-r from-red-500 to-primary rounded-full mb-6" />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {Array.isArray(symptoms) && symptoms.map((s, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-red-50/60 border border-red-100/60">
                    <span className="w-5 h-5 rounded-full bg-red-100 text-red-600 flex items-center justify-center shrink-0 text-xs font-bold mt-0.5">
                      {i + 1}
                    </span>
                    <p className="text-gray-800 text-xs sm:text-sm leading-snug">{s}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Treatment cards */}
            <div className="space-y-6">
              <div className="bg-primary rounded-3xl p-6 sm:p-8 text-white shadow-lg">
                <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center mb-4">
                  <FaLeaf className="text-gold text-xl" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3">
                  {t('mensHealth.naturalTitle')}
                </h3>
                <p className="text-white/80 leading-relaxed text-sm mb-4">
                  {t('mensHealth.naturalDesc')}
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm">
                  {Array.isArray(treatmentPoints) && treatmentPoints.map((p, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <FaCheckCircle className="text-gold shrink-0 mt-0.5" />
                      <span className="text-white/90">{p}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#fdfaf2] rounded-3xl p-6 sm:p-8 border-2 border-gold/40 shadow-sm">
                <div className="flex items-center gap-1.5 mb-2">
                  <FaStar className="text-gold text-sm" />
                  <span className="text-gold-700 font-bold text-xs uppercase tracking-wider">
                    {t('mensHealth.courseTag')}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                  {t('mensHealth.courseTitle')}
                </h3>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-4">
                  {t('mensHealth.courseDesc')}
                </p>
                <a
                  href={`https://wa.me/919084921048?text=${specialCourseMsg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-semibold px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
                >
                  <FaWhatsapp className="text-base text-gold" /> {t('mensHealth.courseEnquire')}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Form */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="inline-block text-gold-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
              {t('mensHealth.formTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {t('mensHealth.formTitle')}
            </h2>
            <p className="text-gray-500 text-xs sm:text-sm">
              {t('mensHealth.formDesc')}
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-md border border-gray-100 p-5 sm:p-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <FaCheckCircle className="text-green-600 text-3xl" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{t('mensHealth.thankYou')}</h3>
                <p className="text-gray-500 text-sm">{t('mensHealth.thankYouDesc')}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('mensHealth.nameLabel')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiUser className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        id="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t('mensHealth.namePlaceholder')}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-xs font-semibold text-gray-700 mb-1">
                      {t('mensHealth.phoneLabel')} <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <FiPhone className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder={t('mensHealth.phonePlaceholder')}
                        className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label htmlFor="age" className="block text-xs font-semibold text-gray-700 mb-1">
                    {t('mensHealth.ageLabel')} <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    id="age"
                    required
                    min="16"
                    max="99"
                    value={formData.age}
                    onChange={handleChange}
                    placeholder={t('mensHealth.agePlaceholder')}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold text-gray-700 mb-1">
                    {t('mensHealth.messageLabel')} <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <FiMessageSquare className="absolute left-3.5 top-3 text-gray-400" />
                    <textarea
                      name="message"
                      id="message"
                      required
                      rows="3"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t('mensHealth.messagePlaceholder')}
                      className="w-full pl-10 pr-3.5 py-2.5 rounded-xl border border-gray-200 focus:border-primary focus:ring-1 focus:ring-primary text-sm outline-none resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary hover:bg-primary-dark text-white font-bold py-3.5 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm shadow-md cursor-pointer"
                >
                  <FiSend /> {t('mensHealth.submitBtn')}
                </button>

                <p className="text-center text-xs text-gray-400 pt-1">
                  {t('mensHealth.privacyNotice')}
                </p>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

export default MensHealth