"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const jobs = [
  {
    company: "Cefalo Bangladesh Ltd.",
    role: "Senior QA Engineer",
    period: "May 2025 – Present",
    current: true,
    color: "#00FFD1",
  },
  {
    company: "Road To SDET",
    role: "Founder & Instructor",
    period: "July 2021 – Present",
    current: true,
    color: "#00B4D8",
  },
  {
    company: "Spring Rain Pvt Ltd",
    role: "Sr. Software Engineer in Test",
    period: "April 2020 – June 2022",
    current: false,
    color: "#7C3AED",
  },
  {
    company: "SureCash",
    role: "Software Quality Assurance Engineer",
    period: "July 2015 – March 2020",
    current: false,
    color: "#F59E0B",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 bg-[#111827]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Career
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            A decade of building quality into complex systems across fintech, IoT, and SaaS.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-[#1F2A3C]" />

          <div className="space-y-8">
            {jobs.map((job, i) => (
              <motion.div
                key={job.company + job.role}
                initial={{ opacity: 0, x: -24 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="relative pl-16"
              >
                {/* Timeline dot */}
                <div
                  className="absolute left-[18px] top-5 w-4 h-4 rounded-full border-2 border-[#0B0F19] shadow-lg"
                  style={{ backgroundColor: job.color }}
                />

                <div className="bg-[#161D2F] border border-[#1F2A3C] rounded-2xl p-6 card-hover group relative overflow-hidden">
                  {/* Top accent line */}
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-2xl opacity-60"
                    style={{ backgroundColor: job.color }}
                  />

                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                    <div>
                      <h3 className="text-white font-bold text-lg">{job.company}</h3>
                      <p className="font-semibold mt-0.5" style={{ color: job.color }}>
                        {job.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <span className="text-gray-400 text-sm font-mono">{job.period}</span>
                      {job.current && (
                        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-[#00FFD1]/10 border border-[#00FFD1]/30 text-[#00FFD1] text-xs font-semibold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#00FFD1] animate-pulse" />
                          Current
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
