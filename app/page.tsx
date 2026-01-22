"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "@/components/landing/Hero";
import Experience from "@/components/landing/Experience";
import About from "@/components/landing/About";
import Projects from "@/components/landing/Projects";
import { Contact } from "@/components/landing/Contact";
import { Footer } from "@/components/layout/Footer";

const Home = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <div className="min-h-screen dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-blue-500 selection:text-white overflow-x-hidden">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-blue-600 z-[100] origin-left"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* Stats / Features Row */}
      <Experience />

      {/* About & Skills */}
      <About />

      {/* Project Section with Filter */}
      <Projects />

      {/* CTA Section */}
      <Contact />

      {/* Simple Footer */}
      <Footer />
    </div>
  );
};

export default Home;
