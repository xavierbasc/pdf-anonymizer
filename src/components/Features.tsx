import { ScanText, Brain, Regex, Lock, Scale, ClipboardList } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useInView } from '../hooks/useInView'

interface Feature {
  icon: LucideIcon
  title: string
  description: string
  accent: string
}

const features: Feature[] = [
  {
    icon: ScanText,
    title: 'OCR Inteligente',
    description:
      'PaddleOCR v3 reconoce texto en PDFs escaneados con alta precisión, incluso en documentos de baja resolución o con ruido.',
    accent: 'bg-cyan-50 text-cyan-600',
  },
  {
    icon: Brain,
    title: 'Detección NER',
    description:
      'El modelo xlm-roberta identifica nombres, apellidos, direcciones y datos personales en múltiples idiomas con alta fiabilidad.',
    accent: 'bg-violet-50 text-violet-600',
  },
  {
    icon: Regex,
    title: 'Regex personalizable',
    description:
      'Patrones integrados para DNI, NIE, CIF, IBAN, teléfono, email, NSS y pasaporte. Todos editables desde la configuración de la app.',
    accent: 'bg-amber-50 text-amber-600',
  },
  {
    icon: Lock,
    title: '100% Local',
    description:
      'Ningún dato sale de tu equipo. Sin APIs externas, sin telemetría, sin conexión a Internet. Tus documentos nunca abandonan tu entorno.',
    accent: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: Scale,
    title: 'Cumplimiento RGPD',
    description:
      'Redacción irreversible conforme al Reglamento (UE) 2016/679. Las anotaciones de redacción se aplican permanentemente al PDF.',
    accent: 'bg-blue-50 text-blue-600',
  },
  {
    icon: ClipboardList,
    title: 'Auditoría completa',
    description:
      'Se genera un log JSON por cada documento procesado con todas las detecciones, coordenadas y niveles de confianza.',
    accent: 'bg-rose-50 text-rose-600',
  },
]

interface FeatureCardProps {
  feature: Feature
  delay: number
  isParentVisible: boolean
}

function FeatureCard({ feature, delay, isParentVisible }: FeatureCardProps) {
  const Icon = feature.icon

  return (
    <article
      className="group bg-white rounded-2xl border border-slate-100 p-7 hover:border-slate-200 hover:shadow-lg transition-all duration-300"
      style={{
        opacity: isParentVisible ? 1 : 0,
        transform: isParentVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms, box-shadow 0.3s ease, border-color 0.3s ease`,
      }}
    >
      <div
        className={`inline-flex items-center justify-center w-11 h-11 rounded-xl ${feature.accent} mb-5 transition-transform duration-200 group-hover:scale-110`}
      >
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>
      <h3 className="text-base font-semibold text-slate-900 mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-slate-500 leading-relaxed">
        {feature.description}
      </p>
    </article>
  )
}

export default function Features() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section id="caracteristicas" className="py-24 bg-slate-50">
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
            Características
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Todo lo que necesitas para proteger tus datos
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Tecnología de última generación empaquetada en una aplicación de
            escritorio sencilla, sin dependencias externas.
          </p>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {features.map((feature, idx) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              delay={idx * 80}
              isParentVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
