import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import Section from "../../components/common/Section/Section";

function ServicesHero() {
  return (
    <Section className="services-hero">
      <Container>
        <div className="services-hero__layout">
          <div className="services-hero__content">
            <span className="eyebrow">OUR SERVICES</span>

            <h1 className="section-title services-hero__title">
              Academic Support for Every Research Stage
            </h1>

            <p className="body-text services-hero__description">
              From assignments and topic selection to thesis submission, receive
              structured academic guidance at every step of your research
              journey.
            </p>

            <div className="services-hero__actions">
              <Button to="#academic-work">Explore Services</Button>

              <Button to="/contact" variant="secondary">
                Talk to an Expert
              </Button>
            </div>
          </div>

          <div className="services-hero__visual" aria-hidden="true">
            <div className="services-hero__diagram">
              <span className="services-hero__node services-hero__node--one">
                01
              </span>

              <span className="services-hero__node services-hero__node--two">
                02
              </span>

              <span className="services-hero__node services-hero__node--three">
                03
              </span>

              <span className="services-hero__node services-hero__node--four">
                04
              </span>

              <div className="services-hero__center">
                <span>RESEARCH</span>
                <strong>JOURNEY</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}

export default ServicesHero;
