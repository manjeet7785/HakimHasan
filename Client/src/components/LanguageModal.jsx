import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaLanguage } from 'react-icons/fa'
import { useLang } from '../i18n/LanguageContext'

const LanguageModal = () => {
  const { showModal, changeLang, t } = useLang()

  return (
    <AnimatePresence>
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-6 sm:p-8 text-center relative border border-gray-100"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lang-modal-title"
          >
            {/* Top Badge */}
            <div className="w-16 h-16 rounded-full bg-primary-50 text-primary flex items-center justify-center mx-auto mb-4 border border-primary-100 shadow-sm">
              <FaLanguage className="text-3xl" />
            </div>

            {/* Title & Subtitle */}
            <h2 id="lang-modal-title" className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-1">
              {t('langModal.title')}
            </h2>
            <p className="text-gray-500 text-sm sm:text-base font-medium mb-6">
              {t('langModal.subtitle')}
            </p>

            {/* Language Selection Buttons */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
              {/* Hindi Choice */}
              <button
                type="button"
                onClick={() => changeLang('hi')}
                className="p-5 rounded-2xl border-2 border-gray-200 hover:border-primary hover:bg-primary-50/70 transition-all flex flex-col items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              >
                <span className="text-3xl sm:text-4xl mb-2 select-none" role="img" aria-label="India flag">
                  🇮🇳
                </span>
                <span className="font-bold text-gray-900 group-hover:text-primary text-base sm:text-lg">
                  हिन्दी
                </span>
                <span className="text-xs text-gray-400 font-medium mt-0.5">
                  Hindi
                </span>
              </button>

              {/* English Choice */}
              <button
                type="button"
                onClick={() => changeLang('en')}
                className="p-5 rounded-2xl border-2 border-gray-200 hover:border-primary hover:bg-primary-50/70 transition-all flex flex-col items-center justify-center group focus:outline-none focus:ring-2 focus:ring-primary/40 cursor-pointer"
              >
                <span className="text-3xl sm:text-4xl mb-2 select-none" role="img" aria-label="UK flag">
                  🇬🇧
                </span>
                <span className="font-bold text-gray-900 group-hover:text-primary text-base sm:text-lg">
                  English
                </span>
                <span className="text-xs text-gray-400 font-medium mt-0.5">
                  अंग्रेज़ी
                </span>
              </button>
            </div>

            {/* Footer Hint */}
            <p className="text-xs text-gray-400 leading-relaxed">
              {t('langModal.hint')}
            </p>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}

export default LanguageModal
