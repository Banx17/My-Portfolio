"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Sparkles, Server, Code2 } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function About() {
  const [activePhoto, setActivePhoto] = useState(0);

  const aboutPhotos = [
    {
      src: "/images/about-photo-1.jpg",
      alt: "Afeez Tomisin - Curiosity & Engineering",
      caption: "Curiosity & Engineering",
    },
    {
      src: "/images/about-photo-2.jpg",
      alt: "Afeez Tomisin - Style & Technology",
      caption: "Style & Technology",
    },
    {
      src: "/images/about-photo-3.jpg",
      alt: "Afeez Tomisin - Focus & Leisure",
      caption: "Focus & Leisure",
    },
  ];

  // Rotate images automatically every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePhoto((prev) => (prev + 1) % aboutPhotos.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [aboutPhotos.length]);

  return (
    <section id="about" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Tag */}
        <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">
          ABOUT ME
        </span>

        {/* Content Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-12">
          {/* Left Text Column */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Passionate about creating intuitive products and scalable systems.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              <p>
                Hi, I&apos;m Afeez Tomisin (Akinwunmi) — a Product Designer and Backend Developer passionate about creating meaningful digital experiences, solving problems and building the systems behind them.
              </p>
              <p>
                My interest in technology grew from seeing how everyday inventions, even something as simple as a bicycle, are created to solve problems. That curiosity eventually led me into tech, where I combine design and engineering using Figma, JavaScript, Node.js, Express and MongoDB to bring ideas to life.
              </p>
              <p>
                Outside work, I enjoy listening to music, reading, exploring fashion and personal styling, and keeping up with the ever-evolving world of technology. I&apos;m always eager to discover new ideas, learn new things and find inspiration in the world around me.
              </p>
            </div>

            {/* Badges / Focus Tags */}
            <div className="flex flex-wrap gap-2.5 pt-2">
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium">
                <Sparkles className="w-3.5 h-3.5 text-amber-400" />
                <span>Product Designer (UI/UX &amp; Research)</span>
              </div>
              <div className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-300 font-medium">
                <Server className="w-3.5 h-3.5 text-cyan-400" />
                <span>Backend Developer (Node.js, Express, MongoDB)</span>
              </div>
            </div>
          </div>

          {/* Right Image Column: 3 Rotating Photos with 3D Flip / Crossfade */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-end">
            <div
              onClick={() => setActivePhoto((prev) => (prev + 1) % aboutPhotos.length)}
              title="Click to see next photo"
              className="relative w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl group cursor-pointer select-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhoto}
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={aboutPhotos[activePhoto].src}
                    alt={aboutPhotos[activePhoto].alt}
                    fill
                    loading="lazy"
                    quality={80}
                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 400px"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Bottom Dots Indicator */}
              <div className="absolute bottom-4 right-4 flex items-center gap-1.5 pointer-events-auto">
                {aboutPhotos.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={(e) => {
                      e.stopPropagation();
                      setActivePhoto(idx);
                    }}
                    className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                      activePhoto === idx
                        ? "w-4 bg-white"
                        : "w-1.5 bg-neutral-600 hover:bg-neutral-400"
                    }`}
                    aria-label={`Go to photo ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 Metric / Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl border border-neutral-800/90 bg-[#121212] hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 mb-4">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">Problem Solver</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              I turn complex problems into simple, human-centered digital solutions.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800/90 bg-[#121212] hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-cyan-400 mb-4">
              <Server className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">Robust Backend</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Engineering scalable server-side systems with distributed caching, microservice isolation, and high uptime.
            </p>
          </div>

          <div className="p-6 rounded-2xl border border-neutral-800/90 bg-[#121212] hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-purple-400 mb-4">
              <Code2 className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">Clean Architecture</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Writing maintainable, well-documented code that engineers love working with and teams can scale quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
