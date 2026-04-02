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
    <section id="contact" className="py-20 bg-[#0B0F19]" ref={ref}>
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#00FFD1] font-mono text-xs tracking-widest uppercase">
            Contact
          </span>
          <h2 className="mt-3 text-2xl sm:text-3xl font-bold text-white">
            Let&apos;s Build Systems That Don&apos;t Fail in Production
          </h2>
          <p className="mt-4 text-gray-400 text-base leading-relaxed">
            Available for senior engineering roles, QA architecture consulting, and training partnerships.
          </p>
        </motion.div>

        {/* Contact rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mb-8"
        >
          <div className="flex items-center justify-between gap-4 py-4 border-b border-[#1F2A3C]">
            <div>
              <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">Email</div>
              <a
                href={`mailto:${email}`}
                className="text-[#00FFD1] text-sm font-medium hover:underline underline-offset-4"
              >
                {email}
              </a>
            </div>
            <button
              onClick={handleCopy}
              className="text-xs text-gray-500 hover:text-[#00FFD1] transition-colors border border-[#1F2A3C] hover:border-[#00FFD1]/30 px-3 py-1.5 rounded-md"
            >
              {copied ? "Copied" : "Copy"}
            </button>
          </div>

          <div className="py-4 border-b border-[#1F2A3C]">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">LinkedIn</div>
            <a
              href="https://www.linkedin.com/in/kmsalmanrahman/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-sm font-medium hover:text-white hover:underline underline-offset-4"
            >
              linkedin.com/in/kmsalmanrahman
            </a>
          </div>

          <div className="py-4 border-b border-[#1F2A3C]">
            <div className="text-gray-500 text-xs font-mono uppercase tracking-widest mb-1">Platform</div>
            <a
              href="https://roadtosdet.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 text-sm font-medium hover:text-white hover:underline underline-offset-4"
            >
              roadtosdet.com
            </a>
          </div>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href={`mailto:${email}`}
            className="px-7 py-3 bg-[#00FFD1] text-[#0B0F19] font-semibold rounded-lg hover:bg-[#00e6bb] transition-colors text-center text-sm"
          >
            Send an Email
          </a>
          <a
            href="https://www.linkedin.com/in/kmsalmanrahman/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-7 py-3 border border-[#1F2A3C] text-gray-300 font-medium rounded-lg hover:border-[#00FFD1]/50 hover:text-white transition-colors text-center text-sm"
          >
            Connect on LinkedIn
          </a>
        </motion.div>
      </div>
    </section>
  );
}
