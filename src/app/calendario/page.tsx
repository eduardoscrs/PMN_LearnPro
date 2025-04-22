"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, ChevronLeft, ChevronRight, Clock, MapPin } from "lucide-react"

export default function CalendarioPage() {
  // En una aplicación real, obtendríamos estos datos desde una API o base de datos
  const eventos = [
    {
      id: 1,
      titulo: "Entrega de Proyecto Final",
      curso: "Introducción a la Programación",
      fecha: "30 de Abril, 2025",
      hora: "23:59",
      tipo: "tarea",
      importante: true,
    },
    {
      id: 2,
      titulo: "Examen Parcial",
      curso: "Gestión de Proyectos",
      fecha: "25 de Abril, 2025",
      hora: "10:00 - 12:00",
      ubicacion: "Aula 302",
      tipo: "examen",
      importante: true,
    },
    {
      id: 3,
      titulo: "Taller de Bases de Datos",
      curso: "Análisis de Datos",
      fecha: "20 de Abril, 2025",
      hora: "15:00 - 17:00",
      ubicacion: "Laboratorio de Informática",
      tipo: "taller",
      importante: false,
    },
    {
      id: 4,
      titulo: "Reunión de Grupo",
      curso: "Gestión de Proyectos",
      fecha: "18 de Abril, 2025",
      hora: "16:00 - 17:30",
      ubicacion: "Sala de Reuniones 2",
      tipo: "reunion",
      importante: false,
    },
    {
      id: 5,
      titulo: "Entrega de Ejercicios",
      curso: "Análisis de Datos",
      fecha: "22 de Abril, 2025",
      hora: "23:59",
      tipo: "tarea",
      importante: false,
    },
  ]

  const [mesActual, setMesActual] = useState("Abril 2025")
  
  const diasSemana = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
  
  // Días del mes de abril 2025, comenzando en lunes (para este ejemplo)
  // En una implementación real, esto se calcularía dinámicamente
  const diasDelMes = [
    [null, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, null, null, null, null]
  ]
  
  const eventosPorDia = (dia: number | null) => {
    if (!dia) return []
    return eventos.filter(evento => evento.fecha.includes(`${dia} de Abril, 2025`))
  }
  
  const mesAnterior = () => {
    setMesActual("Marzo 2025") // En una implementación real, esto sería dinámico
  }
  
  const mesSiguiente = () => {
    setMesActual("Mayo 2025") // En una implementación real, esto sería dinámico
  }

  const [modoVisualizacion, setModoVisualizacion] = useState<'calendario' | 'lista'>('calendario')

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-4 md:p-6 pt-3">
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Calendario Académico</h1>
                <p className="text-muted-foreground">Organiza tus eventos, clases y fechas importantes</p>
              </div>
              <div className="flex items-center space-x-2">
                <div className="flex items-center space-x-1">
                  <Button variant="outline" size="sm" className="w-24" onClick={() => setModoVisualizacion('calendario')}>
                    Calendario
                  </Button>
                  <Button variant="outline" size="sm" className="w-24" onClick={() => setModoVisualizacion('lista')}>
                    Lista
                  </Button>
                </div>
                <Button variant="outline" size="icon" onClick={mesAnterior}>
                  <ChevronLeft className="h-4 w-4" />
                  <span className="sr-only">Mes anterior</span>
                </Button>
                <div className="font-medium min-w-[90px] md:min-w-[120px] text-center">{mesActual}</div>
                <Button variant="outline" size="icon" onClick={mesSiguiente}>
                  <ChevronRight className="h-4 w-4" />
                  <span className="sr-only">Mes siguiente</span>
                </Button>
              </div>
            </div>

            {modoVisualizacion === 'calendario' ? (
              <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
                <Card className="overflow-hidden">
                  <CardHeader className="bg-muted/50 p-2 md:p-4">
                    <CardTitle>Vista Mensual</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 overflow-x-auto">
                    <div className="grid grid-cols-7 text-center min-w-[700px]">
                      {diasSemana.map(dia => (
                        <div key={dia} className="py-2 font-medium text-sm border-b">
                          {dia}
                        </div>
                      ))}
                      
                      {diasDelMes.flat().map((dia, i) => (
                        <div
                          key={`dia-${i}`}
                          className={`p-2 min-h-[80px] sm:min-h-[100px] border relative ${
                            dia === 16 ? "bg-blue-50" : ""
                          } ${!dia ? "bg-gray-50" : ""}`}
                        >
                          {dia && (
                            <>
                              <div className={`text-sm font-medium ${
                                dia === 16 ? "text-blue-600" : ""
                              }`}>
                                {dia}
                              </div>
                              <div className="mt-1 space-y-1">
                                {eventosPorDia(dia).map(evento => (
                                  <div
                                    key={evento.id}
                                    className={`text-xs px-1 py-0.5 rounded truncate ${
                                      evento.tipo === "tarea" 
                                        ? "bg-green-100 text-green-800" 
                                        : evento.tipo === "examen" 
                                          ? "bg-red-100 text-red-800"
                                          : evento.tipo === "taller"
                                            ? "bg-purple-100 text-purple-800"
                                            : "bg-blue-100 text-blue-800"
                                    }`}
                                  >
                                    {evento.titulo}
                                  </div>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <div className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Próximos Eventos</CardTitle>
                      <CardDescription>Eventos para los próximos días</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {eventos
                        .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.hora.localeCompare(b.hora))
                        .map(evento => (
                          <div key={evento.id} className="rounded-md border p-3 space-y-2">
                            <div className="flex justify-between items-start">
                              <h4 className="font-medium">{evento.titulo}</h4>
                              <Badge
                                className={
                                  evento.tipo === "tarea" 
                                    ? "bg-green-100 text-green-800 hover:bg-green-100" 
                                    : evento.tipo === "examen" 
                                      ? "bg-red-100 text-red-800 hover:bg-red-100"
                                      : evento.tipo === "taller"
                                        ? "bg-purple-100 text-purple-800 hover:bg-purple-100" 
                                        : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                                }
                                variant="outline"
                              >
                                {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                              </Badge>
                            </div>
                            <div className="text-sm text-muted-foreground">
                              {evento.curso}
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Calendar className="h-4 w-4 text-muted-foreground" />
                              <span>{evento.fecha}</span>
                            </div>
                            <div className="flex items-center gap-2 text-sm">
                              <Clock className="h-4 w-4 text-muted-foreground" />
                              <span>{evento.hora}</span>
                            </div>
                            {evento.ubicacion && (
                              <div className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4 text-muted-foreground" />
                                <span>{evento.ubicacion}</span>
                              </div>
                            )}
                          </div>
                        ))}
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Filtros</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-green-100"></div>
                          <span className="text-sm">Tareas</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-red-100"></div>
                          <span className="text-sm">Exámenes</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-purple-100"></div>
                          <span className="text-sm">Talleres</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-blue-100"></div>
                          <span className="text-sm">Reuniones</span>
                        </div>
                      </div>
                      <Separator className="my-4" />
                      <div className="flex justify-end">
                        <Button variant="outline" size="sm">
                          Aplicar Filtros
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ) : (
              <Card>
                <CardHeader>
                  <CardTitle>Lista de Eventos - {mesActual}</CardTitle>
                  <CardDescription>Visualización en formato lista</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {eventos
                    .sort((a, b) => a.fecha.localeCompare(b.fecha) || a.hora.localeCompare(b.hora))
                    .map(evento => (
                      <div key={evento.id} className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 rounded-md border p-3">
                        <div className="space-y-1">
                          <div className="flex items-center gap-2">
                            <Badge
                              className={
                                evento.tipo === "tarea" 
                                  ? "bg-green-100 text-green-800 hover:bg-green-100" 
                                  : evento.tipo === "examen" 
                                    ? "bg-red-100 text-red-800 hover:bg-red-100"
                                    : evento.tipo === "taller"
                                      ? "bg-purple-100 text-purple-800 hover:bg-purple-100" 
                                      : "bg-blue-100 text-blue-800 hover:bg-blue-100"
                              }
                              variant="outline"
                            >
                              {evento.tipo.charAt(0).toUpperCase() + evento.tipo.slice(1)}
                            </Badge>
                            <h4 className="font-medium">{evento.titulo}</h4>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {evento.curso}
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Calendar className="h-4 w-4" />
                            <span>{evento.fecha}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            <span>{evento.hora}</span>
                          </div>
                          {evento.ubicacion && (
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span>{evento.ubicacion}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                </CardContent>
              </Card>
            )}
          </div>
        </main>
      </div>
    </div>
  )
}