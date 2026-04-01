"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [copied, setCopied] = useState(false);

  const email = "salman@roadtocareer.net";

  const handleCopy = () => {
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <section id="contact" className="py-28 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[#00FFD1] font-mono text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold text-white">
            Let&apos;s Build{" "}
            <span className="text-gradient">Systems</span> That Don’t Fail in Production
          </h2>
          <p className="mt-4 text-gray-400 max-w-xl mx-auto text-lg">
            Whether you need a Senior SDET, QA Architect, or a partner to bring
            quality discipline to your engineering culture — I&apos;m ready.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-[#161D2F] border border-[#1F2A3C] rounded-3xl p-8 sm:p-12"
        >
          {/* CTA Headline */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-10">
            <div className="w-16 h-16 rounded-2xl bg-[#00FFD1]/10 border border-[#00FFD1]/20 flex items-center justify-center flex-shrink-0">
              <span className="text-2xl">🤝</span>
            </div>
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                Open to Opportunities
              </h3>
              <p className="text-gray-400 text-sm">
                Career Guidelines · QA Consulting · Training Partnerships
              </p>
            </div>
          </div>

          {/* Contact Options */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {/* Email */}
            <div className="bg-[#0B0F19] border border-[#1F2A3C] rounded-2xl p-5 group hover:border-[#00FFD1]/40 transition-colors">
              <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-widest">
                Email
              </div>
              <div className="flex items-center justify-between gap-4">
                <a
                  href={`mailto:${email}`}
                  className="text-[#00FFD1] font-semibold hover:underline underline-offset-4 truncate"
                >
                  {email}
                </a>
                <button
                  onClick={handleCopy}
                  className="text-xs text-gray-500 hover:text-[#00FFD1] transition-colors flex-shrink-0 border border-[#1F2A3C] hover:border-[#00FFD1]/40 px-3 py-1 rounded-lg"
                >
                  {copied ? "Copied!" : "Copy"}
                </button>
              </div>
            </div>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/kmsalmanrahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#0B0F19] border border-[#1F2A3C] rounded-2xl p-5 group hover:border-[#00B4D8]/40 transition-colors block"
            >
              <div className="text-gray-500 text-xs font-mono mb-2 uppercase tracking-widest">
                LinkedIn
              </div>
              <div className="text-[#00B4D8] font-semibold group-hover:underline underline-offset-4">
                linkedin.com/in/kmsalmanrahman
              </div>
            </a>
          </div>

          {/* Main CTA */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`mailto:${email}`}
              className="px-10 py-4 bg-[#00FFD1] text-[#0B0F19] font-bold rounded-xl hover:bg-[#00e6bb] transition-all glow-accent text-center text-lg"
            >
              Send Me an Email
            </a>
            <a
              href="https://www.linkedin.com/in/kmsalmanrahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-4 border border-[#00FFD1]/50 text-[#00FFD1] font-semibold rounded-xl hover:bg-[#00FFD1]/10 hover:border-[#00FFD1] transition-all text-center text-lg"
            >
              Connect on LinkedIn
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
