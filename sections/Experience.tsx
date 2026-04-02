"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Cefalo Bangladesh Ltd.",
    role: "Senior SDET",
    period: "May 2025 – Present",
    current: true,
    description:
      "Working on enterprise-scale systems with a focus on system-level test design, automation architecture, and quality strategy across product squads.",
  },
  {
    company: "Road To SDET",
    role: "Founder & Lead Instructor",
    period: "July 2021 – Present",
    current: true,
    description:
      "Built and scaled a training platform mentoring 1000+ QA professionals. Designed curriculum covering automation, performance testing, and system-level validation.",
  },
  {
    company: "Spring Rain Pvt Ltd",
    role: "Senior SDET",
    period: "April 2020 – June 2022",
    current: false,
    description:
      "Worked on distributed systems and IoT platforms deployed across multiple regions, focusing on system reliability, cross-service contract testing, and end-to-end automation.",
  },
  {
    company: "SureCash",
    role: "Software QA Engineer",
    period: "July 2015 – March 2020",
    current: false,
    description:
      "Tested high-risk financial transaction systems handling real-money flows. Focused on data integrity, regression validation, and failure recovery in production-critical environments.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-20 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            Career
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            Experience
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-2 w-px bg-[#1F2A3C]" />

          <div className="space-y-10 pl-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company + job.role}
                initial={{ opacity: 0, x: -16 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[33px] top-1.5 w-2.5 h-2.5 rounded-full bg-[#1F2A3C] border-2 border-[#00FFD1]/60" />

                {/* Content */}
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1.5">
                  <div>
                    <h3 className="text-white font-semibold text-base">{job.company}</h3>
                    <p className="text-[#00FFD1] text-sm mt-0.5">{job.role}</p>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-gray-500 text-xs font-mono">{job.period}</span>
                    {job.current && (
                      <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00FFD1]/8 border border-[#00FFD1]/20 text-[#00FFD1] text-xs font-medium">
                        <span className="w-1 h-1 rounded-full bg-[#00FFD1]" />
                        Now
                      </span>
                    )}
                  </div>
                </div>
                <p className="text-gray-400 text-sm leading-relaxed">{job.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
