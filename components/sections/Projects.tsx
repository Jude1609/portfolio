"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, Cpu, Bot, Cog, CircuitBoard, Wifi } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

const categoryConfig: Record<string, { icon: React.ReactNode; gradient: string }> = {
  robotics: { icon: <Bot size={32} />, gradient: "from-cyan-600/30 to-blue-600/20" },
  embedded: { icon: <Cpu size={32} />, gradient: "from-purple-600/30 to-pink-600/20" },
  iot: { icon: <Wifi size={32} />, gradient: "from-green-600/30 to-teal-600/20" },
  automation: { icon: <Cog size={32} />, gradient: "from-orange-600/30 to-red-600/20" },
  pcb: { icon: <CircuitBoard size={32} />, gradient: "from-cyan-500/30 to-emerald-500/20" },
};

const fallbackProjects = [
  {
    _id: "1",
    title: "3D Printed Gesture Control Car",
    description: "First 3D-printed robotics project — a gesture-controlled car that interprets hand movements via sensors for intuitive directional control. Combines additive manufacturing with embedded control for a fully custom build.",
    techStack: ["3D Printing", "Gesture Sensor", "Arduino", "Motor Driver", "Embedded C"],
    category: "robotics",
    image: null,
    localImage: "/images/gesture-control-car.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "2",
    title: "Fault Detection & Trip Relay Circuit",
    description: "First-ever circuit build — a relaying protection system that detects electrical faults, trips the circuit, and isolates the faulty section automatically. Built from scratch on perfboard with discrete components.",
    techStack: ["Relay Logic", "PCB Prototyping", "Soldering", "Protection Circuitry"],
    category: "pcb",
    image: null,
    localImage: "/images/fault-detection-circuit.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "3",
    title: "AMR — Heavy Load Lifting Robot",
    description: "Custom Autonomous Mobile Robot designed for heavy payload transport with an innovative weight isolation mechanism that decouples load stress from motor shafts. Engineered for industrial material handling.",
    techStack: ["ROS", "Motor Control", "Weight Isolation", "Raspberry Pi", "LIDAR"],
    category: "robotics",
    image: null,
    localImage: "/images/amr-robot.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "4",
    title: "Medical Blood Pump Machine",
    description: "Built for a medical student — a peristaltic blood pump system with precise flow rate control. Designed with safety margins and real-time monitoring for laboratory and research applications.",
    techStack: ["Peristaltic Pump", "Flow Control", "Embedded C", "Medical Device", "PCB"],
    category: "embedded",
    image: null,
    localImage: "/images/blood-pump-machine.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "5",
    title: "Face Recognition Attendance System",
    description: "PCB-based embedded system for school bus attendance tracking. Uses camera module and on-device face recognition to log student boarding/alighting with wireless reporting.",
    techStack: ["PCB Design", "Face Recognition", "ESP32", "Camera Module", "IoT"],
    category: "embedded",
    image: null,
    localImage: "/images/face-recognition-pcb.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "6",
    title: "Smart Blind Stick with Custom PCB",
    description: "Assistive device for visually impaired individuals — a custom PCB integrating ultrasonic ranging, haptic feedback, and voice alert. Designed, routed, and debugged entirely by hand.",
    techStack: ["Custom PCB", "KiCad", "Ultrasonic", "Haptic Feedback", "Embedded C"],
    category: "pcb",
    image: null,
    localImage: "/images/blind-stick-pcb.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
  {
    _id: "7",
    title: "Inspection Robot — Terrain Mapping",
    description: "Rugged inspection robot built for terrain mapping and internal pipeline inspection. Equipped with camera telemetry and environmental sensors for real-time data collection in confined spaces.",
    techStack: ["Terrain Mapping", "ROS", "Camera Telemetry", "Raspberry Pi", "Sensor Fusion"],
    category: "robotics",
    image: null,
    localImage: "/images/inspection-robot.jpeg",
    githubUrl: "#",
    liveUrl: "#",
  },
];

const categories = [
  { value: "all", label: "All Projects" },
  { value: "robotics", label: "Robotics" },
  { value: "embedded", label: "Embedded" },
  { value: "automation", label: "Automation" },
  { value: "pcb", label: "PCB Design" },
  { value: "iot", label: "IoT" },
];

function Projects({ projects: sanityProjects }: { projects?: typeof fallbackProjects }) {
  const [active, setActive] = useState("all");
  const projects = sanityProjects || fallbackProjects;

  const resolvedProjects = (projects && projects.length > 0) ? projects : fallbackProjects;
  const filtered = active === "all"
    ? resolvedProjects
    : resolvedProjects.filter((p) => p.category === active);

  return (
    <Section id="projects" title="Featured Projects" subtitle="Things I've designed, built, and shipped">
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

      <motion.div layout className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.div
              key={project._id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <Card variant="elevated" className="group h-full overflow-hidden">
                <div className="aspect-video w-full overflow-hidden bg-[var(--bg-tertiary)]">
                  {project.image ? (
                    <Image
                      src={urlFor(project.image)?.width(600).height(340).url() ?? ""}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : project.localImage ? (
                    <Image
                      src={project.localImage}
                      alt={project.title}
                      width={600}
                      height={340}
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  ) : (
                    <div className={cn(
                      "flex h-full items-center justify-center bg-gradient-to-br",
                      categoryConfig[project.category]?.gradient ?? "from-deep-600 to-deep-800"
                    )}>
                      <div className="text-center">
                        <div className="text-text-muted/30">
                          {categoryConfig[project.category]?.icon ?? <Cpu size={32} />}
                        </div>
                        <span className="mt-2 block font-display text-xs font-bold tracking-wider text-text-muted/20">
                          {project.category.toUpperCase()}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
                <CardContent className="flex flex-col gap-3">
                  <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                  <p className="line-clamp-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {project.description}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-2">
                    {project.techStack?.map((tech: string) => (
                      <Badge key={tech}>{tech}</Badge>
                    ))}
                  </div>
                  {(project.githubUrl || project.liveUrl) && (
                    <div className="mt-3 flex gap-3 border-t border-border pt-3">
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-cyan-400"
                        >
                          <Github size={14} /> Code
                        </a>
                      )}
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-xs text-text-muted transition-colors hover:text-cyan-400"
                        >
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </Section>
  );
}

export { Projects };
