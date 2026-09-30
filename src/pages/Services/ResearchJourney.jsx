import { useRef, React, useState } from "react";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import useScrollReveal from "../../animations/useScrollReveal";
const researchStages = [
  {
    number: "01",
    title: "Topic Selection",
    description:
      "Choose a research topic that is relevant, focused, feasible, and aligned with your academic interests.",
    support: [
      "Exploring and narrowing research ideas",
      "Assessing topic relevance and feasibility",
      "Defining a clear research direction",
    ],
  },
  {
    number: "02",
    title: "Proposal Writing",
    description:
      "Develop a clear research proposal that explains what you want to study and how you plan to approach it.",
    support: [
      "Research problem and objective development",
      "Research questions and proposal structure",
      "Guidance on research scope and direction",
    ],
  },
  {
    number: "03",
    title: "Literature Review",
    description:
      "Build a strong foundation for your research by understanding existing studies, theories, and relevant academic discussions.",
    support: [
      "Identifying relevant academic sources",
      "Organizing themes and key arguments",
      "Connecting existing research to your topic",
    ],
  },
  {
    number: "04",
    title: "Methodology",
    description:
      "Understand how to design and organize the research process so that your chosen methods align with your research objectives.",
    support: [
      "Research design guidance",
      "Sampling and data collection planning",
      "Qualitative and quantitative method guidance",
    ],
  },
  {
    number: "05",
    title: "Data Analysis",
    description:
      "Understand and interpret your collected data, identify meaningful findings, and present results clearly.",
    support: [
      "Data organization and preparation",
      "Analysis approach guidance",
      "Interpretation and presentation of findings",
    ],
  },
  {
    number: "06",
    title: "Final Submission",
    description:
      "Prepare your completed research project for submission through structured review and final improvements.",
    support: [
      "Document structure review",
      "Formatting and consistency checks",
      "Submission and presentation preparation",
    ],
  },
];

function ResearchJourney() {
  const [activeStage, setActiveStage] = useState("01");

  const toggleStage = (number) => {
    setActiveStage((current) => (current === number ? null : number));
  };
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef);

  return (
    <Section
      ref={sectionRef}
      className="research-journey section-spacing"
      id="research-journey"
    >
      <Container>
        <div data-reveal="fadeUp">
          <SectionHeader
            eyebrow="RESEARCH JOURNEY"
            title="Guidance Through Every Stage of Your Research"
            description="Explore the key stages of academic research and understand how we can support you throughout the process."
          />
        </div>

        <div className="research-journey__accordion" data-reveal-group>
          {researchStages.map((stage) => {
            const isActive = activeStage === stage.number;

            return (
              <article
                className={`research-journey__stage ${
                  isActive ? "is-active" : ""
                }`}
                key={stage.number}
                data-reveal-item
              >
                <button
                  type="button"
                  className="research-journey__trigger"
                  onClick={() => toggleStage(stage.number)}
                  aria-expanded={isActive}
                  aria-controls={`research-panel-${stage.number}`}
                >
                  <span className="research-journey__marker">
                    {stage.number}
                  </span>

                  <span className="research-journey__title">{stage.title}</span>

                  <span className="research-journey__icon" aria-hidden="true">
                    {isActive ? "−" : "+"}
                  </span>
                </button>

                <div
                  id={`research-panel-${stage.number}`}
                  className="research-journey__panel-wrapper"
                  aria-hidden={!isActive}
                >
                  <div className="research-journey__panel">
                    <p className="body-text">{stage.description}</p>
                    <h4>How we support you</h4>
                    <ul>
                      {stage.support.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}

export default ResearchJourney;
