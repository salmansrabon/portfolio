"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const achievements = [
  {
    icon: "🚀",
    label: "Ensured Reliability of Financial & Distributed Systems",
    sublabel: "Tested high-risk transactional systems with strict data integrity requirements",
    color: "#00FFD1",
  },
  {
    icon: "⚙️",
    label: "Automated End-to-End Test Suites at Scale",
    sublabel: "Reduced manual testing effort and improved release confidence",
    color: "#00B4D8",
  },
  {
    icon: "🔍",
    label: "Discovered System-Level Bugs",
    sublabel: "Beyond UI — race conditions & data integrity issues",
    color: "#7C3AED",
  },
  {
    icon: "🌍",
    label: "Validated Multi-Country IoT Platforms",
    sublabel: "Tested real-world systems across regions and environments",
    color: "#F59E0B",
  },
  {
    icon: "🧠",
    label: "Built AI-Powered Interview Platform",
    sublabel: "Designed real-time candidate evaluation using LLM",
    color: "#10B981",
  },
  {
    icon: "🏗️",
    label: "Founded Road to SDET",
    sublabel: "Scaled training platform for QA professionals",
    color: "#EF4444",
  },
];

export default function Impact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievement" className="py-24 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Achievement
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Key <span className="text-gradient">Achievements</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Real-world impact across quality engineering, automation, and platform building.
          </p>
        </motion.div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {achievements.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[#161D2F] border border-[#1F2A3C] rounded-2xl p-7 text-center overflow-hidden card-hover group"
            >
              {/* Glow background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                style={{ backgroundColor: item.color }}
              />

              {/* Top accent line */}
              <div
                className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full opacity-60"
                style={{ backgroundColor: item.color }}
              />

              <div className="text-4xl sm:text-5xl mb-3">
                {item.icon}
              </div>
              <div className="text-white font-semibold text-base mb-1">
                {item.label}
              </div>
              <div className="text-gray-500 text-xs">{item.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
