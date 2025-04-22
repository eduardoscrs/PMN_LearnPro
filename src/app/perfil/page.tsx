"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { SiteHeader } from "@/components/ui/site-header"
import { SiteSidebar } from "@/components/ui/site-sidebar"
import { ProfileAvatar } from "@/components/ui/profile-avatar"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { AtSign, BookOpen, Calendar, GraduationCap, MapPin, Phone, User } from "lucide-react"

export default function ProfilePage() {
  const [userData, setUserData] = useState({
    name: "Juan Pérez",
    email: "juan.perez@ejemplo.com",
    phone: "+34 612 345 678",
    location: "Madrid, España",
    bio: "Estudiante de ingeniería informática con interés en desarrollo web y aplicaciones móviles. Actualmente cursando el tercer año.",
    avatarUrl: "/placeholder.svg?height=200&width=200",
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState(userData)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSave = () => {
    setUserData(formData)
    setIsEditing(false)
  }

  const handleCancel = () => {
    setFormData(userData)
    setIsEditing(false)
  }

  const handleAvatarUpload = (url: string) => {
    setUserData((prev) => ({ ...prev, avatarUrl: url }))
    setFormData((prev) => ({ ...prev, avatarUrl: url }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <div className="flex flex-1">
        <SiteSidebar />
        <main className="flex-1 p-6 pt-3">
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">Mi Perfil</h1>
              <p className="text-muted-foreground">Gestiona tu información personal y preferencias</p>
            </div>

            <Tabs defaultValue="informacion" className="space-y-4">
              <TabsList>
                <TabsTrigger value="informacion">Información Personal</TabsTrigger>
                <TabsTrigger value="academico">Historial Académico</TabsTrigger>
                <TabsTrigger value="preferencias">Preferencias</TabsTrigger>
              </TabsList>

              <TabsContent value="informacion" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-[1fr_2fr]">
                  <Card className="h-fit">
                    <CardHeader>
                      <CardTitle>Foto de Perfil</CardTitle>
                      <CardDescription>Tu imagen de perfil visible para otros usuarios</CardDescription>
                    </CardHeader>
                    <CardContent className="flex flex-col items-center">
                      <ProfileAvatar url={userData.avatarUrl} size={200} onUpload={handleAvatarUpload} />
                    </CardContent>
                    <CardFooter className="flex justify-center border-t p-4">
                      <div className="text-sm text-muted-foreground text-center">
                        Haz clic en la imagen para cambiar tu foto de perfil
                      </div>
                    </CardFooter>
                  </Card>

                  <Card>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <div>
                          <CardTitle>Información Personal</CardTitle>
                          <CardDescription>Tus datos personales y de contacto</CardDescription>
                        </div>
                        {!isEditing ? (
                          <Button onClick={() => setIsEditing(true)}>Editar</Button>
                        ) : (
                          <div className="flex gap-2">
                            <Button variant="outline" onClick={handleCancel}>
                              Cancelar
                            </Button>
                            <Button onClick={handleSave}>Guardar</Button>
                          </div>
                        )}
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {!isEditing ? (
                        <div className="space-y-4">
                          <div className="grid gap-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <User className="h-4 w-4" />
                              <span className="text-sm">Nombre completo</span>
                            </div>
                            <div className="font-medium">{userData.name}</div>
                          </div>

                          <div className="grid gap-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <AtSign className="h-4 w-4" />
                              <span className="text-sm">Correo electrónico</span>
                            </div>
                            <div className="font-medium">{userData.email}</div>
                          </div>

                          <div className="grid gap-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <Phone className="h-4 w-4" />
                              <span className="text-sm">Teléfono</span>
                            </div>
                            <div className="font-medium">{userData.phone}</div>
                          </div>

                          <div className="grid gap-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">Ubicación</span>
                            </div>
                            <div className="font-medium">{userData.location}</div>
                          </div>

                          <Separator />

                          <div className="grid gap-1">
                            <div className="flex items-center gap-2 text-muted-foreground">
                              <span className="text-sm">Biografía</span>
                            </div>
                            <div>{userData.bio}</div>
                          </div>
                        </div>
                      ) : (
                        <div className="space-y-4">
                          <div className="grid gap-2">
                            <Label htmlFor="name">Nombre completo</Label>
                            <Input id="name" name="name" value={formData.name} onChange={handleInputChange} />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="email">Correo electrónico</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="phone">Teléfono</Label>
                            <Input id="phone" name="phone" value={formData.phone} onChange={handleInputChange} />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="location">Ubicación</Label>
                            <Input
                              id="location"
                              name="location"
                              value={formData.location}
                              onChange={handleInputChange}
                            />
                          </div>

                          <div className="grid gap-2">
                            <Label htmlFor="bio">Biografía</Label>
                            <Textarea id="bio" name="bio" rows={4} value={formData.bio} onChange={handleInputChange} />
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="academico" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Historial Académico</CardTitle>
                    <CardDescription>Tus cursos completados y en progreso</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h3 className="text-lg font-medium mb-4">Cursos Actuales</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 rounded-md border p-4">
                          <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                          <div className="space-y-1 w-full">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">Introducción a la Programación</p>
                              <Badge>En progreso</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Instructor: Prof. García</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Inicio: 1 de Marzo, 2023</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rounded-md border p-4">
                          <GraduationCap className="mt-1 h-5 w-5 text-primary" />
                          <div className="space-y-1 w-full">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">Gestión de Proyectos</p>
                              <Badge>En progreso</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Instructor: Prof. Martínez</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Inicio: 15 de Abril, 2023</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div>
                      <h3 className="text-lg font-medium mb-4">Cursos Completados</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-4 rounded-md border p-4">
                          <BookOpen className="mt-1 h-5 w-5 text-primary" />
                          <div className="space-y-1 w-full">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">Fundamentos de Bases de Datos</p>
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                Completado
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Instructor: Prof. Rodríguez</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Completado: 10 de Diciembre, 2022</span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-start space-x-4 rounded-md border p-4">
                          <BookOpen className="mt-1 h-5 w-5 text-primary" />
                          <div className="space-y-1 w-full">
                            <div className="flex items-center justify-between">
                              <p className="font-medium">Diseño de Interfaces</p>
                              <Badge variant="outline" className="bg-green-100 text-green-800 hover:bg-green-100">
                                Completado
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">Instructor: Prof. Sánchez</p>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              <span>Completado: 20 de Febrero, 2023</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="preferencias" className="space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Preferencias</CardTitle>
                    <CardDescription>Personaliza tu experiencia en la plataforma</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Notificaciones por correo</div>
                          <div className="text-sm text-muted-foreground">
                            Recibe notificaciones sobre nuevas tareas y anuncios
                          </div>
                        </div>
                        <Button variant="outline">Activado</Button>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Tema oscuro</div>
                          <div className="text-sm text-muted-foreground">Cambia entre tema claro y oscuro</div>
                        </div>
                        <Button variant="outline">Desactivado</Button>
                      </div>

                      <Separator />

                      <div className="flex items-center justify-between">
                        <div className="space-y-0.5">
                          <div className="font-medium">Recordatorios</div>
                          <div className="text-sm text-muted-foreground">
                            Recibe recordatorios sobre fechas de entrega
                          </div>
                        </div>
                        <Button variant="outline">Activado</Button>
                      </div>
                    </div>
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

