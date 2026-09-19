import { Link } from 'react-router-dom'
import { Home, Compass } from 'lucide-react'

export default function NotFoundPage() {
  return (
    <main className="mx-auto flex max-w-xl flex-col items-center px-6 py-24 text-center sm:px-10">
      <Compass className="h-14 w-14 text-cyan-300/80" />
      <p className="mt-6 text-sm tracking-widest text-cyan-300 uppercase">Error 404</p>
      <h1 className="mt-2 bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-5xl font-extrabold text-transparent">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        The page you're looking for doesn't exist or has been moved. Let's get you back home.
      </p>
      <Link
        to="/"
        className="mt-8 flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-7 py-3 font-medium transition hover:scale-105"
      >
        <Home className="h-4 w-4" /> Back Home
      </Link>
    </main>
  )
}