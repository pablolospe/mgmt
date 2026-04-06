import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AcademiaSection } from "@/components/academia-section"
import { ClubSection } from "@/components/club-section"
import { ProSection } from "@/components/pro-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AcademiaSection />
      <ClubSection />
      <ProSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
