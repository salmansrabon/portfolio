"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    num: "01",
    title: "Understand Business Logic Deeply",
    description:
      "Before writing tests, I understand business logic, domain models, and critical workflows.",
  },
  {
    num: "02",
    title: "I design adversarial test scenarios to expose hidden system weaknesses.",
    description:
      "Boundary values, null states, concurrent writes, malformed payloads — I craft adversarial inputs that expose hidden assumptions.",
  },
  {
    num: "03",
    title: "Validate Data Consistency",
    description:
      "I verify data integrity across services, databases, and asynchronous systems.",
  },
  {
    num: "04",
    title: "Test Real-World Failures",
    description:
      "Network drops, dependency outages, disk pressure, clock skew. Real systems fail in unpredictable ways — I simulate them proactively.",
  },
  {
    num: "05",
    title: "Combine Automation + Exploratory + AI",
    description:
      "Scripts catch regressions. Exploratory uncovers unknowns. AI analyzes patterns. I use all three — not as alternatives, but together.",
  },
];

export default function TestingApproach() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="approach" className="py-24 bg-[#0D1220]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Methodology
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            My Testing <span className="text-gradient">Approach</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A systematic, battle-hardened process for building confidence in complex systems.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-px bg-gradient-to-b from-[#00FFD1]/40 via-[#00B4D8]/30 to-transparent" />

          <div className="space-y-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: i * 0.12 }}
                className="flex gap-6 md:gap-10 group"
              >
                {/* Number bubble */}
                <div className="relative flex-shrink-0">
                  <div className="w-14 h-14 rounded-xl bg-[#161D2F] border border-[#1F2A3C] flex items-center justify-center group-hover:border-[#00FFD1]/60 transition-colors glow-accent-sm">
                    <span className="text-[#00FFD1] font-bold font-mono text-sm">
                      {step.num}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 pb-2">
                  <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#00FFD1] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
