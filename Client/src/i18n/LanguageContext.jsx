import React, { createContext, useContext, useState, useEffect, useCallback } from 'react'
import { translations } from './translations'

const LanguageContext = createContext(null)

const getNestedValue = (obj, path) => {
  if (!obj || !path) return undefined
  const keys = path.split('.')
  let current = obj
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key]
    } else {
      return undefined
    }
  }
  return current
}

export const LanguageProvider = ({ children }) => {
  // Read saved lang or check if previously set
  const [lang, setLang] = useState(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('app-lang')
      if (saved === 'hi' || saved === 'en') {
        return saved
      }
    }
    return null
  })

  const [showModal, setShowModal] = useState(false)

  // On first mount: if no saved language, auto-detect or show modal
  useEffect(() => {
    if (typeof window === 'undefined') return

    const saved = localStorage.getItem('app-lang')
    if (saved === 'hi' || saved === 'en') {
      setLang(saved)
      document.documentElement.lang = saved
      setShowModal(false)
    } else {
      // First visit: Show modal
      setShowModal(true)
      // Check navigator for initial default (fallback preview before click)
      const browserLang = navigator.language?.toLowerCase() || ''
      const detected = browserLang.startsWith('hi') ? 'hi' : 'en'
      setLang(detected)
      document.documentElement.lang = detected
    }
  }, [])

  const changeLang = useCallback((newLang) => {
    const validLang = newLang === 'en' ? 'en' : 'hi'
    setLang(validLang)
    if (typeof window !== 'undefined') {
      localStorage.setItem('app-lang', validLang)
      document.documentElement.lang = validLang
    }
    setShowModal(false)
  }, [])

  const openModal = useCallback(() => {
    setShowModal(true)
  }, [])

  // t helper: returns string with fallback to Hindi
  const t = useCallback(
    (path) => {
      const activeLang = lang || 'hi'
      let value = getNestedValue(translations[activeLang], path)
      if (value === undefined || value === null) {
        // Fallback to Hindi
        value = getNestedValue(translations.hi, path)
      }
      return typeof value === 'string' || typeof value === 'number' ? value : path
    },
    [lang]
  )

  // tRaw helper: returns raw arrays/objects with fallback to Hindi
  const tRaw = useCallback(
    (path) => {
      const activeLang = lang || 'hi'
      let value = getNestedValue(translations[activeLang], path)
      if (value === undefined || value === null) {
        // Fallback to Hindi
        value = getNestedValue(translations.hi, path)
      }
      return value !== undefined ? value : []
    },
    [lang]
  )

  const value = {
    lang: lang || 'hi',
    changeLang,
    t,
    tRaw,
    showModal,
    openModal,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLang = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLang must be used within a LanguageProvider')
  }
  return context
}

export default LanguageContext
