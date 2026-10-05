import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Layers3,
  Mail,
  Sparkles,
} from 'lucide-react'

const skills = [
  { name: 'React', icon: Code2 },
  { name: 'Node.js', icon: Layers3 },
  { name: 'Python', icon: Code2 },
  { name: 'TypeScript', icon: Code2 },
  { name: 'PostgreSQL', icon: Database },
  { name: 'AI / LLMs', icon: BrainCircuit },
]

const principles = [
  'Build with clarity',
  'Make complexity feel simple',
  'Keep learning in public',
]

export default function Page() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7faff] text-slate-950">
      <div className="relative isolate">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[520px] w-[900px] -translate-x-1/2 rounded-full bg-blue-200/25 blur-3xl" />

        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 lg:px-8" aria-label="Main navigation">
          <a href="#top" className="flex items-center gap-3 font-semibold tracking-tight text-slate-950">
            <span className="grid size-9 place-items-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-lg shadow-blue-600/20">AK</span>
            <span>Ayush Kharya</span>
          </a>
          <div className="hidden items-center gap-8 text-sm font-medium text-slate-600 sm:flex">
            <a className="transition-colors hover:text-blue-600" href="#about">About</a>
            <a className="transition-colors hover:text-blue-600" href="#skills">Skills</a>
            <a className="transition-colors hover:text-blue-600" href="#contact">Contact</a>
          </div>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
            <Code2 data-icon="inline-start" /> GitHub <ArrowUpRight data-icon="inline-end" />
          </a>
        </nav>

        <section id="top" className="mx-auto grid max-w-6xl items-center gap-16 px-6 pb-24 pt-16 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:pb-32 lg:pt-24">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-blue-700">
              <span className="size-1.5 rounded-full bg-blue-600" /> Software engineer
            </div>
            <h1 className="max-w-3xl text-5xl font-semibold leading-[1.04] tracking-[-0.05em] text-slate-950 sm:text-6xl lg:text-7xl">
              Building thoughtful software for a world shaped by <span className="text-blue-600">AI.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-slate-600">
              I&apos;m Ayush Kharya. I work across product engineering and AI/LLM technologies, turning ideas into clear, capable digital experiences.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <a href="#skills" className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-xl shadow-blue-600/20 transition-all hover:-translate-y-0.5 hover:bg-blue-700">
                Explore my skills <ArrowUpRight data-icon="inline-end" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition-all hover:-translate-y-0.5 hover:border-blue-200 hover:text-blue-700">
                Get in touch
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md">
            <div className="absolute -inset-5 rounded-[2.5rem] bg-blue-600/10 blur-2xl" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/80 bg-slate-950 p-5 shadow-2xl shadow-blue-900/15">
              <div className="flex items-center justify-between border-b border-white/10 pb-4 text-xs text-slate-400">
                <span className="flex items-center gap-2"><span className="size-2 rounded-full bg-emerald-400" /> available to build</span>
                <span>01 / portfolio.ts</span>
              </div>
              <div className="py-8 font-mono text-sm leading-8 sm:text-base">
                <p className="text-slate-500">01 <span className="ml-5 text-blue-300">const</span> <span className="text-white">developer</span> = {'{'}</p>
                <p className="pl-10 text-slate-300">name: <span className="text-amber-300">&apos;Ayush Kharya&apos;</span>,</p>
                <p className="pl-10 text-slate-300">focus: <span className="text-amber-300">&apos;software + AI&apos;</span>,</p>
                <p className="pl-10 text-slate-300">stack: <span className="text-amber-300">&apos;React, Node, Python&apos;</span>,</p>
                <p className="pl-10 text-slate-300">mindset: <span className="text-amber-300">&apos;keep shipping&apos;</span></p>
                <p className="text-slate-500">06 {'}'}</p>
                <p className="mt-7 text-slate-500">07 <span className="ml-5 text-blue-300">export default</span> <span className="text-white">developer</span></p>
              </div>
              <div className="flex items-center justify-between rounded-xl bg-white/5 px-4 py-3 text-xs text-slate-400">
                <span>clean code / useful outcomes</span><Sparkles className="text-blue-300" />
              </div>
            </div>
          </div>
        </section>
      </div>

      <section id="skills" className="border-y border-slate-200/80 bg-white/70">
        <div className="mx-auto max-w-6xl px-6 py-20 lg:px-8 lg:py-24">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">The toolkit</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Tools for turning ideas into working software.</h2>
            <p className="mt-4 text-base leading-7 text-slate-600">A practical, flexible stack for building modern products from interface to infrastructure.</p>
          </div>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map(({ name, icon: Icon }) => (
              <div key={name} className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-blue-900/5">
                <span className="grid size-11 place-items-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white"><Icon /></span>
                <span className="font-semibold text-slate-800">{name}</span>
                <Check className="ml-auto text-blue-500 opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="mx-auto grid max-w-6xl gap-14 px-6 py-20 lg:grid-cols-[.8fr_1.2fr] lg:px-8 lg:py-28">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600">A little about me</p>
          <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em] text-slate-950 sm:text-4xl">Curious by default. Intentional by design.</h2>
        </div>
        <div className="grid gap-8 text-lg leading-8 text-slate-600">
          <p>My work sits at the intersection of software development and emerging AI capabilities. I care about the details that make products feel reliable, understandable, and genuinely useful.</p>
          <p>I enjoy learning new systems, making complex ideas approachable, and shipping work that creates momentum.</p>
          <div className="grid gap-3 border-t border-slate-200 pt-7 sm:grid-cols-3">
            {principles.map((principle) => <div key={principle} className="text-sm font-semibold leading-6 text-slate-800">{principle}</div>)}
          </div>
        </div>
      </section>

      <section id="contact" className="mx-6 mb-8 overflow-hidden rounded-[2rem] bg-blue-600 px-6 py-14 text-white sm:px-12 lg:mx-auto lg:max-w-6xl lg:py-16">
        <div className="flex flex-col justify-between gap-10 md:flex-row md:items-end">
          <div className="max-w-xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-100">Let&apos;s connect</p>
            <h2 className="mt-3 text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">Have an idea worth building?</h2>
            <p className="mt-4 max-w-lg leading-7 text-blue-100">Find more about my work and experience on GitHub.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="https://github.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-blue-700 transition hover:bg-blue-50"><Code2 data-icon="inline-start" /> GitHub <ArrowUpRight data-icon="inline-end" /></a>
            <a href="mailto:" className="inline-flex items-center gap-2 rounded-full border border-blue-300 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-500"><Mail data-icon="inline-start" /> Email me</a>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {new Date().getFullYear()} Ayush Kharya</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" target="_blank" rel="noreferrer" className="transition-colors hover:text-blue-600"><Code2 aria-label="GitHub" /></a>
          <a href="#top" className="transition-colors hover:text-blue-600">Back to top ↑</a>
        </div>
      </footer>
    </main>
  )
}
