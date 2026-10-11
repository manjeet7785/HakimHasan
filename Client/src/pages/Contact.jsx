import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FaWhatsapp, FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaCheckCircle } from 'react-icons/fa'
import { FiSend, FiUser, FiPhone, FiMail, FiMessageSquare, FiFileText } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext'

const Contact = () => {
  const { t } = useLang()
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    const namePrefix = t('contact.waPrefixName')
    const emailPrefix = t('contact.waPrefixEmail')
    const phonePrefix = t('contact.waPrefixPhone')
    const subjectPrefix = t('contact.waPrefixSubject')
    const msgPrefix = t('contact.waPrefixMsg')

    const text = `${namePrefix} ${formData.name}%0A${emailPrefix} ${formData.email}%0A${phonePrefix} ${formData.phone}%0A${subjectPrefix} ${formData.subject}%0A${msgPrefix} ${formData.message}`
    window.open(`https://wa.me/919084921048?text=${text}`, '_blank')
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 4000)
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="w-full overflow-x-hidden"
    >
      {/* Header */}
      <section className="relative overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-14 md:pb-20 bg-gradient-to-br from-primary-dark via-primary to-primary-light">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-10 right-10 w-40 sm:w-64 h-40 sm:h-64 border border-gold/30 rounded-full" />
          <div className="absolute bottom-10 left-10 w-32 sm:w-48 h-32 sm:h-48 border border-gold/20 rounded-full" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          <span className="inline-flex items-center gap-2 bg-gold/15 text-gold border border-gold/30 px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium mb-4">
            <FaEnvelope className="text-xs" /> {t('contact.badge')}
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            {t('contact.title1')} <span className="gradient-text">{t('contact.title2')}</span>
          </h1>
          <p className="text-white/70 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="py-12 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">

            {/* Info */}
            <div className="lg:col-span-2 space-y-5">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold text-primary-dark mb-2">
                  {t('contact.infoTitle')}
                </h2>
                <p className="text-gray-500 text-sm">
                  {t('contact.infoDesc')}
                </p>
              </div>

              <a
                href="tel:9084921048"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-primary-50 border border-primary-100/50 hover:border-primary/30 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <FaPhone className="text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{t('contact.phoneLabel')}</p>
                  <p className="font-bold text-primary-dark truncate">{t('contact.phoneVal')}</p>
                </div>
              </a>

              <a
                href="https://wa.me/919084921048"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-green-50 border border-green-100 hover:border-green-300 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-600 to-green-700 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform shadow-md">
                  <FaWhatsapp className="text-white text-xl" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{t('contact.waLabel')}</p>
                  <p className="font-bold text-green-700 truncate">{t('contact.waVal')}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl bg-gold-50 border border-gold-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold to-gold-light flex items-center justify-center shrink-0 shadow-md">
                  <FaMapMarkerAlt className="text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{t('contact.addressLabel')}</p>
                  <p className="font-semibold text-gray-700 text-sm break-words">
                    {t('contact.addressVal')}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 sm:p-5 rounded-2xl bg-cream border border-gold-100">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-light flex items-center justify-center shrink-0 shadow-md">
                  <FaClock className="text-gold" />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-gray-500 mb-0.5">{t('contact.timingLabel')}</p>
                  <p className="font-semibold text-gray-700 text-sm">
                    {t('contact.timingVal')}
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl shadow-xl shadow-primary/5 p-5 sm:p-8 md:p-10 border border-primary-100/30">
                <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-6">
                  {t('contact.formTitle')}
                </h3>

                {submitted ? (
                  <div className="text-center py-16">
                    <div className="w-20 h-20 mx-auto rounded-full bg-green-100 flex items-center justify-center mb-4">
                      <FaCheckCircle className="text-green-500 text-4xl" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-primary-dark mb-2">{t('contact.sentTitle')}</h3>
                    <p className="text-gray-500 text-sm">{t('contact.sentDesc')}</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('contact.nameLabel')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            id="contact-name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder={t('contact.namePlaceholder')}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-gray-50/50"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('contact.emailLabel')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="email"
                            name="email"
                            id="contact-email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            placeholder={t('contact.emailPlaceholder')}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-gray-50/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('contact.phoneFieldLabel')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            id="contact-phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            placeholder={t('contact.phonePlaceholder')}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-gray-50/50"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="contact-subject" className="block text-sm font-medium text-gray-700 mb-1.5">
                          {t('contact.subjectLabel')} <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <FiFileText className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />
                          <input
                            type="text"
                            name="subject"
                            id="contact-subject"
                            required
                            value={formData.subject}
                            onChange={handleChange}
                            placeholder={t('contact.subjectPlaceholder')}
                            className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-gray-50/50"
                          />
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-1.5">
                        {t('contact.messageLabel')} <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <FiMessageSquare className="absolute left-4 top-4 text-gray-400" />
                        <textarea
                          name="message"
                          id="contact-message"
                          required
                          rows="5"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t('contact.messagePlaceholder')}
                          className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-all text-sm bg-gray-50/50 resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-primary to-primary-light text-white font-bold py-4 rounded-xl hover:shadow-xl hover:shadow-primary/20 transition-all flex items-center justify-center gap-2 text-base cursor-pointer"
                    >
                      <FiSend className="text-lg" /> {t('contact.sendBtn')}
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Map */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-primary-dark mb-2">
              {t('contact.mapTitle')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-primary mx-auto rounded-full" />
          </div>

          <div className="rounded-3xl overflow-hidden shadow-xl border-2 border-primary-100/30">
            <iframe
              title="Location Map"
              src="https://maps.google.com/maps?q=Shamli,%20Uttar%20Pradesh&t=&z=14&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="380"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full block"
            />
          </div>
          <p className="text-center text-gray-400 text-xs sm:text-sm mt-4 italic">
            {t('contact.mapNotice')}
          </p>
        </div>
      </section>
    </motion.div>
  )
}

export default Contact