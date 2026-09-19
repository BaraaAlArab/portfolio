import { useEffect, useState } from 'react'
import { Globe, FolderGit2, ExternalLink, RefreshCw } from 'lucide-react'
import { apiGet } from '../lib/api.js'
import Reveal from '../Components/Reveal.jsx'

export default function ProjectsPage() {
  const [projects, setProjects] = useState([])
  const [projectsStatus, setProjectsStatus] = useState('loading')
  const [error, setError] = useState('')

  function applyProjects(data) {
    setProjects(data.projects ?? [])
    setProjectsStatus('ready')
  }

  useEffect(() => {
    let cancelled = false
    apiGet('/api/projects')
      .then((data) => {
        if (!cancelled) applyProjects(data)
      })
      .catch(() => {
        if (!cancelled) {
          setError('Could not load projects. Is the backend running?')
          setProjectsStatus('error')
        }
      })
    return () => {
      cancelled = true
    }
  }, [])

  function retryProjects() {
    setError('')
    setProjectsStatus('loading')
    apiGet('/api/projects')
      .then(applyProjects)
      .catch(() => {
        setError('Could not load projects. Is the backend running?')
        setProjectsStatus('error')
      })
  }

  const withDemo = projects.filter((p) => p.demoLink)
  const withoutDemo = projects.filter((p) => !p.demoLink)
  const renderList = [...withDemo, ...withoutDemo]

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <Reveal>
        <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">My Work</p>
        <h1 className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
          Projects
        </h1>
        <p className="mt-4 max-w-md text-white/60">
          Live demos pulled from my GitHub — click the site link under each project to see it in action.
        </p>
      </Reveal>

      {projectsStatus === 'loading' && (
        <div className="mt-10 flex items-center justify-center py-20">
          <span className="h-8 w-8 animate-spin rounded-full border-2 border-white/20 border-t-cyan-400" />
        </div>
      )}

      {projectsStatus === 'error' && (
        <div className="mt-10 flex flex-col items-center rounded-2xl border border-white/15 bg-white/5 p-10 text-center backdrop-blur-md">
          <p className="text-white/70">{error}</p>
          <button
            onClick={retryProjects}
            className="mt-5 flex items-center gap-2 rounded-full border border-white/25 bg-white/5 px-5 py-2 text-sm font-medium transition hover:bg-white/15"
          >
            <RefreshCw className="h-4 w-4" /> Try again
          </button>
        </div>
      )}

      {projectsStatus === 'ready' && (
        <section className="mt-10 grid gap-5 sm:grid-cols-2">
          {renderList.map((p, i) => (
            <Reveal key={p.id} delay={(i % 2) * 120}>
              <article className="group flex h-full flex-col rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur-md transition hover:bg-white/10">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-purple-400/50 to-cyan-400/50">
                  <FolderGit2 className="h-5 w-5 text-cyan-200" />
                </div>
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="mt-1 flex-1 text-sm leading-relaxed text-white/60">
                  {p.description || 'No description yet.'}
                </p>

                {p.demoLink ? (
                  <a
                    href={p.demoLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-4 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-5 py-2.5 text-sm font-medium transition hover:scale-[1.03]"
                  >
                    <Globe className="h-4 w-4" /> Visit Live Site
                  </a>
                ) : (
                  <span className="mt-4 inline-flex items-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm text-white/40">
                    No live demo yet
                  </span>
                )}

                {p.codeLink && (
                  <a
                    href={p.codeLink}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-cyan-200/80 transition hover:text-cyan-200"
                  >
                    View Code <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                {p.tech?.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/50"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Reveal>
          ))}
        </section>
      )}
    </main>
  )
}