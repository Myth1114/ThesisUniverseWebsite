import { Link } from "react-router-dom";

import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";

import "./ResearchLab.css";

const resources = [
  {
    number: "01",
    category: "Topic Selection",
    title: "How to choose a research topic",
    description:
      "Start with a focused direction and turn a broad idea into a researchable academic topic.",
    path: "/resources/how-to-choose-a-research-topic",
  },
  {
    number: "02",
    category: "Methodology",
    title: "Understanding research methodology",
    description:
      "Learn how research design, sampling and data collection shape the structure of a study.",
    path: "/resources/understanding-research-methodology",
  },
  {
    number: "03",
    category: "Literature Review",
    title: "How to structure a literature review",
    description:
      "Organise existing research into themes, arguments and gaps that support your study.",
    path: "/resources/how-to-structure-a-literature-review",
  },
  {
    number: "04",
    category: "Analysis",
    title: "From data to research findings",
    description:
      "Understand how collected data becomes meaningful findings connected to research objectives.",
    path: "/resources/from-data-to-findings",
  },
];

const ResearchLab = () => {
  return (
    <Section className="research-lab">
      <Container wide>
        <SectionHeader
          eyebrow="From the Research Lab"
          title="Ideas and guidance for better academic research."
          description="Explore practical explanations across the different stages of the research journey."
        />

        <div className="research-lab__list">
          {resources.map((resource) => (
            <Link
              key={resource.number}
              to={resource.path}
              className="research-lab__item"
            >
              <span className="research-lab__number">{resource.number}</span>

              <div className="research-lab__content">
                <span className="label research-lab__category">
                  {resource.category}
                </span>

                <h3 className="card-title research-lab__title">
                  {resource.title}
                </h3>

                <p className="body-text research-lab__description">
                  {resource.description}
                </p>
              </div>

              <span className="research-lab__action">
                <span>Read</span>
                <span aria-hidden="true">↗</span>
              </span>
            </Link>
          ))}
        </div>

        <div className="research-lab__footer">
          <Link to="/resources" className="research-lab__all-link">
            View all resources
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default ResearchLab;
