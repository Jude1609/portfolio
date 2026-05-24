"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";

const fallbackSkills = [
  { name: "C / Embedded C", category: "firmware", proficiency: 85 },
  { name: "Python", category: "software", proficiency: 80 },
  { name: "MicroPython", category: "firmware", proficiency: 85 },
  { name: "Raspberry Pi (Pico, SBCs)", category: "hardware", proficiency: 90 },
  { name: "Arduino", category: "hardware", proficiency: 90 },
  { name: "ESP32", category: "hardware", proficiency: 80 },
  { name: "PCB Design (KiCad, EasyEDA)", category: "tools", proficiency: 75 },
  { name: "ROS (Robot OS)", category: "software", proficiency: 65 },
  { name: "Motor Control (L298N, Servo)", category: "hardware", proficiency: 85 },
  { name: "Sensor Integration", category: "hardware", proficiency: 85 },
  { name: "Voice Recognition Modules", category: "firmware", proficiency: 75 },
  { name: "Soldering & Prototyping", category: "tools", proficiency: 90 },
  { name: "Linux", category: "tools", proficiency: 70 },
  { name: "Git / GitHub", category: "tools", proficiency: 75 },
];

const categories = [
  { value: "all", label: "All" },
  { value: "hardware", label: "Hardware" },
  { value: "firmware", label: "Firmware" },
  { value: "software", label: "Software" },
  { value: "tools", label: "Tools" },
];

function Skills() {
  const [active, setActive] = useState("all");

  const filtered = active === "all"
    ? fallbackSkills
    : fallbackSkills.filter((s) => s.category === active);

  return (
    <Section id="skills" title="Skills & Technologies" subtitle="Tools, platforms, and languages I work with">
      <div className="mb-8 flex flex-wrap justify-center gap-2">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={cn(
              "rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              active === cat.value
                ? "bg-cyan-400 text-deep-900"
                : "border border-border bg-transparent text-text-muted hover:text-text"
            )}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <motion.div layout className="flex flex-wrap justify-center gap-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
            >
              <Badge variant="default" className="group relative cursor-default overflow-hidden px-4 py-2 text-sm">
                <span className="relative z-10">{skill.name}</span>
                <div
                  className="absolute inset-0 bg-cyan-950/30"
                  style={{ width: `${skill.proficiency}%` }}
                />
              </Badge>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

export { Skills };
