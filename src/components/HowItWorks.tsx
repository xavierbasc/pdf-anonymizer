import { FolderOpen, Cpu, ShieldCheck } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useInView } from '../hooks/useInView'

interface Step {
  number: string
  icon: LucideIcon
  title: string
  description: string
}

const steps: Step[] = [
  {
    number: '01',
    icon: FolderOpen,
    title: 'Selecciona los PDFs',
    description:
      'Elige la carpeta de entrada con tus documentos escaneados. La app los detecta automáticamente de forma recursiva.',
  },
  {
    number: '02',
    icon: Cpu,
    title: 'Procesamiento automático',
    description:
      'La app aplica OCR, NER y regex en tres pasadas sucesivas para detectar y anonimizar todos los datos personales identificados.',
  },
  {
    number: '03',
    icon: ShieldCheck,
    title: 'PDFs protegidos',
    description:
      'Obtén los documentos anonimizados en la carpeta de salida, listos para compartir, junto con el log de auditoría JSON.',
  },
]

export default function HowItWorks() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.1 })

  return (
    <section id="como-funciona" className="py-24 bg-white">
      <div ref={ref} className="max-w-6xl mx-auto px-6">
        {/* Section header */}
        <div
          className="text-center mb-16"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Cómo funciona
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Tres pasos para la privacidad total
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Un proceso completamente automatizado, sin configuraciones
            complejas ni conocimientos técnicos previos.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div
            className="hidden md:block absolute top-10 left-[calc(16.67%-0px)] right-[calc(16.67%-0px)] h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <article
                key={step.number}
                className="relative flex flex-col items-center text-center"
                style={{
                  opacity: isInView ? 1 : 0,
                  transform: isInView ? 'translateY(0)' : 'translateY(24px)',
                  transition: `opacity 0.6s ease-out ${idx * 120}ms, transform 0.6s ease-out ${idx * 120}ms`,
                }}
              >
                {/* Step indicator */}
                <div className="relative mb-6">
                  {/* Outer ring */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-cyan-50 to-cyan-100 border border-cyan-100 flex items-center justify-center shadow-sm">
                    <Icon className="w-8 h-8 text-cyan-600" strokeWidth={1.75} />
                  </div>
                  {/* Step number badge */}
                  <div className="absolute -top-1 -right-1 w-6 h-6 rounded-full bg-cyan-500 text-white text-[10px] font-bold flex items-center justify-center shadow-sm">
                    {idx + 1}
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-slate-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                  {step.description}
                </p>
              </article>
            )
          })}
        </div>

        {/* Technical detail strip */}
        <div
          className="mt-16 bg-slate-900 rounded-2xl p-6 md:p-8 grid sm:grid-cols-3 gap-6 text-center"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out 400ms, transform 0.6s ease-out 400ms',
          }}
        >
          {[
            { value: 'PaddleOCR v3', label: 'Motor OCR' },
            { value: 'xlm-roberta', label: 'Modelo NER' },
            { value: 'Qwen2.5-3B', label: 'LLM opcional' },
          ].map(({ value, label }) => (
            <div key={label}>
              <div className="text-cyan-400 font-bold text-lg mb-1">{value}</div>
              <div className="text-slate-400 text-sm">{label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
