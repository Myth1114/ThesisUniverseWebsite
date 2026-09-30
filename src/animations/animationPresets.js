export const animationPresets = {
  fadeUp: {
    from: {
      opacity: 0,
      y: 28,
    },
    to: {
      opacity: 1,
      y: 0,
      duration: 0.75,
      ease: "power3.out",
    },
  },

  fadeUpSmall: {
    from: {
      opacity: 0,
      y: 16,
    },
    to: {
      opacity: 1,
      y: 0,
      duration: 0.6,
      ease: "power3.out",
    },
  },

  fade: {
    from: {
      opacity: 0,
    },
    to: {
      opacity: 1,
      duration: 0.7,
      ease: "power2.out",
    },
  },

  scaleIn: {
    from: {
      opacity: 0,
      scale: 0.94,
    },
    to: {
      opacity: 1,
      scale: 1,
      duration: 0.8,
      ease: "power3.out",
    },
  },

  slideLeft: {
    from: {
      opacity: 0,
      x: 32,
    },
    to: {
      opacity: 1,
      x: 0,
      duration: 0.75,
      ease: "power3.out",
    },
  },

  slideRight: {
    from: {
      opacity: 0,
      x: -32,
    },
    to: {
      opacity: 1,
      x: 0,
      duration: 0.75,
      ease: "power3.out",
    },
  },
};
