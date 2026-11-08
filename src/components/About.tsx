"use client";

import Image from "next/image";
import { Sparkles, Server, Code2 } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
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
              Bridging intuitive design thinking with robust backend engineering.
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-neutral-400 leading-relaxed">
              <p>
                I&apos;m Afeez, a multidisciplinary Product Designer and Backend Engineer. I don&apos;t just design screens—I design systems. Understanding how frontend user interfaces communicate with backend services, data stores, and server infrastructure empowers me to create experiences that are both aesthetically delightful and technically sound.
              </p>
              <p>
                My design philosophy centers on clarity and efficiency: stripping away friction until only what matters remains. I believe great products are born at the intersection of empathy for the user and pragmatic software engineering.
              </p>
              <p>
                When architecting backends, I focus on building high-performance, fault-tolerant APIs, optimizing database schemas, and creating resilient services that scale seamlessly under high traffic.
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
                <span>Backend Developer (Node.js, Go, APIs)</span>
              </div>
            </div>
          </div>

          {/* Right Image Column */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative w-full max-w-sm h-80 sm:h-96 rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950 shadow-2xl"
            >
              <Image
                src="/images/about-afeez.jpg"
                alt="Afeez Adebayo in the field"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[11px] font-medium tracking-wide uppercase px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-neutral-700/80 text-neutral-300">
                  Engineering &amp; Creation
                </span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* 3 Metric / Value Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-6 rounded-2xl border border-neutral-800/90 bg-[#121212] hover:border-neutral-700 transition-colors">
            <div className="w-9 h-9 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center text-amber-400 mb-4">
              <Sparkles className="w-4 h-4" />
            </div>
            <h3 className="text-base font-semibold text-white mb-1.5">Intuitive UI</h3>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Obsessed with user clarity, accessibility standards, and fluid tactile interactions that make products feel effortless.
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
              Writing maintainable, well-documented, test-driven code that engineers love working with and teams can scale quickly.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

