import { forwardRef } from "react";

import "./Section.css";

const Section = forwardRef(
  (
    { children, className = "", size = "default", background = "default", id },
    ref
  ) => {
    const classes = [
      "section",
      size !== "default" ? `section--${size}` : "",
      background !== "default" ? `section--${background}` : "",
      className,
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <section ref={ref} className={classes} id={id}>
        {children}
      </section>
    );
  }
);

Section.displayName = "Section";

export default Section;
