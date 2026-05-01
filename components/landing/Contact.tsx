"use client";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "../ui/button";
import { Mail, Phone } from "lucide-react";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section
      id="contact"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-[3rem] p-10 md:p-20 text-white text-center relative overflow-hidden">
          {/* Grain Overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
          
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
              {t.contact.title}
            </h2>
            <p className="text-blue-100 text-lg mb-12 font-medium">
              {t.contact.description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-12">
              {/* Phone Link */}
              <a
                href="tel:+8562056006722"
                className="flex items-center gap-4 group justify-start text-blue-100 hover:text-white transition-colors"
              >
                <div className="bg-white/20 flex items-center justify-center rounded-full p-3 group-hover:bg-white/30 transition-colors">
                  <Phone size={20} className="text-white" />
                </div>
                <span className="font-semibold truncate">
                  +856 20 5600 6722
                </span>
              </a>

              {/* Email Link */}
              <a
                href="mailto:xiongporher1@gmail.com"
                className="flex items-center gap-4 group justify-start text-blue-100 hover:text-white transition-colors"
              >
                <div className="bg-white/20 flex items-center justify-center rounded-full p-3 group-hover:bg-white/30 transition-colors">
                  <Mail size={20} className="text-white" />
                </div>
                <span className="font-semibold truncate">
                  xiongporher1@gmail.com
                </span>
              </a>
            </div>

            <Button
              asChild
              className="w-full h-auto bg-white text-blue-600 py-5 rounded-2xl font-black text-lg hover:bg-blue-50 hover:scale-[1.02] transition-all shadow-xl shadow-blue-900/20 active:scale-95 cursor-pointer border-none"
            >
              <a 
                href="https://www.facebook.com/xiongporher.loveonlyone" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {t.contact.send}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}