import Image from "next/image"
import { Play } from "lucide-react"

const courses = [
  {
    title: "Curso de Marketing Digital",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    title: "Adunde Riyó",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    title: "Estrategias de Ventas Efectivas",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  },
  {
    title: "Curso de Comital Vencrel Boundes",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
  },
  {
    title: "Curso de Pyres de Marketing",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&q=80",
  },
  {
    title: "Estrategias de Ventas",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&q=80",
  },
  {
    title: "Martègias de Digitalal",
    image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=400&q=80",
  },
  {
    title: "Curso a Marketing Pymes",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&q=80",
  },
]

export function AcademiaSection() {
  return (
    <section id="academia" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start mb-12">
          <div>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-foreground">
              Academia
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md leading-relaxed">
              Únete a nuestra comunidad de empresarios exitosos. A recursos exclusivos, 
              networking y apoyo tu negocio.
            </p>
          </div>
          <div className="hidden lg:block">
            <Image
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
              alt="Reunión de negocios"
              width={500}
              height={300}
              className="rounded-sm object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {courses.map((course, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="relative aspect-video bg-muted rounded-sm overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-5 h-5 text-foreground ml-1" fill="currentColor" />
                  </div>
                </div>
              </div>
              <p className="mt-2 text-sm font-medium text-foreground leading-tight">
                {course.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
