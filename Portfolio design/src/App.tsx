import { useState, useEffect } from 'react'

// ── Palette ───────────────────────────────────────────────────────────────────
// bg:      #0c1014   surface: #111820   elevated: #172030
// border:  #1d2d3e   text:    #dde4ed   body:     #b0bfcf   muted: #6b7f95
// green:   #00e676   blue:    #5c9dff

const G      = '#00e676'
const B      = '#5c9dff'
const surface  = '#111820'
const elevated = '#172030'
const border   = '#1d2d3e'

// ── Data ──────────────────────────────────────────────────────────────────────

const GITHUB = 'https://github.com/yourusername'
const NAV    = ['home', 'about', 'projects', 'skills', 'contact']

const PROJECTS = [
  {
    id: '01', title: 'AI Agent Orchestration System',
    desc: 'Modular multi-agent framework — agents call tools, share memory, spawn sub-tasks. Exposed as FastAPI REST endpoints.',
    tags: ['Python', 'FastAPI', 'MongoDB'], type: 'Personal', year: '2024',
    github: `${GITHUB}/ai-agent-system`, live: null as string | null,
  },
  {
    id: '02', title: 'Distributed Task Queue',
    desc: 'Python workers + Redis queue with priority lanes, retries, and dead-letter handling. Containerised with Docker on Linux.',
    tags: ['Python', 'Redis', 'Docker'], type: 'Personal', year: '2024',
    github: `${GITHUB}/task-queue`, live: null as string | null,
  },
  {
    id: '03', title: 'Full-Stack Blog Platform',
    desc: 'FastAPI back-end, MySQL database, React.js frontend with JWT auth and markdown rendering.',
    tags: ['FastAPI', 'React.js', 'MySQL'], type: 'Academic', year: '2024',
    github: `${GITHUB}/blog-platform`, live: 'https://blog-demo.yoursite.dev',
  },
  {
    id: '04', title: 'E-Commerce REST API',
    desc: 'Product catalogue and order management API — pagination, filtering, indexing, role-based access control.',
    tags: ['FastAPI', 'MariaDB', 'SQL'], type: 'Academic', year: '2023',
    github: `${GITHUB}/ecommerce-api`, live: null as string | null,
  },
  {
    id: '05', title: 'LLM-Integrated Q&A System',
    desc: 'RAG pipeline over custom docs — chunks, embeds, stores in vector DB, retrieves context for LLM responses.',
    tags: ['Python', 'FastAPI', 'RAG'], type: 'Personal', year: '2024',
    github: `${GITHUB}/llm-qa`, live: 'https://qa-demo.yoursite.dev',
  },
  {
    id: '06', title: 'CLI DevOps Toolkit',
    desc: 'Python CLI for server provisioning, Docker management, and env setup on Linux.',
    tags: ['Python', 'Docker', 'Linux'], type: 'Personal', year: '2023',
    github: `${GITHUB}/devops-toolkit`, live: null as string | null,
  },
]

const SKILLS = [
  { group: 'Languages',      items: ['Python', 'JavaScript', 'TypeScript', 'SQL', 'Bash'] },
  { group: 'Backend',        items: ['FastAPI', 'REST API', 'gRPC', 'WebSockets'] },
  { group: 'Databases',      items: ['MySQL', 'MariaDB', 'MongoDB', 'Redis'] },
  { group: 'AI / ML',        items: ['AI Agents', 'LLM Integration', 'RAG', 'Vector DBs'] },
  { group: 'Cloud & DevOps', items: ['Docker', 'Linux', 'CI/CD', 'Distributed Systems'] },
  { group: 'Frontend',       items: ['React.js', 'HTML', 'CSS', 'Tailwind CSS'] },
]

// ── Icons ─────────────────────────────────────────────────────────────────────

function GithubIcon({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
    </svg>
  )
}

function ExternalIcon({ size = 13 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
      <polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
    </svg>
  )
}

// ── Shared components ─────────────────────────────────────────────────────────

function Prompt({ path = '~' }: { path?: string }) {
  return (
    <span className="select-none shrink-0">
      <span style={{ color: G }}>❯</span>
      <span style={{ color: '#4a6070' }}> {path} </span>
    </span>
  )
}

