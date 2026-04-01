"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.7, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,255,209,1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,255,209,1) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(0,255,209,0.06)_0%,transparent_60%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(0,180,216,0.06)_0%,transparent_60%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Badge */}
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#00FFD1]/30 bg-[#00FFD1]/5 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-[#00FFD1] animate-pulse" />
              <span className="text-[#00FFD1] text-sm font-medium">
                Senior SDET and Founder, building reliable systems and engineers
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4"
            >
              Building{" "}
              <span className="text-gradient">Reliable Systems</span>
              <br />
              at Scale{" "}
              <span className="text-gray-500">—</span>{" "}
              Not Just Testing Features
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#00FFD1] text-lg sm:text-xl font-semibold mb-4"
            >
              Senior SDET · AI-Driven QA · 10+ Years Experience · Founder
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-8 py-3.5 bg-[#00FFD1] text-[#0B0F19] font-bold rounded-lg hover:bg-[#00e6bb] transition-all duration-200 glow-accent-sm text-center"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border border-[#00FFD1]/50 text-[#00FFD1] font-semibold rounded-lg hover:bg-[#00FFD1]/10 hover:border-[#00FFD1] transition-all duration-200 text-center"
              >
                Contact Me
              </a>
            </motion.div>

            {/* Stats Row */}
            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start"
            >
              {[
                { value: "10+", label: "Years Experience" },
                { value: "5+", label: "Distributed Systems Tested" },
                { value: "1000+", label: "Students Mentored" },
              ].map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="text-2xl font-extrabold text-gradient">
                    {stat.value}
                  </div>
                  <div className="text-gray-500 text-sm mt-0.5">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative flex flex-col items-center">
              {/* Outer glow ring */}
              <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-[#00FFD1] to-[#00B4D8] opacity-20 blur-xl pointer-events-none" />
              {/* Gradient border */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full p-[3px] bg-gradient-to-br from-[#00FFD1] to-[#00B4D8]">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#161D2F]">
                  {!imgError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Salman - Senior SDET"
                      width={288}
                      height={288}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    /* Fallback avatar */
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#161D2F] to-[#0B0F19]">
                      <span className="text-6xl font-extrabold text-gradient">
                        S
                      </span>
                      <span className="text-[#00FFD1] text-xs mt-1 font-mono">
                        SDET
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Info card — overlaps bottom of profile image */}
              <div className="relative -mt-8 z-10 w-64 sm:w-72 bg-[#161D2F] border border-[#1F2A3C] rounded-2xl px-5 py-4 text-center glow-accent-sm">
                {/* Top accent line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 h-0.5 rounded-full bg-gradient-to-r from-[#00FFD1] to-[#00B4D8]" />
                <p className="text-white font-bold text-base">Salman Rahman</p>
                <p className="text-[#00FFD1] text-xs font-semibold mt-0.5">ISTQB Certified Test Engineer</p>
                <p className="text-gray-300 text-xs mt-1">Senior Software Engineer (QA)</p>
                <p className="text-gray-400 text-xs">Cefalo Bangladesh Ltd.</p>
                <div className="mt-2 border-t border-[#1F2A3C] pt-2 text-xs text-gray-400">
                  Founder,{" "}
                  <a
                    href="https://roadtocareer.net"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#00FFD1] hover:underline font-medium"
                  >
                    Road to Career
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-gray-600 text-xs font-mono">scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-[#00FFD1]/70 to-transparent"
        />
      </motion.div>
    </section>
  );
}
