import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import AuroraBackground from './Components/AuroraBackground.jsx'

const HomePage = lazy(() => import('./Pages/HomePage.jsx'))
const ProjectsPage = lazy(() => import('./Pages/ProjectsPage.jsx'))
const AboutPage = lazy(() => import('./Pages/AboutPage.jsx'))
const SkillsPage = lazy(() => import('./Pages/SkillsPage.jsx'))
const HireMe = lazy(() => import('./Pages/HireMe.jsx'))
const NotFoundPage = lazy(() => import('./Pages/NotFoundPage.jsx'))

function PageLoader() {
  return (
    <div className="flex items-center justify-center py-32">
      <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AuroraBackground />
      <Navbar />

      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/hire-me" element={<HireMe />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/50 sm:px-10">
        © 2026 Baraa — Built with React + Node.js
      </footer>
    </BrowserRouter>
  )
}

export default App
