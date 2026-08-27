import { useState } from 'react'

export default function AboutPage() {
  const [photoOk, setPhotoOk] = useState(true)

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">About Me</p>
      <h1 className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        Who is Baraa?
      </h1>

      <div className="mt-10 grid items-start gap-8 md:grid-cols-[200px_1fr]">
        {photoOk ? (
          <img
            src="./../assets/me/me.jpg"
            alt="Baraa Al Arab"
            onError={() => setPhotoOk(true)}
            className="h-48 w-48 rounded-2xl border border-white/15 object-cover backdrop-blur-md"
          />
        ) : (
          <div className="flex h-48 w-48 items-center justify-center rounded-2xl border border-white/15 bg-white/5 backdrop-blur-md">
            <span className="font-semibold text-white/60">Photo</span>
          </div>
        )}

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
        {[
          { num: '5+', label: 'Years Coding' },
          { num: '13', label: 'Projects' },
          { num: '100%', label: 'Passion' },
          { num: '24/7', label: 'Learning' },
        ].map((stat) => (
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
