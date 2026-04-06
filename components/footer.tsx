export function Footer() {
  return (
    <footer id="contacto" className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-light tracking-tight">M</span>
              <span className="text-xl">|</span>
              <span className="font-serif text-xl tracking-wide">Management Pyme</span>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Tu plataforma integral para el desarrollo empresarial y profesional.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Academia</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Cursos</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Certificaciones</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Recursos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Club</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Networking</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Foros</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Eventos</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/70">
              <li>info@managementpyme.com</li>
              <li>+54 11 1234-5678</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-sm text-primary-foreground/50">
          <p>© 2026 Management Pyme. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
