import { defineQuery } from "next-sanity";

export const projectsQuery = defineQuery(`
  *[_type == "project"] | order(order asc) {
    _id, title, slug, description, image, techStack, category, githubUrl, liveUrl, featured, order
  }
`);

export const featuredProjectsQuery = defineQuery(`
  *[_type == "project" && featured == true] | order(order asc) {
    _id, title, slug, description, image, techStack, category, githubUrl, liveUrl, order
  }
`);

export const skillsQuery = defineQuery(`
  *[_type == "skill"] | order(order asc) {
    _id, name, category, proficiency, order
  }
`);

export const experiencesQuery = defineQuery(`
  *[_type == "experience"] | order(order asc) {
    _id, role, company, description, startDate, endDate, current, order
  }
`);

export const testimonialsQuery = defineQuery(`
  *[_type == "testimonial" && featured == true] {
    _id, name, role, quote, avatar, source
  }
`);

export const aboutQuery = defineQuery(`
  *[_type == "about"][0] {
    _id, name, title, tagline, bio, avatar, resume, stats, socialLinks
  }
`);
