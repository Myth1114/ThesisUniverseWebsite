import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Button from "../../components/common/Button/Button";
import Container from "../../components/common/Container/Container";
import Section from "../../components/common/Section/Section";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";

import thesisUniverseLogo from "../../assets/images/thesisuniverselogo.jpeg";

import { academicWork, researchJourney } from "../../data/universeStages";

import "./ResearchConstellation.css";

gsap.registerPlugin(ScrollTrigger);

const ResearchConstellation = () => {
  const sectionRef = useRef(null);

  const [activeItem, setActiveItem] = useState(researchJourney[0]);
  const [activeType, setActiveType] = useState("Research Journey");

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 72%",
        },
      });

      timeline
        .from(".research-constellation__hub", {
          scale: 0.7,
          opacity: 0,
          duration: 0.75,
          ease: "power3.out",
        })
        .from(
          ".research-constellation__world",
          {
            y: 28,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.25"
        )
        .from(
          ".research-constellation__path-line",
          {
            scaleY: 0,
            transformOrigin: "top center",
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.15"
        )
        .from(
          ".research-constellation__journey-node",
          {
            y: 20,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
            ease: "power3.out",
          },
          "-=0.45"
        );
    }, sectionRef);

    return () => context.revert();
  }, []);

  const selectItem = (item, type) => {
    setActiveItem(item);
    setActiveType(type);
  };

  return (
    <Section background="soft" className="research-constellation">
      <Container wide>
        <div ref={sectionRef}>
          <SectionHeader
            eyebrow="Explore the Thesis Universe"
            title="Choose your path through the academic universe."
            description="Start with the type of academic work you are completing, then follow the research journey to the stage where you need support."
          />

          <div className="research-constellation__experience">
            {/* ACADEMIC WORK */}
            <div className="research-constellation__academic">
              <div className="research-constellation__group-heading">
                <span className="label">Academic Work</span>

                <p className="body-text-small">What are you working on?</p>
              </div>

              <div className="research-constellation__worlds">
                {academicWork.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={[
                      "research-constellation__world",
                      activeItem.id === item.id
                        ? "research-constellation__world--active"
                        : "",
                    ]
                      .filter(Boolean)
                      .join(" ")}
                    onClick={() => selectItem(item, "Academic Work")}
                  >
                    <span className="research-constellation__world-ring">
                      <span className="research-constellation__world-core">
                        {item.number}
                      </span>
                    </span>

                    <span className="research-constellation__world-title">
                      {item.label}
                    </span>

                    <span className="research-constellation__world-text">
                      {item.description}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* HUB */}
            <div className="research-constellation__hub-zone">
              <span className="research-constellation__hub-line" />

              <div className="research-constellation__hub">
                <div className="research-constellation__hub-glow" />

                <img
                  src={thesisUniverseLogo}
                  alt="Thesis Universe"
                  className="research-constellation__logo"
                />
              </div>

              <span className="research-constellation__hub-line" />
            </div>

            {/* RESEARCH JOURNEY */}
            <div className="research-constellation__journey">
              <div className="research-constellation__group-heading">
                <span className="label">Research Journey</span>

                <p className="body-text-small">Where are you in the process?</p>
              </div>

              <div className="research-constellation__path">
                <span className="research-constellation__path-line" />

                {researchJourney.map((item, index) => {
                  const isRight = index % 2 !== 0;

                  return (
                    <button
                      key={item.id}
                      type="button"
                      className={[
                        "research-constellation__journey-node",
                        isRight
                          ? "research-constellation__journey-node--right"
                          : "",
                        activeItem.id === item.id
                          ? "research-constellation__journey-node--active"
                          : "",
                      ]
                        .filter(Boolean)
                        .join(" ")}
                      onClick={() => selectItem(item, "Research Journey")}
                    >
                      <span className="research-constellation__journey-point">
                        <span className="research-constellation__journey-dot" />
                      </span>

                      <span className="research-constellation__journey-content">
                        <span className="research-constellation__journey-number">
                          {item.number}
                        </span>

                        <span className="research-constellation__journey-title">
                          {item.label}
                        </span>

                        <span className="research-constellation__journey-text">
                          {item.description}
                        </span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* ACTIVE DETAIL */}
            <div className="research-constellation__detail">
              <div className="research-constellation__detail-meta">
                <span className="eyebrow">{activeType}</span>

                <span className="research-constellation__detail-number">
                  {activeItem.number}
                </span>
              </div>

              <div className="research-constellation__detail-content">
                <div>
                  <h3 className="section-title">{activeItem.label}</h3>

                  <p className="section-subtitle">{activeItem.description}</p>
                </div>

                <Button to={activeItem.path} variant="primary">
                  Explore {activeItem.label}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default ResearchConstellation;
