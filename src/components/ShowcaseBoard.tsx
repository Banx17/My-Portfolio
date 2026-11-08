"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ShowcaseItem {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  image: string;
}

export default function ShowcaseBoard({
  onSelectProject,
}: {
  onSelectProject?: (id: string) => void;
}) {
  // Exact 5 designs in the user's requested order:
  const showcaseItems: ShowcaseItem[] = [
    {
      id: "teamwork",
      title: "Enable Efficient Teamwork",
      subtitle: "Create a culture of clarity, creativity, and connection across every project.",
      tag: "Web Platform",
      image: "/images/showcase-1-teamwork.jpg",
    },
    {
      id: "ai-pilot",
      title: "Your AI Pilot for Online Products",
      subtitle: "Kortex is the all-in-one AI workspace to research, create, and grow automatically.",
      tag: "AI SaaS",
      image: "/images/showcase-2-aipilot.jpg",
    },
    {
      id: "music-app",
      title: "Music Streaming App Redesign",
      subtitle: "Immersive mobile music experience with dynamic player and artist profiling.",
      tag: "Mobile App",
      image: "/images/showcase-3-music.jpg",
    },
    {
      id: "ximx-crypto",
      title: "XiMX — Cryptocurrency Exchange",
      subtitle: "Predict market changes and algorithmic signals to buy and sell digital assets.",
      tag: "Fintech & Web3",
      image: "/images/showcase-4-ximx.jpg",
    },
    {
      id: "kizzy-mobile",
      title: "Kizzy Mobile",
      subtitle: "Next-gen crypto and decentralized asset management wallet experience.",
      tag: "Product Design",
      image: "/images/showcase-5-kizzy.jpg",
    },
  ];

  // Duplicate the array for seamless infinite horizontal loop
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
            className="w-[360px] sm:w-[440px] md:w-[480px] shrink-0 rounded-2xl border border-neutral-800/80 bg-[#121212] overflow-hidden flex flex-col justify-between group hover:border-neutral-600 transition-all duration-300 hover:shadow-2xl hover:shadow-black/80 cursor-pointer"
          >
            {/* Visual Screen Container (aspect ~ 3:2 to fit the 3768x2512 designs) */}
            <div className="relative h-[230px] sm:h-[260px] md:h-[280px] w-full overflow-hidden bg-neutral-950">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 768px) 360px, 480px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-60" />

              {/* Tag pill */}
              <div className="absolute top-3.5 right-3.5 z-10">
                <span className="px-2.5 py-1 rounded-full text-[10px] font-medium bg-black/80 text-neutral-200 backdrop-blur-md border border-neutral-700/60">
                  {item.tag}
                </span>
              </div>
            </div>

            {/* Bottom Info bar */}
            <div className="p-4 sm:p-5 flex items-center justify-between gap-3 border-t border-neutral-900 bg-[#121212]">
              <div className="min-w-0">
                <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-neutral-200 transition-colors truncate">
                  {item.title}
                </h4>
                <p className="text-xs text-neutral-400 truncate mt-0.5">
                  {item.subtitle}
                </p>
              </div>

              <div className="w-8 h-8 rounded-full bg-neutral-900 border border-neutral-800 flex items-center justify-center shrink-0 group-hover:bg-neutral-800 group-hover:border-neutral-700 transition-colors">
                <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
