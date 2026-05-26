import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    number: '01',
    name: 'Expertum',
    description:
      'Plataforma SaaS multi-tenant para peritos judiciais trabalhistas. O perito faz upload do processo em PDF — a plataforma extrai os dados com Claude Vision e gera o laudo em DOCX, seguindo o template do próprio perito.',
    tags: ['React', 'TypeScript', 'Python', 'FastAPI', 'Supabase', 'Claude API', 'Railway', 'Vercel'],
    metrics: ['1.004 processos extraídos', '46 varas monitoradas', '10 peritos em teste'],
    link: 'https://github.com/ma-pontes/Expertum-showcase',
    linkLabel: 'Ver showcase técnico',
    featured: true,
    status: 'Em produção',
  },
  {
    number: '02',
    name: 'Loopin.tech',
    description:
      'SaaS de gestão de prompts de IA — organizar, versionar e testar prompts em múltiplos modelos. Do zero ao lançamento, com extensão Chrome integrada para salvar prompts direto do ChatGPT ou Claude.',
    tags: ['React', 'Claude API', 'OpenAI API', 'Supabase'],
    metrics: [],
    link: 'https://loopin.tech',
    linkLabel: 'Ver produto',
    featured: false,
    status: 'Lançado',
  },
  {
    number: '03',
    name: 'Pipeline de Conteúdo',
    description:
      'Pipeline automatizado para canal de tecnologia: scraping de notícias via MCP, geração de conteúdo com IA e publicação automática em blog e redes sociais. Zero intervenção manual após configuração.',
    tags: ['n8n', 'Claude API', 'MCP', 'Webhooks'],
    metrics: [],
    link: null,
    linkLabel: null,
    featured: false,
    status: 'Entregue',
  },
]

export default function Projects() {
  const [featured, ...rest] = projects

  return (
    <section id="projetos" className="section-padding">
      <div className="container-max">

        <div className="flex items-end justify-between mb-14">
          <div>
            <span className="inline-flex items-center gap-2 text-forest text-xs font-medium tracking-widest uppercase mb-4">
              <span className="w-8 h-px bg-forest" />
              Projetos
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
              O que já<br />
              <em className="text-forest not-italic">foi construído</em>
            </h2>
          </div>
        </div>

        {/* Featured project */}
        <div className="bg-forest rounded-3xl p-8 md:p-12 mb-6 group">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-forest-light/50 text-sm font-mono">{featured.number}</span>
                <span className="bg-gold/20 text-gold text-xs font-medium px-3 py-1 rounded-full">
                  {featured.status}
                </span>
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-cream">{featured.name}</h3>
            </div>
            {featured.link && (
              <a
                href={featured.link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-cream/70 hover:text-cream text-sm font-medium transition-colors shrink-0"
              >
                {featured.linkLabel} <ArrowUpRight size={16} />
              </a>
            )}
          </div>

          <p className="text-cream/70 text-lg leading-relaxed mb-8 max-w-2xl">
            {featured.description}
          </p>

          {/* Metrics */}
          <div className="flex flex-wrap gap-6 mb-8 pb-8 border-b border-cream/10">
            {featured.metrics.map((m) => (
              <div key={m} className="text-sm text-cream/60">
                <span className="text-cream font-medium">↑ </span>{m}
              </div>
            ))}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {featured.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs text-cream/60 border border-cream/20 px-3 py-1.5 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Other projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {rest.map((project) => (
            <div
              key={project.name}
              className="bg-forest-pale border border-forest/10 rounded-3xl p-8 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-gray-400 text-sm font-mono">{project.number}</span>
                    <span className="bg-forest-light text-forest text-xs font-medium px-3 py-1 rounded-full">
                      {project.status}
                    </span>
                  </div>
                  <h3 className="font-serif text-3xl text-charcoal">{project.name}</h3>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-forest hover:text-forest-mid transition-colors mt-1"
                  >
                    <ArrowUpRight size={20} />
                  </a>
                )}
              </div>

              <p className="text-gray-500 text-base leading-relaxed mb-6 flex-1">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-forest bg-forest-light px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
