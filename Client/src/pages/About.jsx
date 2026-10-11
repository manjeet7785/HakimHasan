import React from 'react'
import image from '../assets/Hero.jpeg'
import { FaLeaf, FaCheckCircle, FaShieldAlt, FaHeart, FaUserMd, FaAward, FaMedkit } from 'react-icons/fa'
import { useLang } from '../i18n/LanguageContext'

const valueIcons = [
  <FaLeaf key="v1" className="text-xl" />,
  <FaShieldAlt key="v2" className="text-xl" />,
  <FaHeart key="v3" className="text-xl" />,
  <FaAward key="v4" className="text-xl" />,
  <FaUserMd key="v5" className="text-xl" />,
  <FaMedkit key="v6" className="text-xl" />,
]

const About = () => {
  const { t, tRaw } = useLang()

  const values = tRaw('about.values')
  const stats = tRaw('about.stats')
  const checkpoints = tRaw('about.checkpoints')

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* Page Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 bg-gradient-to-b from-[#f4f9f6] to-white border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary border border-primary-200/60 px-3.5 py-1 rounded-full text-xs font-semibold mb-3">
            <FaUserMd className="text-xs text-gold" />
            {t('about.badge')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            {t('about.title1')} <span className="text-primary">{t('about.title2')}</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* About Content & Doctor Profile */}
      <section className="py-12 sm:py-16 bg-white" id="about-content-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            {/* Framed Photo (5 cols) */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-tr from-primary to-gold opacity-20 blur-md -z-10" />

                <div className="relative rounded-3xl p-2 bg-white shadow-xl border-4 border-primary">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-gray-100">
                    <img
                      src={image}
                      alt={t('about.doctorName')}
                      className="w-full h-full object-cover object-top"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-transparent to-transparent" />

                    {/* Badge at bottom of photo */}
                    <div className="absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-md rounded-xl p-3 shadow-md border border-white/60 flex items-center gap-2.5">
                      <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center shrink-0">
                        <FaUserMd className="text-gold text-sm" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-primary font-bold text-sm truncate">{t('about.doctorName')}</p>
                        <p className="text-gray-500 text-xs truncate">{t('about.doctorRole')}</p>
                      </div>
                    </div>
                  </div>

                  {/* Experience pill on photo corner */}
                  <div className="absolute top-4 right-4 bg-primary text-gold font-bold px-3 py-1 rounded-full text-xs shadow-md border border-gold/30">
                    {t('about.expBadge')}
                  </div>
                </div>
              </div>
            </div>

            {/* Story & Points (7 cols) */}
            <div className="lg:col-span-7 text-left">
              <span className="inline-block text-gold-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
                {t('about.storyTag')}
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                {t('about.storyTitle')}
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4 text-sm sm:text-base">
                {t('about.p1')}
              </p>
              <p className="text-gray-600 leading-relaxed mb-6 text-sm sm:text-base">
                {t('about.p2')}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                {Array.isArray(checkpoints) && checkpoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-2.5 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-green-600 shrink-0 text-sm" />
                    <p className="text-gray-700 text-xs sm:text-sm font-medium">{point}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-14 sm:py-16 bg-gray-50/70 border-t border-gray-100" id="values-section">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
              {t('about.valuesTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
              {t('about.valuesTitle')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {Array.isArray(values) && values.map((val, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-xs hover:shadow-md border border-gray-100 hover:border-primary/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-primary-50 text-primary flex items-center justify-center mb-4">
                  {valueIcons[index % valueIcons.length]}
                </div>
                <h3 className="font-bold text-gray-900 text-base mb-1.5">{val.title}</h3>
                <p className="text-gray-500 text-xs sm:text-sm leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compact Stats Bar */}
      <section className="py-10 bg-primary text-white" id="stats-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {Array.isArray(stats) && stats.map((stat, i) => (
              <div key={i}>
                <p className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gold mb-1">{stat.num}</p>
                <p className="text-white/80 text-xs sm:text-sm font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
