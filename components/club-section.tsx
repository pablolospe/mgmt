import Image from "next/image"

const clubFeatures = [
  {
    title: "Networking para",
    description: "Promociona tu empresa y haz contactos de negocios con otros miembros.",
  },
  {
    title: "Foro de Discusión",
    description: "Comparte conocimientos y resuelve dudas profesionales con la comunidad.",
  },
  {
    title: "Foruoe Ekolecioi",
    description: "Programa para ayudar a los Miércoles que hay en tu management.",
  },
  {
    title: "Fenotiaig Pymes",
    description: "Control de gestión estratégico y de calidad con el asesor de negocios parlante.",
  },
  {
    title: "Foro de Discusión",
    description: "Información de gestión y análisis profesional completo.",
  },
  {
    title: "Cutori va Perlevens",
    description: "Dil fregolero del verpai de el tay rogo de la fundación.",
  },
]

export function ClubSection() {
  return (
    <section id="club" className="relative py-16 md:py-24">
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1200&q=80"
          alt="Reunión empresarial"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-secondary/85" />
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-secondary-foreground mb-12">
          Club de Empresarios
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {clubFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-md border border-white/20 rounded-sm p-6 hover:bg-white/15 transition-colors"
            >
              <h3 className="text-lg font-semibold text-secondary-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-secondary-foreground/80 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
