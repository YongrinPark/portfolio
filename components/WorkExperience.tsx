"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { workExperiences } from "@/data/workExperience";

export default function WorkExperience() {
  return (
    <section id="experience" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Work Experience" />

        <div className="relative">
          {/* Vertical timeline line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gray-200 hidden sm:block" />

          <div className="space-y-8">
            {workExperiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                className="relative sm:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-3.5 top-4 w-3 h-3 rounded-full bg-blue-500 border-2 border-white shadow-sm hidden sm:block" />

                <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <Briefcase size={14} className="text-blue-500 flex-shrink-0" />
                        <span className="text-xs font-semibold text-blue-600 uppercase tracking-widest">
                          {exp.role}
                        </span>
                      </div>
                      <h3 className="text-base font-semibold text-gray-900">{exp.company}</h3>
                    </div>
                    <div className="flex items-center gap-1.5 text-xs text-gray-400 whitespace-nowrap">
                      <Calendar size={12} />
                      {exp.period}
                    </div>
                  </div>

                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-300 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
