"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const degrees = [
  {
    degree: "MSc in Computer Science & Engineering",
    institution: "Jahangirnagar University",
    period: "2017 – 2019",
  },
  {
    degree: "BSc in Computer Science & Engineering",
    institution: "Daffodil International University",
    period: "2012 – 2015",
  },
];

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="education" className="py-20 bg-[#111827]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            Background
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            Education
          </h2>
        </motion.div>

        {/* Education list */}
        <div className="space-y-6">
          {degrees.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 pb-6 border-b border-[#1F2A3C] last:border-0 last:pb-0"
            >
              <div>
                <h3 className="text-white font-semibold text-base">{edu.degree}</h3>
                <p className="text-gray-400 text-sm mt-0.5">{edu.institution}</p>
              </div>
              <span className="text-gray-500 text-xs font-mono shrink-0">{edu.period}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
