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
    <section
      id="stack"
      className="py-24 bg-[#0D1220]"
      ref={ref}
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Tools & Technologies
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Areas of <span className="text-gradient">Expertise</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto">
            Battle-tested tooling across automation, performance, security, and DevOps.
          </p>
        </motion.div>

        {/* Tech Groups */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-[#161D2F] border border-[#1F2A3C] rounded-2xl p-6 card-hover hover:border-[#1F2A3C] group"
              style={{
                ["--hover-color" as string]: group.color,
              }}
            >
              {/* Category label */}
              <div className="flex items-center gap-3 mb-5">
                <div
                  className="w-3 h-3 rounded-full"
                  style={{ backgroundColor: group.color, boxShadow: `0 0 8px ${group.color}60` }}
                />
                <h3
                  className="font-bold text-base"
                  style={{ color: group.color }}
                >
                  {group.category}
                </h3>
              </div>

              {/* Tool pills */}
              <div className="flex flex-wrap gap-2">
                {group.tools.map((tool) => (
                  <span
                    key={tool}
                    className="px-3 py-1 rounded-full text-xs font-medium border text-gray-300 border-[#1F2A3C] bg-[#0B0F19] hover:text-white transition-colors"
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
