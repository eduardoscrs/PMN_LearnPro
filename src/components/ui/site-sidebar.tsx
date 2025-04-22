import Link from "next/link"
import { 
  BookOpen, 
  Calendar, 
  FileText, 
  GraduationCap, 
  LayoutDashboard, 
  MessageSquare, 
  Settings, 
  Users 
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export function SiteSidebar() {
  return (
    <div className="hidden border-r bg-background md:block">
      <ScrollArea className="h-[calc(100vh-4rem)] w-[240px]">
        <div className="py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-xs font-semibold uppercase tracking-tight">
              Principal
            </h2>
            <div className="space-y-1">
              <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="/">
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="/cursos">
                  <BookOpen className="h-4 w-4" />
                  Mis Cursos
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="/calendario">
                  <Calendar className="h-4 w-4" />
                  Calendario
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="/tareas">
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
                <Link href="/foros">
                  <MessageSquare className="h-4 w-4" />
                  Foros
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="/comunidad">
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
                <Link href="/perfil">
                  <GraduationCap className="h-4 w-4" />
                  Mi Perfil
                </Link>
              </Button>
              <Button variant="ghost" className="w-full justify-start gap-2" asChild>
                <Link href="/configuracion">
                  <Settings className="h-4 w-4" />
                  Ajustes
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}