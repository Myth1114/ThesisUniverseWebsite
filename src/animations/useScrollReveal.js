import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { animationPresets } from "./animationPresets";

gsap.registerPlugin(ScrollTrigger);

const useScrollReveal = (scopeRef) => {
  useEffect(() => {
    if (!scopeRef.current) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reduceMotion) {
      gsap.set(scopeRef.current.querySelectorAll("[data-reveal]"), {
        opacity: 1,
        clearProps: "transform",
      });

      return;
    }

    const context = gsap.context(() => {
      const elements = gsap.utils.toArray("[data-reveal]", scopeRef.current);

      elements.forEach((element) => {
        const type = element.dataset.reveal || "fadeUp";
        const preset = animationPresets[type] || animationPresets.fadeUp;

        gsap.fromTo(element, preset.from, {
          ...preset.to,

          scrollTrigger: {
            trigger: element,
            start: "top 86%",
            once: true,
          },
        });
      });

      const groups = gsap.utils.toArray(
        "[data-reveal-group]",
        scopeRef.current
      );

      groups.forEach((group) => {
        const children = group.querySelectorAll("[data-reveal-item]");

        if (!children.length) return;

        gsap.fromTo(
          children,
          {
            opacity: 0,
            y: 24,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.65,
            stagger: 0.1,
            ease: "power3.out",

            scrollTrigger: {
              trigger: group,
              start: "top 84%",
              once: true,
            },
          }
        );
      });
    }, scopeRef);

    return () => context.revert();
  }, [scopeRef]);
};

export default useScrollReveal;
