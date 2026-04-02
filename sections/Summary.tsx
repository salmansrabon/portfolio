"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Summary() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-20 bg-[#111827]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            About
          </span>

          <p className="mt-6 text-gray-100 text-lg leading-relaxed">
            Senior Software Test Automation Engineer with 10+ years of experience working on
            financial systems, IoT platforms, and distributed architectures.
          </p>

          <p className="mt-4 text-gray-400 text-lg leading-relaxed">
            Focused on system reliability, data integrity, and production stability
            in high-risk environments. I operate at the system level — covering services,
            data flows, async communication, and infrastructure behaviour — not just
            the interface.
          </p>

          <div className="mt-10 pt-8 border-t border-[#1F2A3C] grid sm:grid-cols-3 gap-8">
            {[
              { value: "10+", label: "Years in engineering" },
              { value: "5+", label: "Distributed systems" },
              { value: "1000+", label: "Engineers mentored" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-500 text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
