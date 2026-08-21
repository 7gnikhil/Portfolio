export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: 'Full-Stack' | 'AI/ML' | 'Web Audio & AI';
  isFeatured: boolean;
  isProduction: boolean;
  statusText?: string;
  technologies: string[];
  shortDescription: string;
  fullDescription: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
  gradient: string;
  iconName: string;
}

export interface SkillCategory {
  category: string;
  icon: string;
  description: string;
  skills: string[];
}

export interface Certification {
  id: string;
  issuer: string;
  title: string;
  badge?: string;
  year: string;
  details: string;
  topics: string[];
  icon: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  techStack: string[];
}

export const PERSONAL_INFO = {
  name: "Nikhil Chowdhary Ghanta",
  shortName: "Nikhil Chowdhary",
  title: "AI & ML Engineer | Full-Stack Developer",
  tagline: "Building Practical Technology Solutions",
  bio: "I’m Nikhil Chowdhary Ghanta, a final-year B.Tech student specializing in AI and Machine Learning at Anurag University, Hyderabad. I’m passionate about software development, artificial intelligence, machine learning, and building practical technology solutions. I enjoy working on projects that combine AI with real-world applications and continuously improving my programming and problem-solving skills. I’m currently looking to begin my career as a software/AI engineer and contribute to innovative projects.",
  location: "Hyderabad, Telangana, India",
  university: "Anurag University, Hyderabad",
  degree: "B.Tech — Artificial Intelligence & Machine Learning",
  graduationYear: "2027",
  cgpa: "6.65 / 10",
  email: "7gnikhil@gmail.com",
  phone: "+91 99667 09535",
  linkedin: "https://linkedin.com/in/nikhil-chowdhary-ghanta",
  linkedinDisplay: "linkedin.com/in/nikhil-chowdhary-ghanta",
  github: "https://github.com/7gnikhil",
  githubDisplay: "github.com/7gnikhil",
  status: "Available for 2027 Full-Time Roles & Engineering Opportunities",
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: "Code2",
    description: "Core languages for algorithm design, data analysis, and software development.",
    skills: ["Python", "SQL", "TypeScript", "JavaScript"]
  },
  {
    category: "AI & Machine Learning",
    icon: "BrainCircuit",
    description: "Modern machine learning, deep learning architectures, and generative AI systems.",
    skills: ["Machine Learning", "Deep Learning", "NLP", "LLMs", "RAG (Retrieval-Augmented Gen)"]
  },
  {
    category: "Software Engineering",
    icon: "Cpu",
    description: "Foundational software design principles, structures, and service integrations.",
    skills: ["Object-Oriented Programming (OOP)", "Data Structures & Algorithms", "REST APIs", "Backend Development", "API Integration"]
  },
  {
    category: "Frameworks & Libraries",
    icon: "Layers",
    description: "Modern frameworks for front-end UIs, backend servers, and machine learning pipelines.",
    skills: ["React", "Node.js", "Express.js", "Flask", "Scikit-learn", "Pandas", "NumPy"]
  },
  {
    category: "Databases & Storage",
    icon: "Database",
    description: "Relational, document-oriented, and vector storage solutions for structured & semantic data.",
    skills: ["MySQL", "MongoDB", "MongoDB Atlas", "Vector Databases / FAISS"]
  },
  {
    category: "Tools & Platforms",
    icon: "Wrench",
    description: "Developer workflows, cloud hosting platforms, and version control ecosystem.",
    skills: ["Git", "GitHub", "Hugging Face", "Streamlit", "Vercel", "Render"]
  }
];

