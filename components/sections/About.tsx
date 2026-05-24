"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { CircuitBoard, Cpu, Zap, Trophy } from "lucide-react";

const fallbackAbout = {
  name: "Jude Victor",
  bio: "Electrical & Electronics Engineering student at SRM TRP Engineering College with a deep passion for robotics, embedded systems, and mechatronics. I build things that move, sense, and think — from voice-controlled humanoid robots to obstacle-avoiding autonomous platforms. I believe in learning by building and sharing knowledge through workshops and hands-on demonstrations.",
  stats: [
    { label: "Projects Built", value: "5+" },
    { label: "Workshops Presented", value: "3+" },
    { label: "Technologies Used", value: "15+" },
    { label: "Coffee Consumed", value: "∞" },
  ],
};

const highlights = [
  { icon: CircuitBoard, text: "PCB Design & Prototyping" },
  { icon: Cpu, text: "Embedded Firmware (C, Python)" },
  { icon: Zap, text: "ROS, Motor Control, Sensors" },
  { icon: Trophy, text: "Workshop Presenter & Mentor" },
];

function About() {
  return (
    <Section id="about" title="About Me" subtitle="Engineer. Builder. Problem Solver.">
      <div className="grid gap-12 lg:grid-cols-5">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3"
        >
          <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
            {fallbackAbout.bio}
          </p>

          <div className="mt-8 grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item.text} className="flex items-center gap-3 rounded-lg border border-border bg-[var(--bg-secondary)] p-4">
                <item.icon size={20} className="shrink-0 text-cyan-400" />
                <span className="text-sm font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-2"
        >
          <div className="grid grid-cols-2 gap-4">
            {fallbackAbout.stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center rounded-xl border border-border bg-[var(--bg-secondary)] p-6 text-center"
              >
                <span className="font-display text-3xl font-bold text-cyan-400">{stat.value}</span>
                <span className="mt-1 text-sm text-text-muted">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

export { About };
