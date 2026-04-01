"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const bugStories = [
  {
    id: "BUG-001",
    severity: "Critical",
    severityColor: "#EF4444",
    system: "Financial Ledger System",
    title: "Silent Double-Debit in Concurrent Transactions",
    story:
      "Two users submitted payments simultaneously within a 50ms window. A race condition in the optimistic-lock implementation allowed both transactions to read the same balance snapshot before either committed. Result: account debited twice, balance went negative, and no error was logged. Found during concurrent load testing at 200 TPS.",
    how: "Designed multi-threaded test harness with synchronized thread barriers to guarantee precise concurrent request timing.",
    impact: "Prevented potential ₹50L+ financial loss per day in production.",
    tags: ["Race Condition", "Concurrency", "Financial"],
  },
  {
    id: "BUG-002",
    severity: "High",
    severityColor: "#F59E0B",
    system: "IoT Telemetry Platform",
    title: "Phantom Sensor Readings After Timezone Shift",
    story:
      "After DST (Daylight Saving Time) rollback, IoT devices reported sensor readings with timestamps 1 hour in the past. The ingest pipeline deduplicated by timestamp, silently dropping legitimate readings. 12-15% of data was lost invisibly. Monitoring showed no errors — data just vanished.",
    how: "Built time-simulation test suite that faked DST transitions and compared ingestion record counts before/after rollback.",
    impact: "Uncovered silent data loss impacting compliance audit trails.",
    tags: ["Timezone", "Data Loss", "IoT"],
  },
  {
    id: "BUG-003",
    severity: "High",
    severityColor: "#F59E0B",
    system: "ERP Multi-Tenant API",
    title: "Cross-Tenant Data Bleed in Cached Responses",
    story:
      "A Redis cache key was constructed using only the entity ID without tenant context. When Tenant A fetched a resource, the response was cached. Tenant B's identical entity ID returned Tenant A's data from cache. Sensitive business records were exposed across tenant boundaries.",
    how: "Created automated tenant-isolation test suite using dual-session parallel requests with distinct tenant credentials.",
    impact: "Stopped a critical data breach before security audit revealed it externally.",
    tags: ["Security", "Multi-Tenancy", "OWASP"],
  },
];

export default function RealBugs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="bugs" className="py-24 bg-[#0D1220]" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            War Stories
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Real Bugs I <span className="text-gradient">Found</span>
          </h2>
          <p className="mt-4 text-gray-400 max-w-2xl mx-auto">
            Not textbook examples. These are real failure patterns I uncovered
            in production-grade distributed systems.
          </p>
        </motion.div>

        {/* Bug Cards */}
        <div className="space-y-8">
          {bugStories.map((bug, i) => (
            <motion.div
              key={bug.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-[#161D2F] border border-[#1F2A3C] rounded-2xl overflow-hidden card-hover"
            >
              {/* Header Strip */}
              <div className="px-6 py-4 border-b border-[#1F2A3C] flex flex-wrap items-center gap-3 justify-between">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs text-gray-500">{bug.id}</span>
                  <span
                    className="text-xs font-bold px-2.5 py-1 rounded-full"
                    style={{
                      color: bug.severityColor,
                      backgroundColor: `${bug.severityColor}15`,
                      border: `1px solid ${bug.severityColor}30`,
                    }}
                  >
                    {bug.severity}
                  </span>
                  <span className="text-xs text-gray-500">{bug.system}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {bug.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-0.5 rounded bg-[#0B0F19] border border-[#1F2A3C] text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Body */}
              <div className="p-6">
                <h3 className="text-white font-bold text-xl mb-4">{bug.title}</h3>

                <div className="space-y-4">
                  <div>
                    <div className="text-[#00FFD1] text-xs font-mono mb-1.5 uppercase tracking-widest">
                      The Story
                    </div>
                    <p className="text-gray-300 leading-relaxed">{bug.story}</p>
                  </div>

                  <div>
                    <div className="text-[#00B4D8] text-xs font-mono mb-1.5 uppercase tracking-widest">
                      How I Found It
                    </div>
                    <p className="text-gray-300 leading-relaxed">{bug.how}</p>
                  </div>

                  <div>
                    <div className="text-[#10B981] text-xs font-mono mb-1.5 uppercase tracking-widest">
                      Impact Prevented
                    </div>
                    <p className="text-gray-300 leading-relaxed">{bug.impact}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
