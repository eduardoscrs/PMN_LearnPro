import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { CourseCard } from "@/components/ui/course-card"
import { BookOpen, Filter, Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

export default function CoursesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-6 pt-3">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">Catálogo de Cursos</h1>
                <p className="text-muted-foreground">Explora todos nuestros cursos disponibles</p>
              </div>
            </div>

            <div className="flex items-center space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input placeholder="Buscar cursos..." className="pl-8" />
              </div>
              <Button variant="outline" size="icon">
                <Filter className="h-4 w-4" />
                <span className="sr-only">Filtrar cursos</span>
              </Button>
            </div>

            <div>
              <h2 className="text-xl font-semibold mb-4">Cursos Destacados</h2>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Introducción a la Programación"
                  description="Fundamentos de programación y algoritmos"
                  image="/prog.jpg"
                  instructor="Prof. García"
                  progress={75}
                  href="/cursos/intro-programacion"
                />

                <CourseCard
                  title="Gestión de Proyectos"
                  description="Metodologías ágiles y gestión de equipos"
                  image="/image.jpeg"
                  instructor="Prof. Martínez"
                  progress={30}
                  href="/cursos/gestion-proyectos"
                />

                <CourseCard
                  title="Análisis de Datos"
                  description="Técnicas estadísticas y visualización"
                  image="/data.jpg"
                  instructor="Prof. López"
                  progress={10}
                  href="/cursos/analisis-datos"
                />
              </div>
            </div>

            <Separator />

            <div>
              <h2 className="text-xl font-semibold mb-4">Cursos por Categoría</h2>
              
              <h3 className="text-lg font-medium mb-3">Desarrollo de Software</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-6">
                <CourseCard
                  title="Desarrollo Web Frontend"
                  description="HTML, CSS y JavaScript modernos"
                  image="/prog.jpg"
                  instructor="Prof. Rodríguez"
                  progress={0}
                  href="/cursos/desarrollo-web"
                />

                <CourseCard
                  title="Programación Orientada a Objetos"
                  description="Principios de POO con Java"
                  image="/prog.jpg"
                  instructor="Prof. García"
                  progress={0}
                  href="/cursos/poo-java"
                />

                <CourseCard
                  title="Bases de Datos"
                  description="Modelado y consultas SQL"
                  image="/data.jpg"
                  instructor="Prof. Hernández"
                  progress={0}
                  href="/cursos/bases-datos"
                />
              </div>

              <h3 className="text-lg font-medium mb-3">Gestión de Empresas</h3>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <CourseCard
                  title="Administración de Negocios"
                  description="Fundamentos de administración moderna"
                  image="/image.jpeg"
                  instructor="Prof. Sánchez"
                  progress={0}
                  href="/cursos/admin-negocios"
                />

                <CourseCard
                  title="Marketing Digital"
                  description="Estrategias de marketing en el entorno digital"
                  image="/image.jpeg"
                  instructor="Prof. González"
                  progress={0}
                  href="/cursos/marketing-digital"
                />

                <CourseCard
                  title="Finanzas para No Financieros"
                  description="Conceptos básicos de finanzas empresariales"
                  image="/image.jpeg"
                  instructor="Prof. Pérez"
                  progress={0}
                  href="/cursos/finanzas-basicas"
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}