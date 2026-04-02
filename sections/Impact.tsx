"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    label: "Ensured Reliability of Financial & Distributed Systems",
    sublabel: "Tested high-risk transactional systems with strict data integrity requirements",
  },
  {
    label: "Automated End-to-End Test Suites at Scale",
    sublabel: "Reduced manual testing effort and improved release confidence across CI/CD pipelines",
  },
  {
    label: "Discovered System-Level Failures",
    sublabel: "Identified race conditions, data integrity issues, and async failure modes beyond the UI",
  },
  {
    label: "Validated Multi-Country IoT Platforms",
    sublabel: "Tested real-world systems across regions, environments, and deployment scenarios",
  },
  {
    label: "Built AI-Powered Interview Platform",
    sublabel: "Designed real-time candidate evaluation using LLM-driven dynamic question generation",
  },
  {
    label: "Founded Road to SDET",
    sublabel: "Scaled a training platform that has mentored 1000+ QA professionals",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievement" className="py-20 bg-[#111827]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            Impact
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            Key Achievements
          </h2>
        </motion.div>

        {/* Achievements list */}
        <div className="grid sm:grid-cols-2 gap-px bg-[#1F2A3C]">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#111827] p-6 hover:bg-[#161D2F] transition-colors duration-200"
            >
              <div className="flex items-start gap-3">
                <span className="mt-1 w-1.5 h-1.5 rounded-full bg-[#00FFD1] flex-shrink-0" />
                <div>
                  <div className="text-white font-medium text-sm leading-snug">
                    {item.label}
                  </div>
                  <div className="text-gray-500 text-xs mt-1.5 leading-relaxed">{item.sublabel}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
