export type Wedding = {
  slug: string
  title: string
  cover: string
  images: string[]
  video?: string
}

const cover = (title: string) => `/placeholder.svg?height=720&width=1080&query=${encodeURIComponent(title)}`
const image = (n: number) => `/placeholder.svg?height=1200&width=900&query=Editorial%20frame%20${n}`

export const WEDDINGS: Wedding[] = [
  {
    slug: "wedding-1",
    title: "Wedding 1",
    cover: cover("Wedding 1 cover"),
    images: [1, 2, 3, 4, 5, 6, 7, 8].map(image),
    video: "/videos/hero.mp4",
  },
  {
    slug: "wedding-2",
    title: "Wedding 2",
    cover: cover("Wedding 2 cover"),
    images: [9, 10, 11, 12, 13, 14, 15, 16].map(image),
    video: "/videos/hero.mp4",
  },
  {
    slug: "wedding-3",
    title: "Wedding 3",
    cover: cover("Wedding 3 cover"),
    images: [17, 18, 19, 20, 21, 22, 23, 24].map(image),
    video: "/videos/hero.mp4",
  },
]
