import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { Progress } from "@/components/ui/progress"

interface CourseCardProps {
  title: string
  description: string
  image: string
  instructor: string
  progress: number
  href: string
}

export function CourseCard({
  title,
  description,
  image,
  instructor,
  progress,
  href,
}: CourseCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-sm text-muted-foreground">Instructor: {instructor}</div>
          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span>Progreso</span>
              <span>{progress}%</span>
            </div>
            <Progress value={progress} />
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Link href={href} className="w-full">
          <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground">
            Continuar
          </button>
        </Link>
      </CardFooter>
    </Card>
  )
}