export interface Project {
  title: string;
  period: string;
  description: string;
  features: string[];
  tech: string[];
  projectUrl: string;
  githubUrl: string;
}

export const projects: Project[] = [
  {
    title: "Limit Order Book Simulator",
    period: "March 2026 – June 2026",
    description:
      "Built a price-time priority matching engine that processes limit and market orders, generates trade logs, and simulates basic market-making behavior.",
    features: [
      "Price-time priority matching logic",
      "Limit and market order processing",
      "Trade and quote event generation",
      "Market-making agent simulation",
      "Latency-aware order processing structure",
    ],
    tech: ["Python", "Data Structures", "Trading Systems", "Market Microstructure", "Parquet"],
    projectUrl: "#", // TODO: Replace with your project demo URL
    githubUrl: "https://github.com/YongrinPark", // TODO: Replace with specific repo URL
  },
  {
    title: "Real-Time Portfolio VaR Monitoring System",
    period: "January 2026 – May 2026",
    description:
      "Developed a near real-time portfolio Value-at-Risk (VaR) monitoring system for a five-asset portfolio, updating 95% and 99% VaR estimates at 1-minute intervals using intraday market data replay.",
    features: [
      "Benchmarked rolling covariance, EWMA, and Monte Carlo GBM VaR models",
      "Quantified latency–accuracy trade-offs with sub-millisecond parametric VaR computation",
      "Backtested VaR using the Kupiec test across 498 observations (7 breaches)",
      "Visualized exceedances in a real-time Plotly/Dash dashboard",
    ],
    tech: ["Python", "Pandas", "NumPy", "Monte Carlo", "Plotly/Dash", "Risk Management"],
    projectUrl: "#", // TODO: Replace with your project demo URL
    githubUrl: "https://github.com/YongrinPark", // TODO: Replace with specific repo URL
  },
  {
    title: "Electricity Price Forecasting & Model Evaluation",
    period: "September 2025 – December 2025",
    description:
      "Architected an end-to-end forecasting framework on 25,000+ hourly observations, benchmarking Ridge Regression, FFNN, LSTM, and GRU with expanding-window validation.",
    features: [
      "Engineered 20+ temporal and exogenous features for improved signal quality",
      "Led 50+ controlled experiments with systematic hyperparameter tuning",
      "Reduced RMSE by 18% through rigorous error analysis and model selection",
      "Translated prediction outputs into operational demand planning decisions",
    ],
    tech: ["Python", "PyTorch", "LSTM", "GRU", "Time Series", "Scikit-learn", "Pandas"],
    projectUrl: "#", // TODO: Replace with your project demo URL
    githubUrl: "https://github.com/YongrinPark", // TODO: Replace with specific repo URL
  },
  {
    title: "UPS Staff Demand Analysis & Scheduling Tool",
    period: "August 2024 – December 2024",
    description:
      "Built a mathematical staffing optimization model for UPS's Ocean Products management by forecasting monthly labor demand under uncertainty.",
    features: [
      "Forecasted monthly labor demand using time-series and demand modeling",
      "Conducted time studies from UPS operational videos to derive quantitative parameters",
      "Optimized labor allocation achieving 20%+ improvement in work performance",
      "Reduced operational cost by more than 15% through systematic scheduling",
    ],
    tech: ["Python", "Optimization", "Forecasting", "Operations Research", "Linear Programming"],
    projectUrl: "#", // TODO: Replace with your project demo URL
    githubUrl: "https://github.com/YongrinPark", // TODO: Replace with specific repo URL
  },
  {
    title: "NLP Models for Cyberbullying Detection",
    period: "September 2023 – March 2024",
    description:
      "Conducted research on detecting cyberbullying in social media comments using transformer-based NLP models, classifying aggressive language from labeled datasets while leading a team of three.",
    features: [
      "Fine-tuned BERT, RoBERTa, and XLNet on labeled cyberbullying datasets",
      "Applied under-sampling techniques to address dataset class imbalance",
      "Identified RoBERTa as the most effective model for harmful content classification",
      "Selected as a presenter at the MRC conference to present research findings",
    ],
    tech: ["Python", "BERT", "RoBERTa", "XLNet", "NLP", "Hugging Face", "PyTorch"],
    projectUrl: "#", // TODO: Replace with your project demo URL
    githubUrl: "https://github.com/YongrinPark", // TODO: Replace with specific repo URL
  },
];