export const PROJECTS: Project[] = [
  {
    id: "maruthi-toolings",
    title: "Maruthi Toolings — Precision Injection Moulds",
    subtitle: "Full-Stack Industrial Web Platform",
    category: "Full-Stack",
    isFeatured: true,
    isProduction: true,
    statusText: "Real-World Production Platform",
    technologies: ["React 19", "TypeScript", "Express.js", "MongoDB", "Vite", "MongoDB Atlas", "Vercel", "Render"],
    shortDescription: "A full-stack industrial web platform created for a precision plastic injection mould manufacturer, featuring product discovery, enquiry workflows, and an AI-assisted customer support chatbot.",
    fullDescription: "Maruthi Toolings is a production-deployed full-stack web application designed specifically for an actual industrial plastic injection mould manufacturing enterprise. It bridges customer inquiry management, interactive product showcases, and intelligent customer support into a unified, responsive web platform.",
    highlights: [
      "Product and service discovery with responsive showcase and custom 3D tool visualizations",
      "Streamlined enquiry workflows and recruitment application functionality",
      "AI-assisted customer support chatbot with interactive conversational responses",
      "Dynamic image slideshows and interactive lightbox galleries for mould components",
      "Robust REST APIs built with Express.js with strict data validation and sanitization",
      "MongoDB Atlas cloud database integration with secure environment-based credentials",
      "Production deployment architecture using Vercel (Frontend) and Render (Backend)"
    ],
    githubUrl: "https://github.com/7gnikhil/MaruthiTOOLS",
    liveUrl: "https://maruthitools.vercel.app", // Placeholder demo link fallback
    gradient: "from-blue-600 to-indigo-700",
    iconName: "Factory"
  },
  {
    id: "musicmitra",
    title: "MusicMitra — AI-Powered Telugu Karaoke Platform",
    subtitle: "AI Audio & Web Audio Interactive Platform",
    category: "Web Audio & AI",
    isFeatured: false,
    isProduction: false,
    statusText: "AI Audio Web Application",
    technologies: ["Gemini API", "TypeScript", "Demucs", "Web Audio API", "MediaRecorder API"],
    shortDescription: "Real-time Telugu karaoke platform leveraging Gemini AI for lyrics synchronization & translation, coupled with Demucs for AI vocal/instrumental audio separation.",
    fullDescription: "MusicMitra is an innovative AI-powered web platform tailored for Telugu music enthusiasts. It performs vocal separation, synchronizes song lyrics, provides English translations and transliterations via LLMs, and lets users record their singing directly in the browser with real-time pitch feedback.",
    highlights: [
      "Real-time Telugu karaoke experience with synchronized lyrics display",
      "AI-powered Telugu transliteration and English lyric translation powered by Gemini API",
      "Vocal and instrumental track isolation using state-of-the-art Demucs AI models",
      "Browser-based high-quality recording utilizing MediaRecorder API and Web Audio API",
      "Real-time pitch detection and synchronized playback for performance scoring"
    ],
    githubUrl: "https://github.com/7gnikhil/MusicMitra",
    gradient: "from-purple-600 to-pink-600",
    iconName: "Music"
  },
  {
    id: "fraud-detection",
    title: "Multilingual & Cross-Market Financial Fraud Detection",
    subtitle: "AI/ML Financial R&D Model Pipeline",
    category: "AI/ML",
    isFeatured: false,
    isProduction: false,
    statusText: "AI/ML Research Project (In R&D)",
    technologies: ["Python", "Scikit-learn", "Deep Learning", "Pandas", "NumPy", "ANN", "LSTM", "Autoencoders"],
    shortDescription: "Advanced financial fraud detection framework applying deep learning (ANN, LSTM, Autoencoders) and class-imbalance handling to identify anomaly patterns across cross-market transactions.",
    fullDescription: "This research and development project focuses on identifying fraudulent financial transactions across diverse cross-market datasets. It implements transaction-level data preprocessing, synthetic oversampling techniques for class imbalance, and evaluates deep neural network models.",
    highlights: [
      "Rigorous transaction data preprocessing, feature engineering, and dimensionality reduction",
      "Handling extreme class imbalance common in financial fraud datasets",
      "Deep learning model exploration: Artificial Neural Networks (ANN), Long Short-Term Memory (LSTM), and Autoencoders",
      "Comprehensive metric evaluation including Accuracy, Precision, Recall, F1-Score, and ROC-AUC curves",
      "API & UI design for real-time transaction-level fraud risk score prediction"
    ],
    githubUrl: "https://github.com/7gnikhil",
    gradient: "from-cyan-600 to-blue-700",
    iconName: "ShieldAlert"
  }
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "wipro-nasscom",
    issuer: "Wipro — NASSCOM",
    title: "Certificate Program in Artificial Intelligence & Machine Learning",
    badge: "Gold Grade • 2026",
    year: "2026",
    details: "Comprehensive certification covering core machine learning algorithms, deep neural networks, computer vision, and industrial AI application workflows.",
    topics: ["Supervised & Unsupervised Learning", "Neural Networks", "Deep Learning", "AI Application Deployment"],
    icon: "Award"
  },
  {
    id: "cisco-academy",
    issuer: "Cisco Networking Academy",
    title: "CCNA Modules, Python Essentials 1 & 2, Cybersecurity & Data Science",
    badge: "Certified",
    year: "2024 - 2025",
    details: "Professional learning paths in networking fundamentals, advanced Python programming, cybersecurity principles, and data science foundational methods.",
    topics: ["CCNA Network Protocols", "Python Essentials 1 & 2", "Cybersecurity Fundamentals", "Introduction to Data Science"],
    icon: "ShieldCheck"
  },
  {
    id: "nptel-python",
    issuer: "NPTEL (IIT Certification)",
    title: "Python for Data Science",
    badge: "Certified",
    year: "2024",
    details: "Rigorous academic certification on using Python libraries (NumPy, Pandas, Matplotlib, Scikit-learn) for scientific computing and data analysis.",
    topics: ["Data Manipulation", "Statistical Computing", "Exploratory Data Analysis", "Model Building"],
    icon: "BookOpen"
  }
];

