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
      "Adjusted memory eye values by tuning ODT registers to stabilize signal margins between Samsung DDR5 SODIMM and Intel/AMD boards, optimizing system performance and improving compatibility by 10%.",
      "Investigated the impact of ODT register values on memory eye margins in new models to identify optimal settings that enhanced next-generation product performance utilizing Python and Bayesian method.",
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
