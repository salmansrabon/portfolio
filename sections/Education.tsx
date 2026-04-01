"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const degrees = [
  {
    degree: "MSc in Computer Science & Engineering",
    institution: "Jahangirnagar University",
    period: "2017 – 2019",
    color: "#00FFD1",
    icon: "🎓",
  },
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    period: "2012 – 2015",
    color: "#00B4D8",
    icon: "🎓",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-24 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Academic Background
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A strong academic foundation in computer science underpinning a decade of engineering excellence.
          </p>
        </motion.div>

        {/* Education Cards */}
        <div className="grid gap-6 sm:grid-cols-2">
          {degrees.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 28 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative bg-[#161D2F] border border-[#1F2A3C] rounded-2xl p-7 card-hover group overflow-hidden"
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-70"
                style={{ backgroundColor: edu.color }}
              />

              {/* Glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl"
                style={{ backgroundColor: edu.color }}
              />

              <div className="text-3xl mb-4">{edu.icon}</div>

              <h3
                className="font-bold text-lg leading-snug mb-1"
                style={{ color: edu.color }}
              >
                {edu.degree}
              </h3>
              <p className="text-white font-semibold text-base mb-3">
                {edu.institution}
              </p>
              <span className="inline-block px-3 py-1 rounded-full bg-[#1F2A3C] text-gray-400 text-xs font-mono">
                {edu.period}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
