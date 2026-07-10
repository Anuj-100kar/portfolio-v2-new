import Button from "../../components/ui/Button";

export default function HeroButtons() {

  const handleProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({
        behavior: "smooth",
      });
  };

  return (
    <div className="flex gap-5 mt-10">

      <Button onClick={handleProjects}>
        View Projects
      </Button>

      <a
        href="/resume.pdf"
        download
        className="
    px-6
    py-3
    rounded-xl
    border
    border-zinc-700
    hover:border-blue-500
    transition
    inline-flex
    items-center
    justify-center
  "
      >
        Download Resume
      </a>

    </div>
  );
}