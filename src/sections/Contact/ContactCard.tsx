import { motion } from "framer-motion";
import type { ContactInfo } from "../../data/contact";

type Props = {
  contact: ContactInfo;
};

export default function ContactCard({ contact }: Props) {
  return (
    <motion.a
      whileHover={{ y: -6 }}
      href={contact.link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 flex items-center gap-5 hover:border-blue-500 transition"
    >
      <span className="text-4xl">{contact.icon}</span>

      <div>
        <h3 className="font-semibold">{contact.title}</h3>

        <p className="text-zinc-400 text-sm">
          {contact.value}
        </p>
      </div>
    </motion.a>
  );
}