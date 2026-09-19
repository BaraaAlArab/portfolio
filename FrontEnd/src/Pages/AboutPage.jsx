import { useEffect, useState } from 'react'
import { Download } from 'lucide-react'
import mePhoto from '../assets/me/me.jpg'
import { apiGet } from '../lib/api.js'

export default function AboutPage() {
  const [photoOk, setPhotoOk] = useState(true)
  const [stats, setStats] = useState({ projects: 0, yearsExperience: 5, followers: 0, stars: 0 })

  useEffect(() => {
    apiGet('/api/stats')
      .then((data) =>
        setStats({
          projects: data.projects,
          yearsExperience: data.yearsExperience,
          followers: data.followers,
          stars: data.stars,
        })
      )
      .catch(() => {
        // keep fallback defaults when the API is unreachable
      })
  }, [])

  const statCards = [
    { num: `${stats.yearsExperience}+`, label: 'Years Coding' },
    { num: String(stats.projects), label: 'Projects' },
    { num: String(stats.followers), label: 'Followers' },
    { num: String(stats.stars), label: 'Stars Earned' },
  ]

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">About Me</p>
      <h1 className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        Who is Baraa?
      </h1>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-[200px_1fr]">
        <div className="flex flex-col gap-4">
          {photoOk ? (
            <img
              src={mePhoto}
              alt="Baraa Al Arab"
              onError={() => setPhotoOk(false)}
              className="h-48 w-48 rounded-2xl border border-white/15 object-cover backdrop-blur-md"
            />
          ) : (
            <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
              <span className="font-semibold text-white/60">Photo</span>
            </div>
          )}
          <a
            href="/resume.pdf"
            download
            className="flex items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2.5 text-sm font-medium backdrop-blur-md transition hover:bg-white/15"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </div>

        <div className="space-y-4 leading-relaxed text-white/70">
          <p>
            I'm a full stack developer who loves turning ideas into real,
            working products. My toolkit of choice is{' '}
            <span className="font-semibold text-cyan-300">React</span> on the
            frontend and{' '}
            <span className="font-semibold text-purple-300">Node.js</span> on
            the backend.
          </p>
          <p>
            When I'm not coding, I'm exploring new tech, building side projects,
            and leveling up one commit at a time.
          </p>
        </div>
      </div>

      <section className="mt-14 grid grid-cols-2 gap-5 md:grid-cols-4">
        {statCards.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl border border-white/15 bg-white/5 p-5 text-center backdrop-blur-md transition hover:bg-white/10"
          >
            <p className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-3xl font-extrabold text-transparent">
              {stat.num}
            </p>
            <p className="mt-1 text-xs tracking-wide text-white/50 uppercase">{stat.label}</p>
          </div>
        ))}
      </section>
    </main>
  )
}