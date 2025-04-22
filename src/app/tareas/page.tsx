import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Download, FileText, Upload } from "lucide-react"

export default function TasksPage() {
  // En una aplicación real, obtendríamos los datos de las tareas desde una API o base de datos
  const tasks = [
    {
      id: 1,
      title: "Ejercicio 1: Algoritmos básicos",
      course: "Introducción a la Programación",
      dueDate: "10 de Junio, 2023",
      status: "Completado",
      grade: "90/100",
    },
    {
      id: 2,
      title: "Ejercicio 2: Funciones en JavaScript",
      course: "Introducción a la Programación",
      dueDate: "20 de Junio, 2023",
      status: "Pendiente",
    },
    {
      id: 3,
      title: "Proyecto Final",
      course: "Introducción a la Programación",
      dueDate: "30 de Junio, 2023",
      status: "Pendiente",
    },
    {
      id: 4,
      title: "Análisis de caso práctico",
      course: "Gestión de Proyectos",
      dueDate: "15 de Junio, 2023",
      status: "Pendiente",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-6 pt-3">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Tareas</h1>
              <p className="text-muted-foreground">Gestiona tus tareas y entregas</p>
            </div>

            <Tabs defaultValue="pendientes" className="space-y-4">
              <TabsList>
                <TabsTrigger value="pendientes">Pendientes</TabsTrigger>
                <TabsTrigger value="completadas">Completadas</TabsTrigger>
                <TabsTrigger value="todas">Todas</TabsTrigger>
              </TabsList>

              <TabsContent value="pendientes" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tareas Pendientes</CardTitle>
                    <CardDescription>Tareas que requieren tu atención</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tasks
                      .filter((task) => task.status === "Pendiente")
                      .map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-4 border rounded-md">
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <p className="font-medium">{task.title}</p>
                              <p className="text-xs text-muted-foreground">{task.course}</p>
                              <p className="text-xs text-muted-foreground">Fecha límite: {task.dueDate}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Descargar
                            </Button>
                            <Button size="sm">
                              <Upload className="h-4 w-4 mr-1" />
                              Entregar
                            </Button>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="completadas" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Tareas Completadas</CardTitle>
                    <CardDescription>Tareas que ya has entregado</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tasks
                      .filter((task) => task.status === "Completado")
                      .map((task) => (
                        <div key={task.id} className="flex items-center justify-between p-4 border rounded-md">
                          <div className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-primary mt-1" />
                            <div>
                              <p className="font-medium">{task.title}</p>
                              <p className="text-xs text-muted-foreground">{task.course}</p>
                              <p className="text-xs text-muted-foreground">Entregado: {task.dueDate}</p>
                              {task.grade && (
                                <p className="text-xs font-medium text-green-600">Calificación: {task.grade}</p>
                              )}
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="outline">
                              <Download className="h-4 w-4 mr-1" />
                              Descargar
                            </Button>
                          </div>
                        </div>
                      ))}
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="todas" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Todas las Tareas</CardTitle>
                    <CardDescription>Lista completa de tareas</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {tasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-4 border rounded-md">
                        <div className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-primary mt-1" />
                          <div>
                            <p className="font-medium">{task.title}</p>
                            <p className="text-xs text-muted-foreground">{task.course}</p>
                            <p className="text-xs text-muted-foreground">
                              {task.status === "Completado" ? "Entregado: " : "Fecha límite: "}
                              {task.dueDate}
                            </p>
                            {task.grade && (
                              <p className="text-xs font-medium text-green-600">Calificación: {task.grade}</p>
                            )}
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span
                            className={`text-xs px-2 py-1 rounded-full ${
                              task.status === "Completado"
                                ? "bg-green-100 text-green-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {task.status}
                          </span>
                          <Button size="sm" variant="outline">
                            <Download className="h-4 w-4 mr-1" />
                            Descargar
                          </Button>
                          {task.status !== "Completado" && (
                            <Button size="sm">
                              <Upload className="h-4 w-4 mr-1" />
                              Entregar
                            </Button>
                          )}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </main>
      </div>
    </div>
  )
}

