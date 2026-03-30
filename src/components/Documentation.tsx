import { useInView } from '../hooks/useInView'

// ── Mockup: selector de carpetas ─────────────────────────────────────────────
function MockupFolders() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white text-xs font-mono select-none">
      {/* Barra de título */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-slate-500 text-[10px]">PDF Anonymizer</span>
      </div>
      {/* Contenido */}
      <div className="p-4 space-y-3">
        <div>
          <p className="text-[10px] text-slate-400 mb-1 font-sans">Carpeta entrada:</p>
          <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 bg-slate-50">
            <span className="text-slate-500 flex-1 truncate text-[11px]">/Documentos/PDFs_originales</span>
            <span className="text-cyan-500 text-[10px] border border-cyan-200 rounded px-1.5 py-0.5 bg-cyan-50">Seleccionar…</span>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-slate-400 mb-1 font-sans">Carpeta salida:</p>
          <div className="flex items-center gap-2 border border-slate-200 rounded-lg px-3 py-2 bg-slate-50">
            <span className="text-slate-500 flex-1 truncate text-[11px]">/Documentos/PDFs_anonimizados</span>
            <span className="text-cyan-500 text-[10px] border border-cyan-200 rounded px-1.5 py-0.5 bg-cyan-50">Seleccionar…</span>
          </div>
        </div>
        <div className="flex items-center justify-center pt-1">
          <span className="bg-cyan-500 text-white text-[11px] font-sans font-semibold px-8 py-2 rounded-lg shadow-sm">
            Procesar
          </span>
        </div>
      </div>
    </div>
  )
}

// ── Mockup: procesamiento en curso ───────────────────────────────────────────
function MockupProcessing() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white text-xs select-none">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-slate-500 text-[10px] font-mono">PDF Anonymizer</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Progress */}
        <div>
          <div className="flex justify-between text-[10px] text-slate-400 mb-1 font-sans">
            <span>expediente_042.pdf — pág. 3</span>
            <span>12 detecciones</span>
          </div>
          <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden">
            <div className="h-full bg-cyan-500 rounded-full" style={{ width: '62%' }} />
          </div>
        </div>
        {/* Preview panels */}
        <div className="grid grid-cols-2 gap-2">
          {/* Original */}
          <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
            <p className="text-[9px] text-slate-400 mb-1.5 text-center font-sans">Original</p>
            <div className="space-y-1">
              {[80, 95, 70, 85, 60].map((w, i) => (
                <div key={i} className="h-1.5 bg-slate-300 rounded" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
          {/* Anonimizado */}
          <div className="bg-slate-50 rounded-lg p-2 border border-slate-100">
            <p className="text-[9px] text-slate-400 mb-1.5 text-center font-sans">Anonimizado</p>
            <div className="space-y-1">
              <div className="h-1.5 bg-slate-900 rounded" style={{ width: '80%' }} />
              <div className="h-1.5 bg-slate-300 rounded" style={{ width: '95%' }} />
              <div className="h-1.5 bg-slate-900 rounded" style={{ width: '70%' }} />
              <div className="h-1.5 bg-slate-300 rounded" style={{ width: '85%' }} />
              <div className="h-1.5 bg-slate-900 rounded" style={{ width: '60%' }} />
            </div>
          </div>
        </div>
        {/* Log line */}
        <div className="bg-slate-900 rounded-lg p-2 font-mono">
          <p className="text-[9px] text-green-400">✓ NER: "García Martínez" → redactado (conf. 0.94)</p>
          <p className="text-[9px] text-green-400">✓ Regex: DNI 48291034X → redactado</p>
          <p className="text-[9px] text-cyan-400 animate-pulse">▶ procesando pág. 3…</p>
        </div>
      </div>
    </div>
  )
}

// ── Mockup: resultado final ───────────────────────────────────────────────────
function MockupResult() {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-slate-200 bg-white text-xs select-none">
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-slate-100 border-b border-slate-200">
        <span className="w-3 h-3 rounded-full bg-red-400" />
        <span className="w-3 h-3 rounded-full bg-amber-400" />
        <span className="w-3 h-3 rounded-full bg-green-400" />
        <span className="ml-3 text-slate-500 text-[10px] font-mono">PDF Anonymizer</span>
      </div>
      <div className="p-4 space-y-3">
        {/* Completado */}
        <div className="flex items-center gap-2 bg-green-50 border border-green-100 rounded-lg px-3 py-2">
          <span className="text-green-500 text-base">✓</span>
          <div className="font-sans">
            <p className="text-[11px] font-semibold text-green-700">Procesamiento completado</p>
            <p className="text-[10px] text-green-500">8 archivos · 147 detecciones en total</p>
          </div>
        </div>
        {/* Lista de archivos */}
        <div className="space-y-1.5">
          {[
            { name: 'expediente_041.pdf', detections: 18 },
            { name: 'expediente_042.pdf', detections: 12 },
            { name: 'contrato_2025.pdf',  detections: 9  },
          ].map(({ name, detections }) => (
            <div key={name} className="flex items-center justify-between border border-slate-100 rounded-lg px-2.5 py-1.5 bg-slate-50">
              <span className="text-[10px] text-slate-600 font-mono truncate">{name}</span>
              <span className="text-[9px] text-slate-400 ml-2 shrink-0">{detections} detec.</span>
            </div>
          ))}
          <p className="text-[9px] text-slate-400 text-right font-sans">+ 5 más…</p>
        </div>
      </div>
    </div>
  )
}

