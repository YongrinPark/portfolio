"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";
import { interests } from "@/data/interests";

export default function Interests() {
  return (
    <section id="interests" className="py-24 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <SectionHeading
          title="Interests"
          subtitle="Areas I am currently exploring across engineering, data, finance, and technology."
        />

        <motion.div
          className="flex flex-wrap justify-center gap-3"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {interests.map((interest, i) => (
            <motion.span
              key={interest}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.04 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.15 } }}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-full hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200 transition-colors cursor-default"
            >
              {interest}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
