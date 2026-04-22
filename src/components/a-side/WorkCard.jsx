import { Briefcase, GraduationCap } from 'lucide-react'

const jobs = [
  {
    org: 'Instituto Cristiano Vicente López',
    roles: ['Líder TIC', 'Docente'],
    color: '#7da866',
  },
  {
    org: 'Colegio Jesús en el Huerto',
    roles: ['Docente Informática'],
    color: '#e08246',
  },
  {
    org: 'Espacio Cultural Despacio',
    roles: ['Taller de Robótica'],
    color: '#7da866',
  },
]

const education = [
  {
    title: 'Profesorado de Informática CONSUDEC V-5',
    detail: '2do año en curso',
  },
]

export default function WorkCard() {
  return (
    <div
      className="bg-dark-card border border-dark-border rounded-2xl p-6 flex flex-col gap-5 animate-fade-in-up"
      style={{ animationDelay: '80ms' }}
    >
      <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
        <Briefcase size={13} />
        <span>Experiencia</span>
      </div>

      <ul className="flex flex-col gap-4">
        {jobs.map((job) => (
          <li key={job.org} className="flex flex-col gap-1">
            <span
              className="text-sm font-heading font-bold leading-tight"
              style={{ color: job.color }}
            >
              {job.org}
            </span>
            <div className="flex gap-2 flex-wrap">
              {job.roles.map((r) => (
                <span
                  key={r}
                  className="text-xs text-white/60 border border-dark-border rounded-md px-2 py-0.5"
                >
                  {r}
                </span>
              ))}
            </div>
          </li>
        ))}
      </ul>

      <hr className="border-dark-border" />

      <div className="flex items-center gap-2 text-white/40 text-xs uppercase tracking-widest">
        <GraduationCap size={13} />
        <span>Educación</span>
      </div>

      {education.map((e) => (
        <div key={e.title} className="flex flex-col gap-0.5">
          <span className="text-sm text-white/80 font-sans leading-snug">{e.title}</span>
          <span className="text-xs text-forest">{e.detail}</span>
        </div>
      ))}
    </div>
  )
}
