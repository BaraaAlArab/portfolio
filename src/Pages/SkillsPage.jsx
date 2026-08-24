import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from 'react-icons/fa6'

const skills = [
  { name: 'HTML', level: 'Advanced', Icon: FaHtml5, color: '#E34F26' },
  { name: 'CSS / Tailwind', level: 'Advanced', Icon: FaCss3Alt, color: '#1572B6' },
  { name: 'JavaScript', level: 'Advanced', Icon: FaJs, color: '#F7DF1E' },
  { name: 'React', level: 'Intermediate', Icon: FaReact, color: '#61DAFB' },
  { name: 'Node.js', level: 'Intermediate', Icon: FaNodeJs, color: '#83CD29' },
  { name: 'Git & GitHub', level: 'Intermediate', Icon: FaGitAlt, color: '#F05032' },
]

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">My Toolbox</p>
      <h1 className="bg-gradient-to-r from-purple-300 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        Skills
      </h1>

      <section className="mt-10 grid gap-5 sm:grid-cols-2">
        {skills.map(({ name, level, Icon, color }) => (
          <div
            key={name}
            className="group flex items-center justify-between rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
          >
            <div className="flex items-center gap-4">
              <div
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 transition group-hover:scale-110"
                style={{ color }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="font-semibold">{name}</h3>
            </div>
            <span className="rounded-full border border-cyan-400/40 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-200">
              {level}
            </span>
          </div>
        ))}
      </section>
    </main>
  )
}
