export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  statusText?: string;
  technologies: string[];
  shortDescription: string;
  highlights: string[];
  githubUrl: string;
  liveUrl?: string;
}

export interface SkillCategory { category: string; skills: string[]; }
export interface Certification { id: string; issuer: string; title: string; year: string; }

export const PERSONAL_INFO = {
  name: "Nikhil Chowdhary Ghanta",
  shortName: "Nikhil Ghanta",
  title: "AI / ML Engineer & Software Developer",
  tagline: "Final-year B.Tech, AI & Machine Learning — Anurag University, Hyderabad.",
  bio: "I build software that people actually use. Right now that means OneUco, a student community platform I designed, built and launched on my own, and a multilingual fraud-message detector that ships as a browser extension. I work mostly in Python and TypeScript, and I care more about whether a thing works in the real world than how it looks in a demo.",
  location: "Hyderabad, India",
  university: "Anurag University, Hyderabad",
  degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
  graduationYear: "2027",
  cgpa: "6.65 / 10",
  email: "7gnikhil@gmail.com",
  phone: "+91 99667 09535",
  linkedin: "https://www.linkedin.com/in/nikhil7g",
  linkedinDisplay: "linkedin.com/in/nikhil7g",
  github: "https://github.com/7gnikhil",
  githubDisplay: "github.com/7gnikhil",
  status: "Open to fresher roles — software, AI/ML, Python/backend — for 2027",
};

export const PROJECTS: Project[] = [
  {
    id: "oneuco",
    title: "OneUco",
    subtitle: "One University Community",
    category: "Product — live",
    year: "2026",
    statusText: "Live, in production",
    technologies: ["Next.js", "TypeScript", "Supabase", "PostgreSQL", "Vercel", "PWA / Web Push"],
    shortDescription: "A social platform for students across colleges — not just one campus. Students sign up, claim a username, and connect through a rotary-dial home screen that is the app's navigation. Swipe-to-match, private groups and servers, a campus feed, and direct messages with read receipts and push notifications.",
    highlights: [
      "Designed, built and launched solo; live and open to all colleges",
      "Rotary dial as the main navigation — no other student app uses one",
      "Fling (swipe & match), Tea (servers/groups), Homies (friends), Chirp (feed)",
      "Web Push notifications and an installable PWA",
      "Privacy built in: full profiles unlock only for accepted friends",
    ],
    githubUrl: "https://github.com/7gnikhil/OneUniversityCommunity",
    liveUrl: "https://one-university-community.vercel.app",
  },
  {
    id: "fraud-detection",
    title: "Multilingual Fraud Message Detection",
    subtitle: "Scam SMS & message classifier — English, Hindi, Telugu",
    category: "AI / ML",
    year: "2026",
    statusText: "Extension v1.3 released",
    technologies: ["Python", "MuRIL", "PyTorch", "scikit-learn", "FastAPI", "Chrome Extension", "ONNX Runtime Web"],
    shortDescription: "A classifier that flags fraudulent messages in three languages, built on 5,559 real messages (7,624-row dataset). It uses frozen MuRIL embeddings with per-language heads, and runs on-device in a Chrome extension — no message ever leaves the browser.",
    highlights: [
      "F1 scores: English 0.952, Hindi 0.992, Telugu 0.912",
      "Chrome extension (Manifest V3) with on-device inference via ONNX Runtime Web",
      "FastAPI feedback backend collects user corrections for retraining",
      "GitHub Actions CI/CD with scheduled retraining and automated extension releases",
      "Released as v1.3.0 on GitHub; Microsoft Edge listing submitted and in review",
    ],
    githubUrl: "https://github.com/7gnikhil/MultilingualFrauddetection",
  },
  {
    id: "maruthi-toolings",
    title: "Maruthi Toolings",
    subtitle: "Website for a precision injection-mould manufacturer",
    category: "Full-stack — client work",
    year: "2025",
    statusText: "Production site for a real business",
    technologies: ["React", "TypeScript", "Express.js", "MongoDB", "REST API", "Vercel", "Render"],
    shortDescription: "A full-stack platform for a working mould manufacturer: product and service showcase, enquiry workflows, job applications, and an AI-assisted support chatbot. Real client, real enquiries, still running.",
    highlights: [
      "Product discovery, enquiry and recruitment workflows",
      "AI-assisted customer support chatbot",
      "REST APIs in Express.js with validation and sanitisation",
      "MongoDB Atlas, deployed on Vercel (frontend) and Render (backend)",
    ],
    githubUrl: "https://github.com/7gnikhil/MaruthiTOOLS",
    liveUrl: "https://maruthitools-1.onrender.com",
  },
  {
    id: "musicmitra",
    title: "MusicMitra",
    subtitle: "Telugu karaoke, in the browser",
    category: "Web audio & AI",
    year: "2025",
    technologies: ["TypeScript", "Gemini API", "Demucs", "Web Audio API", "MediaRecorder API"],
    shortDescription: "Karaoke for Telugu songs: Demucs separates vocals from the track, Gemini syncs, transliterates and translates the lyrics, and you record yourself in the browser with live pitch feedback.",
    highlights: [
      "Vocal / instrumental separation with Demucs",
      "Lyric sync, Telugu transliteration and English translation via Gemini",
      "In-browser recording with real-time pitch detection",
    ],
    githubUrl: "https://github.com/7gnikhil/MusicMitra",
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  { category: "Languages", skills: ["Python", "SQL", "C", "TypeScript", "JavaScript", "Java (basic)"] },
  { category: "AI & ML", skills: ["Machine Learning", "NLP", "Generative AI", "RAG", "Transfer Learning", "Computer Vision", "Feature Engineering", "Model Evaluation", "Classification"] },
  { category: "Libraries & frameworks", skills: ["scikit-learn", "PyTorch", "Hugging Face", "Pandas", "NumPy", "FastAPI", "Flask", "React", "Next.js", "Node.js", "Express.js"] },
  { category: "Data & tools", skills: ["MongoDB", "MySQL", "FAISS / Vector Databases", "Supabase", "Git", "GitHub", "GitLab", "Linux", "REST APIs", "Chrome Extension APIs"] },
];

export const CERTIFICATIONS: Certification[] = [
  { id: "wipro", issuer: "Wipro — NASSCOM", title: "Certificate Program in Artificial Intelligence & Machine Learning — Gold", year: "2026" },
  { id: "aws", issuer: "AWS Academy", title: "Cloud Foundations", year: "" },
  { id: "nptel", issuer: "NPTEL", title: "Python for Data Science", year: "" },
  { id: "cisco", issuer: "Cisco Networking Academy", title: "CCNA Modules · Python Essentials 1 & 2 · Introduction to Cybersecurity · Introduction to Data Science", year: "" },
];

export const EXPERIENCE = {
  role: "Tech Lead Intern — VISWAM.AI",
  detail: "Led a team of 20+ students across multiple colleges: split the work, reviewed code, unblocked people, and shipped to milestones.",
};

export const EDUCATION = [
  { place: "Anurag University, Hyderabad", what: "Bachelor of Technology in Artificial Intelligence and Machine Learning", when: "Class of 2027 · CGPA 6.65" },
  { place: "Codegnan, Hyderabad", what: "Python Full Stack Development Trainee", when: "Apr 2025 – Nov 2025" },
];
