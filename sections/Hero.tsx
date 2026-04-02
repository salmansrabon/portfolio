"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.6, ease: "easeOut" as const },
  }),
};

export default function Hero() {
  const [imgError, setImgError] = useState(false);

  return (
    <section
      id="hero"
      className="relative flex items-center pt-24 pb-20"
    >

      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Role label */}
            <motion.p
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase mb-5"
            >
              Senior SDET &amp; Founder
            </motion.p>

            {/* Headline */}
            <motion.h1
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.15] mb-5 tracking-tight"
            >
              Building Reliable Systems at Scale
              <br />
              <span className="text-gray-400 font-normal">Not Just Testing Features</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-8 max-w-xl lg:mx-0 mx-auto"
            >
              Senior SDET and Founder, building reliable systems and engineers.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start"
            >
              <a
                href="#projects"
                className="px-7 py-3 bg-[#00FFD1] text-[#0B0F19] font-semibold rounded-lg hover:bg-[#00e6bb] transition-colors duration-200 text-center text-sm"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="px-7 py-3 border border-[#1F2A3C] text-gray-300 font-medium rounded-lg hover:border-[#00FFD1]/50 hover:text-white transition-colors duration-200 text-center text-sm"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Profile Image + Info Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
            className="flex-shrink-0 flex items-center justify-center"
          >
            <div className="relative pb-40">
              {/* Subtle border ring + image */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-[272px] lg:h-[272px] rounded-full p-[2px] bg-gradient-to-br from-[#00FFD1]/40 to-[#00B4D8]/20">
                <div className="w-full h-full rounded-full overflow-hidden bg-[#161D2F]">
                  {!imgError ? (
                    <Image
                      src="/profile.jpg"
                      alt="Salman Rahman — Senior SDET"
                      width={272}
                      height={272}
                      className="w-full h-full object-cover"
                      onError={() => setImgError(true)}
                      priority
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-[#161D2F]">
                      <span className="text-5xl font-bold text-[#00FFD1]">S</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Profile Info Card — overlaps bottom of image */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[calc(100%+32px)] bg-[#161D2F] border border-[#1F2A3C] rounded-3xl px-5 py-4 shadow-xl"
                style={{
                  background: "linear-gradient(145deg, #1a2236 0%, #161D2F 100%)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(0,255,209,0.08)",
                }}
              >
                {/* Name */}
                <p className="text-white font-bold text-sm text-center leading-snug tracking-wide">
                  K M Salman Rahman
                </p>

                {/* Certification badge */}
                <p className="text-[#00FFD1] text-[10px] text-center font-mono mt-1 tracking-widest uppercase">
                  ISTQB Certified Test Engineer
                </p>

                {/* Divider */}
                <div className="my-3 border-t border-[#1F2A3C]/80" />

                {/* Roles */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00FFD1] flex-shrink-0" />
                    <div>
                      <span className="text-gray-200 text-xs font-medium">Senior Software Engineer (SQA)</span>
                      <span className="text-gray-500 text-xs"> · Cefalo Bangladesh</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00B4D8] flex-shrink-0" />
                    <div>
                      <span className="text-gray-200 text-xs font-medium">Founder &amp; Instructor</span>
                      <span className="text-gray-500 text-xs"> · Road to SDET</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#7C3AED] flex-shrink-0" />
                    <div>
                      <span className="text-gray-200 text-xs font-medium">MSc in CSE</span>
                      <span className="text-gray-500 text-xs"> · Jahangirnagar University</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
