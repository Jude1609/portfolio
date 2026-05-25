"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Plus, X } from "lucide-react";
import { Section } from "@/components/ui/Section";

interface CertImage {
  id: string;
  data: string;
}

const certFiles = [
  "1723009479089.jpeg",
  "1738137258220.jpeg",
  "1745598916629.jpeg",
  "1745599314489.jpeg",
  "1754019545091.jpeg",
  "1756445566310.jpeg",
  "1768180450411 (1).jpeg",
  "1768180450715.jpeg",
  "1768180450780.jpeg",
  "1768180450787 (1).jpeg",
  "1768180451424.jpeg",
  "1768180451446.jpeg",
  "1768180451857.jpeg",
  "1768180452390.jpeg",
  "1770901446111.jpeg",
  "1773631158753.jpeg",
  "1776254618430.jpeg",
];

function Certificates() {
  const [certs, setCerts] = useState<CertImage[]>(
    certFiles.map((f) => ({ id: f, data: "/certificates/" + f }))
  );
  const inputRef = useRef<HTMLInputElement>(null);

  const addFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files?.length) return;
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (ev) => {
        const data = ev.target?.result as string;
        setCerts((prev) => [...prev, { id: crypto.randomUUID(), data }]);
      };
      reader.readAsDataURL(file);
    });
    e.target.value = "";
  };

  const remove = (id: string) => {
    setCerts((prev) => prev.filter((c) => c.id !== id));
  };

  return (
    <Section id="certificates" title="Certifications" subtitle="Workshops, courses, and credentials I've earned">
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4">
        {certs.map((cert) => (
          <motion.div
            key={cert.id}
            layout
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative overflow-hidden rounded-xl border border-border bg-[var(--bg-secondary)]"
          >
            <img src={cert.data} alt="Certificate" className="h-full w-full object-contain" />
            <button
              onClick={() => remove(cert.id)}
              className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-full border border-border bg-[var(--bg)] text-text-muted opacity-0 transition-opacity group-hover:opacity-100 hover:text-red-400 hover:border-red-400"
            >
              <X size={14} />
            </button>
          </motion.div>
        ))}
        <button
          onClick={() => inputRef.current?.click()}
          className="flex min-h-[180px] flex-col items-center justify-center rounded-xl border border-border bg-[var(--bg-secondary)] text-text-muted transition-colors hover:border-cyan-400/30"
        >
          <Plus size={48} className="opacity-30" />
          <span className="mt-2 text-sm">Add Certificate</span>
        </button>
      </div>
      <input
        ref={inputRef}
        type="file"
        accept="image/*"
        multiple
        className="hidden"
        onChange={addFiles}
      />
    </Section>
  );
}

export { Certificates };
