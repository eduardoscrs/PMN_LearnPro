# 📚 PMN LearnPro – Plataforma E-learning Empresarial

Este repositorio contiene el **Prototipo Mínimo Navegable (PMN)** de **LearnPro**, una plataforma de aprendizaje empresarial desarrollada con **Next.js 14**. El objetivo del prototipo es demostrar una estructura navegable básica para la futura plataforma, enfocada en la organización de secciones clave, navegación y estilos globales coherentes.

---

## 🚀 Tecnologías utilizadas

- **Next.js 14** – Framework principal para desarrollo web React SSR.
- **TypeScript** – Tipado estático para mayor mantenibilidad.
- **Tailwind CSS** – Utilizado para estilos utilitarios y diseño responsivo.
- **tw-animate-css** – Extensión de animaciones para mejoras visuales.
- **Google Fonts (Geist Sans / Mono)** – Fuentes tipográficas personalizadas.
- **OKLCH** – Espacio de color moderno para mejor accesibilidad y contraste.

---

## 🧱 Estructura del PMN

El PMN implementa una navegación básica y estructura inicial del contenido. Las secciones clave incluyen:

---

## 🎨 Diseño y Estilos

Se define una **tematización personalizada** basada en el espacio de color `oklch`, soportando **modo claro y oscuro**, con variables como:

- `--color-primary`
- `--color-background`
- `--color-sidebar`
- `--font-sans`, `--font-mono`

El sistema de diseño permite mantener consistencia en toda la app y facilita la escalabilidad.

---

## 💡 Objetivo del PMN

Este prototipo busca:

- Simular la experiencia de navegación de la plataforma final.
- Mostrar la estructura de rutas y secciones.
- Establecer el diseño base de estilos y fuentes.
- Validar la coherencia visual y usabilidad mínima.

No contiene lógica funcional avanzada ni conexiones con bases de datos o sistemas externos.

---

## 📌 Próximos pasos

- Integrar autenticación de usuarios.
- Conectar con un backend (API o base de datos).
- Agregar lógica para la inscripción y visualización de cursos.
- Implementar roles (admin, alumno, instructor).
- Añadir panel de estadísticas o progreso.

---

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
