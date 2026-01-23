"use client";
import { Skill } from "@/types/portfolio";
import { Code, Cpu, Database, Globe, Layers, Server, Zap } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const SkillCard = () => {
  const { t } = useLanguage();
  const skillData: Skill[] = [
    { name: "HTML / CSS / JavaScript", icon: <Code />, group: "frontend" },
    { name: "React / Next.js", icon: <Layers />, group: "frontend" },
    { name: "Tailwind CSS", icon: <Zap />, group: "frontend" },
    { name: "TypeScript", icon: <Code />, group: "frontend" },
    { name: "Express / Node.js", icon: <Cpu />, group: "backend" },
    { name: "MySQL", icon: <Database />, group: "backend" },
    { name: "PostgreSQL / Prisma", icon: <Server />, group: "backend" },
    { name: "AWS / Vercel", icon: <Globe />, group: "backend" },
  ];
  return (
    <div className="grid sm:grid-cols-2 gap-6">
      {(["frontend", "backend"] as const).map((group) => (
        <div key={group} className="space-y-4">
          <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue-600">
            {t.about.skillGroups[group]}
          </h3>
          <div className="space-y-2">
            {skillData
              .filter((s) => s.group === group)
              .map((skill, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-4 bg-secondary rounded-2xl border border-border hover:border-blue-500 transition-colors group"
                >
                  <div className="text-blue-600 group-hover:scale-110 transition-transform">
                    {skill.icon}
                  </div>
                  <span className="font-bold text-sm tracking-tight text-foreground">
                    {skill.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillCard;
