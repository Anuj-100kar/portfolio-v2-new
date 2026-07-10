import { motion } from "framer-motion";
import type { TimelineEvent } from "../../data/timelineData";

type Props = {
  event: TimelineEvent;
};

export default function TimelineItem({ event }: Props) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative border-l-2 border-blue-500 pl-8 pb-12"
    >
      <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-blue-500" />

      <p className="text-blue-400 font-semibold">
        {event.year}
      </p>

      <h3 className="text-2xl font-bold mt-2">
        {event.title}
      </h3>

      <p className="text-zinc-400 mt-4 leading-7">
        {event.description}
      </p>
    </motion.div>
  );
}