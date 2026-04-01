"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const projects = [
  {
    id: 1,
    title: "AI Interview Platform",
    tag: "AI · Voice · Evaluation",
    description:
      "Real-time voice interview system powered by GPT-based evaluation. Candidates answer dynamically generated questions, and the AI scores responses based on technical depth, communication, and accuracy.",
    tech: ["Next.js", "GPT-4,5","Agentic AI", "WebRTC", "Node.js", "MySQL"],
    color: "#00FFD1",
    icon: "🎙️",
    highlights: [
      "Real-time voice processing",
      "AI driven dynamic question generation",
      "Automated candidate evaluation and scoring",
      "Designed to match Tier-1 company interview standards"
    ],
  },
  {
    id: 2,
    title: "Road to SDET",
    tag: "EdTech · LMS · QA Training",
    description:
      "Full-featured QA training ecosystem and LMS platform designed to transform developers and manual testers into skilled SDETs. Includes video courses, live labs, and project-based learning.",
    tech: ["Manual Testing", "API Testing", "Performance Testing", "Java", "JavaScript","TypeScript","Selenium","Playwright"],
    color: "#00B4D8",
    icon: "🚀",
    highlights: [
      "Mentored 1000+ students",
      "Designed real-world testing curriculum",
      "Integrated live coding and project-based learning",
    ],
  },
  {
    id: 3,
    title: "Enterprise System Testing",
    tag: "IoT · Distributed · ERP",
    description:
      "End-to-end test automation strategy for a distributed IoT + ERP platform deployed across multiple countries. Validated data consistency, cross-service contracts, and real-time telemetry flows.",
    tech: ["Playwright", "k6", "Docker", "Jenkins", "AWS"],
    color: "#7C3AED",
    icon: "🌐",
    highlights: [
      "Validated microservices, APIs, and async communication flows",
      "Ensured data consistency across distributed systems",
      "Identified system-level failures before production",
      "Improved regression efficiency by 50%"
    ],
  },
];

export default function FeaturedProjects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" className="py-24 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Portfolio
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Systems I&apos;ve built, tested, and shipped at scale.
          </p>
        </motion.div>

        {/* Projects */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-[#161D2F] border border-[#1F2A3C] rounded-2xl overflow-hidden card-hover flex flex-col"
            >
              {/* Project Image Placeholder */}
              <div
                className="relative h-48 flex items-center justify-center overflow-hidden"
                style={{
                  background: `linear-gradient(135deg, ${project.color}0F 0%, #0B0F1900 100%)`,
                  borderBottom: `1px solid ${project.color}20`,
                }}
              >
                <span className="text-7xl opacity-40">{project.icon}</span>
                {/* Tag */}
                <div className="absolute top-4 left-4">
                  <span
                    className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      color: project.color,
                      backgroundColor: `${project.color}15`,
                      border: `1px solid ${project.color}30`,
                    }}
                  >
                    {project.tag}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3
                  className="text-white font-bold text-xl mb-3 group-hover:transition-colors"
                  style={{ ["--accent" as string]: project.color }}
                >
                  {project.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Highlights */}
                <ul className="mb-5 space-y-1.5">
                  {project.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-2 text-sm text-gray-300"
                    >
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: project.color }}
                      />
                      {h}
                    </li>
                  ))}
                </ul>

                {/* Tech Pills */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 text-xs rounded-md bg-[#0B0F19] border border-[#1F2A3C] text-gray-400 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
