import { ShieldCheck } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 pb-10 border-b border-slate-800">
          {/* Brand */}
          <div className="flex flex-col gap-3 max-w-xs">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-white font-semibold text-lg"
            >
              <ShieldCheck className="w-6 h-6 text-cyan-500" strokeWidth={2} />
              PDF Anonymizer
            </a>
            <p className="text-sm leading-relaxed">
              Protección de datos personales en documentos PDF. 100% local,
              sin telemetría, cumplimiento RGPD garantizado.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <p>© 2025 Javier Báscones Velázquez. Todos los derechos reservados.</p>
          <p className="text-slate-600">
            Construido con{' '}
            <span className="text-slate-400">React + TypeScript + Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
