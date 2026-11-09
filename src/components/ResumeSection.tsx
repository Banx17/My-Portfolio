"use client";

import { FileText, Download, Eye } from "lucide-react";
import { useState } from "react";

export default function ResumeSection() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="py-16 md:py-20 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-2xl border border-neutral-800/90 bg-[#121212] p-8 sm:p-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute top-0 right-0 w-80 h-40 bg-neutral-800/30 blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-xl">
            <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">
              MY RESUME
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white mb-2">
              View my resume for a detailed look at my skills and experience.
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400">
              Includes comprehensive breakdowns of production projects, backend architectures, UI systems, and technical stack proficiency.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="px-5 py-2.5 rounded-full text-xs font-medium bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 transition-all flex items-center gap-2 cursor-pointer"
            >
              <Eye className="w-4 h-4" />
              <span>Preview</span>
            </button>

            <a
              href="https://drive.google.com/drive/folders/1GjleQROUbbvL86SpNcaNz9QPnkfjYPYN"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-all flex items-center gap-2 shadow-lg shadow-white/10"
            >
              <Download className="w-4 h-4" />
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>

      {/* Resume Quick Preview Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#121212] border border-neutral-800 rounded-2xl p-6 sm:p-8 max-h-[85vh] overflow-y-auto">
            <div className="flex items-center justify-between pb-4 border-b border-neutral-800 mb-6">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-amber-400" />
                <h4 className="text-lg font-bold text-white">Afeez Tomisin — Curriculum Vitae</h4>
              </div>
              <button
                onClick={() => setShowModal(false)}
                className="text-neutral-400 hover:text-white text-xs px-3 py-1 rounded-md bg-neutral-900 border border-neutral-800 cursor-pointer"
              >
                Close
              </button>
            </div>

            <div className="space-y-6 text-xs sm:text-sm text-neutral-300">
              <div>
                <h5 className="font-semibold text-white uppercase tracking-wider text-xs mb-1 text-amber-400">
                  Profile Summary
                </h5>
                <p className="text-neutral-400">
                  Product Designer &amp; Backend Engineer specializing in human-centered UI/UX design, design systems, and distributed server infrastructure. Proficient across Figma, Next.js, Node.js, Go, PostgreSQL, and Cloud Deployment.
                </p>
              </div>

              <div>
                <h5 className="font-semibold text-white uppercase tracking-wider text-xs mb-2 text-cyan-400">
                  Core Skills
                </h5>
                <div className="grid grid-cols-2 gap-3 text-neutral-400">
                  <div>
                    <span className="text-neutral-200 font-medium block">Design:</span>
                    Figma, Design Systems, Mobile &amp; Web Prototyping, Wireframing, UX Research, Micro-interactions.
                  </div>
                  <div>
                    <span className="text-neutral-200 font-medium block">Engineering:</span>
                    Node.js, Go, TypeScript, Next.js, PostgreSQL, Redis, REST &amp; gRPC, Docker, Git.
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-semibold text-white uppercase tracking-wider text-xs mb-2 text-purple-400">
                  Experience &amp; Selected Highlights
                </h5>
                <ul className="list-disc list-inside space-y-1.5 text-neutral-400">
                  <li>Lead Product Designer &amp; Backend Engineer on multiple high-traffic web and mobile products.</li>
                  <li>Architected scalable REST APIs handling thousands of concurrent requests with low latency.</li>
                  <li>Built reusable multi-brand Figma design systems accelerating feature delivery by 40%.</li>
                </ul>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-neutral-800 flex flex-wrap items-center justify-end gap-3">
              <a
                href="https://drive.google.com/drive/folders/1GjleQROUbbvL86SpNcaNz9QPnkfjYPYN"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Open in Google Drive</span>
              </a>
              <a
                href="/Afeez_Tomisin_Resume.pdf"
                download="Afeez_Tomisin_Resume.pdf"
                className="px-4 py-2 rounded-full text-xs font-medium bg-neutral-900 border border-neutral-800 hover:bg-neutral-800 text-neutral-300 transition-colors flex items-center gap-1.5"
              >
                <span>Direct PDF</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

