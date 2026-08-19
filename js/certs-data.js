/**
 * CERTIFICATIONS DATA
 * ====================
 * To add a new certificate:
 *   1. Drop the file (PNG, JPG or PDF) into assets/
 *   2. Copy one of the blocks below and fill in the fields
 *   3. Save — the site picks it up automatically, no other code to touch.
 *
 * Fields:
 *   title      - course / certificate name
 *   issuer     - organisation that issued it
 *   date       - "YYYY-MM-DD" (used for sorting, newest first)
 *   category   - one of: "AI & Machine Learning", "Simulation & CFD",
 *                "Programming & Data Science", "Other"
 *   file       - path to the image or PDF, relative to index.html
 *   verifyUrl  - optional public verification link ("" if none)
 */

const CERTIFICATIONS = [
  {
    title: "Advanced Learning Algorithms",
    issuer: "DeepLearning.AI · Stanford Online",
    date: "2026-08-02",
    category: "AI & Machine Learning",
    file: "assets/advanced-learning-algorithms.png",
    verifyUrl: "https://learn.deeplearning.ai/certificates/8b0a7ef5-c2ff-4bbb-bbf0-a4d7ba793351"
  },
  {
    title: "Generative AI: Introduction and Applications",
    issuer: "IBM · Coursera",
    date: "2026-07-27",
    category: "AI & Machine Learning",
    file: "assets/generative-ai-introduction-applications-ibm-coursera-2026.pdf",
    verifyUrl: "https://coursera.org/verify/S8Y4KZHRXGLH"
  },
  {
    title: "What is Data Science?",
    issuer: "IBM · Coursera",
    date: "2026-07-26",
    category: "Programming & Data Science",
    file: "assets/what-is-data-science-ibm-coursera-2026.pdf",
    verifyUrl: "https://coursera.org/verify/012NCSUI90PV"
  },
  {
    title: "AI for Mechanical Engineers Specialization (3 courses)",
    issuer: "University of Michigan · Coursera",
    date: "2026-07-15",
    category: "AI & Machine Learning",
    file: "assets/ai-mechanical-engineers-specialization.pdf",
    verifyUrl: "https://coursera.org/verify/specialization/ICLL0BC4QRO2"
  },
  {
    title: "AI for Energy and Biomedical Applications",
    issuer: "University of Michigan · Coursera",
    date: "2026-07-15",
    category: "AI & Machine Learning",
    file: "assets/ai-energy-biomedical-applications.pdf",
    verifyUrl: "https://coursera.org/verify/XJBVKXV32OOZ"
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    issuer: "DeepLearning.AI",
    date: "2026-07-16",
    category: "AI & Machine Learning",
    file: "assets/supervised-machine-learning.png",
    verifyUrl: "https://learn.deeplearning.ai/certificates/905a4c4a-6d37-477e-bcca-2e724db962fe"
  },
  {
    title: "AI for Autonomous Vehicles and Robotics",
    issuer: "University of Michigan · Coursera",
    date: "2026-07-13",
    category: "AI & Machine Learning",
    file: "assets/ai-autonomous-vehicles-robotics.pdf",
    verifyUrl: "https://coursera.org/verify/JH03R40N2AZU"
  },
  {
    title: "Python for Data Science, AI & Development",
    issuer: "IBM · Coursera",
    date: "2026-07-11",
    category: "Programming & Data Science",
    file: "assets/python-data-science-ai-development-ibm-coursera-2026.pdf",
    verifyUrl: "https://coursera.org/verify/QU25FALT86TT"
  },
  {
    title: "AI Materials",
    issuer: "KAIST · Coursera",
    date: "2026-07-10",
    category: "AI & Machine Learning",
    file: "assets/ai-materials-kaist.pdf",
    verifyUrl: "https://coursera.org/verify/BWYRJ2F5W6BM"
  },
  {
    title: "AI for Design and Optimization",
    issuer: "University of Michigan · Coursera",
    date: "2026-07-08",
    category: "AI & Machine Learning",
    file: "assets/ai-design-optimization.pdf",
    verifyUrl: "https://coursera.org/verify/70KO535VW83E"
  },
  {
    title: "Applied Computational Fluid Dynamics",
    issuer: "Siemens · Coursera",
    date: "2026-07-07",
    category: "Simulation & CFD",
    file: "assets/applied-computational-fluid-dynamics-siemens.pdf",
    verifyUrl: "https://coursera.org/verify/LOYZR7PLCA6J"
  },
  {
    title: "Python",
    issuer: "Kaggle",
    date: "2026-06-30",
    category: "Programming & Data Science",
    file: "assets/kaggle-python-2026.png",
    verifyUrl: ""
  },
  {
    title: "Intro to Programming",
    issuer: "Kaggle",
    date: "2025-11-27",
    category: "Programming & Data Science",
    file: "assets/kaggle-intro-programming-2025.png",
    verifyUrl: ""
  }
];
