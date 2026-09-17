import "./Section.css";

const Section = ({
  children,
  className = "",
  size = "default",
  background = "default",
  id,
}) => {
  const classes = [
    "section",
    size !== "default" ? `section--${size}` : "",
    background !== "default" ? `section--${background}` : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <section className={classes} id={id}>
      {children}
    </section>
  );
};

export default Section;
