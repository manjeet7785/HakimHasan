import React from 'react'
import { Link } from 'react-router-dom'
import { FaLeaf, FaInstagram, FaFacebookF, FaYoutube, FaWhatsapp, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { useLang } from '../i18n/LanguageContext'
import logo from '../assets/logo.png'

const Footer = () => {
  const { t, tRaw } = useLang()

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.mensHealth'), path: '/mens-health' },
    { name: t('nav.hairOil'), path: '/hair-oil' },
    { name: t('nav.contact'), path: '/contact' },
  ]

  const servicesList = tRaw('footer.servicesList')

  return (
    <footer className="bg-[#0e2c23] text-white relative overflow-hidden border-t border-gold/20">
      <div className="h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-10">

          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src={logo}
                alt="Hakim Suhaib Hasan Logo"
                className="w-11 h-11 rounded-full object-cover shadow-md shrink-0 border border-gold/40 bg-white"
              />
              <div className="min-w-0">
                <h3 className="font-bold text-base leading-tight">{t('footer.brand')}</h3>
                <p className="text-gold-400 text-[11px] tracking-wider uppercase">{t('footer.brandSub')}</p>
              </div>
            </div>
            <p className="text-white/70 text-xs sm:text-sm leading-relaxed">
              {t('footer.tagline')}
            </p>
            <div className="flex items-center gap-2 pt-1">
              {[
                { icon: <FaInstagram />, href: 'https://instagram.com/hakeem_suhaib_hasan', hover: 'hover:bg-primary', label: 'Instagram' },
                { icon: <FaFacebookF />, href: 'https://facebook.com', hover: 'hover:bg-primary', label: 'Facebook' },
                { icon: <FaYoutube />, href: 'https://youtube.com', hover: 'hover:bg-primary', label: 'YouTube' },
                { icon: <FaWhatsapp />, href: 'https://wa.me/919084921048', hover: 'hover:bg-green-600', label: 'WhatsApp' },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                   className={`w-9 h-9 rounded-full bg-white/10 flex items-center justify-center text-sm transition-colors ${s.hover}`}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-4">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {quickLinks.map((l) => (
                <li key={l.path}>
                  <Link to={l.path} className="text-white/70 hover:text-gold transition-colors inline-block">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-4">
              {t('footer.services')}
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-white/70">
              {Array.isArray(servicesList) && servicesList.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-gold text-sm uppercase tracking-wider mb-4">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-white/70">
              <li>
                <a href="tel:9084921048" className="flex items-center gap-2 hover:text-gold transition-colors">
                  <FaPhone className="text-gold text-xs shrink-0" /> <span>+91 9084921048</span>
                </a>
              </li>
              <li>
                <a href="https://wa.me/919084921048" target="_blank" rel="noopener noreferrer"
                   className="flex items-center gap-2 hover:text-gold transition-colors">
                  <FaWhatsapp className="text-green-400 text-sm shrink-0" /> <span>WhatsApp: 9084921048</span>
                </a>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-gold text-xs mt-1 shrink-0" />
                <span>{t('footer.clinic')}</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} {t('footer.brand')} {t('footer.brandSub')}. {t('footer.rights')}</p>
          <p>{t('footer.bottomLine')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer