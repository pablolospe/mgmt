export function Footer() {
  return (
    <footer id="contacto" className="bg-footer-bg text-white py-20 transition-colors duration-300 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-24">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="flex items-center gap-1.5 grayscale brightness-200">
                <span className="text-2xl font-light tracking-tight text-white">M</span>
                <span className="text-2xl font-thin text-white">|</span>
              </div>
              <span className="font-serif text-xl tracking-wider uppercase text-white">Management Pyme</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-8">
              La plataforma definitiva para la transformación y escalabilidad de la Pequeña y Mediana Empresa.
            </p>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Academia</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Programas de Formación</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Certificaciones Oficiales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Biblioteca de Recursos</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mentores</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Club</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Networking Exclusivo</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Mesas Redondas</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Eventos Presenciales</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Marketplace</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] font-bold tracking-[0.3em] uppercase text-accent mb-8">Contacto</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Email</span>
                <a href="mailto:info@managementpyme.com" className="hover:text-white transition-colors">info@managementpyme.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-white/30 mb-1">Soporte</span>
                <a href="#" className="hover:text-white transition-colors">+54 11 1234-5678</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-bold tracking-[0.2em] uppercase text-white/20">
          <p>© 2026 Management Pyme. All Rights Reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white/40 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white/40 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>

  )
}
