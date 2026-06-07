export type Category = "datascience" | "financial";

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
    tech: ["Python", "Data Structures", "Trading Systems", "Market Microstructure", "Parquet"],
    projectUrl: "#",
    githubUrl: "https://github.com/YongrinPark/lob-simulator",
    categories: ["financial"],
    variants: {
      financial: {
        description:
          "Engineered a price-time priority matching engine simulating real exchange mechanics — modeling limit/market order flow, trade execution, and market-making strategies to study trading system dynamics and market microstructure.",
        features: [
          "Price-time priority order matching replicating exchange logic",
          "Bid-ask spread and order book depth simulation",
          "Market-making agent with latency-aware execution",
          "Trade and quote event log generation",
          "Parquet-based tick data storage for post-trade analysis",
        ],
      },
    },
  },
  {
    title: "Real-Time Portfolio VaR Monitoring System",
    period: "January 2026 – May 2026",
    tech: ["Python", "Pandas", "NumPy", "Monte Carlo", "Plotly/Dash", "Risk Management"],
    projectUrl: "https://github.com/YongrinPark/Real-Time-Portfolio-VaR-Monitoring-System-Balancing-Computational-Speed-and-Risk-Accuracy",
    githubUrl: "https://github.com/YongrinPark/Real-Time-Portfolio-VaR-Monitoring-System-Balancing-Computational-Speed-and-Risk-Accuracy",
    categories: ["datascience", "financial"],
    variants: {
      financial: {
        description:
          "Built a near real-time risk monitoring system computing 95%/99% VaR at 1-minute intervals across a five-asset portfolio, benchmarking parametric, EWMA, and Monte Carlo risk models with Kupiec backtesting to validate model calibration.",
        features: [
          "Real-time VaR updates at 1-minute intervals via intraday data replay",
          "Benchmarked rolling covariance, EWMA, and Monte Carlo GBM models",
          "Kupiec test backtesting across 498 observations (7 breaches)",
          "Sub-millisecond parametric VaR computation",
          "Live risk dashboard with exceedance visualization (Plotly/Dash)",
        ],
      },
      datascience: {
        description:
          "Developed an end-to-end risk simulation pipeline using rolling covariance estimation, Monte Carlo GBM simulation, and statistical hypothesis testing to quantify model accuracy and latency trade-offs across multiple VaR methodologies.",
        features: [
          "Monte Carlo GBM simulation for portfolio return paths",
          "Rolling and EWMA covariance matrix estimation",
          "Statistical backtesting via Kupiec likelihood-ratio test",
          "Model benchmarking framework across three VaR methods",
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
    categories: ["datascience", "financial"],
    variants: {
      financial: {
        description:
          "Developed a quantitative energy price forecasting framework on 25,000+ hourly observations, benchmarking statistical and deep learning models to support operational decision-making in energy markets with an 18% RMSE reduction.",
        features: [
          "Energy market price modeling with demand-supply signal integration",
          "Exogenous feature engineering for market condition encoding",
          "Quantitative benchmarking of Ridge, FFNN, LSTM, and GRU models",
          "Operational decision support through forecast-driven demand planning",
          "18% RMSE reduction improving market position estimation",
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
    categories: ["datascience"],
    variants: {
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
