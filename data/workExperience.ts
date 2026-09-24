export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const workExperiences: WorkExperience[] = [
  {
    company: "Intelligent Manufacturing and Thermal Systems Laboratory",
    role: "Graduate Student Researcher",
    period: "July 2026 – Present",
    bullets: [
      "Operating VR-6000 optical metrology equipment to acquire high-resolution surface height and texture data from 3D-printed parts for defect characterization, manufacturing quality assessment, and production-source identification.",
      "Developing machine-learning and pattern-recognition methods to identify defect signatures and production-source variation, supporting data-driven failure analysis, quality diagnostics, and root-cause investigation.",
    ],
  },
  {
    company: "Enterprise Systems Optimization Lab",
    role: "Graduate Student Researcher",
    period: "June 2026 – Present",
    bullets: [
      "Analyzed large-scale customer-review data to identify recurring product issues, unmet needs, and feature-level patterns, translating qualitative feedback into structured engineering insights.",
      "Evaluated review-labeling and subfeature-classification methods for consistency and coverage, identifying gaps in predefined categories and limitations in capturing emerging customer requirements.",
      "Designed an adaptive classification framework to systematically categorize newly identified product issues and customer requests, supporting more consistent analysis and product-improvement decisions.",
    ],
  },
  {
    company: "Samsung Electronics",
    role: "DRAM Application Engineer Intern",
    period: "June 2024 – August 2024",
    bullets: [
      "Improved DDR5 SODIMM compatibility with Intel and AMD platforms by 10% by developing a Python-based automated tuning pipeline in a Linux/UNIX environment that applied Bayesian optimization across a high-dimensional ODT register parameter space.",
      "Reduced signal instability in next-generation memory modules by engineering a structured data analysis framework — scripting validation routines in Bash and Python — to model the relationship between register values and memory eye margins, with findings adopted into product release specs.",
      "Accelerated hardware validation throughput across 3 board configurations by building automated data pipelines to capture, triage, and trace signal integrity measurements, improving data reliability and cross-team traceability.",
    ],
  },
  {
    company: "Industrial & Mathematical Data Research Center, Seoul National University",
    role: "Topological Data Analytics Researcher",
    period: "June 2023 – August 2023",
    bullets: [
      "Collected and preprocessed over 50,000 tabular data sets on students' academic records and socio-economic backgrounds to prepare for large-scale structural analysis.",
      "Modeled tabular data as a high-dimensional point cloud using Topological Data Analysis (TDA) to uncover noise-robust global structures and relationships between background factors and academic performance.",
      "Combined TDA with density-based clustering to extract interpretable topological features, revealing recurring socio-economic patterns linked to distinct performance trends.",
    ],
  },
];
