import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, Clock, FileText, Users } from "lucide-react"
import Link from "next/link"
import { CourseCard } from "@/components/ui/course-card"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-6 pt-3">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
              <p className="text-muted-foreground">Bienvenido a tu plataforma de cursos internos</p>
            </div>

            <Tabs defaultValue="cursos" className="space-y-4">
              <TabsList>
                <TabsTrigger value="cursos">Mis Cursos</TabsTrigger>
                <TabsTrigger value="calendario">Calendario</TabsTrigger>
                <TabsTrigger value="anuncios">Anuncios</TabsTrigger>
              </TabsList>

              <TabsContent value="cursos" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <CourseCard
                    title="Introducción a la Programación"
                    description="Fundamentos de programación y algoritmos"
                    image="prog.jpg"
                    instructor="Prof. García"
                    progress={75}
                    href="/cursos/intro-programacion"
                  />

                  <CourseCard
                    title="Gestión de Proyectos"
                    description="Metodologías ágiles y gestión de equipos"
                    image="image.jpeg"
                    instructor="Prof. Martínez"
                    progress={30}
                    href="/cursos/gestion-proyectos"
                  />

                  <CourseCard
                    title="Análisis de Datos"
                    description="Técnicas estadísticas y visualización"
                    image="data.jpg"
                    instructor="Prof. López"
                    progress={10}
                    href="/cursos/analisis-datos"
                  />
                </div>
              </TabsContent>

              <TabsContent value="calendario" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Próximos Eventos</CardTitle>
                    <CardDescription>Calendario de actividades y entregas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Entrega Proyecto Final</p>
                        <p className="text-sm text-muted-foreground">
                          Introducción a la Programación - 15 de Junio, 2023
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Examen Parcial</p>
                        <p className="text-sm text-muted-foreground">Gestión de Proyectos - 20 de Junio, 2023</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4 rounded-md border p-4">
                      <CalendarDays className="mt-1 h-5 w-5 text-primary" />
                      <div className="space-y-1">
                        <p className="text-sm font-medium">Taller Práctico</p>
                        <p className="text-sm text-muted-foreground">Análisis de Datos - 25 de Junio, 2023</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="anuncios" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Anuncios Recientes</CardTitle>
                    <CardDescription>Información importante de tus cursos</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Cambio de horario - Gestión de Proyectos</h3>
                        <span className="text-xs text-muted-foreground">Hace 2 días</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        La clase del próximo martes se trasladará al miércoles en el mismo horario.
                      </p>
                    </div>
                    <div className="space-y-2 rounded-md border p-4">
                      <div className="flex items-center justify-between">
                        <h3 className="font-medium">Nuevo material disponible - Análisis de Datos</h3>
                        <span className="text-xs text-muted-foreground">Hace 3 días</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Se ha publicado nuevo material de estudio en la sección de recursos.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Tareas Pendientes</CardTitle>
                  <FileText className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">4</div>
                  <p className="text-xs text-muted-foreground">2 tareas próximas a vencer</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/tareas">Ver todas</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Horas de Estudio</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12.5h</div>
                  <p className="text-xs text-muted-foreground">Esta semana (+2.5h)</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/estadisticas">Ver estadísticas</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Foros Activos</CardTitle>
                  <Users className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">3</div>
                  <p className="text-xs text-muted-foreground">8 mensajes sin leer</p>
                </CardContent>
                <CardFooter>
                  <Button variant="ghost" size="sm" className="w-full" asChild>
                    <Link href="/foros">Ver foros</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

