import {
  PenTool,
  Smartphone,
  Layers,
  Cpu,
  Database,
  Zap,
} from "lucide-react";
import { Service } from "@/data/portfolio";

interface ServicesProps {
  services: Service[];
}

export default function Services({ services }: ServicesProps) {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "PenTool":
        return <PenTool className="w-5 h-5 text-neutral-300" />;
      case "Smartphone":
        return <Smartphone className="w-5 h-5 text-neutral-300" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-neutral-300" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-neutral-300" />;
      case "Database":
        return <Database className="w-5 h-5 text-neutral-300" />;
      case "Zap":
      default:
        return <Zap className="w-5 h-5 text-neutral-300" />;
    }
  };

  return (
    <section id="services" className="py-20 md:py-28 relative scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="max-w-2xl mb-12">
          <span className="text-xs font-semibold tracking-widest uppercase text-neutral-400 mb-2 block">
            SERVICES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-3">
            What I Bring To The Table
          </h2>
          <p className="text-sm text-neutral-400 leading-relaxed">
            I&apos;m dedicated to delivering high quality solutions across Product Design and Backend Development, solving complex user experience problems and technical bottlenecks.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="p-7 rounded-2xl border border-neutral-800/90 bg-[#121212] hover:border-neutral-600 transition-all duration-300 hover:shadow-xl hover:shadow-black/40 flex flex-col justify-between group"
            >
              <div>
                {/* Icon */}
                <div className="w-11 h-11 rounded-xl bg-neutral-900 border border-neutral-800 flex items-center justify-center mb-6 group-hover:bg-neutral-800 group-hover:border-neutral-600 transition-colors">
                  {getIcon(service.iconName)}
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-neutral-200 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {service.description}
                </p>
              </div>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-neutral-800/80">
                {service.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-[11px] px-2.5 py-1 rounded-md bg-neutral-900 text-neutral-400 border border-neutral-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

