import "./About.css";

import Container from "../../components/common/Container/Container";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import Button from "../../components/common/Button/Button";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import Section from "../../components/common/Section/Section";
import SEO from "../../components/common/SEO/seo";

function About() {
  return (
    <main className="about-page">
      <SEO
        title="About Us"
        description="Learn about Thesis Universe, our academic research mentors, and our commitment to helping scholars achieve academic excellence."
        keywords="About Thesis Universe, Academic Mentors, Research Consultants, Graduate Advisors"
      />
      {/* About Hero */}
      <Section className="about-hero">
        <Container>
          <div className="about-hero__content">
            <span className="eyebrow">ABOUT THESIS UNIVERSE</span>

            <h1 className="section-title about-hero__title">
              Making Academic Research Easier to Understand
            </h1>

            <p className="body-text about-hero__description">
              Thesis Universe provides structured academic guidance for students
              navigating assignments, research projects, dissertations, and
              thesis work.
            </p>

            <Button to="/contact">Talk to Us</Button>
          </div>
        </Container>
      </Section>

      {/* Our Purpose */}
      <Section className="about-purpose section-spacing">
        <Container>
          <div className="about-purpose__layout">
            <div className="about-purpose__heading">
              <span className="eyebrow">OUR PURPOSE</span>

              <h2 className="section-title">
                Helping Students Move Forward with Clarity
              </h2>
            </div>

            <div className="about-purpose__content">
              <p className="body-text">
                Academic research can feel complicated, especially when students
                are unsure where to begin or how to move from one stage to the
                next.
              </p>

              <p className="body-text">
                Thesis Universe exists to make that process more manageable
                through clear explanations, structured guidance, and practical
                academic support.
              </p>

              <p className="body-text">
                Our focus is not simply on completing academic tasks. We aim to
                help students understand their work, develop stronger research
                habits, and approach their academic responsibilities with
                greater confidence.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      {/* Our Approach */}
      <Section className="about-approach section-spacing">
        <Container>
          <SectionHeader
            eyebrow="OUR APPROACH"
            title="Guidance Built Around Your Academic Journey"
            description="Every student has different requirements, challenges, and goals. Our approach is designed to provide support that is clear, practical, and focused on individual needs."
          />

          <div className="about-approach__grid">
            <article className="about-approach__item">
              <span className="about-approach__number">01</span>

              <h3 className="card-title">Guidance</h3>

              <p className="body-text">
                Understand each stage of your academic work through clear
                explanations and structured direction.
              </p>
            </article>

            <article className="about-approach__item">
              <span className="about-approach__number">02</span>

              <h3 className="card-title">Quality</h3>

              <p className="body-text">
                Work toward stronger academic structure, consistency,
                presentation, and research clarity.
              </p>
            </article>

            <article className="about-approach__item">
              <span className="about-approach__number">03</span>

              <h3 className="card-title">Student Focused</h3>

              <p className="body-text">
                Receive support that considers your academic level, project
                requirements, and current stage of progress.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* Academic Support Philosophy */}
      <Section className="about-philosophy section-spacing">
        <Container>
          <div className="about-philosophy__layout">
            <div className="about-philosophy__heading">
              <span className="eyebrow">OUR COMMITMENT</span>

              <h2 className="section-title">
                Support That Encourages Academic Confidence
              </h2>
            </div>

            <div className="about-philosophy__content">
              <p className="body-text">
                We believe students benefit most when academic support helps
                them understand the reasoning behind their work.
              </p>

              <p className="body-text">
                From choosing a topic to preparing for final submission, we
                encourage a process based on collaboration, feedback, and
                continuous improvement.
              </p>

              <p className="body-text">
                Our goal is to help make research more approachable while
                encouraging students to remain actively involved in their
                academic journey.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <FinalCTA />
    </main>
  );
}

export default About;
