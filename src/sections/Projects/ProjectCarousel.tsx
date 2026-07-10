import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { projects } from "../../data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const otherProjects = projects.filter(
    (project) => !project.featured
  );

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({
      left: -380,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({
      left: 380,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-24">

      <div className="flex items-center justify-between mb-10">

        <h2 className="text-4xl font-bold">
          Other Projects
        </h2>

        <div className="flex gap-3">

          <button
            onClick={scrollLeft}
            className="
            w-12
            h-12
            rounded-full
            border
            border-zinc-700
            hover:border-blue-500
            transition
            flex
            items-center
            justify-center
            "
          >
            <ChevronLeft />
          </button>

          <button
            onClick={scrollRight}
            className="
            w-12
            h-12
            rounded-full
            border
            border-zinc-700
            hover:border-blue-500
            transition
            flex
            items-center
            justify-center
            "
          >
            <ChevronRight />
          </button>

        </div>

      </div>

      <div
        ref={scrollRef}
        className="
        flex
        gap-8
        overflow-x-auto
        scroll-smooth
        hide-scrollbar
        pb-4
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