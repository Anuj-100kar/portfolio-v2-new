import { motion } from "framer-motion";

type Props = {
  title: string;
  icon: string;
  skills: string[];
};

export default function SkillCard({
  title,
  icon,
  skills,
}: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
      }}
      className="
      bg-zinc-900
      border
      border-zinc-800
      rounded-2xl
      p-6
      transition
      "
    >
      <h3 className="text-xl font-bold mb-6">
        {icon} {title}
      </h3>

      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <span
            key={skill}
            className="
            px-3
            py-2
            rounded-lg
            bg-zinc-800
            text-sm
            "
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}