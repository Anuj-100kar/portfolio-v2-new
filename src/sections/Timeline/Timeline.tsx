import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import TimelineItem from "./TimelineItem";
import { timelineData } from "../../data/timelineData";

export default function Timeline() {
  return (
    <Section id="journey">
      <Container>

        <h2 className="text-5xl font-bold">
          Engineering Journey
        </h2>

        <p className="text-zinc-400 mt-4 max-w-2xl">
          My growth as a developer through continuous
          learning, building projects, and solving
          real-world engineering problems.
        </p>

        <div className="mt-16">
          {timelineData.map((event) => (
            <TimelineItem
              key={event.title}
              event={event}
            />
          ))}
        </div>

      </Container>
    </Section>
  );
}