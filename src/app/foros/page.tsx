"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { BookOpen, Calendar, MessageSquare, Plus, Search, ThumbsUp, User } from "lucide-react"
import { Avatar } from "@/components/ui/avatar"

export default function ForosPage() {
  // En una aplicación real, estos datos vendrían de una API o base de datos
  const forosCategorias = [
    { id: "programacion", nombre: "Programación", icono: <BookOpen className="h-4 w-4" /> },
    { id: "proyectos", nombre: "Gestión de Proyectos", icono: <Calendar className="h-4 w-4" /> },
    { id: "general", nombre: "Temas Generales", icono: <MessageSquare className="h-4 w-4" /> },
  ]

  const temasDiscusion = [
    {
      id: 1,
      titulo: "¿Cómo optimizar algoritmos de búsqueda?",
      autor: "Ana Gómez",
      avatarUrl: "/avatar1.png",
      categoria: "programacion",
      fechaCreacion: "10 de Abril, 2025",
      respuestas: 15,
      vistas: 234,
      ultimoMensaje: "hace 2 horas",
      ultimoUsuario: "Carlos Ruiz",
    },
    {
      id: 2,
      titulo: "Problemas con Hooks en React",
      autor: "Miguel Sánchez",
      avatarUrl: "/avatar2.png",
      categoria: "programacion",
      fechaCreacion: "8 de Abril, 2025",
      respuestas: 8,
      vistas: 143,
      ultimoMensaje: "hace 1 día",
      ultimoUsuario: "Laura Díaz",
    },
    {
      id: 3,
      titulo: "Mejores prácticas para documentación de código",
      autor: "Pablo Martín",
      avatarUrl: "/avatar3.png",
      categoria: "programacion",
      fechaCreacion: "5 de Abril, 2025",
      respuestas: 22,
      vistas: 312,
      ultimoMensaje: "hace 5 horas",
      ultimoUsuario: "Elena Castro",
    },
    {
      id: 4,
      titulo: "Metodologías ágiles: Scrum vs Kanban",
      autor: "Laura Díaz",
      avatarUrl: "/avatar4.png",
      categoria: "proyectos",
      fechaCreacion: "12 de Abril, 2025",
      respuestas: 19,
      vistas: 278,
      ultimoMensaje: "hace 3 horas",
      ultimoUsuario: "Roberto Fernández",
    },
    {
      id: 5,
      titulo: "Herramientas para gestionar equipos remotos",
      autor: "Carlos Ruiz",
      avatarUrl: "/avatar5.png",
      categoria: "proyectos",
      fechaCreacion: "9 de Abril, 2025",
      respuestas: 12,
      vistas: 189,
      ultimoMensaje: "hace 1 día",
      ultimoUsuario: "Ana Gómez",
    },
    {
      id: 6,
      titulo: "¿Qué libro me recomendáis para aprender Python?",
      autor: "Elena Castro",
      avatarUrl: "/avatar6.png",
      categoria: "general",
      fechaCreacion: "7 de Abril, 2025",
      respuestas: 24,
      vistas: 345,
      ultimoMensaje: "hace 6 horas",
      ultimoUsuario: "Pablo Martín",
    },
    {
      id: 7,
      titulo: "Eventos y conferencias tecnológicas 2025",
      autor: "Roberto Fernández",
      avatarUrl: "/avatar7.png",
      categoria: "general",
      fechaCreacion: "11 de Abril, 2025",
      respuestas: 9,
      vistas: 187,
      ultimoMensaje: "hace 12 horas",
      ultimoUsuario: "Miguel Sánchez",
    },
  ]

  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("todos")
  const [temasBusqueda, setTemasBusqueda] = useState("")

  const temasFiltrados = temasDiscusion.filter(
    (tema) =>
      (categoriaSeleccionada === "todos" || tema.categoria === categoriaSeleccionada) &&
      tema.titulo.toLowerCase().includes(temasBusqueda.toLowerCase())
  )

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-4 md:p-6 pt-3">
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Foros de Discusión</h1>
                <p className="text-muted-foreground">Participa en las discusiones académicas</p>
              </div>
              <Button className="w-full sm:w-auto">
                <Plus className="mr-2 h-4 w-4" /> Nuevo Tema
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row gap-2 sm:items-center sm:space-x-2">
              <div className="relative flex-1">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Buscar temas..."
                  className="pl-8"
                  value={temasBusqueda}
                  onChange={(e) => setTemasBusqueda(e.target.value)}
                />
              </div>
            </div>

            <Tabs defaultValue="todos" onValueChange={setCategoriaSeleccionada} className="space-y-4">
              <div className="overflow-x-auto">
                <TabsList className="inline-flex w-auto min-w-max">
                  <TabsTrigger value="todos">Todos los Temas</TabsTrigger>
                  {forosCategorias.map((cat) => (
                    <TabsTrigger key={cat.id} value={cat.id} className="flex items-center gap-1">
                      {cat.icono} {cat.nombre}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              <ScrollArea className="h-[500px] sm:h-[600px] rounded-md border">
                <div className="space-y-4 p-4">
                  {temasFiltrados.length > 0 ? (
                    temasFiltrados.map((tema) => (
                      <Card key={tema.id}>
                        <CardHeader className="p-4 pb-2">
                          <div className="flex flex-col sm:flex-row sm:justify-between gap-2">
                            <div className="flex items-center gap-2">
                              <Avatar className="h-6 w-6">
                                <User />
                              </Avatar>
                              <span className="text-sm text-muted-foreground">{tema.autor}</span>
                              <span className="text-xs text-muted-foreground hidden sm:inline">• {tema.fechaCreacion}</span>
                            </div>
                            <Badge
                              variant="outline"
                              className={
                                tema.categoria === "programacion"
                                  ? "bg-blue-100 text-blue-800 hover:bg-blue-100 w-fit"
                                  : tema.categoria === "proyectos"
                                  ? "bg-green-100 text-green-800 hover:bg-green-100 w-fit"
                                  : "bg-purple-100 text-purple-800 hover:bg-purple-100 w-fit"
                              }
                            >
                              {forosCategorias.find((cat) => cat.id === tema.categoria)?.nombre}
                            </Badge>
                          </div>
                          <div className="flex items-center justify-between mt-2">
                            <CardTitle className="text-base sm:text-lg">{tema.titulo}</CardTitle>
                            <span className="text-xs text-muted-foreground sm:hidden">{tema.fechaCreacion}</span>
                          </div>
                        </CardHeader>
                        <CardContent className="p-4 pt-0">
                          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                            <div className="flex items-center gap-1">
                              <MessageSquare className="h-4 w-4" />
                              <span>{tema.respuestas}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <User className="h-4 w-4" />
                              <span>{tema.vistas}</span>
                            </div>
                          </div>
                        </CardContent>
                        <CardFooter className="p-4 pt-0 flex flex-col sm:flex-row sm:justify-between gap-3">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <span>Última: {tema.ultimoMensaje} por {tema.ultimoUsuario}</span>
                          </div>
                          <div className="flex gap-2 w-full sm:w-auto">
                            <Button variant="ghost" size="sm" className="w-full sm:w-auto">
                              <ThumbsUp className="h-4 w-4 mr-1" />
                              <span className="hidden sm:inline">Útil</span>
                            </Button>
                            <Button variant="outline" size="sm" className="w-full sm:w-auto">
                              Ver tema
                            </Button>
                          </div>
                        </CardFooter>
                      </Card>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center py-12">
                      <MessageSquare className="h-12 w-12 text-muted-foreground mb-2" />
                      <h3 className="font-medium text-lg text-center">No se encontraron temas</h3>
                      <p className="text-muted-foreground text-center mt-1 px-4">
                        No hay temas que coincidan con tu búsqueda o categoría seleccionada
                      </p>
                      <Button className="mt-4" onClick={() => setTemasBusqueda("")}>
                        Ver todos los temas
                      </Button>
                    </div>
                  )}
                </div>
              </ScrollArea>
            </Tabs>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-lg border bg-card p-4">
                <h2 className="font-semibold mb-2">Temas Populares</h2>
                <div className="space-y-2">
                  {temasDiscusion
                    .sort((a, b) => b.vistas - a.vistas)
                    .slice(0, 3)
                    .map((tema) => (
                      <div key={`popular-${tema.id}`} className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div
                            className={`w-2 h-2 rounded-full ${
                              tema.categoria === "programacion"
                                ? "bg-blue-500"
                                : tema.categoria === "proyectos"
                                ? "bg-green-500"
                                : "bg-purple-500"
                            }`}
                          />
                          <span className="text-sm font-medium line-clamp-1">{tema.titulo}</span>
                        </div>
                        <span className="text-xs text-muted-foreground whitespace-nowrap">{tema.vistas} vistas</span>
                      </div>
                    ))}
                </div>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Reglas del Foro</CardTitle>
                  <CardDescription>Directrices para una participación respetuosa</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <p className="text-sm">1. Sé respetuoso con todos los participantes.</p>
                  <p className="text-sm">2. No publiques contenido inapropiado o fuera de tema.</p>
                  <p className="text-sm">3. Evita el spam y la publicidad no autorizada.</p>
                  <p className="text-sm">4. Si tienes preguntas técnicas, proporciona detalles suficientes.</p>
                  <p className="text-sm">5. Utiliza un lenguaje claro y conciso.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}