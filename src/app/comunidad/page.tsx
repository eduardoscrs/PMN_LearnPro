"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Avatar } from "@/components/ui/avatar"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import {
  Calendar,
  Globe,
  MapPin,
  MessageSquare,
  Search,
  Share2,
  User,
  Users,
  Clock,
  PenTool,
  BookOpen,
  Laptop,
  Coffee,
  Plus
} from "lucide-react"

export default function ComunidadPage() {
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const eventos = [
    {
      id: 1,
      titulo: "Hackathon de Innovación Tecnológica",
      descripcion: "Desarrolla soluciones innovadoras en equipos multidisciplinarios",
      fecha: "5 de Mayo, 2025",
      hora: "09:00 - 20:00",
      ubicacion: "Campus Central",
      organizador: "Departamento de Ingeniería",
      imagen: "/image.jpeg",
      tipo: "hackathon"
    },
    {
      id: 2,
      titulo: "Workshop: Inteligencia Artificial Aplicada",
      descripcion: "Aprende a implementar algoritmos de IA en casos prácticos",
      fecha: "12 de Mayo, 2025",
      hora: "16:00 - 19:00",
      ubicacion: "Aula Magna",
      organizador: "Club de Ciencia de Datos",
      imagen: "/data.jpg",
      tipo: "taller"
    },
    {
      id: 3,
      titulo: "Conferencia: El Futuro del Desarrollo Web",
      descripcion: "Tendencias y tecnologías emergentes en desarrollo front-end y back-end",
      fecha: "20 de Mayo, 2025",
      hora: "18:00 - 20:00",
      ubicacion: "Auditorio Principal",
      organizador: "Asociación de Estudiantes de Informática",
      imagen: "/prog.jpg",
      tipo: "conferencia"
    }
  ]

  const gruposEstudio = [
    {
      id: 1,
      nombre: "Desarrollo Web Frontend",
      descripcion: "Grupo para practicar HTML, CSS y JavaScript",
      miembros: 24,
      categoria: "programacion",
      lider: "Ana García",
      diasReunion: "Lunes y Miércoles",
      horaReunion: "17:00 - 19:00",
      icono: <PenTool className="h-5 w-5" />
    },
    {
      id: 2,
      nombre: "Estudio de Algoritmos",
      descripcion: "Preparación para entrevistas técnicas y competencias",
      miembros: 18,
      categoria: "programacion",
      lider: "Carlos Rodríguez",
      diasReunion: "Martes y Jueves",
      horaReunion: "16:00 - 18:00",
      icono: <BookOpen className="h-5 w-5" />
    },
    {
      id: 3,
      nombre: "DevOps & Cloud",
      descripcion: "Implementación de CI/CD y servicios en la nube",
      miembros: 15,
      categoria: "sistemas",
      lider: "Miguel López",
      diasReunion: "Viernes",
      horaReunion: "15:00 - 17:00",
      icono: <Laptop className="h-5 w-5" />
    },
    {
      id: 4,
      nombre: "Club de Debate Tecnológico",
      descripcion: "Discusiones sobre ética y futuro de la tecnología",
      miembros: 22,
      categoria: "general",
      lider: "Laura Martínez",
      diasReunion: "Jueves",
      horaReunion: "19:00 - 20:30",
      icono: <MessageSquare className="h-5 w-5" />
    },
    {
      id: 5,
      nombre: "Emprendimiento Digital",
      descripcion: "Desarrollo de proyectos y startups tecnológicas",
      miembros: 20,
      categoria: "negocios",
      lider: "Roberto Sánchez",
      diasReunion: "Lunes",
      horaReunion: "18:00 - 20:00",
      icono: <Coffee className="h-5 w-5" />
    }
  ]

  const redesSociales = [
    { 
      id: "instagram", 
      nombre: "Instagram", 
      url: "https://instagram.com/campus-virtual",
      seguidores: "5.2K",
      descripcion: "Comparte momentos del campus y eventos"
    },
    { 
      id: "twitter", 
      nombre: "Twitter", 
      url: "https://twitter.com/campus-virtual",
      seguidores: "8.7K",
      descripcion: "Noticias y actualizaciones en tiempo real"
    },
    { 
      id: "linkedin", 
      nombre: "LinkedIn", 
      url: "https://linkedin.com/company/campus-virtual",
      seguidores: "3.4K",
      descripcion: "Red profesional para contactos laborales"
    },
    { 
      id: "youtube", 
      nombre: "YouTube", 
      url: "https://youtube.com/c/campus-virtual",
      seguidores: "12K",
      descripcion: "Tutoriales y conferencias grabadas"
    }
  ]

  const estudiantesActivos = [
    { id: 1, nombre: "Ana García", carrera: "Ing. Informática", avatar: "/avatar1.png" },
    { id: 2, nombre: "Carlos Rodríguez", carrera: "Ing. Software", avatar: "/avatar2.png" },
    { id: 3, nombre: "Laura Martínez", carrera: "Marketing Digital", avatar: "/avatar3.png" },
    { id: 4, nombre: "Miguel López", carrera: "Ing. Sistemas", avatar: "/avatar4.png" },
    { id: 5, nombre: "Elena Castro", carrera: "Ciencia de Datos", avatar: "/avatar5.png" }
  ]

  const [filtroGrupos, setFiltroGrupos] = useState("")

  const gruposFiltrados = gruposEstudio.filter(
    grupo => 
      grupo.nombre.toLowerCase().includes(filtroGrupos.toLowerCase()) || 
      grupo.descripcion.toLowerCase().includes(filtroGrupos.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-4 md:p-6 pt-3">
          <div className="space-y-4 md:space-y-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Comunidad Estudiantil</h1>
              <p className="text-muted-foreground">Conecta con otros estudiantes y participa en eventos</p>
            </div>

            <Tabs defaultValue="eventos" className="space-y-4">
              <div className="overflow-x-auto">
                <TabsList className="inline-flex w-auto min-w-max">
                  <TabsTrigger value="eventos" className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" /> Eventos
                  </TabsTrigger>
                  <TabsTrigger value="grupos" className="flex items-center gap-1">
                    <Users className="h-4 w-4" /> Grupos de Estudio
                  </TabsTrigger>
                  <TabsTrigger value="redes" className="flex items-center gap-1">
                    <Globe className="h-4 w-4" /> Redes Sociales
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="eventos" className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {eventos.map(evento => (
                    <Card key={evento.id} className="overflow-hidden flex flex-col h-full">
                      <div className="relative h-36 sm:h-48 w-full">
                        {evento.imagen && (
                          <div 
                            className="absolute inset-0 bg-cover bg-center" 
                            style={{ backgroundImage: `url(${evento.imagen})` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
                          </div>
                        )}
                        <div className="absolute top-2 right-2">
                          <Badge 
                            className={
                              evento.tipo === "hackathon" 
                                ? "bg-purple-100 text-purple-800" 
                                : evento.tipo === "taller" 
                                  ? "bg-blue-100 text-blue-800"
                                  : "bg-green-100 text-green-800"
                            }
                            variant="outline"
                          >
                            {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                          </Badge>
                        </div>
                        <div className="absolute bottom-4 left-4 text-white">
                          <h3 className="font-bold text-base sm:text-lg">{evento.titulo}</h3>
                        </div>
                      </div>
                      <CardContent className="pt-4 flex-1">
                        <p className="text-sm text-muted-foreground line-clamp-2">{evento.descripcion}</p>
                        <div className="mt-4 space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">{evento.fecha}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">{evento.hora}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <MapPin className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">{evento.ubicacion}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">Organizado por: {evento.organizador}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between mt-auto gap-2">
                        <Button variant="outline" size="sm" className="flex-1 sm:flex-none">
                          <Share2 className="h-4 w-4 mr-1 sm:mr-2" />
                          <span className="hidden sm:inline">Compartir</span>
                        </Button>
                        <Button size="sm" className="flex-1 sm:flex-none">Inscribirse</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>¿Tienes una idea para un evento?</CardTitle>
                    <CardDescription>Propón actividades para la comunidad estudiantil</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button className="flex gap-2">
                        <Plus className="h-4 w-4" />
                        Proponer Evento
                      </Button>
                      <Button variant="outline">Ver Calendario Completo</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="grupos" className="space-y-4">
                <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-2">
                  <div className="relative w-full sm:flex-1">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Buscar grupos de estudio..." 
                      className="pl-8"
                      value={filtroGrupos}
                      onChange={(e) => setFiltroGrupos(e.target.value)} 
                    />
                  </div>
                  <Button className="w-full sm:w-auto">
                    <Plus className="h-4 w-4 mr-1" />
                    Crear Grupo
                  </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {gruposFiltrados.map(grupo => (
                    <Card key={grupo.id} className="flex flex-col h-full">
                      <CardHeader className="flex flex-row items-start space-x-4">
                        <div className="bg-primary/10 p-3 rounded-md flex-shrink-0">
                          {grupo.icono}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <CardTitle className="text-base sm:text-lg">{grupo.nombre}</CardTitle>
                            <Badge variant="outline" className="ml-2 whitespace-nowrap">{grupo.miembros} miembros</Badge>
                          </div>
                          <CardDescription className="mt-1 line-clamp-2">{grupo.descripcion}</CardDescription>
                        </div>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="space-y-2">
                          <div className="flex items-center gap-2 text-sm">
                            <User className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">Líder: {grupo.lider}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Calendar className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">Días: {grupo.diasReunion}</span>
                          </div>
                          <div className="flex items-center gap-2 text-sm">
                            <Clock className="h-4 w-4 text-muted-foreground flex-shrink-0" />
                            <span className="truncate">Hora: {grupo.horaReunion}</span>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-end mt-auto">
                        <Button>Unirse al Grupo</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="redes" className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {redesSociales.map(red => (
                    <Card key={red.id} className="flex flex-col h-full">
                      <CardHeader>
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-2">
                          <CardTitle className="text-base sm:text-lg">Campus Virtual en {red.nombre}</CardTitle>
                          <Badge variant="outline" className="w-fit">{red.seguidores} seguidores</Badge>
                        </div>
                        <CardDescription>{red.descripcion}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-1">
                        <div className="flex gap-1 items-center text-sm text-muted-foreground">
                          <Globe className="h-4 w-4 flex-shrink-0" />
                          <a href={red.url} className="text-primary hover:underline truncate">
                            {red.url.replace('https://', '')}
                          </a>
                        </div>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full">Seguir</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>

                <Card>
                  <CardHeader>
                    <CardTitle>Estudiantes Activos en la Comunidad</CardTitle>
                    <CardDescription>Usuarios destacados por su participación</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ScrollArea className="h-[200px]">
                      <div className="space-y-4">
                        {estudiantesActivos.map(estudiante => (
                          <div key={estudiante.id} className="flex items-center gap-3">
                            <Avatar className="h-10 w-10 flex-shrink-0">
                              <User className="h-5 w-5" />
                            </Avatar>
                            <div className="flex-1 min-w-0">
                              <p className="font-medium truncate">{estudiante.nombre}</p>
                              <p className="text-xs text-muted-foreground truncate">{estudiante.carrera}</p>
                            </div>
                            <Button size="sm" variant="ghost" className="flex-shrink-0">
                              <MessageSquare className="h-4 w-4" />
                              <span className="sr-only">Enviar mensaje</span>
                            </Button>
                          </div>
                        ))}
                      </div>
                    </ScrollArea>
                  </CardContent>
                  <CardFooter className="flex flex-col sm:flex-row justify-between gap-2">
                    <Button variant="outline" className="w-full sm:w-auto">Ver Lista Completa</Button>
                    <Button className="w-full sm:w-auto">Conectar con Estudiantes</Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}