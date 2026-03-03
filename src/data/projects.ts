export interface ProjectDetail {
  slug: string;
  number: string;
  title: string;
  description: string;
  techStack: string;
  link?: string;
  github?: string;
  problem: string;
  approach: string;
  features: string[];
  techDetails: string[];
  learned: string;
  screenshots: { src: string; alt: string }[];
}

export const projects: ProjectDetail[] = [
  {
    slug: "ai-bot-detection-system",
    number: "01",
    title: "AI Bot Detection System",
    description:
      "ML-powered system to detect and classify bot traffic in real-time using behavioral analysis and pattern recognition",
    techStack: "Python, Scikit-learn, FastAPI",
    link: "https://perspective-ml.vercel.app",
    github: "https://github.com/princeekr/Perspective-ML",
    problem:
      "Websites face massive bot traffic that drains resources, skews analytics, and enables fraud. Traditional rule-based systems fail to catch sophisticated bots that mimic human behavior.",
    approach:
      "Built a multi-layer detection pipeline combining behavioral fingerprinting, mouse-movement analysis, and deep-learning classifiers trained on real traffic data. The system processes requests in real-time via a FastAPI backend.",
    features: [
      "Real-time behavioral analysis",
      "Mouse & keyboard pattern recognition",
      "Deep-learning traffic classifier",
      "Admin dashboard with live metrics",
      "REST API for third-party integration",
    ],
    techDetails: ["Python", "Scikit-learn", "FastAPI", "Railway", "Supabase", "React", "TypeScript"],
    learned:
      "Gained deep understanding of adversarial ML, feature engineering for behavioral data, and building low-latency inference pipelines that handle thousands of requests per second.",
    screenshots: [
      { src: "/pai-home.png", alt: "Home page" },
      { src: "/pai-admin.png", alt: "Admin dashboard" },
      { src: "/pai-analysis.png", alt: "Analysis page" },
    ],
  },
  {
    slug: "semantic-pdf-rag",
    number: "02",
    title: "SemanticPDF – RAG",
    description:
      "Full-stack Retrieval-Augmented Generation (RAG) system that allows users to upload PDFs and ask natural language questions grounded strictly in document context.",
    techStack: "Python, FastAPI, PyTorch",
    link: "https://github.com/princeekr/SemanticPDF---RAG", 
    github: "https://github.com/princeekr/SemanticPDF---RAG",
    problem:
      "Users often struggle to extract precise insights from lengthy documents. Traditional keyword search fails to capture semantic meaning, and generic LLMs hallucinate when answering document-specific queries without proper grounding.",
    approach:
      "Designed a hybrid RAG pipeline that extracts and cleans PDF content, segments it into overlapping chunks, converts them into normalized 384-dimensional embeddings using SentenceTransformers, and indexes them in FAISS for semantic retrieval. Relevant chunks are injected into Gemini via a structured prompt to generate context-grounded answers.",
    features: [
      "PDF upload with real-time indexing",
      "Semantic vector search using cosine similarity",
      "FAISS-powered nearest-neighbor retrieval",
      "Grounded answer generation via Gemini API",
      "Authentication system with login & signup",
      "Time-based dynamic greeting UI",
      "ChatGPT-style conversation interface",
    ],
    techDetails: [
      "Python",
      "FastAPI",
      "SentenceTransformers (MiniLM)",
      "FAISS (IndexFlatIP)",
      "Google Gemini API",
      "React (Vite)",
      "TailwindCSS",
      "TypeScript",
    ],
    learned:
      "Developed a deep understanding of Retrieval-Augmented Generation architecture, vector similarity search, embedding normalization, cosine similarity mathematics, prompt grounding techniques, and building scalable low-latency semantic search systems. Also gained experience integrating AI pipelines into full-stack production-ready applications.",
    screenshots: [
      { src: "/ragPdf-login.png", alt: "Login page" },
      { src: "/ragPdf-home.png", alt: "Dashboard greeting and upload" },
      { src: "/ragPdf-op.png", alt: "Chat interface with RAG response" },
    ],
  },
  {
    slug: "hostel-care",
    number: "03",
    title: "HostelCare",
    description:
      "A full-stack Hostel Complaint Management System designed to streamline how students report issues and how wardens and maintenance staff resolve them.",
    techStack: "React, TailwindCSS, Supabase",
    link: "https://vit-hostel-care.vercel.app",
    github: "https://github.com/princeekr/VIT-HostelCare",
    problem:
      "Hostel students had no centralized system to report room and facility issues. Complaints were often shared verbally or through scattered WhatsApp messages, leading to delays, lack of accountability, and poor tracking for wardens and maintenance staff.",
    approach:
      "Built a full-stack hostel complaint management system with role-based access for Students, Wardens/Admins, and Maintenance Staff. Implemented authentication and a structured workflow from complaint creation to resolution.",
    features: [
      "Raise and track complaints in real time",
      "Role-based dashboards (Student, Warden/Admin, Staff)",
      "Complaint assignment and status updates",
      "Priority tagging and category filtering",
      "Resolution history",
    ],
    techDetails: ["TypeScript","React", "TailwindCSS", "Supabase", "Vercel"],
    learned:
      "Learned how to design role-based systems with clear workflows, implement secure authentication and authorization, structure databases for real-world use cases, and build clean dashboards that help multiple user types collaborate efficiently.",
    screenshots: [
      { src: "/hostel-userLogin.png", alt: "Signin page" },
      { src: "/hostel-std.png", alt: "Student dashboard" },
      { src: "/hostel-warden.png", alt: "Warden dashboard" },
    ],
  },
  {
    slug: "truthtracer-ai-fake-news-detector",
    number: "04",
    title: "TruthTracer AI - NLP",
    description:
      "AI-powered fake news detection platform that analyzes live news article URLs and predicts authenticity with 99% accuracy using TF-IDF and Linear SVM.",

    techStack: "Python, FastAPI, NLP",

    link: "https://github.com/princeekr/TruthTracer",
    github: "https://github.com/princeekr/TruthTracer",

    problem:
      "The rapid spread of misinformation makes it difficult for readers to verify the authenticity of online news. Most users lack accessible tools to assess credibility in real time, leading to misinformation amplification and biased decision-making.",

    approach:
      "Built an end-to-end NLP pipeline that scrapes live news articles using requests and BeautifulSoup, preprocesses text through tokenization, stopword removal, and lemmatization, and transforms content using TF-IDF (3000 features). Trained a Linear SVM classifier achieving 99.29% test accuracy. Deployed the model via FastAPI backend and integrated it with a modern React dashboard for real-time predictions and explainability.",

    features: [
      "99.29% test accuracy with Linear SVM",
      "Live URL-based article scraping",
      "Real-time authenticity prediction",
      "Confidence score visualization",
      "Suspicious keyword highlighting",
      "Confusion matrix and model metrics display",
      "REST API backend for integration"
    ],

    techDetails: [
      "Python",
      "Scikit-learn",
      "NLTK",
      "TF-IDF Vectorization",
      "Linear SVM",
      "FastAPI",
      "React",
      "Vite",
      "Tailwind CSS",
      "BeautifulSoup",
      "Requests"
    ],

    learned:
      "Deepened understanding of NLP pipelines, feature engineering, high-dimensional sparse vector modeling, SVM optimization, model evaluation using precision/recall/F1 metrics, API development with FastAPI, and full-stack integration between machine learning backends and modern frontend dashboards.",

    screenshots: [
      { src: "/trutht-dataflow.png", alt: "TruthTracer Dataflow" },
      { src: "/trutht-home.png", alt: "TruthTracer Home" },
      { src: "/trutht-result.png", alt: "TruthTracer Result" }
    ]
  },
  {
    slug: "ml-flight-price-predictor",
    number: "05",
    title: "ML Flight Price Predictor",
    description:
      "Machine learning model that predicts flight prices with 94% accuracy using historical and seasonal data",
    techStack: "Python, Scikit-learn, FastAPI",
    link: "https://github.com/princeekr/FlightPredict-AI",
    github: "https://github.com/princeekr/FlightPredict-AI",
    problem:
      "Travelers struggle to find the best time to book flights, often overpaying because of opaque airline pricing algorithms and volatile fare changes.",
    approach:
      "Collected and cleaned historical flight-pricing datasets, engineered temporal and route-based features, and trained an ensemble of gradient-boosted models. Deployed as a Flask web app with an intuitive search UI.",
    features: [
      "94% prediction accuracy",
      "Route & date based search",
      "Price trend visualizations",
      "Airline comparison charts",
      "REST API for integrations",
    ],
    techDetails: ["Python", "Scikit-learn", "Flask", "Pandas", "Matplotlib", "Numpy", "TypeScript"],
    learned:
      "Deepened skills in feature engineering, hyperparameter tuning, and deploying ML models as production-ready web services with proper error handling.",
    screenshots: [
      { src: "/fl-main.png", alt: "Home" },
      { src: "/fl-result.png", alt: "Result" },
    ],
  },
  {
    slug: "predict-performance",
    number: "06",
    title: "Predict Performance - ML",
    description:
      "Predict student performance using machine learning",
    techStack: "Python, Scikit-learn, Flask",
    link: "https://predict-performance-ml.vercel.app",
    github: "https://github.com/princeekr/PredictPerformance",
    problem:
      "Students often lack clarity on how their daily habits impact academic performance. The goal was to build a system that uses data-driven intelligence to estimate performance and help students optimize their study strategies.",
    approach:
      "Built a full-stack ML-powered web application, trained a regression model using structured student performance data, performed data preprocessing, feature scaling, and encoding. Exported the trained model using joblib. Built a backend API using FastAPI/Flask to serve predictions, connected a responsive frontend form to the ML API for real-time predictions.",
    features: [
      "Real-time performance prediction",
      "User-friendly form interface",
      "Responsive mobile-first design",
      "Input validation & preprocessing",
      "Machine Learning regression model",
      "Clean modern UI with responsive design",
    ],
    techDetails: ["React", "TypeScript", "Tailwind CSS", "Scikit-learn", "Flask"],
    learned:
      "Learned how to build and deploy end-to-end ML systems, handle feature engineering and preprocessing pipelines, integrate ML models with APIs, and connect frontend interfaces to real-time prediction services.",
    screenshots: [
      { src: "/pp-form.png", alt: "Submit details form" },
      { src: "/pp-result.png", alt: "Result page" },
    ],
  },
  {
    slug: "software-metrics",
    number: "07",
    title: "Software Metrics",
    description:
      "SoftMetrics is a multi-tool AI-powered web platform that helps users analyze projects, calculate financial metrics, and learn complex concepts through interactive tools and AI explanations.",
    techStack: "React, TailwindCSS, MongoDB",
    link: "https://softmetrics.vercel.app",
    github: "https://github.com/princeekr/SoftMetricsUpgraded",
    problem:
      "Students, developers, and project planners often rely on multiple disconnected tools to - analyze project feasibility, calculate financial metrics (NPV, ROI, etc.), and understand complex concepts. There was no single platform that combined AI analysis + financial tools + concept learning in one unified dashboard.",
    approach:
      "Designed and built a full-stack web platform with - Authentication system, Multi-page dashboard, AI-powered document analysis, Financial calculators, and Concept explanation engine. Created modular tools inside one platform so users can analyze projects, calculate metrics, and learn concepts without switching apps.",
    features: [
      "AI-powered project feasibility analysis",
      "Financial calculators (NPV, ROI, etc.)",
      "Concept explanation engine",
      "Document upload & analysis",
      "Modern SaaS UI",
    ],
    techDetails: ["React", "TypeScript", "Tailwind CSS", "Vercel", "Vite", "MongoDB"],
    learned:
      "Learned how to design multi-module SaaS platforms, integrate AI into real-world tools, build scalable dashboards, and structure full-stack applications with modular architecture.",
    screenshots: [
      { src: "/sm-landingPage.png", alt: "Landing page" },
      { src: "/sm-signup.png", alt: "Signup page" },
      { src: "/sm-brainbites.png", alt: "Brain Bites page" },
      { src: "/sm-panalysis.png", alt: "Project Analysis page" },
    ],
  },
  {
    slug: "iris-predictor",
    number: "08",
    title: "Iris Predictor",
    description:
      "An ML-powered Iris Flower Species Prediction Web App that classifies iris flowers into Setosa, Versicolor, or Virginica based on flower measurements.",
    techStack: "Python, Scikit-learn, FastAPI",
    link: "https://github.com/princeekr/IrisPredictor",
    github: "https://github.com/princeekr/IrisPredictor",
    problem:
      "Botany datasets like the Iris dataset are commonly used in ML learning, but most implementations remain in notebooks and are not deployed as usable applications. The goal was to build a real-world ML web app that allows users to interact with a trained classification model through a simple interface.",
    approach:
      "Designed from scratch with a brutalist-minimal aesthetic, implemented smooth scroll-triggered animations, and optimized for performance and SEO.",
    features: [
      "Real-time iris species prediction",
      "Clean and modern responsive UI",
      "ML classification model integration",
      "Input validation and preprocessing",
      "REST API-based prediction system",
    ],
    techDetails: ["Python", "Scikit-learn", "FastAPI", "React", "TypeScript", "Tailwind CSS", "Pandas"],
    learned:
      "Learned how to take a classic ML dataset and turn it into a production-style web application. Improved skills in model training, exporting models, building prediction APIs, connecting frontend forms to ML backends, and designing clean, interactive ML interfaces.",
    screenshots: [
      { src: "/iris-form.png", alt: "Submit details form" },
      { src: "/iris-result.png", alt: "Result page" },
    ],
  },
  {
    slug: "to-do-list",
    number: "09",
    title: "To-Do List",
    description:
      "A modern, minimal task management web app that helps users organize their daily work efficiently with priority-based task tracking and a clean distraction-free interface.",
    techStack: "React, TailwindCSS, TypeScript",
    link: "https://simply-do-ez.vercel.app",
    github: "https://github.com/princeekr/SimplyDo",
    problem:
      "Many to-do applications are either overloaded with unnecessary features or lack clean UI/UX. The goal was to build a simple yet powerful task management system with priority handling, smooth interactions for real-world usage.",
    approach:
      "Designed from scratch with a brutalist-minimal aesthetic and dark theme focus. Implemented smooth UI transitions, priority-based task categorization (Low, Medium, High).",
    features: [
      "Create, edit, and delete tasks",
      "Priority-based task categorization (Low, Medium, High)",
      "Clean dark-mode UI with responsive design",
      "Smooth animations and modern UX",
    ],
    techDetails: ["React", "TypeScript", "Tailwind CSS"],
    learned:
      "Learned how to design and deploy a application. Improved skills in frontend architecture with React + TypeScript, and deploying scalable web apps on Vercel.",
    screenshots: [
      { src: "/todo-home.png", alt: "Home page" },
      { src: "/todo-add.png", alt: "Add task" },
      { src: "/todo-alltasks.png", alt: "All tasks" },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  return projects.find((p) => p.slug === slug);
}
