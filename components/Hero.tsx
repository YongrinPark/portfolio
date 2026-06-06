"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, ChevronRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";

export default function Hero() {
  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center pt-20 pb-16 px-6 bg-gradient-to-br from-slate-50 via-white to-blue-50/30"
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-16">
          {/* Text content */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.p
              className="text-sm font-semibold text-blue-600 tracking-widest uppercase mb-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              Industrial Engineering · UIUC
            </motion.p>

            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-900 tracking-tight leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-blue-600">David (Yongrin) Park.</span>
            </motion.h1>

            <motion.p
              className="mt-5 text-xl text-gray-600 leading-relaxed max-w-2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              I&apos;m an Industrial Engineering student at UIUC interested in{" "}
              <span className="text-gray-800 font-medium">data science</span>,{" "}
              <span className="text-gray-800 font-medium">quantitative finance</span>,{" "}
              <span className="text-gray-800 font-medium">optimization</span>, and{" "}
              <span className="text-gray-800 font-medium">simulation</span>.
            </motion.p>

            <motion.p
              className="mt-3 text-base text-gray-500"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              I build projects that turn complex systems into measurable, data-driven insights.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap gap-3 justify-center md:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <button
                onClick={scrollToProjects}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors shadow-sm"
              >
                View Projects
                <ChevronRight size={16} />
              </button>

              {/* TODO: Replace /resume.pdf with the actual path to your resume file */}
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
              >
                <FileText size={16} />
                Resume
              </a>

              {/* TODO: Replace with your actual GitHub URL */}
              <a
                href="https://github.com/YongrinPark"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
              >
                <GithubIcon width={16} height={16} />
                GitHub
              </a>

              {/* TODO: Replace with your actual LinkedIn URL */}
              <a
                href="https://www.linkedin.com/in/yongrin-park-61498026b/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-gray-700 text-sm font-medium rounded-lg border border-gray-300 hover:border-blue-400 hover:text-blue-600 transition-colors shadow-sm"
              >
                <LinkedinIcon width={16} height={16} />
                LinkedIn
              </a>
            </motion.div>
          </motion.div>

          {/* Profile card */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative">
              {/* Outer glow */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-200 to-slate-200 blur-xl opacity-40 scale-110" />

              {/* Rounded square container */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-2xl bg-white border border-gray-200 shadow-2xl overflow-hidden">
                <Image
                  src="/profile.png"
                  alt="David (Yongrin) Park"
                  fill
                  className="object-cover object-top scale-110"
                  style={{ mixBlendMode: "multiply" }}
                  priority
                />
              </div>

              {/* Label badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white border border-gray-200 rounded-full px-4 py-1.5 shadow-md whitespace-nowrap">
                <span className="text-xs font-medium text-gray-600">
                  IE · Data Science · Quant Finance
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
