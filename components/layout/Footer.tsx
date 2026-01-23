"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import Link from "next/link";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="py-12 border-t border-border bg-background transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-[10px] font-black tracking-[0.3em] uppercase text-muted-foreground">
          {t.footer}
        </div>
        <div className="flex gap-6">
          {[
            {
              name: "Facebook",
              url: "https://www.facebook.com/xiongporher.loveonlyone",
            },
            { name: "Github", url: "https://github.com/xiongporher" },
          ].map((social) => (
            <Link
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-bold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {social.name}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
