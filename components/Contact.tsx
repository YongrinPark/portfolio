"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./icons/SocialIcons";
import SectionHeading from "./SectionHeading";

interface ContactLink {
  label: string;
  href: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  icon: any;
  description: string;
}

const contactLinks: ContactLink[] = [
  {
    label: "Email",
    // TODO: Replace with your actual email address
    href: "mailto:yongrin2@illinois.edu",
    icon: Mail,
    description: "yongrin2@illinois.edu",
  },
  {
    label: "LinkedIn",
    // TODO: Replace with your actual LinkedIn profile URL
    href: "https://www.linkedin.com/in/yongrin-park-61498026b/",
    icon: LinkedinIcon,
    description: "linkedin.com/in/yongrin-park",
  },
  {
    label: "GitHub",
    // TODO: Replace with your actual GitHub profile URL
    href: "https://github.com/YongrinPark",
    icon: GithubIcon,
    description: "github.com/YongrinPark",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-slate-50">
      <div className="max-w-4xl mx-auto">
        <SectionHeading title="Let's Connect" />

        <motion.p
          className="text-center text-gray-600 mb-12 max-w-xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          I am open to internship opportunities, research collaboration, and technical project
          discussions. Feel free to reach out if you would like to connect.
        </motion.p>

        <div className="grid sm:grid-cols-3 gap-5">
          {contactLinks.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                target={item.label !== "Email" ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="flex flex-col items-center gap-4 p-6 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md hover:border-blue-200 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                  <Icon
                    size={22}
                    width={22}
                    height={22}
                    className="text-blue-600"
                  />
                </div>
                <div className="text-center">
                  <p className="text-sm font-semibold text-gray-900">{item.label}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
