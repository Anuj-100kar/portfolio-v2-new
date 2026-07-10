import { projects } from "../../data/projects";
import TechBadge from "./TechBadge";
import Button from "../../components/ui/Button";
import OutlineButton from "../../components/ui/OutlineButton";

export default function FeaturedProject() {
  const project = projects.find((p) => p.featured);

  if (!project) return null;

  return (
    <div
      className="
      grid
      lg:grid-cols-2
      gap-12
      items-center
      "
    >
      {/* LEFT */}

      <div>

        <img
          src={project.image}
          className="
          rounded-2xl
          border
          border-zinc-800
          "
        />

      </div>

      {/* RIGHT */}

      <div>

        <p className="text-blue-500 font-semibold">
          Featured Project
        </p>

        <h2 className="text-5xl font-bold mt-4">
          {project.title}
        </h2>

        <h3 className="text-zinc-400 mt-3">
          {project.subtitle}
        </h3>

        <p className="mt-8 text-zinc-400 leading-8">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-3 mt-8">

          {project.technologies.map((tech) => (

            <TechBadge
              key={tech}
              text={tech}
            />

          ))}

        </div>

        <div className="flex gap-4 mt-8">

          {project.live && (
            <Button
              onClick={() => window.open(project.live, "_blank")}
            >
              Live Demo
            </Button>
          )}

          <OutlineButton
            onClick={() => window.open(project.github, "_blank")}
          >
            GitHub
          </OutlineButton>

        </div>

      </div>

    </div>
  );
}