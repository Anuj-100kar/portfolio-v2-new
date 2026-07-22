import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  console.log(projects);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );


  return (
    <div className="mt-24">

      <div className="flex items-center justify-between mb-10">

        <h2 className="text-4xl font-bold">
          Other Projects
        </h2>



      </div>

      <div
        className="
    grid
    grid-cols-1
    md:grid-cols-2
    xl:grid-cols-3
    gap-8
  "
      >
        {otherProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>

    </div>
  );
}