import { useState, useEffect, useRef } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Home, UserRound, Code2, FlaskConical, Send } from 'lucide-react'

const linkClass = ({ isActive }) =>
  'flex items-center gap-2 text-sm font-medium transition ' +
  (isActive ? 'text-cyan-300' : 'text-white/70 hover:text-white')

const menuLinkClass = ({ isActive }) =>
  'menu-item translate-y-2 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium leading-relaxed transition duration-200 ' +
  (isActive
    ? 'bg-white/10 text-cyan-300'
    : 'text-white/70 hover:bg-white/5 hover:translate-x-1 hover:text-white')

const navItems = [
  { to: '/', label: 'Home', icon: Home, end: true },
  { to: '/about', label: 'About', icon: UserRound },
  { to: '/skills', label: 'Skills', icon: Code2 },
  { to: '/demo', label: 'Demo', icon: FlaskConical },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onClick = (e) => navRef.current && !navRef.current.contains(e.target) && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onClick)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onClick)
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      ref={navRef}
      className="sticky top-0 z-10 flex items-center justify-between border-b border-white/10 bg-slate-950/50 px-6 py-4 backdrop-blur-md sm:px-10"
    >
      <Link to="/" className="flex items-center gap-2 text-lg font-bold">
        <Code2 className="h-6 w-6 text-cyan-300" />
        baraa<span className="text-cyan-300">.dev</span>
      </Link>

      <div className="hidden gap-6 rounded-full border border-white/15 bg-white/5 px-6 py-2 backdrop-blur-md md:flex">
        {navItems.map(({ to, label, icon: Icon, end }) => (
          <NavLink key={to} to={to} end={end} className={linkClass}>
            <Icon className="h-4 w-4" /> {label}
          </NavLink>
        ))}
      </div>

      <div className="flex items-center gap-2">
        <Link
          to="/hire-me"
          className="hidden items-center gap-2 rounded-full bg-white/10 px-5 py-2 text-sm font-medium backdrop-blur-md transition hover:bg-white/20 sm:flex"
        >
          <Send className="h-4 w-4" /> Hire Me
        </Link>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          data-open={open}
          className="burger flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white/80 transition duration-200 hover:scale-105 hover:border-cyan-300/50 hover:text-white active:scale-95 md:hidden"
        >
          <span className="burger-line" />
          <span className="burger-line" />
          <span className="burger-line" />
        </button>
      </div>

      <div
        className={`${
          open ? 'menu-panel pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
        } absolute inset-x-0 top-full mx-4 origin-top rounded-2xl border border-white/10 bg-slate-950/80 p-3 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-300 ease-out md:hidden`}
      >
        <div className="flex flex-col">
          {navItems.map(({ to, label, icon: Icon, end }) => (
            <NavLink key={to} to={to} end={end} onClick={() => setOpen(false)} className={menuLinkClass}>
              <Icon className="h-4 w-4" /> {label}
            </NavLink>
          ))}
          <NavLink to="/hire-me" onClick={() => setOpen(false)} className={menuLinkClass}>
            <Send className="h-4 w-4" /> Hire Me
          </NavLink>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
