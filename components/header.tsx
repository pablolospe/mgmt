"use client"

import { useState } from "react"
import { Menu, X, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Inicio", href: "#" },
    { label: "Academia", href: "#academia" },
    { label: "Club de Empresarios", href: "#club" },
    { label: "PRO", href: "#pro" },
    { label: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <a href="#" className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span className="text-xl font-light tracking-tight">M</span>
            <span className="text-xl">|</span>
          </div>
          <span className="font-serif text-xl tracking-wide">Management Pyme</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="hidden md:inline-flex">
            <Search className="h-5 w-5" />
            <span className="sr-only">Buscar</span>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] bg-card p-0">
              <div className="flex flex-col h-full">
                <div className="p-6 border-b border-border">
                  <span className="font-serif text-lg tracking-wide">Management Pyme</span>
                </div>
                <nav className="flex flex-col p-6">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="py-3 text-base font-medium text-foreground hover:text-muted-foreground transition-colors border-b border-border/50 last:border-0"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
