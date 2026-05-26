const skills = [
  'React', 'TypeScript', 'Vite', 'Tailwind',
  'Python', 'FastAPI',
  'Supabase', 'PostgreSQL',
  'Claude API', 'Gemini API',
  'Railway', 'Vercel', 'Cloudflare',
  'n8n', 'Make',
]

export default function About() {
  return (
    <section id="sobre" className="section-padding bg-forest-pale">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left — label + headline */}
          <div>
            <span className="inline-flex items-center gap-2 text-forest text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-forest" />
              Sobre
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
              Aprendi do zero.<br />
              <em className="text-forest not-italic">Construí</em><br />
              de verdade.
            </h2>

            {/* Timeline badges */}
            <div className="flex flex-col gap-3 mt-10">
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 w-12 text-right shrink-0">2016</span>
                <span className="w-2 h-2 bg-terracotta rounded-full shrink-0" />
                <span className="text-sm text-gray-600">Nutricionista → gestora de 3 unidades</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 w-12 text-right shrink-0">2023</span>
                <span className="w-2 h-2 bg-gold rounded-full shrink-0" />
                <span className="text-sm text-gray-600">Migrei para tech, primeiras automações e agentes de IA</span>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-gray-400 w-12 text-right shrink-0">2024</span>
                <span className="w-2 h-2 bg-forest rounded-full shrink-0" />
                <span className="text-sm text-charcoal font-medium">Co-fundadora do Expertum · dev full-stack</span>
              </div>
            </div>
          </div>

          {/* Right — text + skills */}
          <div>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Vim da saúde — fui nutricionista e gestora por 6 anos — e migrei para tech em 2023
              por conta própria. Comecei com automações e integrações, depois construí o Loopin.tech,
              um SaaS de gestão de prompts de IA, do zero ao lançamento.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Hoje sou co-fundadora e dev do Expertum — plataforma SaaS para peritos judiciais que
              vai do upload do PDF até o laudo gerado em DOCX com IA. Cuido de tudo: interface,
              API, banco de dados, pipeline de IA e infra.
            </p>

            {/* Skills */}
            <div>
              <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">Stack do dia a dia</p>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm text-forest bg-forest-light border border-forest/10 px-3 py-1.5 rounded-full font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
