import { motion } from "framer-motion";
import type { MouseEventHandler, ReactNode } from "react";

type Props = {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className?: string;
};

export default function Button({
  children,
  onClick,
  className = "",
}: Props) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        px-6
        py-3
        rounded-xl
        bg-blue-600
        hover:bg-blue-500
        transition
        font-semibold
        ${className}
      `}
    >
      {children}
    </motion.button>
  );
}