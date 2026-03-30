import { Monitor, AppWindow, Terminal } from 'lucide-react'
import { useInView } from '../hooks/useInView'

const RELEASES_BASE = 'https://github.com/xavierbasc/pdf-anonymizer/releases/latest/download'

const platforms = [
  {
    icon: Monitor,
    name: 'macOS',
    subtitle: 'Intel & Apple Silicon',
    file: 'PDFAnonymizer-macOS.zip',
    note: 'macOS 10.15 Catalina o superior',
    color: 'text-slate-700',
    bg: 'bg-slate-50',
    border: 'border-slate-200 hover:border-cyan-300',
  },
  {
    icon: AppWindow,
    name: 'Windows',
    subtitle: 'Windows 10 / 11',
    file: 'PDFAnonymizer-Windows.zip',
    note: 'x64, Windows 10 o superior',
    color: 'text-blue-700',
    bg: 'bg-blue-50',
    border: 'border-blue-100 hover:border-cyan-300',
  },
  {
    icon: Terminal,
    name: 'Linux',
    subtitle: 'Ubuntu / Debian',
    file: 'PDFAnonymizer-Linux.tar.gz',
    note: 'Ubuntu 20.04+ o equivalente',
    color: 'text-orange-700',
    bg: 'bg-orange-50',
    border: 'border-orange-100 hover:border-cyan-300',
  },
]

export default function Downloads() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section className="py-24 bg-white" id="descargar">
      <div ref={ref} className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div
          className="text-center mb-14"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Descargar
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Disponible para todas las plataformas
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Descarga gratuita. Sin registro, sin suscripción.
            Los modelos de IA se descargan por separado la primera vez.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid sm:grid-cols-3 gap-5">
          {platforms.map(({ icon: Icon, name, subtitle, file, note, color, bg, border }, idx) => (
            <a
              key={name}
              href={`${RELEASES_BASE}/${file}`}
              className={`group flex flex-col gap-4 rounded-2xl border p-7 transition-all duration-300 hover:shadow-lg ${bg} ${border}`}
              style={{
                opacity: isInView ? 1 : 0,
                transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                transition: `opacity 0.6s ease-out ${idx * 100}ms, transform 0.6s ease-out ${idx * 100}ms, box-shadow 0.3s ease`,
              }}
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center bg-white shadow-sm ${color}`}>
                <Icon className="w-6 h-6" strokeWidth={1.5} />
              </div>

              <div>
                <div className="text-lg font-bold text-slate-900 group-hover:text-cyan-600 transition-colors duration-200">
                  {name}
                </div>
                <div className="text-sm text-slate-500 mt-0.5">{subtitle}</div>
              </div>

              <div className="mt-auto">
                <span className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-400 bg-white border border-slate-100 rounded px-2 py-1">
                  {file}
                </span>
                <p className="text-xs text-slate-400 mt-2">{note}</p>
              </div>
            </a>
          ))}
        </div>

        {/* Models note */}
        <p
          className="text-center text-sm text-slate-400 mt-10"
          style={{
            opacity: isInView ? 1 : 0,
            transition: 'opacity 0.6s ease-out 400ms',
          }}
        >
          Los modelos de IA (~6.5 GB) se descargan una única vez al primer arranque
          o se copian desde la carpeta <code className="font-mono bg-slate-100 px-1 rounded">models/</code>.
        </p>
      </div>
    </section>
  )
}
