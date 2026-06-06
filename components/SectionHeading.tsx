"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeading({ title, subtitle }: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-12 text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-3xl font-bold text-gray-900 tracking-tight">{title}</h2>
      {subtitle && (
        <p className="mt-3 text-base text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
      )}
      <div className="mt-4 mx-auto w-12 h-0.5 bg-blue-600 rounded-full" />
    </motion.div>
  );
}
