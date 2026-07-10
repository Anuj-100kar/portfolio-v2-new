import { motion } from "framer-motion";
import type { Service } from "../../data/services";

type Props = {
  service: Service;
};

export default function ServiceCard({ service }: Props) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      className="
        bg-zinc-900
        border
        border-zinc-800
        rounded-2xl
        p-8
        transition
      "
    >
      <div className="text-5xl">
        {service.icon}
      </div>

      <h3 className="text-2xl font-bold mt-6">
        {service.title}
      </h3>

      <p className="text-zinc-400 mt-4 leading-7">
        {service.description}
      </p>
    </motion.div>
  );
}