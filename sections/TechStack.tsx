"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const techGroups = [
  {
    category: "Automation",
    color: "#00FFD1",
    tools: ["Selenium", "Playwright", "Appium", "TestNG", "JUnit"],
  },
  {
    category: "API Testing",
    color: "#00B4D8",
    tools: ["Postman", "Rest Assured", "Karate DSL", "Newman"],
  },
  {
    category: "Backend",
    color: "#7C3AED",
    tools: ["Node.js", "Express", "JavaScript", "TypeScript"],
  },
  {
    category: "Performance",
    color: "#F59E0B",
    tools: ["JMeter", "k6", "Gatling", "Artillery"],
  },
  {
    category: "Security",
    color: "#EF4444",
    tools: ["BurpSuite", "XSS Testing", "SQL Injection", "OWASP ZAP"],
  },
  {
    category: "DevOps & CI/CD",
    color: "#10B981",
    tools: ["Docker", "Jenkins", "GitHub Actions", "GitLab CI"],
  },
];

export default function TechStack() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="stack" className="py-20 bg-[#111827]" ref={ref}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            Expertise
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            Tools &amp; Technologies
          </h2>
        </motion.div>

        {/* Tech Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-[#161D2F] border border-[#1F2A3C] rounded-xl p-5"
            >
              {/* Category label */}
              <div className="flex items-center gap-2.5 mb-4">
                <div
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ backgroundColor: group.color }}
                />
                <h3 className="font-semibold text-sm text-white">{group.category}</h3>
              </div>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-1.5">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-2.5 py-1 rounded-md text-xs text-gray-400 border border-[#1F2A3C] bg-[#0B0F19]"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
