"use client";
import { motion } from "framer-motion";
import { Github, ChevronRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export function Hero() {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 bg-background transition-colors duration-300">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 dark:bg-blue-600/20 blur-[120px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-600/10 blur-[120px] rounded-full animate-pulse delay-700" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center gap-3 mb-6 font-bold text-lg text-foreground">
            {t.hero.greeting}
          </div>
          <h1 className="text-6xl md:text-9xl font-black tracking-tighter mb-8 leading-[0.85]">
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Full
            </span>
            <br />
            <span className="bg-linear-to-r from-purple-500 via-pink-500 to-rose-500 bg-clip-text text-transparent italic">
              Stack
            </span>

            <br />
            <span className="bg-linear-to-r from-blue-500 via-cyan-400 to-indigo-500 bg-clip-text text-transparent">
              Developer.
            </span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-xl font-medium leading-relaxed">
            {t.hero.description}
          </p>

          <div className="flex flex-wrap gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="px-8 py-4 bg-slate-900 dark:bg-blue-600 text-white rounded-2xl font-bold flex items-center gap-3 shadow-2xl"
            >
              {t.hero.cta} <ChevronRight size={20} />
            </motion.a>
            <div className="flex gap-2">
              {[{ Icon: Github, url: "https://github.com/xiongporher" }].map(
                ({ url, Icon }, i) => (
                  <motion.a
                    key={i}
                    href={url}
                    target="_blank" // ເປີດໃນ Tab ໃໝ່
                    rel="noopener noreferrer" // ເພື່ອຄວາມປອດໄພ
                    whileHover={{ y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-secondary border border-border rounded-2xl flex items-center justify-center text-foreground hover:border-blue-500 transition-colors"
                  >
                    <Icon size={20} />
                  </motion.a>
                ),
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
