import SkillCard from "./SkillCard";
import { skillCategories } from "../../data/skills";

export default function SkillGrid() {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">
      {skillCategories.map((category) => (
        <SkillCard
          key={category.title}
          title={category.title}
          icon={category.icon}
          skills={category.skills}
        />
      ))}
    </div>
  );
}