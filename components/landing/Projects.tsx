"use client";
import { Project } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import React, { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "../ui/button";

const Projects = () => {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projectsData: Project[] = [
    {
      id: 1,
      category: "Web",
      title: { en: "E-Commerce Platform", lo: "ແພລດຟອມອີຄອມເມີຊ" },
      desc: {
        en: "A full-featured online store with payment integration.",
        lo: "ຮ້ານຄ້າອອນລາຍຄົບວົງຈອນພ້ອມລະບົບຊຳລະເງິນ.",
      },
      tech: ["Next.js", "Tailwind", "Postgresql", "Prisma"],
      image:
        "https://images.unsplash.com/photo-1557821552-17105176677c?w=800&q=80",
    },
    {
      id: 2,
      category: "Mobile",
      title: { en: "Lao Travel Guide", lo: "ຄູ່ມືທ່ອງທ່ຽວລາວ" },
      desc: {
        en: "A dynamic map-based application for tourists.",
        lo: "ແອັບພລິເຄຊັນແຜນທີ່ສຳລັບນັກທ່ອງທ່ຽວ.",
      },
      tech: ["React Native", "Mapbox", "Firebase"],
      image:
        "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    },
    {
      id: 3,
      category: "AI",
      title: { en: "AI Task Manager", lo: "ລະບົບຈັດການວຽກ AI" },
      desc: {
        en: "Automating workflow using GPT-4 API.",
        lo: "ລະບົບອັດຕະໂນມັດໂດຍໃຊ້ GPT-4 API.",
      },
      tech: ["OpenAI", "Node.js", "Tailwind"],
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
  ];

  const filteredProjects = useMemo(
    () =>
      projectsData.filter(
        (p) => activeFilter === "All" || p.category === activeFilter,
      ),
    [activeFilter],
  );
  return (
    <section id="projects" className="py-32 bg-slate-50 dark:bg-slate-900/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter">
              {t.projects.title}
            </h2>
            <div className="flex gap-2">
              {["All", "Web", "Mobile", "AI"].map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === cat ? "bg-blue-600 text-white shadow-lg" : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:border-blue-600"}`}
                >
                  {cat === "All" ? t.projects.filterAll : cat}
                </Button>
              ))}
            </div>
          </div>
        </div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="bg-white dark:bg-slate-900 rounded-[2rem] border border-slate-200 dark:border-slate-800 overflow-hidden h-full shadow-sm hover:shadow-2xl transition-all">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt=""
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 dark:bg-slate-900/90 backdrop-blur rounded-full text-[9px] font-black uppercase tracking-tighter">
                      {project.category}
                    </div>
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold mb-3">
                      {project.title[lang]}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-6 line-clamp-2">
                      {project.desc[lang]}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tech.map((techStr) => (
                        <span
                          key={techStr}
                          className="px-2 py-0.5 bg-slate-100 dark:bg-slate-800 rounded text-[9px] font-bold opacity-60"
                        >
                          {techStr}
                        </span>
                      ))}
                    </div>
                    <Button className="w-full py-4 rounded-2xl bg-slate-900 dark:bg-slate-800 text-white text-xs font-bold hover:bg-blue-600 transition-colors flex items-center justify-center gap-2 cursor-pointer">
                      {t.projects.viewProject} <ExternalLink size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
