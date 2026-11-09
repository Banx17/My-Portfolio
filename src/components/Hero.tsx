"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowDownRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ShowcaseBoard from "./ShowcaseBoard";

interface HeroProps {
  onOpenContact: () => void;
  onSelectProject?: (id: string) => void;
}

export default function Hero({ onOpenContact, onSelectProject }: HeroProps) {
  // 0 = Real Photo, 1 = Cartoon Bear Avatar
  const [activePfp, setActivePfp] = useState<0 | 1>(0);

  // Automatically alternate between the two images every 3.8 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActivePfp((prev) => (prev === 0 ? 1 : 0));
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  const pfpImages = [
    {
      src: "/images/hero-pfp-real.jpg",
      alt: "Afeez Tomisin",
      label: "In Person",
    },
    {
      src: "/images/hero-pfp-avatar.jpg",
      alt: "Afeez Tomisin Cartoon Persona",
      label: "Persona",
    },
  ];

  return (
    <section className="relative pt-32 pb-8 md:pt-40 md:pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-amber-500/10 blur-[130px] rounded-full pointer-events-none -z-10" />
      <div className="absolute top-1/3 left-10 w-[300px] h-[300px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Split: Intro Text on Left, Photo on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          {/* Left Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-8 flex flex-col items-start"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs font-medium mb-6 backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Product Designer &amp; Backend Engineer</span>
            </div>

            {/* Main Greeting */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-5">
              hi, I&apos;m Afeez
            </h1>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-neutral-400 max-w-2xl leading-relaxed mb-8">
              I&apos;m a <span className="text-neutral-200 font-medium">Product Designer</span> specializing in intuitive UI/UX design and a <span className="text-neutral-200 font-medium">Backend Engineer</span> focused on building scalable, efficient, and reliable systems.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-neutral-200 transition-all duration-200 flex items-center gap-2 shadow-lg shadow-white/10 group"
              >
                <span>View my projects</span>
                <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full text-xs sm:text-sm font-medium bg-neutral-900/80 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-neutral-500 transition-all duration-200 cursor-pointer"
              >
                Get In Touch
              </button>
            </div>
          </motion.div>

          {/* Right: Portrait Image that takes turns alternating! */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div
              onClick={() => setActivePfp((prev) => (prev === 0 ? 1 : 0))}
              title="Click to switch persona"
              className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900/60 shadow-2xl group cursor-pointer select-none"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePfp}
                  initial={{ opacity: 0, rotateY: 90, scale: 0.92 }}
                  animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                  exit={{ opacity: 0, rotateY: -90, scale: 0.92 }}
                  transition={{ duration: 0.55, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={pfpImages[activePfp].src}
                    alt={pfpImages[activePfp].alt}
                    fill
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 256px, 288px"
                    priority
                  />
                </motion.div>
              </AnimatePresence>

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* Status footer pill */}
              <div className="absolute bottom-3 right-3 flex items-center justify-end text-xs text-neutral-300 pointer-events-none">
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2.5 py-0.5 rounded-full text-[11px] font-medium">
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Horizontal Showcase Board of Works (Moves horizontally like prototype) */}
      <div className="mt-4">
        <ShowcaseBoard onSelectProject={onSelectProject} />
      </div>
    </section>
  );
}
