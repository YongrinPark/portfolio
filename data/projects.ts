export type Category = "datascience" | "manufacturing";

export interface CategoryVariant {
  description: string;
  features: string[];
}

export interface Project {
  title: string;
  period: string;
  tech: string[];
  projectUrl: string;
  githubUrl: string;
  categories: Category[];
  variants: Partial<Record<Category, CategoryVariant>>;
}

export const projects: Project[] = [
  {
    title: "Limit Order Book Simulator",
    period: "March 2026 – June 2026",
    tech: ["Python", "Data Structures", "Discrete-Event Simulation", "Queueing Theory", "Parquet"],
    projectUrl: "https://github.com/YongrinPark/lob-simulator",
    githubUrl: "https://github.com/YongrinPark/lob-simulator",
    categories: ["manufacturing"],
    variants: {
      manufacturing: {
        description:
          "Engineered a discrete-event simulation engine modeling price-time priority queuing and high-throughput transaction processing — applying queueing theory and event-driven simulation techniques directly transferable to production line scheduling and process flow modeling.",
        features: [
          "Price-time priority queue processing replicating high-throughput system logic",
          "Discrete-event simulation of arrival flow and queue depth",
          "Latency-aware agent modeling for throughput and capacity analysis",
          "Event log generation for process trace and audit analysis",
          "Parquet-based data storage for post-process analysis",
        ],
      },
    },
  },
  {
    title: "Real-Time Portfolio VaR Monitoring System",
    period: "January 2026 – May 2026",
    tech: ["Python", "Pandas", "NumPy", "Monte Carlo", "Plotly/Dash", "Statistical Process Control"],
    projectUrl: "https://github.com/YongrinPark/Real-Time-Portfolio-VaR-Monitoring-System-Balancing-Computational-Speed-and-Risk-Accuracy",
    githubUrl: "https://github.com/YongrinPark/Real-Time-Portfolio-VaR-Monitoring-System-Balancing-Computational-Speed-and-Risk-Accuracy",
    categories: ["datascience", "manufacturing"],
    variants: {
      manufacturing: {
        description:
          "Built a near real-time statistical process monitoring system computing dynamic control limits at 1-minute intervals across a five-metric process, benchmarking parametric, EWMA, and Monte Carlo models with violation-rate backtesting to validate control-limit calibration.",
        features: [
          "Real-time control-limit updates at 1-minute intervals via streaming data replay",
          "Benchmarked rolling covariance, EWMA, and Monte Carlo simulation models for limit estimation",
          "Statistical backtesting across 498 observations (7 out-of-control violations) to validate calibration",
          "Sub-millisecond control-limit computation for high-frequency monitoring",
          "Live process monitoring dashboard with violation/exceedance visualization (Plotly/Dash)",
        ],
      },
      datascience: {
        description:
          "Developed an end-to-end statistical monitoring pipeline using rolling covariance estimation, Monte Carlo simulation, and hypothesis testing to quantify model accuracy and latency trade-offs across multiple control-limit methodologies.",
        features: [
          "Monte Carlo simulation for process/return path generation",
          "Rolling and EWMA covariance matrix estimation",
          "Statistical backtesting via Kupiec likelihood-ratio test",
          "Model benchmarking framework across three control-limit methods",
          "Real-time Plotly/Dash dashboard for exceedance monitoring",
        ],
      },
    },
  },
  {
    title: "Electricity Price Forecasting & Model Evaluation",
    period: "September 2025 – December 2025",
    tech: ["Python", "PyTorch", "LSTM", "GRU", "Time Series", "Scikit-learn", "Pandas"],
    projectUrl: "https://github.com/YongrinPark/IE434-Deep-Dive-Project",
    githubUrl: "https://github.com/YongrinPark/IE434-Deep-Dive-Project",
    categories: ["datascience", "manufacturing"],
    variants: {
      manufacturing: {
        description:
          "Developed a quantitative demand forecasting framework on 25,000+ hourly observations, benchmarking statistical and deep learning models to support operational and capacity planning decisions, achieving an 18% RMSE reduction.",
        features: [
          "Demand/capacity signal modeling with supply-demand feature integration",
          "Exogenous feature engineering for operating-condition encoding",
          "Quantitative benchmarking of Ridge, FFNN, LSTM, and GRU models",
          "Operational decision support through forecast-driven capacity planning",
          "18% RMSE reduction improving demand estimation accuracy",
        ],
      },
      datascience: {
        description:
          "Architected an end-to-end ML forecasting pipeline benchmarking Ridge Regression, FFNN, LSTM, and GRU on 25,000+ hourly observations, with expanding-window validation, systematic hyperparameter tuning, and 18% RMSE improvement.",
        features: [
          "Deep learning models: LSTM, GRU, FFNN with PyTorch",
          "20+ temporal and exogenous feature engineering",
          "50+ controlled experiments with systematic hyperparameter search",
          "Expanding-window cross-validation for robust out-of-sample evaluation",
          "18% RMSE reduction through rigorous error analysis",
        ],
      },
    },
  },
  {
    title: "UPS Staff Demand Analysis & Scheduling Tool",
    period: "August 2024 – December 2024",
    tech: ["Python", "Optimization", "Forecasting", "Operations Research", "Linear Programming"],
    projectUrl: "/ups-report.pdf",
    githubUrl: "https://github.com/YongrinPark",
    categories: ["datascience", "manufacturing"],
    variants: {
      manufacturing: {
        description:
          "Built a data-driven staffing and process optimization model for UPS Ocean Products, combining demand forecasting, time-motion study analysis, and mathematical optimization to reduce operational costs by 15%+ and improve labor efficiency by 20%+.",
        features: [
          "Time-motion study data extraction and quantification from process videos",
          "Demand forecasting under operational uncertainty to drive staffing plans",
          "Linear programming model for labor allocation and shift scheduling",
          "20%+ improvement in process throughput through optimized scheduling",
          "15%+ cost reduction via systematic, data-driven staffing decisions",
        ],
      },
      datascience: {
        description:
          "Built a data-driven staffing optimization model for UPS Ocean Products, integrating demand forecasting with mathematical optimization to reduce operational costs by 15%+ and improve labor efficiency by 20%+.",
        features: [
          "Demand time-series forecasting under operational uncertainty",
          "Time study data extraction and quantification from process videos",
          "Mathematical linear programming model for labor allocation",
          "20%+ improvement in work performance through optimized scheduling",
          "15%+ cost reduction via systematic demand-driven staffing",
        ],
      },
    },
  },
  {
    title: "NLP Models for Cyberbullying Detection",
    period: "September 2023 – March 2024",
    tech: ["Python", "BERT", "RoBERTa", "XLNet", "NLP", "Hugging Face", "PyTorch"],
    projectUrl: "/nlp-report.pdf",
    githubUrl: "https://github.com/YongrinPark",
    categories: ["datascience"],
    variants: {
      datascience: {
        description:
          "Fine-tuned BERT, RoBERTa, and XLNet transformer models for cyberbullying detection in social media text, applying class imbalance correction and comparative evaluation. Identified RoBERTa as the top performer and presented findings at the MRC conference.",
        features: [
          "Transformer fine-tuning: BERT, RoBERTa, XLNet (Hugging Face)",
          "Class imbalance correction via under-sampling strategy",
          "Binary classification on labeled social media comment datasets",
          "Comparative model evaluation across three architectures",
          "Selected presenter at MRC conference — RoBERTa identified as best model",
        ],
      },
    },
  },
];
