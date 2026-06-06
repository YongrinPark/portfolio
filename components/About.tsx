"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

const focusAreas = [
  "Data Science",
  "Quantitative Finance",
  "Optimization",
  "Simulation",
  "Risk Analysis",
  "Trading Systems",
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About Me" />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-gray-600 leading-relaxed"
          >
            <p>
              I am an Industrial Engineering student at the{" "}
              <span className="font-medium text-gray-900">
                University of Illinois Urbana-Champaign
              </span>{" "}
              with a strong interest in data-driven decision-making, quantitative finance,
              optimization, and simulation. My academic background combines engineering,
              statistics, programming, and operations research.
            </p>
            <p>
              I enjoy building practical projects that model complex systems, analyze uncertainty,
              and translate data into actionable insights. Recently, I have worked on projects
              involving portfolio risk simulation, financial data analysis, time-series
              forecasting, and market microstructure.
            </p>
          </motion.div>

          {/* Right: focus areas card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="bg-gray-50 border border-gray-200 rounded-2xl p-6 shadow-sm">
              <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-widest mb-5">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                {focusAreas.map((area) => (
                  <li key={area} className="flex items-center gap-3 text-gray-700">
                    <CheckCircle2 size={16} className="text-blue-500 flex-shrink-0" />
                    <span className="text-sm font-medium">{area}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
