import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";

import "./WhyThesisUniverse.css";

const reasons = [
  {
    number: "01",
    title: "Expert guidance",
    description:
      "Get support from your first research idea through to the final stages of your academic work.",
  },
  {
    number: "02",
    title: "Support at every stage",
    description:
      "From topic selection and proposal writing to literature review, methodology, analysis and final submission.",
  },
  {
    number: "03",
    title: "Student focused",
    description:
      "Academic support is shaped around your current stage, study requirements and the direction of your research.",
  },
  {
    number: "04",
    title: "Quality throughout",
    description:
      "Reliable support across assignments, dissertations and thesis work with a clear focus on academic quality.",
  },
];

const WhyThesisUniverse = () => {
  return (
    <Section background="soft" className="why-thesis-universe">
      <Container wide>
        <div className="why-thesis-universe__layout">
          <div className="why-thesis-universe__intro">
            <p className="eyebrow">Why Thesis Universe</p>

            <h2 className="section-title">
              Expert guidance from research idea to final submission.
            </h2>

            <p className="section-subtitle">
              Thesis Universe brings together academic guidance, quality and
              student-focused support across every major stage of the research
              journey.
            </p>
          </div>

          <div className="why-thesis-universe__reasons">
            {reasons.map((reason) => (
              <article
                key={reason.number}
                className="why-thesis-universe__reason"
              >
                <span className="why-thesis-universe__number">
                  {reason.number}
                </span>

                <div className="why-thesis-universe__reason-content">
                  <h3 className="card-title">{reason.title}</h3>

                  <p className="body-text why-thesis-universe__description">
                    {reason.description}
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

export default WhyThesisUniverse;
