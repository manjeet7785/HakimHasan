import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import { LanguageProvider } from './i18n/LanguageContext'
import LanguageModal from './components/LanguageModal'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import MensHealth from './pages/MensHealth'
import HairOil from './pages/HairOil'
import Contact from './pages/Contact'

const AppContent = () => {
  const location = useLocation()

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      <ScrollToTop />
      <LanguageModal />
      <Navbar />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/mens-health" element={<MensHealth />} />
            <Route path="/hair-oil" element={<HairOil />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}

const App = () => {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App