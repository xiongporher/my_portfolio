"use client";
import { motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { useLanguage } from "@/contexts/LanguageContext";

export function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, setTheme } = useTheme();
  const [isScrolled] = useState<boolean>(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const toggleLanguage = () => {
    setLang(lang === "en" ? "lo" : "en");
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-background/90 backdrop-blur-md border-border py-3 shadow-lg"
          : "bg-background/50 backdrop-blur-sm border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-xl font-black flex items-center gap-1 text-foreground"
        >
          <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
            D
          </div>
          <span className="tracking-tighter hidden sm:block">
            DEV Portfolio
          </span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8 text-[14px] font-bold uppercase tracking-widest text-foreground">
          {(["about", "skills", "projects", "contact"] as const).map((item) => (
            <a
              key={item}
              href={item === "skills" ? "#about" : `#${item}`}
              className="hover:text-blue-600 transition-colors"
            >
              {t.nav[item]}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="p-2 rounded-xl bg-secondary border border-border text-[10px] font-black uppercase text-foreground hover:border-blue-500 transition-colors"
          >
            {lang}
          </button>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-xl bg-secondary border border-border text-foreground hover:border-blue-500 transition-colors"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun size={16} />
              ) : (
                <Moon size={16} />
              )
            ) : (
              <div className="w-4 h-4" />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
