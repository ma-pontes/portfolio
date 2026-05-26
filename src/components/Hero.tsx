import { ArrowUpRight } from 'lucide-react'
import marianaImg from '../assets/mariana.jpg'

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center section-padding pt-28">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — text */}
          <div>
            <span className="inline-flex items-center gap-2 text-forest text-xs font-medium tracking-widest uppercase mb-8">
              <span className="w-8 h-px bg-forest" />
              Full-Stack · IA · SaaS
            </span>

            <h1 className="font-serif text-6xl md:text-7xl xl:text-8xl text-charcoal leading-[1.05] mb-6">
              Oi, sou<br />
              <em className="text-forest not-italic">Mariana</em><br />
              Pontes
            </h1>

            <p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
              Construo produtos SaaS do zero — interface, backend,
              banco de dados e IA — e coloco em produção.
            </p>

            {/* Stats */}
            <div className="flex items-center gap-8 mb-10">
              <div>
                <div className="font-serif text-4xl text-charcoal">2</div>
                <div className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">SaaS lançados</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="font-serif text-4xl text-charcoal">1.004</div>
                <div className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">processos extraídos</div>
              </div>
              <div className="w-px h-10 bg-gray-200" />
              <div>
                <div className="font-serif text-4xl text-charcoal">3+</div>
                <div className="text-xs text-gray-400 mt-0.5 uppercase tracking-wide">anos construindo</div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#projetos"
                className="bg-forest text-cream text-sm font-medium px-7 py-3.5 rounded-full hover:bg-forest-mid transition-colors"
              >
                Ver projetos
              </a>
              <a
                href="#contato"
                className="flex items-center gap-2 text-charcoal text-sm font-medium border border-charcoal/30 px-7 py-3.5 rounded-full hover:border-forest hover:text-forest transition-colors"
              >
                Vamos conversar <ArrowUpRight size={14} />
              </a>
            </div>
          </div>

          {/* Right — photo */}
          <div className="relative flex justify-center lg:justify-end">
            {/* Background blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-forest-light rounded-full" />

            {/* Gold accent circle */}
            <div className="absolute top-8 right-8 lg:right-0 w-20 h-20 bg-gold/20 rounded-full" />

            {/* Photo */}
            <div className="relative z-10 w-64 h-80 md:w-72 md:h-96 rounded-[2.5rem] overflow-hidden shadow-2xl">
              <img
                src={marianaImg}
                alt="Mariana Pontes"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Floating card */}
            <div className="absolute bottom-4 -left-4 md:-left-8 z-20 bg-white rounded-2xl shadow-xl p-4 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-gray-400">em produção</span>
              </div>
              <div className="font-medium text-charcoal text-sm">Expertum</div>
              <div className="text-xs text-forest mt-1">↑ 1.004 processos extraídos</div>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
