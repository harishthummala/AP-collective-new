import Image from "next/image"

const items = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  title: `Feature ${i + 1}`,
  cover: `/placeholder.svg?height=720&width=1080&query=wedding%20film%20still%20${i + 1}`,
}))

export function Experience() {
  return (
    <section id="experience" className="section bg-background">
      <div className="container-narrow">
        <div className="text-center mb-12">
          <p className="meta text-xs text-primary">Experience</p>
          <h3 className="font-serif text-3xl md:text-4xl">Selected Works</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <article key={item.id} className="group">
              <div className="relative aspect-[3/2] overflow-hidden rounded-md border">
                <Image
                  src={item.cover || "/placeholder.svg"}
                  alt={`Experience ${item.id}`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  priority={item.id < 3}
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-serif text-xl">{item.title}</span>
                <a href="#contact" className="cta text-[11px] link-underline">
                  Inquire
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
