import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import Button from "../../components/common/Button/Button";
import Container from "../../components/common/Container/Container";
import UniversePreview from "../../components/universe/UniversePreview/UniversePreview";

import "./Hero.css";

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const context = gsap.context(() => {
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".hero__eyebrow", {
          y: 18,
          opacity: 0,
          duration: 0.55,
        })
        .from(
          ".hero__title-line",
          {
            yPercent: 115,
            duration: 0.8,
            stagger: 0.1,
          },
          "-=0.2"
        )
        .from(
          ".hero__description",
          {
            y: 20,
            opacity: 0,
            duration: 0.65,
          },
          "-=0.35"
        )
        .from(
          ".hero__actions",
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
          },
          "-=0.35"
        )
        .from(
          ".hero__services",
          {
            opacity: 0,
            duration: 0.55,
          },
          "-=0.25"
        );
    }, heroRef);

    return () => context.revert();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <Container wide>
        <div className="hero__grid">
          <div className="hero__content">
            <p className="eyebrow hero__eyebrow">Academic Research Solutions</p>

            <h1 className="display-title hero__title">
              <span className="hero__title-row">
                <span className="hero__title-line">Your Research Has</span>
              </span>

              <span className="hero__title-row">
                <span className="hero__title-line">
                  <span className="hero__title-highlight">A Universe</span> To
                  Explore.
                </span>
              </span>
            </h1>

            <p className="section-subtitle hero__description">
              From your first research idea to final submission, explore every
              stage of academic research with structured guidance from Thesis
              Universe.
            </p>

            <div className="hero__actions">
              <Button to="/contact" variant="primary">
                Start Your Research
              </Button>

              <Button to="/services" variant="secondary">
                Explore Services
              </Button>
            </div>

            <div className="hero__services">
              <span className="label hero__services-label">Support across</span>

              <p className="body-text-small hero__services-list">
                Topic Selection · Proposal · Literature Review · Methodology ·
                Analysis · Final Submission
              </p>
            </div>
          </div>

          <div className="hero__visual">
            <UniversePreview />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
