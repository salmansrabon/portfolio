"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AI Interview Platform",
    tag: "AI · Voice · Evaluation",
    description:
      "Real-time voice interview system powered by GPT-based evaluation. Candidates answer dynamically generated questions; the AI scores responses on technical depth, communication, and accuracy.",
    tech: ["Next.js", "GPT-4.5", "Agentic AI", "WebRTC", "Node.js", "MySQL"],
    highlights: [
      "Real-time voice processing with WebRTC",
      "AI-driven dynamic question generation",
      "Automated candidate scoring and evaluation",
      "Designed to match Tier-1 interview standards",
    ],
    color: "#00FFD1",
  },
  {
    id: 2,
    title: "Road to SDET",
    tag: "EdTech · LMS · QA Training",
    description:
      "Full-featured QA training ecosystem and LMS platform for transforming developers and manual testers into skilled SDETs. Includes structured courses, live labs, and project-based assessment.",
    tech: ["Manual Testing", "API Testing", "Performance Testing", "Selenium", "Playwright", "TypeScript"],
    highlights: [
      "1000+ engineers mentored",
      "Curriculum covering automation, performance, and security",
      "Project-based and real-world lab design",
    ],
    color: "#00B4D8",
  },
  {
    id: 3,
    title: "Enterprise System Testing",
    tag: "IoT · Distributed · ERP",
    description:
      "End-to-end test automation strategy for a distributed IoT + ERP platform deployed across multiple countries. Validated data consistency, cross-service contracts, and real-time telemetry flows.",
    tech: ["Playwright", "k6", "Docker", "Jenkins", "AWS"],
    highlights: [
      "Validated microservices, APIs, and async communication",
      "Ensured data consistency across distributed systems",
      "Identified system-level failures before production",
      "Improved regression efficiency by 50%",
    ],
    color: "#7C3AED",
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-20 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            Work
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            Featured Projects
          </h2>
        </motion.div>

        {/* Projects */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="bg-[#161D2F] border border-[#1F2A3C] rounded-xl p-6 sm:p-8 card-hover hover:border-[#1F2A3C]/80"
            >
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className="flex-1">
                  {/* Tag + Title */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <h3 className="text-white font-semibold text-lg">{project.title}</h3>
                    <span
                      className="text-xs font-medium px-2.5 py-0.5 rounded-full"
                      style={{
                        color: project.color,
                        backgroundColor: `${project.color}12`,
                        border: `1px solid ${project.color}25`,
                      }}
                    >
                      {project.tag}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-1 mb-5">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-gray-400 text-xs">
                        <span
                          className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0"
                          style={{ backgroundColor: project.color }}
                        />
                        {h}
                      </li>
                    ))}
                  </ul>

                  {/* Tech pills */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-md bg-[#0B0F19] border border-[#1F2A3C] text-gray-400"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

