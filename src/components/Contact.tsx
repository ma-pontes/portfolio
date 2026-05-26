import { useState } from 'react'
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react'

// 🔧 Crie conta grátis em web3forms.com → "Get your Access Key" → cole aqui
const WEB3FORMS_KEY = 'b1e1458f-6d53-4585-8e0b-e8d008ff3b6f'

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setStatus('sending')

    const form = e.currentTarget
    const data = new FormData(form)
    data.append('access_key', WEB3FORMS_KEY)

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      })
      const json = await res.json()

      if (json.success) {
        setStatus('sent')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contato" className="section-padding">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <div>
            <span className="inline-flex items-center gap-2 text-forest text-xs font-medium tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-forest" />
              Contato
            </span>
            <h2 className="font-serif text-5xl md:text-6xl text-charcoal leading-tight mb-6">
              Tem um<br />
              <em className="text-forest not-italic">projeto?</em>
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-10">
              Me conta o problema que você quer resolver. Respondo em até 24h.
            </p>

            <div className="flex flex-col gap-4">
              <a
                href="mailto:onc.mariana@gmail.com"
                className="flex items-center gap-3 text-charcoal hover:text-forest transition-colors group"
              >
                <div className="w-10 h-10 bg-forest-light rounded-full flex items-center justify-center">
                  <Mail size={16} className="text-forest" />
                </div>
                <span className="font-medium">onc.mariana@gmail.com</span>
                <ArrowUpRight size={14} className="text-gray-400 group-hover:text-forest transition-colors" />
              </a>

              <a
                href="https://linkedin.com/in/pontes-mariana"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-charcoal hover:text-forest transition-colors group"
              >
                <div className="w-10 h-10 bg-forest-light rounded-full flex items-center justify-center">
                  <Linkedin size={16} className="text-forest" />
                </div>
                <span className="font-medium">linkedin.com/in/pontes-mariana</span>
                <ArrowUpRight size={14} className="text-gray-400 group-hover:text-forest transition-colors" />
              </a>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-forest-pale rounded-3xl p-8">
            {status === 'sent' ? (
              <div className="flex flex-col items-center justify-center h-64 text-center">
                <div className="text-4xl mb-4">🌿</div>
                <h3 className="font-serif text-2xl text-charcoal mb-2">Mensagem enviada!</h3>
                <p className="text-gray-500">Respondo em até 24h.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Nome</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Seu nome"
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-300 focus:outline-none focus:border-forest transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">E-mail</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="seu@email.com"
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-300 focus:outline-none focus:border-forest transition-colors text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-400 uppercase tracking-widest mb-2">Mensagem</label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Me conta o que você precisa construir..."
                    className="w-full bg-cream border border-gray-200 rounded-xl px-4 py-3 text-charcoal placeholder-gray-300 focus:outline-none focus:border-forest transition-colors text-sm resize-none"
                  />
                </div>

                {status === 'error' && (
                  <p className="text-red-500 text-sm">Algo deu errado. Me envie um e-mail diretamente.</p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="bg-forest text-cream font-medium py-3.5 rounded-full hover:bg-forest-mid transition-colors disabled:opacity-50 text-sm"
                >
                  {status === 'sending' ? 'Enviando...' : 'Enviar mensagem →'}
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  )
}
