import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
} from "react-icons/fa";

export default function HeroSocial() {
  return (
    <div className="flex gap-6 mt-12 text-3xl text-zinc-400">

      <a
        href="https://github.com/Anuj-100kar"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 hover:scale-125 transition duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://linkedin.com/in/YOUR_LINKEDIN"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-500 hover:scale-125 transition duration-300"
      >
        <FaLinkedin />
      </a>

      <a
        href="mailto:shambharkaranuj@gmail.com"
        className="hover:text-blue-500 hover:scale-125 transition duration-300"
      >
        <FaEnvelope />
      </a>

    </div>
  );
}