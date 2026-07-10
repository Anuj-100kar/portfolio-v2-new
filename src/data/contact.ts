export interface ContactInfo {
  id: number;
  title: string;
  value: string;
  icon: string;
  link: string;
}

export const contactInfo: ContactInfo[] = [
  {
    id: 1,
    title: "Email",
    value: "anuj@example.com",
    icon: "📧",
    link: "mailto:shambharkaranuj@gmail.com",
  },
  {
    id: 2,
    title: "LinkedIn",
    value: "linkedin.com/in/anuj",
    icon: "💼",
    link: "https://www.linkedin.com/in/anuj-shambharkar-026a6628a/",
  },
  {
    id: 3,
    title: "GitHub",
    value: "github.com/anuj",
    icon: "💻",
    link: "https://github.com/Anuj-100kar",
  },
  {
    id: 4,
    title: "Resume",
    value: "Download PDF",
    icon: "📄",
    link: "/resume.pdf",
  },
];