import { Link } from 'react-router-dom'
import { Zap, BadgeCheck, Palette, Rocket, UserRound } from 'lucide-react'

export default function HomePage() {
  return (
    <main className="px-6 sm:px-10">
      <section className="py-16 text-center sm:py-24">
        <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">
          Full Stack Developer
        </p>
        <h1 className="mx-auto max-w-3xl bg-gradient-to-r from-purple-300 via-pink-200 to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent p-4 sm:text-7xl">
          Crafting digital experiences that glow
        </h1>
        <p className="mx-auto mt-6 max-w-md text-white/60">
          Welcome to my portfolio. I build modern web apps with React and Node.js.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button className="flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-7 py-3 font-medium transition hover:scale-105">
            <Rocket className="h-4 w-4" /> <Link to="/demo">View Projects</Link>
          </button>
          <Link
            to="/about"
            className="flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 py-3 font-medium backdrop-blur-md transition hover:bg-white/15"
          >
            <UserRound className="h-4 w-4" /> About Me
          </Link>
        </div>
      </section>

      <section className="grid gap-5 pb-20 md:grid-cols-3">
        {[
          { icon: Zap, title: 'Speed', desc: 'Fast, optimized apps that load in a blink.' },
          { icon: BadgeCheck, title: 'Quality', desc: 'Clean, maintainable code you can rely on.' },
          { icon: Palette, title: 'Style', desc: 'Pixel-perfect UI with bold personality.' },
        ].map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400/50 to-cyan-400/50">
              <Icon className="h-5 w-5 text-cyan-200" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-1 text-sm text-white/60">{desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}
