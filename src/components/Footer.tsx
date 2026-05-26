export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60 py-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <span className="font-serif text-cream text-xl">Mariana Pontes</span>

        <div className="flex items-center gap-6 text-sm">
          <a href="#sobre" className="hover:text-cream transition-colors">Sobre</a>
          <a href="#projetos" className="hover:text-cream transition-colors">Projetos</a>
          <a href="#servicos" className="hover:text-cream transition-colors">Serviços</a>
          <a href="#contato" className="hover:text-cream transition-colors">Contato</a>
        </div>

        <span className="text-sm text-cream/40">© 2025 Mariana Pontes</span>
      </div>
    </footer>
  )
}
