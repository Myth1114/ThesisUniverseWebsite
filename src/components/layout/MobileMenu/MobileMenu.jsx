import { NavLink } from "react-router-dom";

import Button from "../../common/Button/Button";
import Logo from "../../common/Logo/Logo";

import "./MobileMenu.css";

const MobileMenu = ({ isOpen, onClose, navigation }) => {
  return (
    <div
      className={["mobile-menu", isOpen ? "mobile-menu--open" : ""]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={!isOpen}
    >
      <button
        className="mobile-menu__backdrop"
        type="button"
        aria-label="Close navigation menu"
        onClick={onClose}
      />

      <aside
        className="mobile-menu__panel"
        id="mobile-menu"
        aria-label="Mobile navigation"
      >
        <div className="mobile-menu__header">
          <Logo className="mobile-menu__brand" />

          <button
            className="mobile-menu__close"
            type="button"
            aria-label="Close navigation menu"
            onClick={onClose}
          >
            <span />
            <span />
          </button>
        </div>

        <nav className="mobile-menu__nav">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              onClick={onClose}
              className={({ isActive }) =>
                [
                  "mobile-menu__link",
                  isActive ? "mobile-menu__link--active" : "",
                ]
                  .filter(Boolean)
                  .join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="mobile-menu__footer">
          <Button to="/contact" variant="primary" onClick={onClose}>
            Start Your Research
          </Button>
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;
