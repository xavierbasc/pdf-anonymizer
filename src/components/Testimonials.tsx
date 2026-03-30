import { Star, Quote } from 'lucide-react'
import { useInView } from '../hooks/useInView'

interface Testimonial {
  name: string
  initials: string
  avatarColor: string
  text: string
  rating: number
}

const testimonials: Testimonial[] = [
  {
    name: 'Elena M.',
    initials: 'EM',
    avatarColor: 'bg-violet-100 text-violet-700',
    text: 'PDF Anonymizer ha simplificado enormemente nuestra operativa de protección de datos. Antes tardábamos horas en anonimizar expedientes manualmente; ahora el proceso es automático y queda auditado. El hecho de que todo funcione de forma local nos da total tranquilidad respecto al cumplimiento del RGPD.',
    rating: 5,
  },
  {
    name: 'Carlos F.',
    initials: 'CF',
    avatarColor: 'bg-cyan-100 text-cyan-700',
    text: 'Manejamos documentación sensible a diario y la confidencialidad es innegociable. Esta herramienta nos permite preparar documentos sin riesgo de exposición de datos personales. La detección de DNIs, IBANs y nombres es muy precisa y el log de auditoría resulta valiosísimo ante cualquier inspección.',
    rating: 5,
  },
  {
    name: 'Sofía V.',
    initials: 'SV',
    avatarColor: 'bg-emerald-100 text-emerald-700',
    text: 'Usamos PDF Anonymizer para anonimizar currículums y contratos antes de cederlos a terceros. La instalación es trivial, no requiere Internet y el rendimiento es más que suficiente para nuestro volumen. Sin duda la mejor solución que hemos encontrado para este problema tan concreto.',
    rating: 5,
  },
]

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
      ))}
    </div>
  )
}

interface TestimonialCardProps {
  testimonial: Testimonial
  delay: number
  isParentVisible: boolean
}

function TestimonialCard({ testimonial, delay, isParentVisible }: TestimonialCardProps) {
  return (
    <article
      className="bg-white rounded-2xl border border-slate-100 p-7 flex flex-col gap-5 hover:shadow-lg hover:border-slate-200 transition-all duration-300"
      style={{
        opacity: isParentVisible ? 1 : 0,
        transform: isParentVisible ? 'translateY(0)' : 'translateY(24px)',
        transition: `opacity 0.6s ease-out ${delay}ms, transform 0.6s ease-out ${delay}ms, box-shadow 0.3s ease`,
      }}
    >
      {/* Quote icon */}
      <Quote className="w-7 h-7 text-cyan-200" strokeWidth={1.5} />

      {/* Rating */}
      <StarRating count={testimonial.rating} />

      {/* Text */}
      <p className="text-slate-600 text-sm leading-relaxed flex-1">
        "{testimonial.text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3 pt-2 border-t border-slate-50">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-sm flex-shrink-0 ${testimonial.avatarColor}`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="text-sm font-semibold text-slate-900">
            {testimonial.name}
          </div>
        </div>
      </div>
    </article>
  )
}

export default function Testimonials() {
  const [ref, isInView] = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="py-24 bg-slate-50" id="seguridad">
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
            Opiniones
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Confianza de profesionales
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            Profesionales que manejan documentación sensible confían en PDF Anonymizer
            para proteger la privacidad en su día a día.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {testimonials.map((t, idx) => (
            <TestimonialCard
              key={t.name}
              testimonial={t}
              delay={idx * 100}
              isParentVisible={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
