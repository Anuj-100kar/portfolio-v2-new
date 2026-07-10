import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import ContactForm from "./ContactForm";
import ContactCard from "./ContactCard";
import { contactInfo } from "../../data/contact";

export default function Contact() {
  return (
    <Section id="contact">
      <Container>

        <div className="text-center">

          <h2 className="text-5xl font-bold">
            Let's Work Together
          </h2>

          <p className="text-zinc-400 mt-6 max-w-2xl mx-auto">
            I'm currently looking for internships,
            freelance opportunities,
            and full-time software engineering roles.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-16 mt-20">

          <div className="space-y-6">

            {contactInfo.map((item) => (
              <ContactCard
                key={item.id}
                contact={item}
              />
            ))}

          </div>

          <ContactForm />

        </div>

      </Container>
    </Section>
  );
}