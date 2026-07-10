import { useParams } from "react-router-dom";
import { projects } from "../../data/projects";

export default function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find(
    (p) => p.slug === slug
  );

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-4xl font-bold">
          Project Not Found
        </h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#09090B] text-white">

      <div className="max-w-7xl mx-auto px-6 py-24">

        <img
          src={project.image}
          alt={project.title}
          className="rounded-2xl mb-10"
        />

        <h1 className="text-6xl font-bold">
          {project.title}
        </h1>

        <p className="text-2xl text-blue-400 mt-3">
          {project.subtitle}
        </p>

        <p className="text-zinc-400 mt-8 leading-8">
          {project.description}
        </p>

      </div>

    </div>
  );
}