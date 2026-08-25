import { Link, NavLink } from 'react-router-dom'
import { Home, UserRound, Code2, FlaskConical, Send } from 'lucide-react'

const linkClass = ({ isActive }) =>
  'flex items-center gap-2 text-sm font-medium transition ' +
  (isActive ? 'text-cyan-300' : 'text-white/70 hover:text-white')

function Navbar() {
  return (
    <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/50 px-6 py-4 backdrop-blur-md sm:px-10">
      <Link to="/" className="flex items-center gap-2 text-lg font-bold">
        <Code2 className="h-6 w-6 text-cyan-300" />
        baraa<span className="text-cyan-300">.dev</span>
      </Link>

      <div className="hidden gap-6 rounded-full border border-white/15 bg-white/5 px-6 py-2 backdrop-blur-md md:flex">
        <NavLink to="/" end className={linkClass}>
          <Home className="h-4 w-4" /> Home
        </NavLink>
        <NavLink to="/about" className={linkClass}>
          <UserRound className="h-4 w-4" /> About
        </NavLink>
        <NavLink to="/skills" className={linkClass}>
          <Code2 className="h-4 w-4" /> Skills
        </NavLink>
        <NavLink to="/demo" className={linkClass}>
          <FlaskConical className="h-4 w-4" /> Demo
        </NavLink>
      </div>

      <Link
        to="/hire-me"
        className="flex items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md transition hover:bg-white/20"
      >
        <Send className="h-4 w-4" /> Hire Me
      </Link>
    </nav>
  )
}

export default Navbar
