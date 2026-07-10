import { motion } from "framer-motion";

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: .6 }}
      className="
      fixed
      inset-0
      bg-[#09090B]
      flex
      items-center
      justify-center
      z-[999]
      "
    >
      <motion.h1

      initial={{
        opacity:0,
        scale:.8
      }}

      animate={{
        opacity:1,
        scale:1
      }}

      className="
      text-6xl
      font-black
      tracking-widest
      "

      >

      ANUJ

      </motion.h1>

    </motion.div>
  );
}