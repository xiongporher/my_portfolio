"use client";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "../ui/button";
import emailjs from "@emailjs/browser";

export function Contact() {
  const { t } = useLanguage();
  const [status, setStatus] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus("");

    const form = e.currentTarget;

    // Validate environment variables
    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (
      !serviceId ||
      !templateId ||
      !publicKey ||
      serviceId === "your_service_id" ||
      templateId === "your_template_id" ||
      publicKey === "your_public_key"
    ) {
      setStatus(
        "⚠️ EmailJS not configured. Please check .env.local file and restart server.",
      );
      setIsLoading(false);
      return;
    }

    try {
      await emailjs.sendForm(serviceId, templateId, form, publicKey);

      setStatus(t.contact.success);
      form.reset();
    } catch (error) {
      console.error("Error:", error);
      setStatus("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
      setTimeout(() => setStatus(""), 5000);
    }
  };
  return (
    <section
      id="contact"
      className="py-20 bg-background transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-blue-600 dark:bg-blue-700 rounded-[3rem] p-10 md:p-20 text-white text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-8 leading-none">
              {t.contact.title}
            </h2>
            <p className="text-blue-100 text-lg mb-12 font-medium">
              {t.contact.description}
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4 text-left">
                <input
                  name="from_name"
                  type="text"
                  placeholder={t.contact.name}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder:text-white/50 focus:bg-white/20 outline-none transition-all"
                  required
                />
                <input
                  name="from_email"
                  type="email"
                  placeholder={t.contact.email}
                  className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder:text-white/50 focus:bg-white/20 outline-none transition-all"
                  required
                />
              </div>
              <textarea
                name="message"
                rows={4}
                placeholder={t.contact.message}
                className="w-full bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder:text-white/50 focus:bg-white/20 outline-none transition-all resize-none text-left"
                required
              />
              <Button
                type="submit"
                disabled={isLoading}
                className="w-full bg-white text-blue-600 py-5 rounded-2xl font-black text-lg hover:scale-[1.02] transition-all shadow-xl shadow-blue-900/20 active:scale-95 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? "Sending..." : t.contact.send}
              </Button>
              {status && (
                <p className="font-bold animate-pulse pt-4">{status}</p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
