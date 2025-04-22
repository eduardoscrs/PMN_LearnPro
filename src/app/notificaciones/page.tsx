"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Bell, CheckCircle, Clock, Filter, Search, Trash2, User } from "lucide-react"
import { Input } from "@/components/ui/input"

export default function NotificacionesPage() {
  // En una aplicación real, obtendríamos estos datos desde una API o base de datos
  const notificaciones = [
    {
      id: 1,
      titulo: "Nuevo comentario en tu publicación",
      remitente: "Ana García",
      mensaje: "Ha comentado en tu publicación sobre programación web.",
      fecha: "16 de abril, 2025",
      hora: "10:30",
      tipo: "social",
      leida: false,
    },
    {
      id: 2,
      titulo: "Recordatorio de entrega",
      remitente: "Sistema",
      mensaje: "Tu entrega de 'Proyecto Final' vence en 2 días.",
      fecha: "16 de abril, 2025",
      hora: "09:15",
      tipo: "tarea",
      leida: false,
      importante: true,
    },
    {
      id: 3,
      titulo: "Nueva calificación disponible",
      remitente: "Prof. Martínez",
      mensaje: "Ha publicado la calificación para 'Examen Parcial' en Gestión de Proyectos.",
      fecha: "15 de abril, 2025",
      hora: "18:45",
      tipo: "curso",
      leida: true,
    },
    {
      id: 4,
      titulo: "Cambio en horario de clase",
      remitente: "Administración",
      mensaje: "La clase de Análisis de Datos se ha reprogramado para el viernes a las 14:00.",
      fecha: "14 de abril, 2025",
      hora: "12:00",
      tipo: "sistema",
      leida: false,
      importante: true,
    },
    {
      id: 5,
      titulo: "Nueva tarea asignada",
      remitente: "Prof. López",
      mensaje: "Ha asignado una nueva tarea 'Ejercicios de Bases de Datos' con fecha límite 22 de abril.",
      fecha: "14 de abril, 2025",
      hora: "09:30",
      tipo: "tarea",
      leida: true,
    },
    {
      id: 6,
      titulo: "Respuesta en foro de discusión",
      remitente: "Carlos Rodríguez",
      mensaje: "Ha respondido a tu pregunta en el foro 'Dudas sobre JavaScript'.",
      fecha: "13 de abril, 2025",
      hora: "16:20",
      tipo: "social",
      leida: false,
    },
    {
      id: 7,
      titulo: "Actualización de plataforma",
      remitente: "Sistema",
      mensaje: "La plataforma estará en mantenimiento el domingo 20 de abril de 02:00 a 04:00.",
      fecha: "12 de abril, 2025",
      hora: "14:45",
      tipo: "sistema",
      leida: true,
    },
    {
      id: 8,
      titulo: "Invitación a grupo de estudio",
      remitente: "Laura Mendoza",
      mensaje: "Te ha invitado a unirte al grupo de estudio para el examen final de Programación.",
      fecha: "12 de abril, 2025",
      hora: "11:10",
      tipo: "social",
      leida: false,
    },
  ]

  // Estados para filtros y búsqueda
  const [filtroTipo, setFiltroTipo] = useState<string | null>(null)
  const [mostrarSoloNoLeidas, setMostrarSoloNoLeidas] = useState(false)
  const [terminoBusqueda, setTerminoBusqueda] = useState("")
  
  // Filtrar notificaciones según los criterios seleccionados
  const notificacionesFiltradas = notificaciones
    .filter(notif => !filtroTipo || notif.tipo === filtroTipo)
    .filter(notif => !mostrarSoloNoLeidas || !notif.leida)
    .filter(notif => 
      terminoBusqueda === "" || 
      notif.titulo.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      notif.mensaje.toLowerCase().includes(terminoBusqueda.toLowerCase()) ||
      notif.remitente.toLowerCase().includes(terminoBusqueda.toLowerCase())
    )
    .sort((a, b) => {
      // Ordenar por fecha/hora (más recientes primero)
      const fechaA = new Date(`${a.fecha} ${a.hora}`).getTime();
      const fechaB = new Date(`${b.fecha} ${b.hora}`).getTime();
      return fechaB - fechaA;
    });

  // Contar notificaciones no leídas
  const contadorNoLeidas = notificaciones.filter(notif => !notif.leida).length;
  
  // Función para marcar todas como leídas
  const marcarTodasLeidas = () => {
    // En una aplicación real, esto enviaría una solicitud a la API
    alert("Todas las notificaciones marcadas como leídas")
  }
  
  // Función para eliminar notificaciones leídas
  const eliminarLeidas = () => {
    // En una aplicación real, esto enviaría una solicitud a la API
    alert("Notificaciones leídas eliminadas")
  }

  // Color de fondo según el tipo de notificación
  const getBackgroundColor = (tipo: string) => {
    switch(tipo) {
      case 'social': return 'bg-blue-50';
      case 'tarea': return 'bg-green-50';
      case 'curso': return 'bg-purple-50';
      case 'sistema': return 'bg-amber-50';
      default: return '';
    }
  }
  
  // Color de badge según el tipo de notificación
  const getBadgeClass = (tipo: string) => {
    switch(tipo) {
      case 'social': return 'bg-blue-100 text-blue-800 hover:bg-blue-100';
      case 'tarea': return 'bg-green-100 text-green-800 hover:bg-green-100';
      case 'curso': return 'bg-purple-100 text-purple-800 hover:bg-purple-100';
      case 'sistema': return 'bg-amber-100 text-amber-800 hover:bg-amber-100';
      default: return '';
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-4 md:p-6 pt-3">
          <div className="space-y-4 md:space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold tracking-tight">Notificaciones</h1>
                <p className="text-muted-foreground">
                  Gestiona tus notificaciones y mantente al día con tus cursos y actividades
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge variant="secondary" className="text-sm">
                  {contadorNoLeidas} no leídas
                </Badge>
                <Button variant="outline" size="sm" onClick={marcarTodasLeidas}>
                  <CheckCircle className="mr-1 h-4 w-4" />
                  Marcar todas como leídas
                </Button>
                <Button variant="outline" size="sm" onClick={eliminarLeidas}>
                  <Trash2 className="mr-1 h-4 w-4" />
                  Eliminar leídas
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr_1fr]">
              <div className="space-y-4">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle>Centro de notificaciones</CardTitle>
                    <CardDescription>
                      Tienes {notificaciones.length} notificaciones en total, {contadorNoLeidas} sin leer
                    </CardDescription>
                    <div className="mt-2 relative max-w-sm">
                      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        type="text"
                        placeholder="Buscar notificaciones..."
                        className="pl-8"
                        value={terminoBusqueda}
                        onChange={(e) => setTerminoBusqueda(e.target.value)}
                      />
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {notificacionesFiltradas.length > 0 ? (
                      notificacionesFiltradas.map(notificacion => (
                        <div 
                          key={notificacion.id} 
                          className={`rounded-md border p-3 ${getBackgroundColor(notificacion.tipo)} ${!notificacion.leida ? 'border-l-4 border-l-blue-500' : ''}`}
                        >
                          <div className="flex justify-between items-start">
                            <h4 className={`font-medium ${!notificacion.leida ? 'font-semibold' : ''}`}>
                              {notificacion.titulo}
                              {notificacion.importante && (
                                <span className="ml-2 text-red-500">•</span>
                              )}
                            </h4>
                            <Badge
                              className={getBadgeClass(notificacion.tipo)}
                              variant="outline"
                            >
                              {notificacion.tipo.charAt(0).toUpperCase() + notificacion.tipo.slice(1)}
                            </Badge>
                          </div>
                          <div className="text-sm text-muted-foreground mt-1">
                            De: {notificacion.remitente}
                          </div>
                          <div className="text-sm mt-2">
                            {notificacion.mensaje}
                          </div>
                          <div className="flex items-center gap-2 text-xs text-muted-foreground mt-2">
                            <Clock className="h-3 w-3" />
                            <span>{notificacion.fecha} - {notificacion.hora}</span>
                          </div>
                          <div className="flex justify-end gap-2 mt-2">
                            <Button variant="ghost" size="sm">
                              <CheckCircle className="h-4 w-4 mr-1" />
                              {notificacion.leida ? 'Ya leída' : 'Marcar como leída'}
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      ))
                    ) : (
                      <div className="text-center py-8">
                        <Bell className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                        <p className="text-muted-foreground">No hay notificaciones que coincidan con tus filtros</p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Filtros</CardTitle>
                    <CardDescription>Personaliza las notificaciones que ves</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-medium mb-3">Tipo de notificación</h4>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant={filtroTipo === null ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setFiltroTipo(null)}
                          >
                            Todas
                          </Button>
                          <Button 
                            variant={filtroTipo === "social" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setFiltroTipo("social")}
                            className="flex items-center gap-1"
                          >
                            <User className="h-4 w-4" />
                            Social
                          </Button>
                          <Button 
                            variant={filtroTipo === "tarea" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setFiltroTipo("tarea")}
                            className="flex items-center gap-1"
                          >
                            <CheckCircle className="h-4 w-4" />
                            Tareas
                          </Button>
                          <Button 
                            variant={filtroTipo === "curso" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setFiltroTipo("curso")}
                            className="flex items-center gap-1"
                          >
                            <Bell className="h-4 w-4" />
                            Cursos
                          </Button>
                          <Button 
                            variant={filtroTipo === "sistema" ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setFiltroTipo("sistema")}
                            className="flex items-center gap-1"
                          >
                            <Bell className="h-4 w-4" />
                            Sistema
                          </Button>
                        </div>
                      </div>

                      <Separator className="my-2" />
                      
                      <div>
                        <h4 className="text-sm font-medium mb-3">Estado</h4>
                        <div className="flex flex-wrap gap-2">
                          <Button 
                            variant={!mostrarSoloNoLeidas ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setMostrarSoloNoLeidas(false)}
                          >
                            Todas
                          </Button>
                          <Button 
                            variant={mostrarSoloNoLeidas ? "default" : "outline"} 
                            size="sm"
                            onClick={() => setMostrarSoloNoLeidas(true)}
                          >
                            No leídas
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-2 mt-4">
                        <h4 className="text-sm font-medium">Leyenda</h4>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-blue-100"></div>
                          <span className="text-sm">Social</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-green-100"></div>
                          <span className="text-sm">Tareas</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-purple-100"></div>
                          <span className="text-sm">Cursos</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-4 h-4 rounded bg-amber-100"></div>
                          <span className="text-sm">Sistema</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <span className="text-red-500 text-lg">•</span>
                          <span className="text-sm">Importante</span>
                        </div>
                      </div>

                      <Separator className="my-2" />

                      <div className="flex justify-end mt-4">
                        <Button variant="outline" size="sm" className="flex gap-1">
                          <Filter className="h-4 w-4" />
                          Resetear filtros
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias</CardTitle>
                    <CardDescription>Configura tus notificaciones</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Notificaciones por correo</h4>
                          <p className="text-sm text-muted-foreground">Recibe un resumen diario</p>
                        </div>
                        <Button variant="outline" size="sm">Configurar</Button>
                      </div>
                      <Separator />
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium">Notificaciones push</h4>
                          <p className="text-sm text-muted-foreground">Alertas en tu navegador</p>
                        </div>
                        <Button variant="outline" size="sm">Activar</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}