import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Experience } from "@/components/sections/Experience";
import { Testimonials } from "@/components/sections/Testimonials";
import { Certificates } from "@/components/sections/Certificates";
import { Contact } from "@/components/sections/Contact";
import { client } from "@/sanity/client";
import { projectsQuery, testimonialsQuery, experiencesQuery } from "@/sanity/queries";

export default async function Home() {
  let projects: unknown[] = [];
  let testimonials: unknown[] = [];
  let experiences: unknown[] = [];

  if (client) {
    try {
      [projects, testimonials, experiences] = await Promise.all([
        client.fetch(projectsQuery).catch(() => []),
        client.fetch(testimonialsQuery).catch(() => []),
        client.fetch(experiencesQuery).catch(() => []),
      ]);
    } catch {}
  }

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects projects={projects as any} />
      <Experience experiences={experiences as any} />
      <Testimonials testimonials={testimonials as any} />
      <Certificates />
      <Contact />
    </>
  );
}
