import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar.jsx'
import AuroraBackground from './Components/AuroraBackground.jsx'
import HomePage from './Pages/HomePage.jsx'
import AboutPage from './Pages/AboutPage.jsx'
import SkillsPage from './Pages/SkillsPage.jsx'
import DemoPages from './Pages/DemoPages.jsx'
import HireMe from './Pages/HireMe.jsx'

function App() {
  return (
    <BrowserRouter>
      <AuroraBackground />
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/skills" element={<SkillsPage />} />
        <Route path="/demo" element={<DemoPages />} />
        <Route path="/hire-me" element={<HireMe />} />
      </Routes>

      <footer className="border-t border-white/10 px-6 py-6 text-center text-sm text-white/50 sm:px-10">
        © 2026 Baraa — Built with React + Node.js
      </footer>
    </BrowserRouter>
  )
}

export default App
