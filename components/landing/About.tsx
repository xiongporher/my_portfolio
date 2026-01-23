"use client";
import { motion, Variants } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import SkillCard from "./SkillCard";
import Image from "next/image";

const About = () => {
  const { t } = useLanguage();

  // Animation Variants
  const fadeInUp: Variants = {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="about"
      className="py-16 md:py-32 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-[1fr_400px] gap-20">
          <motion.div
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            variants={fadeInUp}
          >
            <h2 className="text-4xl font-black mb-8 flex items-center gap-4 uppercase tracking-tighter text-foreground">
              {t.about.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed font-medium">
              {t.about.description}
            </p>

            <SkillCard />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative group"
          >
            <div className="absolute -inset-4 bg-blue-500/10 dark:bg-blue-600/10 rounded-[3rem] blur-2xl group-hover:bg-blue-500/20 dark:group-hover:bg-blue-600/20 transition-all" />
            <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-border shadow-xl">
              <Image
                src="/IMG_2049.JPG"
                className="w-full aspect-square object-cover object-top"
                alt="Me"
                width={"500"}
                height={"500"}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
