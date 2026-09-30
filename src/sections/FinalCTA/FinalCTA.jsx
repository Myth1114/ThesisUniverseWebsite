import { useRef } from "react";
import Button from "../../components/common/Button/Button";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";

import thesisUniverseLogo from "../../assets/images/thesisuniverselogo.jpeg";
import useScrollReveal from "../../animations/useScrollReveal";
import "./FinalCTA.css";

const FinalCTA = () => {
  const sectionRef = useRef(null);

  useScrollReveal(sectionRef);
  return (
    <Section ref={sectionRef} className="final-cta">
      <Container wide>
        <div className="final-cta__inner">
          <div className="final-cta__content" data-reveal="fadeUp">
            <p className="eyebrow final-cta__eyebrow">
              Start Your Research Journey
            </p>

            <h2 className="section-title final-cta__title">
              Every thesis starts with one question.
            </h2>

            <p className="section-subtitle final-cta__description">
              Whether you are choosing a topic, preparing a proposal, working on
              your methodology or moving toward final submission, Thesis
              Universe is here to support the next stage of your academic
              journey.
            </p>

            <div className="final-cta__actions">
              <Button to="/contact" variant="primary">
                Discuss Your Research
              </Button>

              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </div>
          </div>

          <div
            className="final-cta__visual"
            aria-hidden="true"
            data-reveal="scaleIn"
          >
            <div className="final-cta__orbit final-cta__orbit--one" />
            <div className="final-cta__orbit final-cta__orbit--two" />
            <div className="final-cta__orbit final-cta__orbit--three" />

            <span className="final-cta__planet final-cta__planet--1" />
            <span className="final-cta__planet final-cta__planet--2" />
            <span className="final-cta__planet final-cta__planet--3" />
            <span className="final-cta__planet final-cta__planet--4" />
            <span className="final-cta__planet final-cta__planet--5" />
            <span className="final-cta__planet final-cta__planet--6" />
            <span className="final-cta__planet final-cta__planet--7" />
            <span className="final-cta__planet final-cta__planet--8" />
            <span className="final-cta__planet final-cta__planet--9" />

            <div className="final-cta__core">
              <img
                src={thesisUniverseLogo}
                alt=""
                className="final-cta__logo"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default FinalCTA;
