import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { useEffect } from 'react'
import Navigation from './components/Navigation'
import ErrorBoundary from './components/ErrorBoundary'
import Home from './pages/Home'
import Chat from './pages/Chat'
import Features from './pages/Features'
import About from './pages/About'

export default function App() {
  useEffect(() => {
    // 在组件挂载时添加深色模式类
    document.documentElement.classList.add('dark')
  }, [])

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-200">
          <Navigation />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/features" element={<Features />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>
        </div>
        <Analytics />
      </Router>
    </ErrorBoundary>
  )
}
