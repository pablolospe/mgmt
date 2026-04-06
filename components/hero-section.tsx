import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden bg-background transition-colors duration-300">
      <div className="container mx-auto px-4 py-12 md:py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Inscripciones Abiertas 2024
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[0.9] tracking-tighter text-foreground mb-8">
              Evoluciona tu <br />
              <span className="italic block mt-2">Próximo Nivel.</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/70 max-w-lg mb-10 leading-relaxed">
              Formación estratégica y comunidad exclusiva para empresarios Pyme que buscan escalar con estructura y visión digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="rounded-full px-8 h-14 text-base font-bold gap-2 bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg shadow-accent/20 transition-all hover:scale-105 active:scale-95">
                Explorar Programas <ArrowRight className="w-5 h-5" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full px-8 h-14 text-base font-bold border-2 transition-all hover:bg-foreground/5">
                Agendar Consultoría
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-video lg:aspect-square w-full max-w-[600px] mx-auto lg:ml-auto">
            <div className="absolute -inset-4 bg-accent/5 rounded-4xl rotate-3 -z-10"></div>
            <div className="absolute inset-0 border border-foreground/10 rounded-4xl -z-10 translate-x-4 translate-y-4"></div>
            <Image
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800&q=80"
              alt="Empresario profesional"
              fill
              className="object-cover rounded-4xl shadow-2xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

