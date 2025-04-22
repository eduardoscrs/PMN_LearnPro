"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Camera } from "lucide-react"

interface ProfileAvatarProps {
  url: string
  size: number
  onUpload: (url: string) => void
}

export function ProfileAvatar({ url, size, onUpload }: ProfileAvatarProps) {
  const [isHovering, setIsHovering] = useState(false)

  // En una aplicación real, esta función subiría la imagen a un servidor
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      // Simulamos la subida creando una URL local para la imagen
      const imageUrl = URL.createObjectURL(file)
      onUpload(imageUrl)
    }
  }

  return (
    <div
      className="relative rounded-full overflow-hidden"
      style={{ width: size, height: size }}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <Image src={url || "/placeholder.svg"} alt="Foto de perfil" width={size} height={size} className="object-cover" />

      <label
        htmlFor="avatar-upload"
        className={`absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity cursor-pointer ${
          isHovering ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="text-white flex flex-col items-center gap-2">
          <Camera className="h-8 w-8" />
          <span className="text-sm font-medium">Cambiar foto</span>
        </div>
      </label>

      <input id="avatar-upload" type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
    </div>
  )
}

