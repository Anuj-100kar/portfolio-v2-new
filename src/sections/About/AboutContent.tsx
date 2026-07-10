import SkillGrid from "./SkillGrid";

export default function AboutContent() {
  return (
    <>
      <h2 className="text-5xl font-bold">
        About Me
      </h2>

      <p className="mt-8 max-w-3xl text-zinc-400 text-lg leading-9">
        I'm a Full Stack Developer passionate about
        building modern, scalable web applications.
        I enjoy solving real-world problems through
        clean architecture, intuitive user experiences,
        and AI-powered solutions.

        Currently, I'm expanding my expertise in
        Linux, Docker, DevOps, CI/CD,
        Redis, and System Design to become a
        well-rounded Software Engineer.
      </p>

      <SkillGrid />
    </>
  );
}