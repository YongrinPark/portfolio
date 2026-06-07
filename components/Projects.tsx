"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ChevronRight, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { projects, Category } from "@/data/projects";

const tabs: { label: string; value: Category; description: string }[] = [
  {
    label: "Data Science",
    value: "datascience",
    description: "ML, forecasting, NLP, and data-driven optimization projects.",
  },
  {
    label: "Quantitative Finance",
    value: "financial",
    description: "Risk modeling, trading systems, and financial market projects.",
  },
];

export default function Projects() {
  const [activeTab, setActiveTab] = useState<Category>("datascience");

  const filtered = projects.filter((p) => p.categories.includes(activeTab));

  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Selected Projects"
          subtitle="A collection of technical projects focused on data, finance, simulation, and decision-making systems."
        />

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex bg-gray-100 rounded-xl p-1 gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.value}
                onClick={() => setActiveTab(tab.value)}
                className={`relative px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.value
                    ? "text-white"
                    : "text-gray-500 hover:text-gray-800"
                }`}
              >
                {activeTab === tab.value && (
                  <motion.div
                    layoutId="tab-indicator"
                    className="absolute inset-0 bg-blue-600 rounded-lg shadow-sm"
                    transition={{ type: "spring", duration: 0.4 }}
                  />
                )}
                <span className="relative z-10">{tab.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Subtitle for active tab */}
        <motion.p
          key={activeTab}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center text-sm text-gray-400 mb-8 -mt-4"
        >
          {tabs.find((t) => t.value === activeTab)?.description}
        </motion.p>

        {/* Project cards */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => {
              const variant = project.variants[activeTab]!;
              return (
                <motion.div
                  key={project.title + activeTab}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.08 }}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow flex flex-col"
                >
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <h3 className="text-base font-semibold text-gray-900 leading-snug">
                        {project.title}
                      </h3>
                      {project.period && (
                        <span className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap mt-0.5 flex-shrink-0">
                          <Calendar size={11} />
                          {project.period}
                        </span>
                      )}
                    </div>

                    <p className="text-sm text-gray-600 leading-relaxed mb-4">
                      {variant.description}
                    </p>

                    <div className="mb-5">
                      <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-2">
                        Key Features
                      </p>
                      <ul className="space-y-1">
                        {variant.features.map((f) => (
                          <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                            <ChevronRight size={14} className="text-blue-400 flex-shrink-0 mt-0.5" />
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-1.5 mb-5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-0.5 text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 rounded-full"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-3 pt-2 border-t border-gray-100">
                    <a
                      href={project.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors"
                    >
                      <ExternalLink size={14} />
                      View Project
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
