import Section from "../../components/common/Section";
import Container from "../../components/common/Container";
import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectCarousel";

export default function Projects() {
  return (
    <Section id="projects">
      <Container>

        <div className="mb-20">
          <h2 className="text-5xl font-bold">
            Featured Work
          </h2>

          <p className="text-zinc-400 mt-4 max-w-2xl">
            A selection of projects that demonstrate
            my experience in full-stack development,
            AI integration, and building scalable web
            applications.
          </p>
        </div>

        <FeaturedProject />

        <ProjectGrid />

      </Container>
    </Section>
  );
}