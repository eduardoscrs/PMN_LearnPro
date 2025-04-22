"use client"

import Link from "next/link"
import { Button } from "./button"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">Plataforma de Cursos</span>
        </Link>
        <nav className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/perfil">Mi Perfil</Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}