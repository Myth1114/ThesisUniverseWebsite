import { Link } from "react-router-dom";

import logo from "../../../assets/images/thesisuniverselogo.png";

import "./Logo.css";

const Logo = ({ className = "" }) => {
  return (
    <Link
      to="/"
      className={`logo ${className}`}
      aria-label="Thesis Universe home"
    >
      <img src={logo} alt="Thesis Universe" />
    </Link>
  );
};

export default Logo;
