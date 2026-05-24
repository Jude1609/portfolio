"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Card, CardContent } from "@/components/ui/Card";

const fallbackTestimonials = [
  {
    _id: "1",
    name: "Workshop Attendee",
    role: "Engineering Student, SRM TRP",
    quote: "The robotics workshop was incredibly hands-on and practical. Jude's approach to explaining complex concepts through real demonstrations made everything click. Built my first obstacle-avoiding robot that day!",
  },
  {
    _id: "2",
    name: "Faculty Mentor",
    role: "Professor, Department of EEE",
    quote: "Jude has a rare ability to translate theoretical knowledge into working prototypes. His workshop on industrial automation was well-received by students and faculty alike.",
  },
];

function Testimonials({ testimonials: sanityTestimonials }: { testimonials?: typeof fallbackTestimonials }) {
  const items = (sanityTestimonials && sanityTestimonials.length > 0) ? sanityTestimonials : fallbackTestimonials;
  const [idx, setIdx] = useState(0);

  const prev = () => setIdx((i) => (i === 0 ? items.length - 1 : i - 1));
  const next = () => setIdx((i) => (i === items.length - 1 ? 0 : i + 1));

  return (
    <Section id="testimonials" title="Testimonials" subtitle="What people say about working with me">
      <div className="relative mx-auto max-w-3xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={items[idx]._id}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="text-center">
              <CardContent className="py-12">
                <Quote size={32} className="mx-auto mb-6 text-cyan-400/30" />
                <p className="text-lg leading-relaxed text-[var(--text-secondary)]">
                  &ldquo;{items[idx].quote}&rdquo;
                </p>
                <div className="mt-8">
                  <p className="font-display font-semibold">{items[idx].name}</p>
                  <p className="mt-1 text-sm text-text-muted">{items[idx].role}</p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>

        {items.length > 1 && (
          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:text-cyan-400"
              aria-label="Previous"
            >
              <ChevronLeft size={18} />
            </button>
            <div className="flex gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    i === idx ? "bg-cyan-400" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={next}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-text-muted transition-colors hover:text-cyan-400"
              aria-label="Next"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        )}
      </div>
    </Section>
  );
}

export { Testimonials };
