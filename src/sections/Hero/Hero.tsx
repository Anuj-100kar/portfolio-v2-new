import Container from "../../components/common/Container";
import Section from "../../components/common/Section";
import HeroContent from "./HeroContent"

export default function Hero() {
  return (
    <Section id="home">
      <Container>
        <HeroContent />
      </Container>
    </Section>
  );
}