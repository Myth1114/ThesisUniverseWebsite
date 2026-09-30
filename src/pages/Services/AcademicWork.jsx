import { useRef, React } from "react";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import useScrollReveal from "../../animations/useScrollReveal";
const academicServices = [
  {
    number: "01",
    title: "Assignments",
    description:
      "Structured academic support for students working on essays, reports, case studies, and other academic assignments.",
    includes: [
      "Understanding assignment requirements",
      "Research and source organization",
      "Academic structure and writing guidance",
      "Referencing and formatting support",
      "Review and improvement suggestions",
    ],
    audience:
      "Suitable for students who need clarity, structure, and guidance while preparing academic assignments.",
  },
  {
    number: "02",
    title: "Dissertations",
    description:
      "Guidance throughout the dissertation process, from developing the research direction to organizing and refining the final document.",
    includes: [
      "Research question and objective development",
      "Literature review guidance",
      "Methodology planning",
      "Data interpretation support",
      "Structure and presentation review",
    ],
    audience:
      "Suitable for undergraduate and postgraduate students working on dissertation projects.",
  },
  {
    number: "03",
    title: "Thesis",
    description:
      "End-to-end academic guidance for students navigating the planning, development, and completion of a thesis project.",
    includes: [
      "Research topic and design guidance",
      "Proposal and chapter planning",
      "Research methodology support",
      "Data analysis guidance",
      "Final document review and submission preparation",
    ],
    audience:
      "Suitable for students who need structured support throughout their thesis journey.",
  },
];

function AcademicWork() {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef);
  return (
    <Section
      ref={sectionRef}
      className="academic-work section-spacing"
      id="academic-work"
    >
      <Container>
        <div data-reveal="fadeUp">
          <SectionHeader
            eyebrow="ACADEMIC WORK"
            title="Support for the Work You Need to Complete"
            description="We help you approach academic assignments, dissertations, and thesis projects with clearer structure, practical guidance, and confidence."
          />
        </div>

        <div className="academic-work__list" data-reveal-group>
          {academicServices.map((service) => (
            <article
              className="academic-work__item"
              key={service.number}
              data-reveal-item
            >
              <div className="academic-work__top">
                <span className="academic-work__number">{service.number}</span>

                <span className="academic-work__tag">ACADEMIC SUPPORT</span>
              </div>

              <div className="academic-work__body">
                <h3 className="card-title">{service.title}</h3>

                <p className="body-text">{service.description}</p>

                <div className="academic-work__details-group">
                  <h4>What we support</h4>

                  <ul className="academic-work__details">
                    {service.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>

                <div className="academic-work__audience">
                  <h4>Who it is for</h4>
                  <p className="body-text">{service.audience}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </Section>
  );
}

export default AcademicWork;
