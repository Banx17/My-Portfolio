"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Services from "@/components/Services";
import ResumeSection from "@/components/ResumeSection";
import Footer from "@/components/Footer";
import ProjectModal from "@/components/ProjectModal";
import ContactModal from "@/components/ContactModal";
import { PORTFOLIO_DATA, Project } from "@/data/portfolio";

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleSelectProjectId = (id: string) => {
    const proj = PORTFOLIO_DATA.projects.find((p) => p.id === id);
    if (proj) setSelectedProject(proj);
  };

  return (
    <div className="relative min-h-screen bg-[#080808] text-neutral-100 flex flex-col justify-between selection:bg-neutral-800 selection:text-white overflow-x-hidden">
      {/* Top Navbar */}
      <Navbar onOpenContact={() => setIsContactOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero
          onOpenContact={() => setIsContactOpen(true)}
          onSelectProject={handleSelectProjectId}
        />
        <Projects
          projects={PORTFOLIO_DATA.projects}
          onSelectProject={(project) => setSelectedProject(project)}
        />
        <About />
        <Services services={PORTFOLIO_DATA.services} />
        <ResumeSection />
      </main>

      {/* Footer */}
      <Footer onOpenContact={() => setIsContactOpen(true)} />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}
