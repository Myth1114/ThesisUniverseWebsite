import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import "./UniversePreview.css";

const planets = [
  {
    id: "topic",
    label: "Topic Selection",
    size: "one",
    start: -70,
    duration: 25,
    direction: 1,
    accent: true,
  },
  {
    id: "proposal",
    label: "Proposal",
    size: "two",
    start: 15,
    duration: 32,
    direction: -1,
    accent: false,
  },
  {
    id: "literature",
    label: "Literature Review",
    size: "three",
    start: 105,
    duration: 39,
    direction: 1,
    accent: false,
  },
  {
    id: "methodology",
    label: "Methodology",
    size: "four",
    start: 195,
    duration: 46,
    direction: -1,
    accent: false,
  },
  {
    id: "analysis",
    label: "Analysis",
    size: "five",
    start: 285,
    duration: 54,
    direction: 1,
    accent: true,
  },
];

const UniversePreview = () => {
  const rootRef = useRef(null);
  const orbitRefs = useRef([]);

  useEffect(() => {
    const context = gsap.context(() => {
      const validOrbits = orbitRefs.current.filter(Boolean);

      /*
       * Set every orbit at a different starting point.
       */
      validOrbits.forEach((orbit, index) => {
        gsap.set(orbit, {
          rotation: planets[index].start,
        });
      });

      /*
       * Intro.
       *
       * IMPORTANT:
       * We do not animate transform/scale on the
       * positioned orbit elements anymore.
       */
      const timeline = gsap.timeline({
        defaults: {
          ease: "power3.out",
        },
      });

      timeline
        .from(".universe-preview__core-inner", {
          scale: 0.7,
          opacity: 0,
          duration: 0.8,
        })
        .from(
          ".universe-preview__orbit-ring",
          {
            opacity: 0,
            duration: 0.7,
            stagger: 0.08,
          },
          "-=0.4"
        )
        .from(
          ".universe-preview__planet",
          {
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.35"
        );

      /*
       * Animate each orbit directly through its ref.
       */
      validOrbits.forEach((orbit, index) => {
        const planet = planets[index];

        gsap.to(orbit, {
          rotation: planet.start + 360 * planet.direction,

          duration: planet.duration,
          repeat: -1,
          ease: "none",
        });
      });
    }, rootRef);

    return () => context.revert();
  }, []);

  return (
    <div
      ref={rootRef}
      className="universe-preview"
      aria-label="Animated Thesis Universe research journey"
    >
      <div className="universe-preview__glow" />

      {planets.map((planet, index) => (
        <div
          key={planet.id}
          className={[
            "universe-preview__orbit",
            `universe-preview__orbit--${planet.size}`,
          ].join(" ")}
          ref={(element) => {
            orbitRefs.current[index] = element;
          }}
        >
          <div className="universe-preview__orbit-ring" />

          <div className="universe-preview__planet">
            <span
              className={[
                "universe-preview__planet-dot",
                planet.accent ? "universe-preview__planet-dot--accent" : "",
              ]
                .filter(Boolean)
                .join(" ")}
            />

            <span className="universe-preview__planet-label">
              {planet.label}
            </span>
          </div>
        </div>
      ))}

      <div className="universe-preview__core">
        <div className="universe-preview__core-inner">
          <span className="universe-preview__core-mark">TU</span>

          <span className="universe-preview__core-title">Thesis Universe</span>

          <span className="universe-preview__core-text">
            Research starts here
          </span>
        </div>
      </div>
    </div>
  );
};

export default UniversePreview;
