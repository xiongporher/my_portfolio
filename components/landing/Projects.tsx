"use client";
import { Project } from "@/types/portfolio";
import { AnimatePresence, motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "../ui/button";
import Link from "next/link";

const Projects = () => {
  const { lang, t } = useLanguage();
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const projectsData: Project[] = [
    {
      id: 1,
      category: "Web",
      title: { en: "E-Commerce Platform", lo: "ແພລດຟອມອີຄອມເມີຊ" },
      desc: {
        en: "A comprehensive e-commerce solution featuring product catalogs, secure shopping cart functionality, and a robust admin dashboard. Built with a scalable Node.js backend and a polished React frontend using Ant Design for an enterprise-grade user interface.",
        lo: "ແພລດຟອມຮ້ານຄ້າອອນລາຍແບບຄົບວົງຈອນ ທີ່ມາພ້ອມກັບລະບົບຈັດການສິນຄ້າ, ກະຕ່າສິນຄ້າ ແລະ ໜ້າຈໍບໍລິຫານຈັດການ (Admin Dashboard). ພັດທະນາດ້ວຍ Node.js ທີ່ມີຄວາມສາມາດໃນການຮອງຮັບຜູ້ໃຊ້ຈຳນວນຫຼາຍ ແລະ React ທີ່ຕົບແຕ່ງດ້ວຍ Ant Design ເພື່ອໃຫ້ໄດ້ UI ທີ່ສວຍງາມ ແລະ ເປັນມືອາຊີບ.",
      },
      github: "https://github.com/xiongporher/frontend",
      tech: ["React", "Ant Design", "MySQL", "Node.js"],
      image: "/pos.png",
    },
    {
      id: 2,
      category: "Web",
      title: {
        en: "Inventory Management System",
        lo: "ລະບົບຈັດການສິນຄ້າຄົງຄັງ",
      },
      desc: {
        en: "A comprehensive web-based solution for tracking stock levels, managing product categories, and monitoring sales. Features a robust database schema using Prisma and PostgreSQL for reliable data persistence and Next.js for a seamless user experience.",
        lo: "ເວັບແອັບພລິເຄຊັນສຳລັບການບໍລິຫານຈັດການສາງສິນຄ້າແບບຄົບວົງຈອນ, ຕິດຕາມຈຳນວນສິນຄ້າ, ຈັດການໝວດໝູ່ ແລະ ກວດສອບຍອດຂາຍ. ພັດທະນາດ້ວຍລະບົບຖານຂໍ້ມູນທີ່ແຂງແກ່ນໂດຍໃຊ້ Prisma ແລະ PostgreSQL ພ້ອມກັບ Next.js ທີ່ຊ່ວຍໃຫ້ການໃຊ້ງານມີຄວາມວ່ອງໄວ.",
      },
      github: "https://github.com/xiongporher/inventory-management-system",
      tech: ["Next.js", "Tailwind", "Postgresql", "Prisma"],
      image: "/inventory.png",
    },
    {
      id: 3,
      category: "Web",
      title: {
        en: "Doctor's Appointment System",
        lo: "ລະບົບນັດໝາຍທ່ານໝໍ",
      },
      desc: {
        en: "A full-stack healthcare management platform allowing patients to book slots, manage profiles, and view doctor availability in real-time.",
        lo: "ແພລດຟອມຈັດການການດູແລສຸຂະພາບແບບ Full-stack ທີ່ຊ່ວຍໃຫ້ຄົນເຈັບສາມາດຈອງເວລາ, ຈັດການໂປຣໄຟລ໌ ແລະ ເບິ່ງເວລາຫວ່າງຂອງໝໍໄດ້ແບບ Real-time.",
      },
      github: "https://github.com/xiongporher/doctors-appointment",
      tech: ["React", "Tailwind", "MongoDB", "Node.js"],
      image: "/doctors-appointment.png",
    },
    // {
    //   id: 3,
    //   category: "Mobile",
    //   title: { en: "Lao Travel Guide", lo: "ຄູ່ມືທ່ອງທ່ຽວລາວ" },
    //   desc: {
    //     en: "A dynamic map-based application for tourists.",
    //     lo: "ແອັບພລິເຄຊັນແຜນທີ່ສຳລັບນັກທ່ອງທ່ຽວ.",
    //   },
    //   tech: ["React Native", "Mapbox", "Firebase"],
    //   image:
    //     "https://images.unsplash.com/photo-1528127269322-539801943592?w=800&q=80",
    // },
    // {
    //   id: 4,
    //   category: "AI",
    //   title: { en: "AI Task Manager", lo: "ລະບົບຈັດການວຽກ AI" },
    //   desc: {
    //     en: "Automating workflow using GPT-4 API.",
    //     lo: "ລະບົບອັດຕະໂນມັດໂດຍໃຊ້ GPT-4 API.",
    //   },
    //   tech: ["OpenAI", "Node.js", "Tailwind"],
    //   image:
    //     "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    // },
  ];

  const filteredProjects = useMemo(
    () =>
      projectsData.filter(
        (p) => activeFilter === "All" || p.category === activeFilter,
      ),
    [activeFilter],
  );
  return (
    <section
      id="projects"
      className="md:py-32 bg-secondary transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <h2 className="text-4xl font-black mb-4 uppercase tracking-tighter text-foreground">
              {t.projects.title}
            </h2>
            <div className="flex gap-2">
              {["All", "Web", "Mobile", "AI"].map((cat) => (
                <Button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all ${activeFilter === cat ? "bg-blue-600 text-white shadow-lg" : "bg-card text-foreground border border-border hover:border-blue-500"}`}
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
                <div className="bg-card rounded-4xl border border-border overflow-hidden h-full shadow-sm hover:shadow-2xl transition-all flex flex-col">
                  <div className="relative aspect-4/3 overflow-hidden">
                    <img
                      src={project.image}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      alt={project.title[lang]} // ໃສ່ Alt ເພື່ອ SEO
                    />
                    <div className="absolute top-4 right-4 px-3 py-1 bg-card/95 backdrop-blur rounded-full text-[9px] font-black uppercase tracking-tighter text-foreground">
                      {project.category}
                    </div>
                  </div>

                  <div className="p-8 flex flex-col grow">
                    <h3 className="text-xl font-bold mb-3 text-foreground">
                      {project.title[lang]}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-6 line-clamp-2">
                      {project.desc[lang]}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {project.tech.map((techStr) => (
                        <span
                          key={techStr}
                          className="px-2 py-0.5 bg-secondary rounded text-[9px] font-bold text-muted-foreground"
                        >
                          {techStr}
                        </span>
                      ))}
                    </div>

                    {/* ແກ້ໄຂ Link ໃຫ້ເປັນ Dynamic */}
                    <Link
                      href={project.github || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-2xl bg-primary text-primary-foreground text-xs font-bold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 cursor-pointer"
                    >
                      {t.projects.viewProject} <ExternalLink size={14} />
                    </Link>
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