export const SERVICES: ServiceItem[] = [
  {
    id: "fullstack",
    title: "Full-Stack Web Development",
    description: "Responsive, high-performance web applications built using React, TypeScript, Node.js, Express.js, databases, and clean RESTful API architectures.",
    icon: "Layout",
    techStack: ["React", "TypeScript", "Node.js", "Express", "MongoDB", "SQL"]
  },
  {
    id: "aiml",
    title: "AI & Machine Learning Engineering",
    description: "Practical machine learning and deep learning pipelines for classification, prediction, NLP, and anomaly detection in real-world scenarios.",
    icon: "Brain",
    techStack: ["Python", "Scikit-learn", "TensorFlow", "Pandas", "NumPy"]
  },
  {
    id: "ai-apps",
    title: "AI-Powered Applications & RAG",
    description: "Integrating Large Language Models (LLMs), RAG pipelines, vector search, and conversational AI chatbots into web interfaces.",
    icon: "Sparkles",
    techStack: ["Gemini API", "LLMs", "RAG", "Vector DBs / FAISS", "Hugging Face"]
  },
  {
    id: "backend",
    title: "Backend & API Development",
    description: "Robust REST APIs, server routing, database schema modeling, authentication integration, payload validation, and cloud deployment pipelines.",
    icon: "Server",
    techStack: ["Express.js", "REST APIs", "MongoDB Atlas", "MySQL", "Render", "Vercel"]
  },
  {
    id: "ai-solutions",
    title: "AI + Real-World Business Solutions",
    description: "Designing end-to-end applications that bridge advanced AI algorithms with practical business workflows, automated tools, and customer portals.",
    icon: "Rocket",
    techStack: ["Full-Stack Integration", "Data Pipelines", "AI Workflows", "UX/UI"]
  }
];

export const LEADERSHIP_INFO = {
  role: "Tech Lead Intern",
  scope: "Managed a Team of 20+ Members Across Multiple Colleges",
  highlights: [
    "Coordinated technical workstreams and distributed key project deliverables among engineering team members.",
    "Provided technical mentorship and peer support to resolve complex software bugs and architecture questions.",
    "Supported end-to-end project execution, code review practices, and successful milestone deliveries."
  ]
};
