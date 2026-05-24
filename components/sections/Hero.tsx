"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/Button";
import Typewriter from "@/components/ui/Typewriter";

const fallbackProfile = {
  name: "Jude Victor",
  title: "Embedded Systems & Robotics Developer",
  tagline: "Prototyping Until Shutdown",
};

function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--color-cyan-400)_0%,_transparent_70%)] opacity-[0.03]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--color-cyan-600)_0%,_transparent_50%)] opacity-[0.02]" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="mb-6 inline-block rounded-full border border-cyan-500/30 bg-cyan-950/50 px-4 py-1.5 text-xs font-medium tracking-wider text-cyan-400">
            Embedded Systems &bull; Robotics &bull; PCB Design
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-display text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl"
        >
          {fallbackProfile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 text-lg text-[var(--text-secondary)] sm:text-xl"
        >
          {fallbackProfile.title}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-3"
        >
          <Typewriter text={fallbackProfile.tagline} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <Button size="lg" onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>
            View Projects
            <ExternalLink size={16} />
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Jude_Victor_Resume.pdf";
              link.click();
            }}
          >
            Download Resume
            <Download size={16} />
          </Button>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-text-muted"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

export { Hero };
