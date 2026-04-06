import { BarChart3, CalendarCheck, Award } from "lucide-react"

const proFeatures = [
  {
    icon: BarChart3,
    title: "Análisis de Datos",
    description: "Análisis abarcadores de herramientas con soporte en el centro.",
  },
  {
    icon: CalendarCheck,
    title: "Certificaciones Profesionales",
    description: "Obtén certificaciones reconocidas para tu carrera.",
  },
  {
    icon: Award,
    title: "Certificaciones Profesionales",
    description: "Alcanza el reconocimiento profesional que mereces.",
  },
]

export function ProSection() {
  return (
    <section id="pro" className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground mb-4">
          PRO
        </h2>
        <p className="text-muted-foreground max-w-lg mb-12 leading-relaxed">
          Soluciones avanzadas para empresas. Optimiza tus procesos y escala 
          tu empresa con nuestras herramientas profesionales.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {proFeatures.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <feature.icon className="w-16 h-16 text-foreground stroke-1" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
