import { useState } from 'react'
import { Mail, MapPin, Send } from 'lucide-react'
import { FaGithub, FaLinkedin } from 'react-icons/fa6'

const contactCards = [
  { Icon: Mail, label: 'Email', value: 'baraa9000alarab@gmail.com', href: 'mailto:baraa9000alarab@gmail.com' },
  { Icon: MapPin, label: 'Location', value: 'Available Remote', href: null },
  { Icon: FaGithub, label: 'GitHub', value: 'github.com/BaraaAlArab', href: 'https://github.com/BaraaAlArab' },
  { Icon: FaLinkedin, label: 'LinkedIn', value: 'linkedin.com/in/baraa-alarab', href: 'https://www.linkedin.com/in/baraa-alarab' },
]

export default function HireMePage() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <main className="mx-auto max-w-4xl px-6 py-16 sm:px-10">
      <p className="mb-3 text-sm tracking-widest text-cyan-300 uppercase">Hire Me</p>
      <h1 className="bg-gradient-to-r from-purple-300 via-pink-200 to-cyan-300 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
        Let's work together
      </h1>
      <p className="mt-4 max-w-md text-white/60">
        Have a project in mind? Send me a message and let's build something great.
      </p>

      <section className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {contactCards.map(({ Icon, label, value, href }) => {
          const Card = href ? 'a' : 'div'
          return (
            <Card
              key={label}
              {...(href ? { href, target: '_blank', rel: 'noreferrer' } : {})}
              className="rounded-2xl border border-white/15 bg-white/5 p-5 backdrop-blur-md transition hover:bg-white/10"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-purple-400/50 to-cyan-400/50">
                <Icon className="h-5 w-5 text-cyan-200" />
              </div>
              <h3 className="text-xs tracking-wide text-white/50 uppercase">{label}</h3>
              <p className="mt-1 truncate text-sm font-medium">{value}</p>
            </Card>
          )
        })}
      </section>

      <section className="mt-8 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-md sm:p-8">
        {sent ? (
          <div className="py-10 text-center">
            <h3 className="text-2xl font-semibold">Message sent! 🎉</h3>
            <p className="mt-2 text-white/60">I'll get back to you soon.</p>
            <button
              onClick={() => setSent(false)}
              className="mt-6 rounded-full border border-white/25 bg-white/5 px-6 py-2.5 text-sm font-medium backdrop-blur-md transition hover:bg-white/15"
            >
              Send another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="grid gap-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <input
                type="text"
                required
                placeholder="Your Name"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-cyan-400/60 focus:outline-none"
              />
              <input
                type="email"
                required
                placeholder="Your Email"
                className="rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-cyan-400/60 focus:outline-none"
              />
            </div>
            <textarea
              required
              rows="5"
              placeholder="Tell me about your project..."
              className="resize-none rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-white placeholder-white/40 transition focus:border-cyan-400/60 focus:outline-none"
            />
            <button
              type="submit"
              className="flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-purple-500 to-cyan-400 px-7 py-3 font-medium transition hover:scale-[1.02]"
            >
              <Send className="h-4 w-4" /> Send Message
            </button>
          </form>
        )}
      </section>
    </main>
  )
}
