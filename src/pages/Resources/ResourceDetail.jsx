import { Link, useParams } from "react-router-dom";
import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import Button from "../../components/common/Button/Button";
import { resourceGuides } from "../../data/resourceGuides";
import "./ResourceDetail.css";
import SEO from "../../components/common/SEO/SEO";

function ResourceDetail() {
  const { guideId } = useParams();

  const guideIndex = resourceGuides.findIndex((item) => item.id === guideId);

  const guide = resourceGuides[guideIndex];
  const formattedTitle = guideId
    ? guideId.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "Resource Guide";

  if (!guide) {
    return (
      <main className="resource-detail">
        <Section spacing="compact">
          <Container narrow>
            <div className="resource-detail__not-found">
              <span className="eyebrow">Research Resources</span>

              <h1 className="section-title">Guide not found.</h1>

              <p className="body-text">
                The research guide you are looking for does not exist or may
                have moved.
              </p>

              <Button to="/resources">Back to Resources</Button>
            </div>
          </Container>
        </Section>
      </main>
    );
  }

  const previousGuide = guideIndex > 0 ? resourceGuides[guideIndex - 1] : null;

  const nextGuide =
    guideIndex < resourceGuides.length - 1
      ? resourceGuides[guideIndex + 1]
      : null;

  return (
    <main className="resource-detail">
      <SEO
        title={formattedTitle}
        description={`Read our in-depth research guide on ${formattedTitle}. Complete framework and templates provided by Thesis Universe.`}
      />
      <Section className="resource-detail__hero" spacing="compact">
        <Container>
          <div className="resource-detail__hero-grid">
            <div className="resource-detail__hero-content">
              <div className="resource-detail__meta">
                <span className="eyebrow">Research Guide</span>

                <span className="resource-detail__number">{guide.number}</span>
              </div>

              <span className="label">{guide.category}</span>

              <h1 className="section-title">{guide.title}</h1>

              <p className="body-text">{guide.introduction}</p>
            </div>

            <div className="resource-detail__overview">
              <span className="label">Inside this guide</span>

              <div className="resource-detail__overview-main">
                <strong>
                  {String(guide.sections.length).padStart(2, "0")}
                </strong>

                <span>sections</span>
              </div>

              <div className="resource-detail__overview-rule" />

              <div className="resource-detail__overview-item">
                <span>Focus</span>
                <strong>{guide.shortTitle}</strong>
              </div>

              <div className="resource-detail__overview-item">
                <span>Includes</span>
                <strong>Examples & checklist</strong>
              </div>

              <Link
                to="#guide-content"
                className="resource-detail__overview-link"
              >
                Start reading
                <span>↓</span>
              </Link>
            </div>
          </div>
        </Container>
      </Section>

      <Section
        className="resource-detail__content"
        tone="surface"
        spacing="compact"
      >
        <Container>
          <div id="guide-content" className="resource-detail__layout">
            <aside className="resource-detail__sidebar">
              <div className="resource-detail__toc">
                <span className="label">On this page</span>

                <nav aria-label="Guide sections">
                  {guide.sections.map((section, index) => (
                    <a href={`#${section.id}`} key={section.id}>
                      <span>{String(index + 1).padStart(2, "0")}</span>

                      {section.title}
                    </a>
                  ))}
                </nav>
              </div>
            </aside>

            <article className="resource-detail__article">
              {guide.sections.map((section) => (
                <section
                  className="resource-detail__section"
                  id={section.id}
                  key={section.id}
                >
                  <h2 className="section-title">{section.title}</h2>

                  {section.content?.map((paragraph) => (
                    <p className="body-text" key={paragraph}>
                      {paragraph}
                    </p>
                  ))}

                  {section.points && (
                    <ul className="resource-detail__list">
                      {section.points.map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  )}

                  {section.comparison && (
                    <div className="resource-detail__comparison">
                      {section.comparison.map((item) => (
                        <div
                          className="resource-detail__comparison-item"
                          key={item.term}
                        >
                          <span className="label">{item.term}</span>

                          <p className="body-text-small">{item.meaning}</p>
                        </div>
                      ))}
                    </div>
                  )}

                  {section.example && (
                    <div className="resource-detail__example">
                      <span className="label">{section.example.label}</span>

                      <div className="resource-detail__example-flow">
                        {section.example.steps.map((step, index) => (
                          <div
                            className="resource-detail__example-step"
                            key={`${step}-${index}`}
                          >
                            <span>{String(index + 1).padStart(2, "0")}</span>

                            <p className="body-text-small">{step}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {section.note && (
                    <div className="resource-detail__note">
                      <span className="label">Important</span>

                      <p className="body-text-small">{section.note}</p>
                    </div>
                  )}

                  {section.checklist && (
                    <ul className="resource-detail__checklist">
                      {section.checklist.map((item) => (
                        <li key={item}>
                          <span>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              <div className="resource-detail__principle">
                <span className="label">Key Principle</span>

                <p>{guide.keyPrinciple}</p>
              </div>

              <div className="resource-detail__final-check">
                <span className="label">Practical Checklist</span>

                <h2 className="section-title">Before you move forward.</h2>

                <ul>
                  {guide.checklist.map((item) => (
                    <li key={item}>
                      <span>✓</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </Container>
      </Section>

      <Section className="resource-detail__navigation" spacing="compact">
        <Container>
          <div className="resource-detail__nav">
            {previousGuide ? (
              <Link
                to={`/resources/${previousGuide.id}`}
                className="resource-detail__nav-card"
              >
                <span className="label">Previous Guide</span>
                <strong>← {previousGuide.shortTitle}</strong>
              </Link>
            ) : (
              <Link to="/resources" className="resource-detail__nav-card">
                <span className="label">Resources</span>
                <strong>← All Research Guides</strong>
              </Link>
            )}

            {nextGuide ? (
              <Link
                to={`/resources/${nextGuide.id}`}
                className="resource-detail__nav-card resource-detail__nav-card--next"
              >
                <span className="label">Next Guide</span>
                <strong>{nextGuide.shortTitle} →</strong>
              </Link>
            ) : (
              <Link
                to="/resources"
                className="resource-detail__nav-card resource-detail__nav-card--next"
              >
                <span className="label">Resources</span>
                <strong>All Research Guides →</strong>
              </Link>
            )}
          </div>
        </Container>
      </Section>

      <Section className="resource-detail__cta" tone="dark" spacing="compact">
        <Container>
          <div className="resource-detail__cta-inner">
            <div>
              <span className="eyebrow">Need help with your research?</span>

              <h2 className="section-title">
                You can move forward with the right guidance.
              </h2>
            </div>

            <Button to="/contact">Talk to Us</Button>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default ResourceDetail;