function SectionHeader({ cmd, index }: { cmd: string; index: string }) {
  return (
    <div className="mb-12">
      <p className="text-xs mb-2" style={{ color: '#3d5166' }}># {index}</p>
      <div className="flex items-center gap-2 text-sm mb-4">
        <Prompt />
        <span style={{ color: G }} className="font-medium">{cmd}</span>
      </div>
      <div className="h-px" style={{ background: `linear-gradient(90deg, ${border} 60%, transparent)` }} />
    </div>
  )
}

function Tag({ label }: { label: string }) {
  return (
    <span className="text-[11px] px-2 py-0.5 rounded" style={{ background: '#0e1a27', border: `1px solid ${border}`, color: '#7a9ab8' }}>
      {label}
    </span>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────────────

function Navbar() {
  const [active, setActive] = useState('home')
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20)
      for (const n of NAV) {
        const el = document.getElementById(n)
        if (!el) continue
        const r = el.getBoundingClientRect()
        if (r.top <= 70 && r.bottom > 70) { setActive(n); break }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-200"
      style={{
        background: scrolled ? 'rgba(12,16,20,0.95)' : 'transparent',
        borderBottom: scrolled ? `1px solid ${border}` : 'none',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
      }}
    >
      <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#home" className="text-sm font-bold" style={{ color: G }}>~/dev</a>

        <nav className="hidden md:flex items-center gap-1">
          {NAV.map(n => (
            <a key={n} href={`#${n}`}
              className="px-3 py-1.5 rounded text-xs transition-all duration-150"
              style={{ color: active === n ? G : '#8aaccc', background: active === n ? '#00e67612' : 'transparent' }}>
              {active === n && <span style={{ color: '#4a6070' }}>./</span>}{n}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a href={GITHUB} target="_blank" rel="noopener noreferrer"
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs font-medium transition-all duration-150"
            style={{ border: `1px solid ${border}`, color: '#dde4ed', background: surface }}
            onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = G; el.style.color = G }}
            onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = border; el.style.color = '#dde4ed' }}>
            <GithubIcon size={14} /><span className="hidden sm:inline">GitHub</span>
          </a>
          <button className="md:hidden text-xs px-2 py-1 rounded" style={{ color: '#8aaccc', border: `1px solid ${border}` }} onClick={() => setOpen(!open)}>
            {open ? '[x]' : '[≡]'}
          </button>
        </div>
      </div>

      {open && (
        <div style={{ background: '#0c1014', borderTop: `1px solid ${border}` }}>
          {NAV.map(n => (
            <a key={n} href={`#${n}`} onClick={() => setOpen(false)}
              className="flex items-center gap-2 px-6 py-3.5 text-sm"
              style={{ borderBottom: `1px solid ${border}`, color: active === n ? G : '#8aaccc' }}>
              <span style={{ color: G }}>$</span> ./{n}
            </a>
          ))}
        </div>
      )}
    </header>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────────────

function Hero() {
  const roles = ['Full Stack Developer', 'Back-End Engineer', 'Cloud Architect', 'AI Systems Builder']
  const [ri, setRi] = useState(0)
  const [typed, setTyped] = useState('')
  const [del, setDel] = useState(false)

  useEffect(() => {
    const cur = roles[ri]
    if (!del && typed.length < cur.length) { const t = setTimeout(() => setTyped(cur.slice(0, typed.length + 1)), 55); return () => clearTimeout(t) }
    if (!del && typed.length === cur.length) { const t = setTimeout(() => setDel(true), 2400); return () => clearTimeout(t) }
    if (del && typed.length > 0) { const t = setTimeout(() => setTyped(typed.slice(0, -1)), 30); return () => clearTimeout(t) }
    if (del && typed.length === 0) { setDel(false); setRi(i => (i + 1) % roles.length) }
  }, [typed, del, ri])

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
      <div className="pt-24 pb-16">

        {/* Terminal window */}
        <div className="rounded-xl overflow-hidden mb-10" style={{ border: `1px solid ${border}` }}>
          {/* Title bar */}
          <div className="flex items-center gap-2 px-4 py-2.5" style={{ background: elevated, borderBottom: `1px solid ${border}` }}>
            <span className="w-3 h-3 rounded-full" style={{ background: '#ff5f57' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#febc2e' }} />
            <span className="w-3 h-3 rounded-full" style={{ background: '#28c840' }} />
            <span className="mx-auto text-xs" style={{ color: '#3d5166' }}>zsh  —  portfolio  —  80×24</span>
          </div>

          {/* Terminal content */}
          <div className="p-6" style={{ background: surface }}>
            {/* whoami */}
            <div className="flex items-center gap-2 text-sm mb-1">
              <Prompt /><span style={{ color: '#8aaccc' }}>whoami</span>
            </div>
            <div className="pl-8 mb-5">
              <p className="text-base font-semibold" style={{ color: '#dde4ed' }}>Your Name</p>
              <p className="text-sm" style={{ color: '#7a9ab8' }}>Final Year CS Student  ·  Open to Work</p>
            </div>

            {/* role */}
            <div className="flex items-center gap-2 text-sm mb-1">
              <Prompt /><span style={{ color: '#8aaccc' }}>cat role.txt</span>
            </div>
            <div className="pl-8 mb-5 flex items-center gap-1.5 h-7">
              <span className="text-sm font-medium" style={{ color: G }}>{typed}</span>
              <span className="text-sm blink" style={{ color: G }}>▊</span>
            </div>

            {/* bio */}
            <div className="flex items-center gap-2 text-sm mb-1">
              <Prompt /><span style={{ color: '#8aaccc' }}>cat bio.txt</span>
            </div>
            <p className="pl-8 text-sm leading-relaxed mb-6" style={{ color: '#b0bfcf', maxWidth: '54ch' }}>
              I build backends, AI agents, and cloud-native systems. Final-year B.Tech CS student,
              ready to contribute from day one.
            </p>

            {/* links */}
            <div className="flex items-center gap-2 text-sm mb-3">
              <Prompt /><span style={{ color: '#8aaccc' }}>open --links</span>
            </div>
            <div className="pl-8 flex flex-wrap gap-3">
              <a href={GITHUB} target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded text-sm font-semibold transition-all duration-150"
                style={{ background: G, color: '#0c1014' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#22f587')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = G)}>
                <GithubIcon size={15} /> View GitHub
              </a>
              <a href="#projects"
                className="px-4 py-2 rounded text-sm transition-all duration-150"
                style={{ border: `1px solid ${border}`, color: '#dde4ed', background: elevated }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = G)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = border)}>
                ./projects
              </a>
              <a href="#contact"
                className="px-4 py-2 rounded text-sm transition-all duration-150"
                style={{ border: `1px solid ${border}`, color: '#dde4ed', background: elevated }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = B)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = border)}>
                ./contact
              </a>
            </div>
          </div>
        </div>

        {/* env-var stats */}
        <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm">
          {[
            { k: 'PROJECTS',   v: '6+' },
            { k: 'STACK_SIZE', v: '20+' },
            { k: 'EXPERIENCE', v: '1yr' },
            { k: 'STATUS',     v: '"hiring_open"' },
          ].map(s => (
            <div key={s.k}>
              <span style={{ color: B }}>{s.k}</span>
              <span style={{ color: '#4a6070' }}>=</span>
              <span style={{ color: G }}>{s.v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────────────

function About() {
  const rows = [
    { k: 'degree',   v: 'B.Tech — Computer Science' },
    { k: 'year',     v: 'Final Year  →  2025' },
    { k: 'focus',    v: 'Back-End · AI Systems · Cloud' },
    { k: 'location', v: 'India  [remote OK]' },
    { k: 'status',   v: 'Seeking first professional role' },
    { k: 'open_to',  v: 'Full-time | Internship | Contract' },
    { k: 'github',   v: 'github.com/yourusername', link: GITHUB },
  ]

  return (
    <section id="about" style={{ borderTop: `1px solid ${border}` }}>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeader cmd="about --full" index="01" />

        <div className="grid md:grid-cols-2 gap-14">
          <div className="space-y-4 text-sm leading-relaxed" style={{ color: '#b0bfcf' }}>
            <p>
              Final-year Computer Science student who got obsessed with back-end systems early.
              While most students followed tutorials, I was shipping REST APIs, AI agent frameworks,
              distributed task queues, and LLM pipelines from scratch.
            </p>
            <p>
              Core stack: Python + FastAPI for back-ends, MongoDB and MySQL for data, Docker and Linux
              for deployment, React.js when the frontend is mine to own.
            </p>
            <p>
              I learn by building real things. Every project here started with a problem I wanted to solve.
            </p>
            <div className="rounded p-4 text-xs leading-relaxed" style={{ background: elevated, border: `1px solid ${border}` }}>
              <span style={{ color: G }}>// note</span>
              <span style={{ color: '#6b7f95' }}> A fresher with production-level thinking. Ready to contribute from day one.</span>
            </div>
          </div>

          <div>
            {rows.map(r => (
              <div key={r.k} className="flex items-start gap-4 py-3 text-sm" style={{ borderBottom: `1px solid ${border}` }}>
                <span className="w-20 shrink-0 pt-0.5 font-medium" style={{ color: B }}>{r.k}</span>
                <span style={{ color: '#4a6070' }}>=</span>
                {r.link ? (
                  <a href={r.link} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors"
                    style={{ color: G }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.textDecoration = 'underline')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.textDecoration = 'none')}>
                    "{r.v}"
                  </a>
                ) : (
                  <span style={{ color: '#dde4ed' }}>"{r.v}"</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Projects ──────────────────────────────────────────────────────────────────

function Projects() {
  const [filter, setFilter] = useState('all')
  const list = filter === 'all' ? PROJECTS : PROJECTS.filter(p => p.type.toLowerCase() === filter)

  return (
    <section id="projects" style={{ borderTop: `1px solid ${border}` }}>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeader cmd="ls -la ./projects" index="02" />

        <div className="flex items-center gap-2 mb-8 text-xs">
          <span style={{ color: '#4a6070' }}>filter:</span>
          {['all', 'personal', 'academic'].map(f => (
            <button key={f} onClick={() => setFilter(f)}
              className="px-3 py-1 rounded transition-all duration-150"
              style={{ border: `1px solid ${filter === f ? G : border}`, color: filter === f ? G : '#8aaccc', background: filter === f ? '#00e67612' : 'transparent' }}>
              {f}
            </button>
          ))}
          <span style={{ color: '#4a6070' }} className="ml-1">{list.length} items</span>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {list.map(p => (
            <div key={p.id}
              className="flex flex-col rounded-lg overflow-hidden transition-all duration-200"
              style={{ border: `1px solid ${border}`, background: surface }}
              onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = '#2a4060')}
              onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = border)}>

              {/* Card header */}
              <div className="flex items-center justify-between px-4 py-2.5" style={{ background: elevated, borderBottom: `1px solid ${border}` }}>
                <div className="flex items-center gap-2">
                  <span className="text-xs" style={{ color: '#3d5166' }}>[{p.id}]</span>
                  <span className="text-[10px] px-2 py-0.5 rounded"
                    style={{
                      background: p.type === 'Personal' ? '#00e67610' : '#5c9dff10',
                      border: `1px solid ${p.type === 'Personal' ? '#00e67628' : '#5c9dff28'}`,
                      color: p.type === 'Personal' ? G : B,
                    }}>
                    {p.type}
                  </span>
                </div>
                <span className="text-[10px]" style={{ color: '#4a6070' }}>{p.year}</span>
              </div>

              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-sm font-semibold mb-2 leading-snug" style={{ color: '#dde4ed' }}>{p.title}</h3>
                <p className="text-xs leading-relaxed flex-1 mb-3" style={{ color: '#8aaccc' }}>{p.desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">{p.tags.map(t => <Tag key={t} label={t} />)}</div>

                <div className="flex items-center gap-5 pt-3" style={{ borderTop: `1px solid ${border}` }}>
                  <a href={p.github} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs transition-colors"
                    style={{ color: '#7a9ab8' }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = G)}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#7a9ab8')}>
                    <GithubIcon size={13} /> Code
                  </a>
                  {p.live ? (
                    <a href={p.live} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs transition-colors"
                      style={{ color: '#7a9ab8' }}
                      onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = B)}
                      onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#7a9ab8')}>
                      <ExternalIcon size={12} /> Live Demo
                    </a>
                  ) : (
                    <span className="text-xs italic" style={{ color: '#2e4055' }}>no live demo</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <a href={GITHUB} target="_blank" rel="noopener noreferrer"
          className="mt-4 flex items-center justify-between px-5 py-4 rounded-lg transition-all duration-200"
          style={{ border: `1px solid ${border}`, background: surface }}
          onMouseEnter={e => ((e.currentTarget as HTMLElement).style.borderColor = G)}
          onMouseLeave={e => ((e.currentTarget as HTMLElement).style.borderColor = border)}>
          <div className="flex items-center gap-3">
            <span style={{ color: G }}><GithubIcon size={18} /></span>
            <div>
              <div className="text-sm font-medium" style={{ color: '#dde4ed' }}>See all projects on GitHub</div>
              <div className="text-xs" style={{ color: '#4a6070' }}>{GITHUB}</div>
            </div>
          </div>
          <span className="text-sm font-bold" style={{ color: G }}>→</span>
        </a>
      </div>
    </section>
  )
}

// ── Skills ────────────────────────────────────────────────────────────────────

function Skills() {
  return (
    <section id="skills" style={{ borderTop: `1px solid ${border}` }}>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeader cmd="cat skills.json" index="03" />

        {/* JSON display */}
        <div className="rounded-xl overflow-hidden mb-10" style={{ border: `1px solid ${border}` }}>
          <div className="flex items-center gap-2 px-4 py-2" style={{ background: elevated, borderBottom: `1px solid ${border}` }}>
            <span className="text-xs" style={{ color: '#4a6070' }}>skills.json</span>
          </div>
          <div className="p-5" style={{ background: surface }}>
            <div className="text-sm mb-3" style={{ color: '#4a6070' }}>{'{'}</div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-6 pl-5">
              {SKILLS.map((g, gi) => (
                <div key={g.group}>
                  <div className="text-xs mb-2">
                    <span style={{ color: B }}>"{g.group}"</span>
                    <span style={{ color: '#4a6070' }}>: [</span>
                  </div>
                  <div className="pl-3 space-y-1.5">
                    {g.items.map((item, j) => (
                      <div key={item} className="text-xs flex items-center gap-1">
                        <span style={{ color: G }}>"{item}"</span>
                        {j < g.items.length - 1 && <span style={{ color: '#3d5166' }}>,</span>}
                      </div>
                    ))}
                  </div>
                  <div className="text-xs mt-1.5" style={{ color: '#4a6070' }}>]{gi < SKILLS.length - 1 ? ',' : ''}</div>
                </div>
              ))}
            </div>
            <div className="text-sm mt-4" style={{ color: '#4a6070' }}>{'}'}</div>
          </div>
        </div>

        {/* Full stack */}
        <div className="flex items-center gap-2 text-xs mb-3">
          <Prompt /><span style={{ color: '#8aaccc' }}>echo $FULL_STACK</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {['Python','FastAPI','React.js','JavaScript','TypeScript','SQL','MongoDB','MariaDB','MySQL','Redis','Linux','Docker','Bash','HTML','CSS','Tailwind CSS','REST API','gRPC','WebSockets','AI Agents','LLM','RAG','Vector DBs','Git','CI/CD'].map(t => (
            <span key={t} className="text-xs px-2.5 py-1 rounded cursor-default transition-all duration-150"
              style={{ border: `1px solid ${border}`, color: '#8aaccc', background: '#0e1a27' }}
              onMouseEnter={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = '#2a4060'; el.style.color = '#dde4ed' }}
              onMouseLeave={e => { const el = e.currentTarget as HTMLElement; el.style.borderColor = border; el.style.color = '#8aaccc' }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────────────

function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const inputBase = {
    background: elevated, border: `1px solid ${border}`, color: '#dde4ed',
    fontFamily: 'JetBrains Mono, monospace', fontSize: '13px',
    outline: 'none', borderRadius: '6px', width: '100%',
    padding: '10px 14px', transition: 'border-color 0.15s',
  } as const

  return (
    <section id="contact" style={{ borderTop: `1px solid ${border}` }}>
      <div className="max-w-5xl mx-auto px-6 py-20">
        <SectionHeader cmd="send --message" index="04" />

        <div className="grid md:grid-cols-2 gap-14">
          <div>
            <p className="text-sm leading-relaxed mb-8" style={{ color: '#b0bfcf' }}>
              Looking for my first professional role in back-end or full-stack engineering.
              Open to full-time, internship, or freelance projects.
            </p>
            {[
              { k: 'email',    v: 'hello@yourportfolio.dev', href: 'mailto:hello@yourportfolio.dev' },
              { k: 'github',   v: 'github.com/yourusername', href: GITHUB },
              { k: 'linkedin', v: 'linkedin.com/in/yourname', href: 'https://linkedin.com' },
              { k: 'open_to',  v: 'Full-time | Internship | Contract' },
              { k: 'location', v: 'India  [remote OK]' },
            ].map(x => (
              <div key={x.k} className="flex items-start gap-4 py-3 text-sm" style={{ borderBottom: `1px solid ${border}` }}>
                <span className="w-20 shrink-0 pt-0.5 font-medium" style={{ color: B }}>{x.k}</span>
                <span style={{ color: '#4a6070' }}>=</span>
                {x.href ? (
                  <a href={x.href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-1 transition-colors"
                    style={{ color: G }}
                    onMouseEnter={e => ((e.currentTarget as HTMLElement).style.textDecoration = 'underline')}
                    onMouseLeave={e => ((e.currentTarget as HTMLElement).style.textDecoration = 'none')}>
                    "{x.v}"
                  </a>
                ) : (
                  <span style={{ color: '#dde4ed' }}>"{x.v}"</span>
                )}
              </div>
            ))}
          </div>

          {sent ? (
            <div className="flex flex-col items-center justify-center gap-4 rounded-xl p-10 text-center"
              style={{ border: `1px solid #00e67630`, background: '#00e67806' }}>
              <span className="text-3xl" style={{ color: G }}>✓</span>
              <div className="text-sm font-semibold" style={{ color: G }}>message_sent</div>
              <p className="text-sm" style={{ color: '#8aaccc' }}>I'll reply within 24 hours.</p>
              <button onClick={() => { setSent(false); setForm({ name:'',email:'',message:'' }) }}
                className="text-xs mt-2" style={{ color: '#4a6070' }}>
                [send another]
              </button>
            </div>
          ) : (
            <form onSubmit={e => { e.preventDefault(); setSent(true) }} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: '#4a6070' }}>// name</label>
                  <input style={inputBase} placeholder="your name" value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    onFocus={e => (e.target.style.borderColor = G)} onBlur={e => (e.target.style.borderColor = border)} required />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: '#4a6070' }}>// email</label>
                  <input type="email" style={inputBase} placeholder="you@email.com" value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    onFocus={e => (e.target.style.borderColor = G)} onBlur={e => (e.target.style.borderColor = border)} required />
                </div>
              </div>
              <div>
                <label className="block text-xs mb-1.5" style={{ color: '#4a6070' }}>// message</label>
                <textarea style={{ ...inputBase, height: '140px', resize: 'none' as const }} placeholder="tell me about the role or project..."
                  value={form.message} onChange={e => setForm({...form, message: e.target.value})}
                  onFocus={e => (e.target.style.borderColor = G)} onBlur={e => (e.target.style.borderColor = border)} required />
              </div>
              <button type="submit"
                className="w-full py-2.5 rounded-lg text-sm font-bold transition-all duration-150"
                style={{ background: G, color: '#0c1014' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.background = '#22f587')}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.background = G)}>
                $ send_message --now
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────────────

function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${border}` }}>
      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-sm font-bold mb-1" style={{ color: G }}>~/dev/portfolio</div>
            <div className="text-xs" style={{ color: '#4a6070' }}>Final year CS student · Back-End · AI · Cloud</div>
          </div>
          <div className="flex flex-wrap gap-4">
            {[
              { label: 'GitHub',   href: GITHUB },
              { label: 'LinkedIn', href: 'https://linkedin.com' },
              { label: 'Twitter',  href: 'https://x.com' },
              { label: 'Email',    href: 'mailto:hello@example.com' },
              { label: 'Resume',   href: '#' },
            ].map(l => (
              <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer"
                className="text-xs transition-colors"
                style={{ color: '#6b7f95' }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = G)}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = '#6b7f95')}>
                {l.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-8 pt-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs"
          style={{ borderTop: `1px solid ${border}` }}>
          <span style={{ color: '#2e4055' }}>
            <span style={{ color: G }}>$</span>{' '}
            <span style={{ color: '#4a6070' }}>echo</span>{' '}
            <span style={{ color: '#8aaccc' }}>"© {new Date().getFullYear()} · built from scratch"</span>
          </span>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: G }} />
            <span style={{ color: '#4a6070' }}>process.status = <span style={{ color: G }}>"available"</span></span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────────────

export default function App() {
  return (
    <div style={{ background: '#0c1014', minHeight: '100vh' }}>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </div>
  )
}
