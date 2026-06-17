"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";

const fallbackExperience = [
  {
    _id: "1",
    role: "Integration Engineer",
    company: "Corelyn Robotics",
    description:
      "Building and integrating industrial robotics systems for manufacturing automation. Responsible for system integration, programming, and deployment of robotic solutions in production environments.",
    startDate: "2025",
    endDate: null,
    current: true,
  },
  {
    _id: "2",
    role: "Power Systems Engineer",
    company: "Transista Startup — TVS AMR Project",
    description:
      "Maintained all power distribution and power electronic controllers for autonomous mobile robot platforms. Worked on the TVS AMR project ensuring reliable power delivery, motor controller integration, and system-level electrical architecture.",
    startDate: "2024",
    endDate: "2025",
    current: false,
  },
  {
    _id: "3",
    role: "Robotics Enthusiast & Workshop Presenter",
    company: "SRM TRP Engineering College",
    description:
      "Presented workshops on Industrial Automation & Robotics, covering sensor integration (HC-SR04, IMU), real-time decision making with Raspberry Pi Pico, and motor control via L298N. Focused on bridging the gap between theory and practical application in Smart Manufacturing 4.0.",
    startDate: "2024",
    endDate: null,
    current: true,
  },
  {
    _id: "4",
    role: "Industrial Visit — Testing & Validation",
    company: "TÜV SÜD",
    description:
      "Gained hands-on exposure to industrial testing, validation, and reliability engineering for embedded systems and robotics applications. Developed understanding of how systems are tested for real-world deployment.",
    startDate: "2025-01",
    endDate: "2025-01",
    current: false,
  },
];

function Experience({ experiences: sanityExperiences }: { experiences?: typeof fallbackExperience }) {
  const items = (sanityExperiences && sanityExperiences.length > 0) ? sanityExperiences : fallbackExperience;

  return (
    <Section id="experience" title="Experience" subtitle="Where I've learned, built, and taught">
      <div className="relative">
        <div className="absolute left-4 top-0 h-full w-px bg-border md:left-1/2 md:-translate-x-px" />

        <div className="space-y-12">
          {items.map((item, i) => (
            <motion.div
              key={item._id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`relative flex flex-col gap-2 pl-12 md:w-1/2 md:pl-0 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              <div
                className={`absolute left-4 top-1 h-3 w-3 rounded-full border-2 border-cyan-400 bg-[var(--bg-primary)] md:left-auto md:right-auto ${
                  i % 2 === 0 ? "md:-right-1.5" : "md:-left-1.5"
                }`}
              />

              <span className="text-xs font-medium text-cyan-400">
                {item.startDate} — {item.current ? "Present" : item.endDate}
              </span>
              <h3 className="font-display text-lg font-semibold">{item.role}</h3>
              <span className="text-sm text-cyan-400/80">{item.company}</span>
              <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export { Experience };
