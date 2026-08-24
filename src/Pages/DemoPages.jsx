export default function DemoPages() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">Playground</p>
      <h1 className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        Demos
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        Experiments and mini-projects I'm currently playing with.
      </p>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={`rounded-2xl border p-6 backdrop-blur-md transition hover:bg-white/10 ${
              i % 2 === 0
                ? 'border-white/15 bg-white/5'
                : 'border-purple-400/30 bg-gradient-to-br from-purple-500/15 to-cyan-500/15'
            }`}
          >
            <h3 className="text-lg font-semibold">Demo {i + 1}</h3>
            <p className="mt-1 text-sm text-white/60">Coming soon.</p>
          </div>
        ))}
      </section>
    </main>
  )
}
