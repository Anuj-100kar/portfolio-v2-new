export interface Project {
  id: number;
  slug:string,
  title: string;
  subtitle: string;
  description: string;
  image: string;
  technologies: string[];
  github: string;
  live?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: 1,
    slug:"finorax",
    title: "Finorax",
    subtitle: "AI Powered Financial Platform",
    description:
      "A full-stack financial platform that provides real-time stock and cryptocurrency market data, AI-powered market analysis, portfolio tracking, watchlists, price alerts, and secure authentication. Built with a scalable architecture and real-time APIs for an enhanced trading experience.",

    image: "./../finorax.png",

    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "Socket.IO",
      "OpenAI",
      "JWT"
    ],

    github: "https://github.com/Anuj-100kar/FinoraX",

    // live: "https://finorax.vercel.app",

    featured: true
  },

  {
    id: 2,
    slug:"ipo-web-application",
    title: "IPO Web Application",
    subtitle: "IPO Discovery & Investment Platform",
    description:
      "A modern IPO tracking platform that enables users to explore upcoming, ongoing, and listed IPOs with company details, issue price, subscription status, GMP insights, and investment information through an intuitive dashboard.",

    image: "./../ipo.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "REST API",
      "JWT",
      "Tailwind CSS"
    ],

    github: "https://github.com/Anuj-100kar/Blue",

    // live: "https://ipo-web-app.vercel.app",

    featured: false
  },

  {
    id: 3,
    slug:"doctor-booking-system",
    title: "Doctor Appointment Booking System",
    subtitle: "Healthcare Appointment Management Platform",
    description:
      "A comprehensive appointment booking platform that allows patients to search doctors, schedule appointments, manage bookings, and receive confirmations. Doctors can manage availability while administrators oversee users, appointments, and healthcare records.",

    image: "./../doctor.png",

    technologies: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JWT",
      "Tailwind CSS",
      "Cloudinary"
    ],

    github: "https://github.com/Anuj-100kar/Doctors-online-appointment--by-using-MERN-Stack",

    // live: "https://doctor-booking.vercel.app",

    featured: false
  },

  {
    id: 4,
    slug:"tetris-game",
    title: "Tetris Game",
    subtitle: "Classic Puzzle Game with Modern UI",
    description:
      "A browser-based implementation of the classic Tetris game featuring smooth gameplay, responsive keyboard controls, score tracking, level progression, collision detection, line clearing logic, and game-over state management.",

    image: "./../tetris01.mp4",

    technologies: [
      "React",
      "TypeScript",
      "Canvas API",
      "CSS",
      "Game Logic",
      "Vite"
    ],

    github: "https://github.com/Anuj-100kar/tetris_game",

    // live: "https://tetris-game.vercel.app",

    featured: false
  }
];