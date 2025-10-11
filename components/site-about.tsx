import Image from "next/image"

export function About() {
  return (
    <section id="about" className="section bg-secondary">
      <div className="container-narrow grid md:grid-cols-2 gap-10 items-center">
        <div className="relative aspect-[3/4] rounded-md overflow-hidden border">
          <Image
            src="/diverse-person-portrait.png"
            alt="Founder portrait placeholder"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div>
          <p className="meta text-xs text-primary mb-3">About</p>
          <h3 className="font-serif text-3xl md:text-4xl mb-4">Crafting Stories of Forever</h3>
          <p className="leading-relaxed text-pretty">
            Anant Parinay Collective is a luxury film house dedicated to capturing refined, heartfelt wedding narratives
            with timeless style and editorial elegance. Our approach blends discreet direction with bold, cinematic
            composition—preserving the essence of every celebration.
          </p>
          <p className="leading-relaxed mt-4">
            We collaborate with distinguished planners and artisans to ensure an experience that is seamless,
            intentional, and artfully composed from first look to final frame.
          </p>
        </div>
      </div>
    </section>
  )
}
