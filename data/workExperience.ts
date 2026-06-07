export interface WorkExperience {
  company: string;
  role: string;
  period: string;
  bullets: string[];
}

export const workExperiences: WorkExperience[] = [
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
