"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const differentiators = [
  {
    icon: "⚙️",
    title: "System-Level Validation",
    description:
      "Testing beyond interfaces — covering services, data flows, and infrastructure behavior.",
  },
  {
    icon: "🔍",
    title: "Concurrency & Edge Case Analysis",
    description:
      "Identifying race conditions, boundary failures, and hidden system risks.",
  },
  {
    icon: "💥",
    title: "Real-World Failure Simulation",
    description:
      "Validating system behavior under network issues, service failures, and production-like stress.",
  },
  {
    icon: "🤖",
    title: "AI-Driven Quality Engineering",
    description:
      "Leveraging AI to enhance testing, analysis, and intelligent quality decisions.",
  },
];

export default function WhatMakesMeDifferent() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Mindset
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            What Makes Me{" "}
            <span className="text-gradient">Different</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto text-lg">
            Focused on system reliability beyond{" "}
            <span className="text-white">surface-level testing</span>
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {differentiators.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="group bg-[#161D2F] border border-[#1F2A3C] rounded-2xl p-6 card-hover hover:border-[#00FFD1]/40 cursor-default"
            >
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="text-white font-bold text-lg mb-3 group-hover:text-[#00FFD1] transition-colors">
                {item.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom quote */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-14 text-center"
        >
          <blockquote className="text-xl sm:text-2xl font-semibold text-gray-300 italic max-w-3xl mx-auto">
            &ldquo;Quality is not an act, it is a habit — embedded in architecture,
            not bolted on after.&rdquo;
          </blockquote>
        </motion.div>
      </div>
    </section>
  );
}
