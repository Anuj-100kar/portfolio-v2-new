import { motion } from "framer-motion";
import type { Project } from "../../data/projects";
import TechBadge from "./TechBadge";
import Button from "../../components/ui/Button";
import OutlineButton from "../../components/ui/OutlineButton";
import { useNavigate } from "react-router-dom";

type Props = {
  project: Project;
};

export default function ProjectCard({ project }: Props) {
  const navigate = useNavigate();
  return (
    <motion.div
      onClick={() => navigate(`/projects/${project.slug}`)}
      whileHover={{ y: -8 }}
      className="w-[360px] flex-shrink-0 bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden"
    >
      <img
        src={project.image}
        alt={project.title}
        className="w-full h-52 object-cover"
      />

      <div className="p-6">
        <h3 className="text-2xl font-bold">{project.title}</h3>

        <p className="text-blue-400 mt-2">{project.subtitle}</p>

        <p className="text-zinc-400 mt-4 line-clamp-3">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech} text={tech} />
          ))}
        </div>

        <div className="flex gap-3 mt-6">

          <Button
            onClick={() => navigate(`/projects/${project.slug}`)}
          >
            View Details
          </Button>

          <OutlineButton
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.github, "_blank");
            }}
          >
            GitHub
          </OutlineButton>

        </div>
      </div>
    </motion.div>
  );
}