// ── Pasos ─────────────────────────────────────────────────────────────────────
const steps = [
  {
    number: '01',
    title: 'Selecciona las carpetas',
    description:
      'Al abrir la aplicación, elige la carpeta que contiene tus PDFs escaneados y la carpeta donde se guardarán los documentos anonimizados. Ambas deben ser distintas.',
    detail: 'La app recorre subcarpetas automáticamente y detecta todos los PDFs, sin límite de cantidad.',
    mockup: <MockupFolders />,
  },
  {
    number: '02',
    title: 'La IA detecta y redacta',
    description:
      'Al pulsar Procesar, la aplicación analiza cada página con OCR, identifica nombres, DNIs, IBANs, teléfonos, emails y direcciones, y los redacta de forma irreversible.',
    detail: 'Puedes ver en tiempo real la página original y su versión anonimizada mientras se procesa.',
    mockup: <MockupProcessing />,
  },
  {
    number: '03',
    title: 'Descarga los resultados',
    description:
      'Los PDFs anonimizados se guardan en la carpeta de salida. Junto a cada uno se genera un archivo de auditoría JSON con todas las detecciones realizadas.',
    detail: 'Si el proceso se interrumpe, al reiniciarlo se omiten automáticamente los PDFs ya procesados.',
    mockup: <MockupResult />,
  },
]

// ── FAQ ───────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: '¿Mis documentos salen de mi ordenador?',
    a: 'No. Todo el procesamiento ocurre en local. La aplicación no tiene acceso a Internet ni envía ningún dato a servidores externos.',
  },
  {
    q: '¿Qué tipo de datos personales detecta?',
    a: 'DNI, NIE, CIF, pasaporte, IBAN, teléfono, email, número de la Seguridad Social, nombres y apellidos, direcciones postales y códigos postales.',
  },
  {
    q: '¿Puedo añadir mis propios patrones de detección?',
    a: 'Sí. Desde Opciones → Configuración puedes añadir, editar o desactivar patrones regex personalizados sin necesidad de reiniciar la aplicación.',
  },
  {
    q: '¿La redacción es permanente?',
    a: 'Sí. La aplicación aplica redacciones reales sobre el PDF (no solo oculta el texto visualmente). El contenido redactado no puede recuperarse.',
  },
  {
    q: '¿Funciona con PDFs escaneados en papel?',
    a: 'Sí. Es precisamente para lo que está diseñada: aplica OCR a cada página escaneada antes de detectar los datos personales.',
  },
]

// ── Componente principal ──────────────────────────────────────────────────────
export default function Documentation() {
  const [headerRef, headerInView] = useInView<HTMLDivElement>({ threshold: 0.1 })
  const [faqRef, faqInView] = useInView<HTMLDivElement>({ threshold: 0.05 })

  return (
    <section className="py-24 bg-slate-50" id="documentacion">
      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-20"
          style={{
            opacity: headerInView ? 1 : 0,
            transform: headerInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
          }}
        >
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-cyan-600 mb-3">
            Documentación
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Fácil de usar, desde el primer momento
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base leading-relaxed">
            No se necesita configuración previa ni conocimientos técnicos.
            En tres pasos tienes tus documentos protegidos.
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-24">
          {steps.map((step, idx) => {
            const [ref, inView] = useInView<HTMLDivElement>({ threshold: 0.1 })
            const isEven = idx % 2 === 0
            return (
              <div
                key={step.number}
                ref={ref}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-16`}
                style={{
                  opacity: inView ? 1 : 0,
                  transform: inView ? 'translateY(0)' : 'translateY(32px)',
                  transition: 'opacity 0.7s ease-out, transform 0.7s ease-out',
                }}
              >
                {/* Text */}
                <div className="flex-1 max-w-lg">
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-cyan-500 text-white font-bold text-sm mb-5">
                    {step.number}
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                  <p className="text-slate-600 leading-relaxed mb-4">{step.description}</p>
                  <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-cyan-200 pl-3">
                    {step.detail}
                  </p>
                </div>

                {/* Mockup */}
                <div className="flex-1 w-full max-w-md">
                  {step.mockup}
                </div>
              </div>
            )
          })}
        </div>

        {/* FAQ */}
        <div ref={faqRef} className="mt-24">
          <div
            className="text-center mb-12"
            style={{
              opacity: faqInView ? 1 : 0,
              transform: faqInView ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
            }}
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">Preguntas frecuentes</h3>
            <p className="text-slate-500 text-sm">Todo lo que necesitas saber antes de empezar.</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-slate-100 p-6 hover:shadow-md hover:border-slate-200 transition-all duration-300"
                style={{
                  opacity: faqInView ? 1 : 0,
                  transform: faqInView ? 'translateY(0)' : 'translateY(20px)',
                  transition: `opacity 0.6s ease-out ${idx * 80}ms, transform 0.6s ease-out ${idx * 80}ms`,
                }}
              >
                <p className="font-semibold text-slate-900 mb-2 text-sm">{faq.q}</p>
                <p className="text-slate-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
