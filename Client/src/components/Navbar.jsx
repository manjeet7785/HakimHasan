import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { FiPhone, FiMenu, FiX } from 'react-icons/fi'
import { FaLeaf, FaWhatsapp, FaGlobe } from 'react-icons/fa'
import { motion, AnimatePresence } from 'framer-motion'
import { useLang } from '../i18n/LanguageContext'
import logo from '../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const { lang, changeLang, t } = useLang()

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.mensHealth'), path: '/mens-health' },
    { name: t('nav.hairOil'), path: '/hair-oil' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => setIsOpen(false), [location])

  const toggleLanguage = () => {
    changeLang(lang === 'hi' ? 'en' : 'hi')
  }

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md transition-shadow duration-300 ${
        scrolled ? 'shadow-sm border-b border-gray-200' : 'border-b border-gray-100'
      }`}
    >
      <div className="h-0.5 bg-gradient-to-r from-gold via-primary to-gold" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-2">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 sm:gap-3.5 min-w-0 shrink group">
            <img
              src={logo}
              alt="Hakim Suhaib Hasan Logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover shrink-0 shadow-sm border border-gold/40 group-hover:scale-105 transition-transform bg-white"
            />
            <div className="min-w-0">
              <h1 className="text-primary font-black text-xs sm:text-base leading-tight truncate">
                {t('nav.brand')}
              </h1>
              <p className="text-gold-600 text-[9px] sm:text-[11px] font-bold tracking-wider uppercase truncate">
                {t('nav.brandSub')}
              </p>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navLinks.map((link) => {
              const active = location.pathname === link.path
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-2 text-sm font-semibold transition-colors ${
                    active ? 'text-primary' : 'text-gray-600 hover:text-primary'
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5 bg-primary rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              )
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 shrink-0">
            {/* Desktop Language Switcher */}
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label="Change language"
              className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-2 rounded-full border border-gray-200 hover:border-primary hover:bg-primary-50 text-gray-700 hover:text-primary text-xs font-bold transition-colors cursor-pointer"
            >
              <FaGlobe className="text-primary text-sm shrink-0" />
              <span>{lang === 'hi' ? 'EN' : 'हिं'}</span>
            </button>

            {/* WhatsApp */}
            <a
              href="https://wa.me/919084921048"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 bg-green-600 hover:bg-green-700 text-white font-semibold px-3 sm:px-4 py-2 rounded-xl text-xs sm:text-sm transition-colors"
            >
              <FaWhatsapp className="text-base" />
              <span className="hidden md:inline">{t('nav.whatsapp')}</span>
            </a>

            {/* Call Now */}
            <a
              href="tel:9084921048"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-dark text-white font-bold px-3 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm transition-colors"
            >
              <FiPhone className="text-sm text-gold" />
              <span className="hidden xs:inline sm:inline">{t('nav.callNow')}</span>
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="lg:hidden text-gray-700 hover:text-primary p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-t border-gray-100 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => {
                const active = location.pathname === link.path
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                      active ? 'text-primary bg-primary-50' : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {link.name}
                  </Link>
                )
              })}

              {/* Mobile Language Toggle */}
              <button
                type="button"
                onClick={toggleLanguage}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl border border-gray-200 hover:border-primary bg-gray-50 text-gray-800 text-sm font-bold transition-colors cursor-pointer"
              >
                <FaGlobe className="text-primary text-base" />
                <span>
                  {lang === 'hi' ? 'Switch to English' : 'हिन्दी में बदलें'}
                </span>
              </button>

              <div className="pt-2 border-t border-gray-100 flex flex-col gap-2">
                <a
                  href="https://wa.me/919084921048"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-600 text-white font-semibold px-4 py-2.5 rounded-xl text-sm"
                >
                  <FaWhatsapp className="text-lg" /> {t('nav.whatsapp')}
                </a>
                <a
                  href="tel:9084921048"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white font-semibold px-4 py-2.5 rounded-xl text-sm"
                >
                  <FiPhone className="text-gold" /> {t('nav.callNow')} (+91 9084921048)
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar