import { useEffect, useRef } from "react";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";

import "./HowItWorks.css";

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: "01",
    title: "Tell us about your research",
    description:
      "Share your course, topic, requirements, deadline and the stage of research you are currently working on.",
  },
  {
    number: "02",
    title: "Discuss your requirements",
    description:
      "We understand what you need, clarify the academic direction and identify the support most relevant to your project.",
  },
  {
    number: "03",
    title: "Plan the approach",
    description:
      "The work is structured around the appropriate research process, priorities and academic requirements.",
  },
  {
    number: "04",
    title: "Move forward with clarity",
    description:
      "Progress through the required stage with clearer direction, communication and an organised academic process.",
  },
];

const HowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const elements = gsap.utils.toArray([
        ".how-it-works .eyebrow",
        ".how-it-works .section-title",
        ".how-it-works .section-subtitle",
        ".how-it-works__step",
      ]);

      elements.forEach((element) => {
        gsap.from(element, {
          y: 24,
          duration: 0.7,
          ease: "power3.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: element,
            start: "top 85%",
            once: true,
          },
        });
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <Section className="how-it-works">
      <Container wide>
        <div ref={sectionRef}>
          <SectionHeader
            eyebrow="How It Works"
            title="A clear process from your first message onward."
            description="Research can feel complicated. The process does not have to."
          />

          <div className="how-it-works__process">
            {processSteps.map((step) => (
              <article key={step.number} className="how-it-works__step">
                <div className="how-it-works__number">{step.number}</div>

                <div className="how-it-works__content">
                  <h3 className="card-title">{step.title}</h3>

                  <p className="body-text how-it-works__description">
                    {step.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default HowItWorks;
