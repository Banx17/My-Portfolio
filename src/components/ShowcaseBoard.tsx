"use client";

import Image from "next/image";
import { Sparkles, ArrowUpRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image?: string;
  isSpecialGlow?: boolean;
}

export default function ShowcaseBoard({
  onSelectProject,
}: {
  onSelectProject?: (id: string) => void;
}) {
  const showcaseItems: ShowcaseItem[] = [
    {
      id: "various-project",
      title: "Kortex — AI Pilot",
      subtitle: "All-in-one AI workspace for building & scaling products",
      tag: "Website Design",
      image: "/images/proj-various.jpg",
    },
    {
      id: "kizzy-mobile",
      title: "Kizzy Mobile Redesign",
      subtitle: "Decentralized crypto trading & asset management wallet",
      tag: "Product Design",
      image: "/images/proj-kizzy.jpg",
    },
    {
      id: "teamwork",
      title: "Enable Efficient Teamwork",
      subtitle: "Centralized data, seamless communication, and team alignment",
      tag: "Design System",
      isSpecialGlow: true,
    },
    {
      id: "nim-games",
      title: "Nim Games",
      subtitle: "Gamified Web3 quest platform & NFT collectibles",
      tag: "Full Stack",
      image: "/images/proj-niwi.jpg",
    },
    {
      id: "backend-apis",
      title: "Backend Microservices",
      subtitle: "High-throughput REST/gRPC APIs with Redis caching",
      tag: "Backend",
      image: "/images/proj-backend.jpg",
    },
  ];

  // Duplicate for seamless infinite horizontal loop
  const displayItems = [...showcaseItems, ...showcaseItems];

  return (
    <div className="w-full py-8 overflow-hidden relative select-none">
      {/* Edge gradient masks for smooth fade */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      {/* Horizontal Moving Reel */}
      <div className="flex gap-6 animate-marquee hover:[animation-play-state:paused] w-max">
        {displayItems.map((item, index) => (
          <div
            key={`${item.id}-${index}`}
            onClick={() => onSelectProject?.(item.id)}
            className="w-[340px] sm:w-[420px] shrink-0 h-[260px] sm:h-[280px] rounded-2xl border border-neutral-800/80 bg-[#111111] overflow-hidden flex flex-col justify-between group hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/70 cursor-pointer relative"
          >
            {item.isSpecialGlow ? (
              /* Special Glowing Sun Card */
              <div className="relative h-full w-full p-6 flex flex-col justify-between bg-[#0e0d0b] overflow-hidden">
                <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full bg-gradient-to-t from-amber-600 via-orange-500 to-yellow-300 opacity-80 blur-[50px] group-hover:opacity-100 group-hover:scale-110 transition-all duration-500 pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-neutral-900/90 border border-neutral-700/60 text-[11px] font-medium text-amber-300">
                      <Sparkles className="w-3 h-3" />
                      <span>{item.tag}</span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-amber-200 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-neutral-400 line-clamp-2">{item.subtitle}</p>
                </div>

                {/* Sun Orb Graphic */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className="w-40 h-20 rounded-t-full bg-gradient-to-b from-amber-300 via-orange-500 to-amber-700 shadow-[0_0_60px_rgba(245,158,11,0.6)]" />
                  <div className="w-full flex items-center justify-between text-[10px] text-neutral-400 pt-3 border-t border-neutral-800/80">
                    <span>PayPal</span>
                    <span>Spotify</span>
                    <span>Stripe</span>
                    <span>Zoom</span>
                    <span>Figma</span>
                  </div>
                </div>
              </div>
            ) : (
              /* Image Preview Card */
              <div className="relative h-full w-full flex flex-col justify-between">
                {/* Image */}
                <div className="relative h-[175px] sm:h-[195px] w-full overflow-hidden bg-neutral-950">
                  {item.image && (
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="420px"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-85" />

                  {/* Top-Right Tag */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/75 text-neutral-200 backdrop-blur-md border border-neutral-700/60">
                      {item.tag}
                    </span>
                  </div>
                </div>

                {/* Footer Title & Subtitle */}
                <div className="p-4 pt-1 flex items-center justify-between gap-3">
                  <div>
                    <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-neutral-200 transition-colors line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-[11px] text-neutral-400 line-clamp-1">{item.subtitle}</p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

