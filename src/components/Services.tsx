import { Layers, Sparkles, RefreshCw, Compass } from 'lucide-react'

const services = [
  {
    Icon: Layers,
    title: 'Produtos SaaS',
    description:
      'Front-end, back-end, banco de dados e IA integrados. Do zero ao deploy em produção — com autenticação, multi-tenancy e escalabilidade real.',
    tags: ['React', 'FastAPI', 'Supabase', 'Vercel'],
  },
  {
    Icon: Sparkles,
    title: 'Integração com IA',
    description:
      'Pipelines com Claude API e OpenAI: extração de PDFs, geração de documentos, agentes e automações inteligentes integradas ao seu produto.',
    tags: ['Claude API', 'OpenAI', 'LLMs', 'DOCX'],
  },
  {
    Icon: RefreshCw,
    title: 'Automações & Integrações',
    description:
      'Workflows com n8n e Make conectando sistemas, eliminando trabalho manual e integrando CRMs, Google Workspace, WhatsApp e APIs REST.',
    tags: ['n8n', 'Make', 'Webhooks', 'APIs'],
  },
  {
    Icon: Compass,
    title: 'Consultoria de produto',
    description:
      'Ajudo times a sair do problema para a solução certa — definição de MVP, escolha de stack, arquitetura e execução do zero ao lançamento.',
    tags: ['MVP', 'Arquitetura', 'Stack', 'Produto'],
  },
]

export default function Services() {
  return (
    <section id="servicos" className="section-padding bg-forest-pale">
      <div className="container-max">

        <div className="mb-14">
          <span className="inline-flex items-center gap-2 text-forest text-xs font-medium tracking-widest uppercase mb-4">
            <span className="w-8 h-px bg-forest" />
            Serviços
          </span>
          <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight">
            O que<br />
            <em className="text-forest not-italic">construo</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="bg-cream rounded-3xl p-8 border border-forest/5 hover:border-forest/20 transition-colors group"
            >
              <div className="mb-6">
                <s.Icon size={24} className="text-forest" />
              </div>
              <h3 className="font-serif text-2xl text-charcoal mb-3">{s.title}</h3>
              <p className="text-gray-500 text-base leading-relaxed mb-6">{s.description}</p>
              <div className="flex flex-wrap gap-2">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs text-gray-400 border border-gray-200 px-3 py-1 rounded-full group-hover:border-forest/30 group-hover:text-forest transition-colors"
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
