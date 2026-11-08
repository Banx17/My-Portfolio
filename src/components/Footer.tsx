"use client";

import { useState } from "react";
import {
  Copy,
  Check,
  ArrowUpRight,
  Mail,
} from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
  DribbbleIcon,
} from "./BrandIcons";

interface FooterProps {
  onOpenContact: () => void;
}

export default function Footer({ onOpenContact }: FooterProps) {
  const [copied, setCopied] = useState(false);
  const email = "afeezadebayo17@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const socials = [
    { name: "GitHub", url: "https://github.com", icon: GithubIcon },
    { name: "LinkedIn", url: "https://linkedin.com", icon: LinkedinIcon },
    { name: "Twitter / X", url: "https://twitter.com", icon: TwitterIcon },
    { name: "Dribbble", url: "https://dribbble.com", icon: DribbbleIcon },
  ];

  return (
    <footer id="contact" className="pt-16 pb-12 bg-black border-t border-neutral-900 overflow-hidden relative">
      {/* Massive Statement Banner */}
      <div className="w-full overflow-hidden select-none mb-14 py-4 border-y border-neutral-900/80 bg-neutral-950/40">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-8">
          {[...Array(6)].map((_, i) => (
            <span
              key={i}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-neutral-800 hover:text-white transition-colors duration-300 inline-block px-4 cursor-default"
            >
              GET IN TOUCH
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start pb-12 border-b border-neutral-900">
          {/* Left Column: Socials & Email */}
          <div className="md:col-span-6 flex flex-col gap-6">
            <div>
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-3 block">
                Connect
              </span>
              <div className="flex flex-col gap-3">
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors group w-fit"
                    >
                      <Icon className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                      <span>{social.name}</span>
                      <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Email with 1-click Copy */}
            <div className="pt-2">
              <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">
                Direct Email
              </span>
              <div className="inline-flex items-center gap-2 p-1.5 pl-3.5 rounded-full bg-neutral-900/90 border border-neutral-800 text-xs text-neutral-300">
                <Mail className="w-3.5 h-3.5 text-neutral-400" />
                <span className="font-mono text-neutral-200">{email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-full bg-neutral-800 hover:bg-neutral-700 text-white transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <Check className="w-3.5 h-3.5 text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>
              {copied && (
                <p className="text-[11px] text-emerald-400 mt-1.5 pl-1 animate-in fade-in">
                  Email copied to clipboard!
                </p>
              )}
            </div>
          </div>

          {/* Right Column: Availability & CTA */}
          <div className="md:col-span-6 flex flex-col items-start md:items-end text-left md:text-right gap-6">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/80 text-[11px] text-emerald-400 font-medium mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Open for new opportunities</span>
              </div>
              <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                I&apos;m currently available for freelance work and full-time roles as a Product Designer &amp; Backend Engineer. Let&apos;s build scalable, beautifully designed digital products together.
              </p>
              <button
                onClick={onOpenContact}
                className="px-6 py-3 rounded-full text-xs font-semibold bg-white text-black hover:bg-neutral-200 transition-colors inline-flex items-center gap-2 shadow-lg shadow-white/10 cursor-pointer"
              >
                <span>Reach Out</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Credits */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Afeez Adebayo. All rights reserved.</p>
          <p className="flex items-center gap-1">
            <span>Designed &amp; Built with precision.</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
