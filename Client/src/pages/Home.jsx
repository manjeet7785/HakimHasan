import React from 'react'
import { Link } from 'react-router-dom'
import { FaWhatsapp, FaLeaf, FaStar, FaUserMd, FaShieldAlt, FaAward, FaCheckCircle } from 'react-icons/fa'
import { FiArrowRight, FiPhone } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext'
import heroDoctorImg from '../assets/Hero.jpeg'

const featureIcons = [<FaLeaf key="f1" />, <FaShieldAlt key="f2" />, <FaUserMd key="f3" />, <FaAward key="f4" />]

const Home = () => {
  const { t, tRaw } = useLang()

  const features = tRaw('home.features')
  const menPoints = tRaw('home.menPoints')
  const hairPoints = tRaw('home.hairPoints')

  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* Hero */}
      <section className="relative w-full overflow-hidden pt-24 sm:pt-28 md:pt-32 pb-14 sm:pb-20 bg-gradient-to-b from-[#f4f9f6] via-white to-white border-b border-gray-100">
        <div className="absolute -top-10 -right-20 w-72 h-72 sm:w-96 sm:h-96 bg-primary-100/40 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute -bottom-16 -left-20 w-72 h-72 sm:w-80 sm:h-80 bg-gold-100/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

            <div className="lg:col-span-7 text-center lg:text-left">
              <span className="inline-flex items-center gap-2 bg-primary-50 text-primary border border-primary-200/80 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold mb-5">
                <FaLeaf className="text-gold text-xs" />
                {t('home.badge')}
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-black text-gray-900 leading-[1.15] mb-5 tracking-tight">
                {t('home.titleLine1')}{' '}
                <span className="text-primary block sm:inline">{t('home.titleLine2')}</span>
              </h1>

              <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                {t('home.desc')}
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-8">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-md hover:shadow-lg transition-all"
                >
                  {t('home.consultNow')} <FiArrowRight className="text-lg text-gold" />
                </Link>
                <a
                  href="https://wa.me/919084921048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-sm hover:shadow-md transition-all"
                >
                  <FaWhatsapp className="text-lg" /> {t('home.whatsappUs')}
                </a>
                <a
                  href="tel:9084921048"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-semibold px-5 py-3 sm:py-3.5 rounded-xl text-sm transition-colors"
                >
                  <FiPhone className="text-primary" /> {t('home.callText')}
                </a>
              </div>

              <div className="pt-6 border-t border-gray-200/80 flex flex-wrap items-center justify-center lg:justify-start gap-5 sm:gap-8 text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex text-gold">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className="text-sm" />
                    ))}
                  </div>
                  <span className="font-bold text-gray-800">{t('home.rating')}</span>
                  <span className="text-gray-500 text-xs">{t('home.patients')}</span>
                </div>
                <div className="flex items-center gap-2 text-primary font-semibold text-xs sm:text-sm">
                  <FaCheckCircle className="text-green-600 text-base" />
                  {t('home.natural')}
                </div>
              </div>
            </div>

            {/* Framed photo */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div className="absolute inset-0 -m-2 rounded-3xl bg-gradient-to-tr from-primary to-gold opacity-20 blur-lg" />
                <div className="relative rounded-3xl p-2 bg-white shadow-xl border-4 border-primary">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4.3] bg-gray-100">
                    <img
                      src={heroDoctorImg}
                      alt={t('home.doctorName')}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/85 via-transparent to-transparent" />
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-2.5 sm:p-3 shadow-md flex items-center gap-3">
                      <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <FaLeaf className="text-gold text-sm sm:text-base" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-primary font-bold text-xs sm:text-sm leading-tight truncate">
                          {t('home.doctorName')}
                        </p>
                        <p className="text-gray-500 text-[11px] sm:text-xs truncate">
                          {t('home.doctorTag')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-14 sm:py-20 bg-gray-50/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-gold-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
              {t('home.whyTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              {t('home.whyTitle')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
            {Array.isArray(features) && features.map((f, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md border border-gray-100 hover:border-primary/40 transition-all text-center group hover:-translate-y-1"
              >
                <div className="w-14 h-14 mx-auto rounded-2xl bg-primary-50 text-primary flex items-center justify-center text-xl mb-4 group-hover:bg-primary group-hover:text-gold transition-colors">
                  {featureIcons[i % featureIcons.length]}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-2">{f.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-14 sm:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <span className="inline-block text-gold-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
              {t('home.servicesTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
              {t('home.servicesTitle')}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base max-w-lg mx-auto">
              {t('home.servicesSub')}
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-primary mx-auto rounded-full mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">

            {/* Card 1 - Men's Health */}
            <div className="rounded-3xl border border-gray-200/80 bg-white shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-4 px-5 text-center">
                <span className="inline-block bg-white/15 text-gold border border-gold/30 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {t('home.menCardTag')}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg mt-2">
                  {t('home.menCardTitle')}
                </h3>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-5">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80"
                      alt={t('home.menCardTitle')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-700 w-full">
                    {Array.isArray(menPoints) && menPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-600 shrink-0 text-sm mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-gray-500 font-medium">
                    {t('home.menDoctorCheck')}
                  </span>
                  <Link
                    to="/mens-health"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    {t('home.menCardBtn')} <FiArrowRight className="text-gold" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Card 2 - Hair Oil */}
            <div className="rounded-3xl border border-gray-200/80 bg-white shadow-md hover:shadow-xl transition-all overflow-hidden flex flex-col">
              <div className="bg-gradient-to-r from-primary-dark via-primary to-primary-light py-4 px-5 text-center">
                <span className="inline-block bg-white/15 text-gold border border-gold/30 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-wider">
                  {t('home.hairCardTag')}
                </span>
                <h3 className="text-white font-bold text-base sm:text-lg mt-2">
                  {t('home.hairCardTitle')}
                </h3>
              </div>
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div className="flex flex-col sm:flex-row gap-5 items-center sm:items-start mb-5">
                  <div className="w-28 h-28 rounded-2xl overflow-hidden shrink-0 border-2 border-primary/20 bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=400&q=80"
                      alt={t('home.hairCardTitle')}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="space-y-2 text-xs sm:text-sm text-gray-700 w-full">
                    {Array.isArray(hairPoints) && hairPoints.map((pt, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <FaCheckCircle className="text-green-600 shrink-0 text-sm mt-0.5" />
                        <span>{pt}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-gray-100 flex flex-wrap items-center justify-between gap-3">
                  <span className="text-xs text-primary font-bold">
                    {t('home.hairCardGuarantee')}
                  </span>
                  <Link
                    to="/hair-oil"
                    className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm transition-colors"
                  >
                    {t('home.hairCardBtn')} <FiArrowRight className="text-gold" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden bg-gradient-to-br from-primary-dark via-primary to-primary-dark rounded-3xl p-7 sm:p-12 text-center text-white shadow-xl">
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-gold/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none" />
            <div className="relative">
              <span className="inline-block bg-white/15 text-gold border border-gold/30 text-xs font-semibold px-3.5 py-1 rounded-full mb-4">
                {t('home.ctaTag')}
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold mb-3 leading-tight">
                {t('home.ctaTitle1')} <span className="text-gold">{t('home.ctaTitle2')}</span>
              </h2>
              <p className="text-white/80 text-sm sm:text-base mb-7 max-w-xl mx-auto leading-relaxed">
                {t('home.ctaDesc')}
              </p>
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
                <a
                  href="tel:9084921048"
                  className="inline-flex items-center justify-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-colors"
                >
                  <FiPhone className="text-base" /> {t('home.ctaCall')}
                </a>
                <a
                  href="https://wa.me/919084921048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold px-6 sm:px-7 py-3 sm:py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-colors"
                >
                  <FaWhatsapp className="text-lg" /> {t('home.ctaWhatsapp')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home