import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative w-full">
      <div className="relative w-full h-[400px] md:h-[550px]">
        <Image
          src="/images/hero-businessman.jpg"
          alt="Empresario profesional con tablet"
          fill
          className="object-cover object-top"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/30 to-transparent" />
      </div>
    </section>
  )
}
