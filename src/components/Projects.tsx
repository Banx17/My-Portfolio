"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/portfolio";

interface ProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
}

export default function Projects({ projects, onSelectProject }: ProjectsProps) {
  const [activeTab, setActiveTab] = useState<"All" | "Design" | "Backend Development">("All");

  const filteredProjects = projects.filter((project) => {
    if (activeTab === "All") return true;
    return project.category === activeTab;
  });

  const categories: Array<"All" | "Design" | "Backend Development"> = [
    "All",
    "Design",
    "Backend Development",
  ];

  return (
    <section id="work" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">
              MY WORKS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-2">
              Selected Projects
            </h2>
            <p className="text-sm text-neutral-400 max-w-lg">
              A selection of projects that really showcase my design intuition and backend engineering capabilities.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-full bg-neutral-900 border border-neutral-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`relative px-4 py-1.5 rounded-full text-xs font-medium transition-colors duration-200 cursor-pointer ${
                  activeTab === cat
                    ? "text-black font-semibold"
                    : "text-neutral-400 hover:text-white"
                }`}
              >
                {activeTab === cat && (
                  <motion.div
                    layoutId="activeFilterPill"
                    className="absolute inset-0 bg-white rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35 }}
                className="group relative rounded-2xl border border-neutral-800/90 bg-[#121212] overflow-hidden flex flex-col justify-between hover:border-neutral-700 transition-all duration-300 hover:shadow-xl hover:shadow-black/50"
              >
                {/* Visual Preview Box */}
                <div className="relative h-60 sm:h-72 w-full overflow-hidden bg-neutral-950 flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-transparent to-transparent opacity-80" />

                  {/* Top-Right Tag */}
                  <div className="absolute top-4 right-4 z-10">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium bg-black/75 text-neutral-200 backdrop-blur-md border border-neutral-700/60">
                      {project.tag}
                    </span>
                  </div>
                </div>

                {/* Content Box */}
                <div className="p-6 flex items-end justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1.5 group-hover:text-neutral-200 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-400 line-clamp-2 max-w-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* View Trigger */}
                  <button
                    onClick={() => onSelectProject(project)}
                    className="shrink-0 flex items-center gap-1 px-4 py-2 rounded-full text-xs font-semibold bg-neutral-800 text-neutral-200 hover:bg-white hover:text-black transition-all duration-200 group/btn cursor-pointer"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-neutral-400 group-hover/btn:text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}

