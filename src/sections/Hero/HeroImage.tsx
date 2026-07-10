import { motion } from "framer-motion";

export default function HeroImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="w-full flex justify-center"
    >
      <div className="w-[520px] rounded-2xl bg-zinc-900 border border-zinc-800 shadow-2xl overflow-hidden">

        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800">

          <div className="w-3 h-3 rounded-full bg-red-500"></div>

          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>

          <div className="w-3 h-3 rounded-full bg-green-500"></div>

          <span className="text-zinc-400 text-sm ml-4">
            portfolio.tsx
          </span>

        </div>

        <pre className="text-green-400 text-sm p-6 leading-8 overflow-auto">
{`const developer = {
  name: "Anuj",
  role: "Full Stack Developer",
  skills: [
    "React",
    "Node.js",
    "TypeScript",
    "Java",
    "MongoDB",
    "AI"
  ],
  currentlyLearning: [
    "DevOps",
    "Docker",
    "CI/CD",
    "System Design"
  ]
};`}
        </pre>

      </div>
    </motion.div>
  );
}