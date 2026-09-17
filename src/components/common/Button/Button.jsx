import { Link } from "react-router-dom";

import "./Button.css";

const Button = ({
  children,
  to,
  href,
  variant = "primary",
  type = "button",
  className = "",
  ...props
}) => {
  const classes = `btn btn--${variant} ${className}`.trim();

  if (to) {
    return (
      <Link className={classes} to={to} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a
        className={classes}
        href={href}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={classes} type={type} {...props}>
      {children}
    </button>
  );
};

export default Button;
