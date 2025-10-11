export function Hero() {
  return (
    <section
      id="home"
      className="section relative min-h-[92vh] flex items-center justify-center bg-primary text-primary-foreground"
    >
      <div className="container-narrow text-center space-y-4">
        <p className="meta text-xs opacity-80">ESTD 2022</p>
        <h1 className="text-balance leading-none">
          ANANT PARINAY
          <br />
          COLLECTIVE
        </h1>
        <h3 className="opacity-90">Film House</h3>
        <p className="meta text-[11px] opacity-80">Vendor community for luxury wedding filmmaking</p>
      </div>

      {/* subtle brand mark */}
      <div className="absolute bottom-6 inset-x-0 text-center">
        <span className="meta text-[10px] tracking-[0.3em]">AP</span>
      </div>
    </section>
  )
}
