import "./SectionHeader.css";

const SectionHeader = ({
  eyebrow,
  title,
  description,
  align = "left",
  className = "",
}) => {
  const classes = [
    "section-header",
    align === "center" ? "section-header--center" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={classes}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}

      {title && <h2 className="section-title">{title}</h2>}

      {description && <p className="section-subtitle">{description}</p>}
    </div>
  );
};

export default SectionHeader;
