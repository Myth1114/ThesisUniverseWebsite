import { Link } from "react-router-dom";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import Button from "../../components/common/Button/Button";
import { resourceGuides } from "../../data/resourceGuides";
import "./Resources.css";
import SEO from "../../components/common/SEO/seo";

const faqs = [
  {
    question: "Are these research guides suitable for undergraduate students?",
    answer:
      "Yes. The guides are written for students working on assignments, proposals, dissertations and theses. They can also support postgraduate research, although your university and department requirements should always take priority.",
  },
  {
    question: "Do I have to follow the exact structures shown here?",
    answer:
      "No. Research structures vary by university, discipline, degree and research design. Use these guides to understand the research process, then follow the official requirements provided by your institution and supervisor.",
  },
  {
    question: "How should I choose my research topic?",
    answer:
      "Start with an area you can realistically investigate, then narrow it by population, location, variables, context or research problem. A useful topic should be relevant, researchable and feasible within your available time, access and resources.",
  },
  {
    question:
      "What is the difference between a research question and an objective?",
    answer:
      "A research question states what the study wants to find out. A research objective states what the researcher intends to do to answer that question. The two should be directly connected.",
  },
  {
    question: "Can I use AI tools for academic research?",
    answer:
      "AI tools can assist with brainstorming, explaining concepts, organising ideas or improving clarity, but students remain responsible for verifying information, using genuine sources and following their institution's academic-integrity and AI-use requirements.",
  },
  {
    question: "Which referencing style should I use?",
    answer:
      "Use the referencing style required by your university, department or supervisor. APA, MLA, Chicago, Harvard and IEEE are examples of established systems; there is no single style that is correct for every discipline.",
  },
];

function Resources() {
  const featuredGuides = resourceGuides.slice(0, 4);

  return (
    <main className="resources-page">
      <SEO
        title="Research Resources & Guides"
        description="Free academic research templates, thesis writing guidelines, citation manuals (APA, Harvard, IEEE), and dissertation toolkits."
        keywords="Thesis Templates, Research Guidelines, Citation Styles, Academic Writing Resources"
      />
      <Section className="resources-hero" spacing="compact">
        <Container>
          <div className="resources-hero__grid">
            <div className="resources-hero__content">
              <span className="eyebrow">Research Resources</span>

              <h1 className="section-title">
                Learn how to do research with clarity.
              </h1>

              <p className="body-text">
                Practical guidance for choosing a topic, developing a proposal,
                reviewing literature, selecting methodology, analysing data and
                completing your academic work.
              </p>

              <Link to="#research-guides" className="resources-hero__scroll">
                Explore the guides
                <span>↓</span>
              </Link>
            </div>

            <div className="resources-hero__overview">
              <div className="resources-hero__overview-head">
                <span className="label">Research journey</span>

                <span className="resources-hero__overview-count">
                  07 Guides
                </span>
              </div>

              <div className="resources-hero__overview-list">
                {featuredGuides.map((guide) => (
                  <Link
                    to={`/resources/${guide.id}`}
                    key={guide.id}
                    className="resources-hero__overview-item"
                  >
                    <span>{guide.number}</span>

                    <strong>{guide.shortTitle}</strong>

                    <span>↗</span>
                  </Link>
                ))}

                <div className="resources-hero__overview-more">
                  <span>05—07</span>
                  <span>Analysis, writing & submission</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section className="resources-guides" tone="surface" spacing="compact">
        <Container>
          <div id="research-guides" className="resources-guides__heading">
            <SectionHeader
              eyebrow="Research Guides"
              title="From your first idea to your final submission."
              subtitle="Choose the stage you are working on and learn what to do, why it matters and what to check before moving forward."
            />
          </div>

          <div className="resource-guide-grid">
            {resourceGuides.map((guide) => (
              <Link
                key={guide.id}
                to={`/resources/${guide.id}`}
                className="resource-guide-card"
              >
                <div className="resource-guide-card__top">
                  <span className="resource-guide-card__number">
                    {guide.number}
                  </span>

                  <span className="resource-guide-card__arrow">↗</span>
                </div>

                <div className="resource-guide-card__body">
                  <span className="label">{guide.category}</span>

                  <h3 className="card-title">{guide.title}</h3>

                  <p className="body-text-small">{guide.description}</p>
                </div>

                <span className="resource-guide-card__link">Read guide</span>
              </Link>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="resources-faq" spacing="compact">
        <Container narrow>
          <SectionHeader
            eyebrow="FAQs"
            title="Questions students often ask."
            subtitle="A few practical answers before you begin your research journey."
          />

          <div className="resources-faq__list">
            {faqs.map((faq) => (
              <details className="resources-faq__item" key={faq.question}>
                <summary>
                  <span>{faq.question}</span>
                  <span className="resources-faq__icon">+</span>
                </summary>

                <div className="resources-faq__answer">
                  <p className="body-text">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="resources-final-cta" tone="dark" spacing="compact">
        <Container>
          <div className="resources-final-cta__inner">
            <div>
              <span className="eyebrow">Need guidance?</span>

              <h2 className="section-title">
                Research becomes easier when the next step is clear.
              </h2>

              <p className="body-text">
                If you already know where you are stuck, you do not have to
                figure out the entire research process alone.
              </p>
            </div>

            <Button to="/contact">Talk to Us</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Resources;
