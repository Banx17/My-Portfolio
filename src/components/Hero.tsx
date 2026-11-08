"use client";

import Image from "next/image";
import { ArrowDownRight, Sparkles, Terminal, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

interface HeroProps {
  onOpenContact: () => void;
}

export default function Hero({ onOpenContact }: HeroProps) {
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
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

          {/* Right: Portrait Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-4 flex justify-center lg:justify-end"
          >
            <div className="relative w-64 h-72 sm:w-72 sm:h-80 rounded-2xl overflow-hidden border border-neutral-800/90 bg-neutral-900/60 shadow-2xl group">
              <Image
                src="/images/hero-afeez.jpg"
                alt="Afeez Adebayo"
                fill
                className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 256px, 288px"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-neutral-300">
                <span className="bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-neutral-700/60">
                  Lagos, Nigeria 📍
                </span>
                <span className="bg-emerald-950/80 text-emerald-400 border border-emerald-800/80 px-2 py-0.5 rounded-full text-[11px] font-medium">
                  Available
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bento Cards (Showcase Highlights) */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Bento Card 1: Enable Efficient Teamwork with warm glowing sun aura */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="md:col-span-7 relative overflow-hidden rounded-2xl border border-neutral-800/90 bg-[#100f0d] p-6 sm:p-8 flex flex-col justify-between group hover:border-amber-500/40 transition-colors"
          >
            {/* Ambient radiant glowing sun */}
            <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-80 h-80 rounded-full bg-gradient-to-t from-amber-600 via-orange-500 to-yellow-300 opacity-80 blur-[60px] group-hover:opacity-95 group-hover:scale-110 transition-all duration-700 pointer-events-none" />

            <div className="relative z-10 mb-12">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/80 border border-neutral-700/60 text-[11px] font-medium text-amber-300 mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Collaboration &amp; Speed</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
                Enable Efficient Teamwork
              </h3>
              <p className="text-sm text-neutral-400 max-w-md">
                Centralized data, seamless communication, and automated handoffs between product design and engineering.
              </p>
            </div>

            {/* Glowing Sun graphic circle */}
            <div className="relative z-10 flex flex-col items-center">
              <div className="w-full h-28 relative flex items-center justify-center">
                <div className="w-48 h-48 rounded-full bg-gradient-to-b from-amber-300 via-orange-500 to-amber-700 shadow-[0_0_80px_rgba(245,158,11,0.5)] transform translate-y-16" />
              </div>

              {/* Brand Pills */}
              <div className="w-full flex items-center justify-between text-[11px] font-medium text-neutral-400 pt-4 border-t border-neutral-800/70">
                <span className="hover:text-white transition-colors">PayPal</span>
                <span className="hover:text-white transition-colors">Spotify</span>
                <span className="hover:text-white transition-colors">Stripe</span>
                <span className="hover:text-white transition-colors">Zoom</span>
                <span className="hover:text-white transition-colors">Figma</span>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: AI Pilot */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="md:col-span-5 relative overflow-hidden rounded-2xl border border-neutral-800/90 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between group hover:border-neutral-600 transition-colors"
          >
            {/* Top pill & title */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300 mb-4">
                <Terminal className="w-3.5 h-3.5 text-neutral-400" />
                <span>Modern Tooling</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-3">
                Your AI Pilot for Building, Launching, and Scaling Online Products
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                Bridging intelligent agent workflows, high-fidelity Figma components, and resilient Node/Go backend microservices.
              </p>
            </div>

            {/* Feature Checkpoints */}
            <div className="relative z-10 space-y-2.5 pt-4 border-t border-neutral-800/80">
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Intuitive, user-centered prototyping</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Microservice API architectures</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Production-ready Vercel &amp; Cloud deploy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

