import { Download, FileText, ShieldCheck } from 'lucide-react'
import { useInView } from '../hooks/useInView'

function DocumentMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto select-none">
      {/* Glow effect behind card */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-400/20 to-cyan-600/10 blur-2xl scale-105" />

      {/* Main document card */}
      <div className="relative bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden">
        {/* App header bar */}
        <div className="bg-slate-800 px-4 py-3 flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-400" />
            <span className="w-3 h-3 rounded-full bg-yellow-400" />
            <span className="w-3 h-3 rounded-full bg-green-400" />
          </div>
          <div className="flex-1 bg-slate-700 rounded-md h-5 mx-4 flex items-center px-2">
            <span className="text-slate-400 text-[10px] font-mono">Anonimizador de PDFs</span>
          </div>
        </div>

        {/* Document body */}
        <div className="p-6">
          {/* Top metadata lines */}
          <div className="mb-5 space-y-1.5">
            <div className="h-2.5 bg-slate-200 rounded-full w-3/4" />
            <div className="h-2.5 bg-slate-200 rounded-full w-1/2" />
          </div>

          {/* Text lines with redaction bars */}
          <div className="space-y-3">
            {/* Line with partial redaction */}
            <div className="flex items-center gap-2">
              <div className="h-2.5 bg-slate-200 rounded-full w-16" />
              <div className="h-5 bg-slate-900 rounded w-28 shadow-sm" />
              <div className="h-2.5 bg-slate-200 rounded-full w-10" />
            </div>

            {/* Normal line */}
            <div className="h-2.5 bg-slate-200 rounded-full w-full" />

            {/* Full redaction bar */}
            <div className="h-5 bg-slate-900 rounded w-4/5 shadow-sm" />

            {/* Line with partial redaction */}
            <div className="flex items-center gap-2">
              <div className="h-2.5 bg-slate-200 rounded-full w-20" />
              <div className="h-5 bg-slate-900 rounded w-20 shadow-sm" />
              <div className="h-2.5 bg-slate-200 rounded-full w-16" />
            </div>

            {/* Normal lines */}
            <div className="h-2.5 bg-slate-200 rounded-full w-5/6" />
            <div className="h-2.5 bg-slate-200 rounded-full w-3/4" />

            {/* Another redaction */}
            <div className="flex items-center gap-2">
              <div className="h-2.5 bg-slate-200 rounded-full w-12" />
              <div className="h-5 bg-slate-900 rounded w-36 shadow-sm" />
            </div>

            <div className="h-2.5 bg-slate-200 rounded-full w-full" />
            <div className="h-2.5 bg-slate-200 rounded-full w-2/3" />

            {/* Bottom redaction */}
            <div className="h-5 bg-slate-900 rounded w-3/5 shadow-sm" />
          </div>

          {/* Bottom status bar */}
          <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse" />
              <span className="text-[10px] text-slate-400 font-medium">Procesando...</span>
            </div>
            <span className="text-[10px] text-slate-400">4 detecciones</span>
          </div>
        </div>
      </div>

      {/* Floating shield badge */}
      <div className="absolute -top-4 -right-4 bg-cyan-500 text-white rounded-2xl p-3 shadow-lg shadow-cyan-500/30">
        <ShieldCheck className="w-6 h-6" strokeWidth={2.5} />
      </div>

      {/* Floating document badge */}
      <div className="absolute -bottom-4 -left-4 bg-white border border-slate-200 rounded-2xl px-4 py-2.5 shadow-lg flex items-center gap-2">
        <FileText className="w-4 h-4 text-slate-500" />
        <span className="text-xs font-semibold text-slate-700">RGPD Compliant</span>
      </div>
    </div>
  )
}

export default function Hero() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section
      className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden"
      id="hero"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[600px] bg-gradient-to-b from-cyan-50 to-transparent rounded-full blur-3xl opacity-60" />
      </div>

      <div
        ref={ref}
        className="relative max-w-6xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-16"
      >
        {/* Text column */}
        <div
          className={`flex-1 text-center lg:text-left transition-all duration-700 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-cyan-50 border border-cyan-100 text-cyan-700 text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            <ShieldCheck className="w-3.5 h-3.5" />
            Cumple el Reglamento (UE) 2016/679 — RGPD
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-[1.1] tracking-tight mb-6">
            Protege la privacidad de tus{' '}
            <span className="text-cyan-500">documentos PDF</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg text-slate-500 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
            Anonimización automática de datos personales conforme al RGPD.
            100% local, sin conexión a Internet. Procesa PDFs escaneados con
            OCR, IA y patrones regex personalizables.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 mb-10">
            <a
              href="#descargar"
              className="inline-flex items-center gap-2.5 bg-cyan-500 hover:bg-cyan-600 text-white font-semibold text-sm px-7 py-3.5 rounded-full shadow-md shadow-cyan-500/25 hover:shadow-lg hover:shadow-cyan-500/30 transition-all duration-200 active:scale-95"
            >
              <Download className="w-4 h-4" />
              Descargar gratis
            </a>
            <a
              href="#documentacion"
              className="inline-flex items-center gap-2.5 border border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900 font-semibold text-sm px-7 py-3.5 rounded-full transition-all duration-200 hover:bg-slate-50 active:scale-95"
            >
              Ver documentación
            </a>
          </div>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
            {[
              { icon: '🔒', label: '100% Local' },
              { icon: '☁️', label: 'Sin datos en la nube' },
              { icon: '✅', label: 'Uso libre' },
            ].map(({ icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-1.5 text-slate-500 text-sm"
              >
                <span>{icon}</span>
                <span className="font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Visual column */}
        <div
          className={`flex-1 w-full transition-all duration-700 delay-150 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <DocumentMockup />
        </div>
      </div>
    </section>
  )
}
