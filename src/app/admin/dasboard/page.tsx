"use client"

import { useState } from "react"
import Link from "next/link"
import {
  BarChart3,
  BookOpen,
  Users,
  FileText,
  Settings,
  LogOut,
  Bell,
  Search,
  PlusCircle,
  Calendar,
  GraduationCap,
  BarChart,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Progress } from "@/components/ui/progress"

export default function AdminDashboard() {
  const [searchQuery, setSearchQuery] = useState("")

  // Datos de ejemplo para el dashboard
  const cursos = [
    { id: 1, titulo: "Introducción a la Gestión de Proyectos", progreso: 75, estudiantes: 42, categoria: "Gestión" },
    { id: 2, titulo: "Marketing Digital Avanzado", progreso: 60, estudiantes: 38, categoria: "Marketing" },
    { id: 3, titulo: "Liderazgo y Comunicación Efectiva", progreso: 90, estudiantes: 56, categoria: "Liderazgo" },
    { id: 4, titulo: "Excel para Análisis de Datos", progreso: 45, estudiantes: 29, categoria: "Tecnología" },
  ]

  const estadisticas = [
    { titulo: "Total Cursos", valor: 24, icono: BookOpen, color: "text-emerald-500" },
    { titulo: "Estudiantes Activos", valor: 186, icono: Users, color: "text-blue-500" },
    { titulo: "Cursos Completados", valor: 342, icono: FileText, color: "text-amber-500" },
    { titulo: "Tasa de Finalización", valor: "78%", icono: BarChart, color: "text-purple-500" },
  ]

  return (
    <div className="flex min-h-screen bg-slate-50 font-sans">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-white border-r border-slate-200">
        <div className="flex items-center gap-2 px-6 py-4 border-b">
          <BookOpen className="h-6 w-6 text-emerald-600" />
          <span className="font-bold text-lg">PMN LearnPro</span>
        </div>
        <div className="flex flex-col flex-1 py-4">
          <nav className="space-y-1 px-2">
            <Link
              href="/admin/dashboard"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md bg-emerald-50 text-emerald-700"
            >
              <BarChart3 className="h-5 w-5" />
              Dashboard
            </Link>
            <Link
              href="/admin/cursos"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
            >
              <BookOpen className="h-5 w-5" />
              Cursos
            </Link>
            <Link
              href="/admin/estudiantes"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
            >
              <Users className="h-5 w-5" />
              Estudiantes
            </Link>
            <Link
              href="/admin/reportes"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
            >
              <FileText className="h-5 w-5" />
              Reportes
            </Link>
            <Link
              href="/admin/configuracion"
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium rounded-md text-slate-700 hover:bg-slate-100"
            >
              <Settings className="h-5 w-5" />
              Configuración
            </Link>
          </nav>
          <div className="mt-auto px-4">
            <Button
              variant="outline"
              className="w-full justify-start gap-2"
              onClick={() => console.log("Cerrar sesión")}
            >
              <LogOut className="h-4 w-4" />
              Cerrar Sesión
            </Button>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-slate-200 px-4 py-3 flex items-center justify-between">
          <div className="relative w-64">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-slate-400" />
            <Input
              placeholder="Buscar..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-4">
            <Button variant="outline" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>AD</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configuración</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Cerrar sesión</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </header>

        {/* Dashboard content */}
        <main className="flex-1 p-6 overflow-auto">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h1 className="text-2xl font-bold text-slate-800">Dashboard</h1>
              <p className="text-slate-500">Bienvenido de nuevo, Administrador</p>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700 gap-2">
              <PlusCircle className="h-4 w-4" />
              Nuevo Curso
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {estadisticas.map((stat, index) => (
              <Card key={index}>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className={`p-3 rounded-full bg-slate-100 ${stat.color}`}>
                    <stat.icono className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-slate-500">{stat.titulo}</p>
                    <h3 className="text-2xl font-bold">{stat.valor}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Recent courses */}
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>Cursos Recientes</CardTitle>
              <CardDescription>Gestiona y monitorea los cursos activos en la plataforma</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Título</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Categoría</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Estudiantes</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Progreso</th>
                      <th className="text-left py-3 px-4 font-medium text-slate-500">Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {cursos.map((curso) => (
                      <tr key={curso.id} className="border-b border-slate-100 hover:bg-slate-50">
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-100 rounded-md">
                              <GraduationCap className="h-5 w-5 text-emerald-600" />
                            </div>
                            <span className="font-medium">{curso.titulo}</span>
                          </div>
                        </td>
                        <td className="py-3 px-4 text-slate-600">{curso.categoria}</td>
                        <td className="py-3 px-4 text-slate-600">{curso.estudiantes} estudiantes</td>
                        <td className="py-3 px-4">
                          <div className="flex items-center gap-2">
                            <Progress value={curso.progreso} className="h-2 w-32" />
                            <span className="text-sm text-slate-600">{curso.progreso}%</span>
                          </div>
                        </td>
                        <td className="py-3 px-4">
                          <Button variant="ghost" size="sm">
                            Editar
                          </Button>
                          <Button variant="ghost" size="sm" className="text-red-500">
                            Eliminar
                          </Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>

          {/* Calendar */}
          <Card>
            <CardHeader>
              <CardTitle>Calendario de Actividades</CardTitle>
              <CardDescription>Próximos eventos y fechas importantes</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
              <div className="flex items-center justify-center h-48 border border-dashed rounded-md border-slate-200">
                <div className="flex flex-col items-center text-slate-500">
                  <Calendar className="h-10 w-10 mb-2" />
                  <p>Calendario de actividades</p>
                  <Button variant="link" className="mt-2">
                    Configurar calendario
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </main>
      </div>
    </div>
  )
}
