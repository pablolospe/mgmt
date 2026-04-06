import Image from "next/image"
import { Play, ArrowUpRight } from "lucide-react"

const courses = [
  {
    title: "Estrategia de Crecimiento Pyme",
    category: "Negocios",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&q=80",
  },
  {
    title: "Marketing Digital Avanzado",
    category: "Digital",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&q=80",
  },
  {
    title: "Gestión de Equipos Remotos",
    category: "Liderazgo",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=400&q=80",
  },
  {
    title: "Optimización de Ventas B2B",
    category: "Ventas",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&q=80",
  },
]

export function AcademiaSection() {
  return (
    <section id="academia" className="py-20 md:py-32 bg-background transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="font-serif text-5xl md:text-7xl tracking-tighter text-foreground mb-6">
              Academia <span className="text-accent italic">Digital</span>
            </h2>
            <p className="text-lg text-foreground/60 leading-relaxed max-w-lg">
              Programas diseñados para la realidad de la Pyme actual. Metodología práctica, casos reales y mentores expertos.
            </p>
          </div>
          <div className="hidden md:block">
            <a href="#" className="group flex items-center gap-2 text-sm font-bold tracking-widest uppercase text-accent hover:opacity-80 transition-all">
              Ver todos los cursos <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {courses.map((course, index) => (
            <div key={index} className="group cursor-pointer flex flex-col">
              <div className="relative aspect-4/5 bg-muted rounded-none overflow-hidden mb-6 border-b-4 border-accent/0 group-hover:border-accent transition-all duration-500">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-background text-foreground text-[10px] font-bold tracking-widest uppercase px-3 py-1">
                    {course.category}
                  </span>
                </div>
                <div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="w-12 h-12 rounded-full bg-accent text-white flex items-center justify-center shadow-xl">
                    <Play className="w-5 h-5 fill-current ml-1" />
                  </div>
                </div>
              </div>
              <h3 className="font-serif text-2xl leading-tight text-foreground group-hover:text-accent transition-colors mb-2">
                {course.title}
              </h3>
              <div className="mt-auto flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/40">
                <span>12 Módulos</span>
                <span className="w-1 h-1 rounded-full bg-accent/30" />
                <span>Acceso Vitalicio</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

