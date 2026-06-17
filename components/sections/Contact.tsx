"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Download } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";

function Contact() {
  return (
    <Section id="contact" title="Get In Touch" subtitle="Have a project in mind? Let's build something together.">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
        className="mx-auto max-w-lg text-center"
      >
        <div className="flex justify-center gap-6">
          <a
            href="https://linkedin.com/in/jude-victor1609"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-[var(--bg-secondary)] p-6 transition-colors hover:border-cyan-500/30"
          >
            <Linkedin size={24} className="text-cyan-400" />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
          <a
            href="mailto:jude.victor@example.com"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-[var(--bg-secondary)] p-6 transition-colors hover:border-cyan-500/30"
          >
            <Mail size={24} className="text-cyan-400" />
            <span className="text-sm font-medium">Email</span>
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-[var(--bg-secondary)] p-6 transition-colors hover:border-cyan-500/30"
          >
            <Github size={24} className="text-cyan-400" />
            <span className="text-sm font-medium">GitHub</span>
          </a>
        </div>

        <div className="mt-8">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              const link = document.createElement("a");
              link.href = "/resume.pdf";
              link.download = "Jude_Victor_Resume.pdf";
              link.click();
            }}
          >
            <Download size={16} />
            Download Resume
          </Button>
        </div>

        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-text-muted">
          <MapPin size={14} />
          <span>Tamil Nadu, India</span>
        </div>

        <div className="mt-10 text-center">
          <img
            src="/qr-portfolio.png"
            alt="Portfolio QR"
            className="mx-auto h-28 w-28 rounded-xl border border-border bg-[var(--bg-secondary)] p-2"
          />
          <p className="mt-2 text-xs text-text-muted">Scan to view portfolio online</p>
        </div>
      </motion.div>
    </Section>
  );
}

export { Contact };
