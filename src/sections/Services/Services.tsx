import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import { services } from "../../data/services";
import ServiceCard from "./ServiceCard";

export default function Services() {
  return (
    <Section id="services">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Services
          </h2>

          <p className="mt-6 text-zinc-400 max-w-2xl mx-auto">
            I help businesses, startups, and individuals
            build scalable, modern, and user-friendly
            web applications.
          </p>

        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8 mt-16">

          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))}

        </div>

      </Container>
    </Section>
  );
}