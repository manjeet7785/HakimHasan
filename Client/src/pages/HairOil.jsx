import React from 'react'
import { FaWhatsapp, FaCheckCircle, FaLeaf, FaStar, FaShoppingCart } from 'react-icons/fa'
import { FiPhone, FiArrowRight } from 'react-icons/fi'
import { useLang } from '../i18n/LanguageContext'

// Import herb images from assets
import bhringrajImg from '../assets/Bhringraj.jpg'
import amlaImg from '../assets/Amla.jpg'
import fenugreekImg from '../assets/Fenugreek.jpg'
import neemImg from '../assets/Neem.webp'
import brahmiImg from '../assets/Brahmi.jpg'
import jatamansiImg from '../assets/Jatamansi.png'

const herbImages = [
  bhringrajImg,
  amlaImg,
  fenugreekImg,
  neemImg,
  brahmiImg,
  jatamansiImg,
]

const HairOil = () => {
  const { t, tRaw } = useLang()

  const benefits = tRaw('hairOil.benefits')
  const herbs = tRaw('hairOil.herbs')

  const orderWaText = encodeURIComponent(t('hairOil.waOrderMsg'))
  const bannerWaText = encodeURIComponent(t('hairOil.waBannerMsg'))

  return (
    <div className="w-full overflow-x-hidden bg-white">

      {/* Header */}
      <section className="pt-24 sm:pt-28 md:pt-32 pb-8 sm:pb-12 bg-gradient-to-b from-[#f4f9f6] to-white border-b border-gray-100 text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 bg-primary-50 text-primary border border-primary-200/60 px-3.5 py-1 rounded-full text-xs font-semibold mb-3">
            <FaLeaf className="text-xs text-gold" /> {t('hairOil.badge')}
          </span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-2">
            {t('hairOil.title1')} <span className="text-primary">{t('hairOil.title2')}</span>
          </h1>
          <p className="text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            {t('hairOil.subtitle')}
          </p>
        </div>
      </section>

      {/* Product */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">

            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-xs sm:max-w-sm">
                <div className="absolute inset-0 -m-2 rounded-3xl bg-gradient-to-tr from-primary to-gold opacity-20 blur-lg" />
                <div className="relative rounded-3xl p-2 bg-white shadow-xl border-4 border-primary">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/4.5] bg-gray-100">
                    <img
                      src="https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80"
                      alt={t('hairOil.title1') + ' ' + t('hairOil.title2')}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/60 via-transparent to-transparent" />
                    <div className="absolute bottom-3 right-3 bg-primary text-white rounded-xl px-3 py-1.5 shadow-lg border border-gold/40 text-center">
                      <p className="text-[10px] text-gold font-medium uppercase">{t('hairOil.priceTag')}</p>
                      <p className="text-lg sm:text-xl font-black">{t('hairOil.price')}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="flex items-center gap-1 text-gold mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-sm" />
                ))}
                <span className="text-gray-500 text-xs ml-2 font-medium">
                  {t('hairOil.reviews')}
                </span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">
                {t('hairOil.specialTitle')}
              </h2>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
                {t('hairOil.specialDesc')}
              </p>

              <div className="space-y-2.5 mb-7">
                {Array.isArray(benefits) && benefits.map((b, i) => (
                  <div key={i} className="flex items-start gap-2.5 bg-gray-50 p-2.5 rounded-xl border border-gray-100">
                    <FaCheckCircle className="text-green-600 shrink-0 text-sm mt-0.5" />
                    <p className="text-gray-800 text-xs sm:text-sm font-medium">{b}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <a
                  href={`https://wa.me/919084921048?text=${orderWaText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold px-5 sm:px-6 py-3 sm:py-3.5 rounded-xl text-sm shadow-md transition-colors"
                >
                  <FaShoppingCart /> {t('hairOil.orderWa')}
                </a>
                <a
                  href="tel:9084921048"
                  className="inline-flex items-center justify-center gap-2 bg-white border border-gray-200 hover:border-primary text-gray-700 hover:text-primary font-semibold px-5 py-3 sm:py-3.5 rounded-xl text-sm transition-colors"
                >
                  <FiPhone className="text-primary" /> {t('hairOil.orderCall')}
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Ingredients */}
      <section className="py-14 sm:py-16 bg-gray-50/70 border-y border-gray-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block text-gold-600 text-xs sm:text-sm font-bold tracking-wider uppercase mb-2">
              {t('hairOil.ingredientsTag')}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
              {t('hairOil.ingredientsTitle')}
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-gold to-primary mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
            {Array.isArray(herbs) && herbs.map((h, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 text-center border border-gray-100 shadow-sm hover:shadow-md transition-all group hover:-translate-y-1 flex flex-col items-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden mb-3 border-2 border-primary/15 group-hover:border-primary/40 shadow-xs bg-gray-50 flex items-center justify-center transition-all">
                  <img
                    src={herbImages[i % herbImages.length]}
                    alt={h.name}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>
                <h4 className="font-bold text-gray-900 text-sm mb-1 group-hover:text-primary transition-colors">
                  {h.name}
                </h4>
                <p className="text-gray-500 text-[11px] leading-tight">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Order banner */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold mb-2">
            {t('hairOil.bannerTitle')}
          </h2>
          <p className="text-gold text-2xl font-black mb-3">
            {t('hairOil.bannerPrice')}
          </p>
          <p className="text-white/80 text-xs sm:text-sm mb-6">
            {t('hairOil.bannerFeatures')}
          </p>
          <a
            href={`https://wa.me/919084921048?text=${bannerWaText}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-primary hover:bg-gray-100 font-bold px-6 sm:px-8 py-3.5 rounded-xl text-sm sm:text-base shadow-lg transition-colors"
          >
            <FaWhatsapp className="text-green-600 text-xl" /> {t('hairOil.bannerOrderBtn')} <FiArrowRight />
          </a>
        </div>
      </section>
    </div>
  )
}

export default HairOil