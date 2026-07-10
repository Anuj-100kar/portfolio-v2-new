export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Full Stack Web Development",
    description:
      "Build scalable web applications using React, Node.js, Express, MongoDB, and TypeScript.",
    icon: "🌐",
  },
  {
    id: 2,
    title: "Frontend Development",
    description:
      "Create fast, responsive, and modern user interfaces with React, Tailwind CSS, and TypeScript.",
    icon: "⚛️",
  },
  {
    id: 3,
    title: "Backend API Development",
    description:
      "Develop secure REST APIs with authentication, JWT, Express.js, and MongoDB.",
    icon: "🔧",
  },
  {
    id: 4,
    title: "AI Integration",
    description:
      "Integrate AI-powered features such as chatbots, market analysis, and intelligent assistants using LLM APIs.",
    icon: "🤖",
  },
  {
    id: 5,
    title: "Database Design",
    description:
      "Design efficient MongoDB and MySQL databases with optimized schemas and queries.",
    icon: "🗄️",
  },
  {
    id: 6,
    title: "Performance Optimization",
    description:
      "Improve application speed, responsiveness, SEO, and overall user experience.",
    icon: "⚡",
  },
];