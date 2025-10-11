"use client";

import { useEffect, useRef, useState } from "react";
import { SiteNavbar } from "@/components/site-navbar";
import Link from "next/link";
import { Volume2, VolumeX } from "lucide-react";

export default function HomePage() {
  const [fadeOut, setFadeOut] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const [videoReady, setVideoReady] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => setFadeOut(true), 10000);
    return () => clearTimeout(timer);
  }, []);

  // Handle autoplay logic (browsers block unmuted autoplay)
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    const tryPlay = async () => {
      try {
        await v.play();
      } catch (err) {
        console.warn("Autoplay failed:", err);
      }
    };

    if (videoReady) tryPlay();
  }, [videoReady]);

  // Toggle mute/unmute
  const toggleMute = () => {
    const v = videoRef.current;
    if (v) {
      v.muted = !v.muted;
      setIsMuted(v.muted);
    }
  };

  return (
    <main className="min-h-screen bg-white text-black">
      <SiteNavbar />

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center text-center overflow-hidden bg-black">
        {/* Background fallback image */}
        <div
          className="absolute inset-0 z-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/elegant-wedding-ceremony-editorial.jpg')`,
          }}
          aria-hidden="true"
        />

        {/* Hero video */}
        <video
          ref={videoRef}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoError ? "opacity-0 pointer-events-none" : "opacity-100"
          }`}
          muted={isMuted}
          autoPlay
          loop
          playsInline
          preload="auto"
          onLoadedData={() => setVideoReady(true)}
          onError={() => setVideoError(true)}
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div className="absolute inset-0 z-10 bg-black/40" aria-hidden="true" />

        {/* Mute / Unmute Button */}
        <button
          onClick={toggleMute}
          className="absolute bottom-6 right-6 z-20 rounded-full p-3 sm:p-4 backdrop-blur-md bg-white/20 hover:bg-white/30 transition-all border border-white/30 shadow-md"
          aria-label={isMuted ? "Unmute video" : "Mute video"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          ) : (
            <Volume2 className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
          )}
        </button>

        {/* HERO TEXT */}
        <div className="relative z-20 px-6 sm:px-10 max-w-4xl">
          <div
            className={`transition-opacity duration-1000 ${
              fadeOut ? "opacity-0" : "opacity-100"
            }`}
          >
            <p className="text-xs tracking-[0.25em] text-white/90">ESTD • 2022</p>
            <h1 className="mt-3 text-4xl sm:text-6xl font-serif text-white leading-tight">
              Anant Parinay
              <br />
              Collective
            </h1>
            <p className="mt-4 text-lg text-white/90">
              Editorial Wedding Film House
            </p>
          </div>
        </div>
      </section>

      {/* CONTENT SECTION */}
      <section className="py-20 bg-white text-center">
        <div className="container mx-auto px-6 sm:px-10">
          <p className="text-[11px] tracking-[0.22em] text-gray-500 uppercase">
            Anant Parinay Collective
          </p>
          <h3 className="mt-2 text-2xl font-semibold">
            Editorial Wedding Film House
          </h3>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Story-led films and refined photography for destination weddings.
            Explore our body of work below.
          </p>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                href: "/work",
                img: "/elegant-wedding-ceremony-editorial.jpg",
                label: "PORTFOLIO",
                title: "Work",
              },
              {
                href: "/films",
                img: "/super-8-film-wedding-details.jpg",
                label: "FEATURED",
                title: "Films",
              },
              {
                href: "/photography",
                img: "/editorial-wedding-photography.jpg",
                label: "GALLERY",
                title: "Photography",
              },
            ].map((item, idx) => (
              <Link
                key={idx}
                href={item.href}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="h-64 w-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-xs text-white/80">{item.label}</p>
                  <h3 className="text-lg text-white font-semibold">
                    {item.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section className="bg-black text-white py-20 text-center">
        <h3 className="text-2xl font-semibold">Get in touch</h3>
        <p className="mt-3 max-w-2xl mx-auto text-gray-300">
          Begin your Anant Parinay with a bespoke film and photography experience.
        </p>
        <Link
          href="/contact"
          className="mt-6 inline-block border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
        >
          Inquire
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-primary/20 mt-16 bg-white text-black">
        <div className="mx-auto max-w-6xl px-4 py-12 grid gap-8 md:grid-cols-4">
          <div className="space-y-3">
            <div className="font-serif text-2xl text-primary">
              Anant Parinay Collective
            </div>
            <p className="text-sm text-muted-foreground">
              Timeless wedding films and photography with an editorial sensibility.
            </p>
          </div>

          <div>
            <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground mb-3">
              Navigation
            </div>
            <ul className="space-y-2">
              <li>
                <Link href="/work" className="hover:text-primary">
                  Work
                </Link>
              </li>
              <li>
                <Link href="/films" className="hover:text-primary">
                  Films
                </Link>
              </li>
              <li>
                <Link href="/photography" className="hover:text-primary">
                  Photography
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground mb-3">
              Contact
            </div>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  className="hover:text-primary"
                  href="mailto:hello@anantparinay.com"
                >
                  hello@anantparinay.com
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="tel:+10000000000">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="text-muted-foreground">
                Mumbai • Delhi • Destination
              </li>
            </ul>
          </div>

          <div>
            <div className="meta text-[12px] tracking-[0.22em] text-muted-foreground mb-3">
              Follow
            </div>
            <ul className="space-y-2">
              <li>
                <a className="hover:text-primary" href="#">
                  Instagram
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  YouTube
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="#">
                  Pinterest
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary/10">
          <div className="mx-auto max-w-6xl px-4 py-4 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Anant Parinay Collective. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}