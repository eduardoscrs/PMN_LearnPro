"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  Users,
  Menu,
  X
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"

export function SiteSidebar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  // Solo ejecutar en el cliente para evitar errores de hidratación
  useEffect(() => {
    setIsMounted(true)
  }, [])

  // Cerrar el sidebar al hacer clic en un enlace en móvil
  const handleLinkClick = () => {
    if (window.innerWidth < 768) {
      setIsMobileOpen(false)
    }
  }

  // Renderizar el contenido del sidebar
  const sidebarContent = (
    <ScrollArea className="h-[calc(100vh-4rem)] w-full">
      <div className="py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight">
            Principal
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/" onClick={handleLinkClick}>
                <LayoutDashboard className="h-4 w-4" />
                Dashboard
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/cursos" onClick={handleLinkClick}>
                <BookOpen className="h-4 w-4" />
                Mis Cursos
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/calendario" onClick={handleLinkClick}>
                <Calendar className="h-4 w-4" />
                Calendario
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/tareas" onClick={handleLinkClick}>
                <FileText className="h-4 w-4" />
                Tareas
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight">
            Comunidad
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/foros" onClick={handleLinkClick}>
                <MessageSquare className="h-4 w-4" />
                Foros
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/comunidad" onClick={handleLinkClick}>
                <Users className="h-4 w-4" />
                Comunidad
              </Link>
            </Button>
          </div>
        </div>
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight">
            Configuración
          </h2>
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/perfil" onClick={handleLinkClick}>
                <GraduationCap className="h-4 w-4" />
                Mi Perfil
              </Link>
            </Button>
            <Button variant="ghost" className="w-full justify-start gap-2" asChild>
              <Link href="/configuracion" onClick={handleLinkClick}>
                <Settings className="h-4 w-4" />
                Ajustes
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  )

  // Botón para mostrar/ocultar el sidebar en dispositivos móviles
  const toggleButton = (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden fixed bottom-4 right-4 z-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-full shadow-lg"
      onClick={() => setIsMobileOpen(!isMobileOpen)}
      aria-label={isMobileOpen ? "Cerrar menú" : "Abrir menú"}
    >
      {isMobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
    </Button>
  )

  if (!isMounted) {
    return <div className="hidden border-r bg-background md:block w-[240px]" />
  }

  return (
    <>
      {/* Sidebar para desktop */}
      <div className="hidden border-r bg-background md:block w-[240px]">
        {sidebarContent}
      </div>
      
      {/* Sidebar para móviles */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Overlay para cerrar al hacer clic fuera */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileOpen(false)} 
            aria-hidden="true"
          />
          
          {/* Contenido del sidebar móvil */}
          <div className="relative bg-background w-[85%] max-w-[300px] h-full shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="font-semibold">Menú</h2>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileOpen(false)}
                aria-label="Cerrar menú"
              >
                <X className="h-4 w-4" />
              </Button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
      
      {toggleButton}
    </>
  )
}