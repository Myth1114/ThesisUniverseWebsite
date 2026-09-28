import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import Button from "../../common/Button/Button";
import Container from "../../common/Container/Container";
import MobileMenu from "../MobileMenu/MobileMenu";

import { navigation } from "../../../data/navigation.js";

import "./Header.css";
import Logo from "../../common/Logo/Logo";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="site-header">
        <Container wide>
          <div className="site-header__inner">
            <Logo className="site-header__brand" />

            <nav className="site-header__nav" aria-label="Primary navigation">
              {navigation.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    [
                      "site-header__nav-link",
                      isActive ? "site-header__nav-link--active" : "",
                    ]
                      .filter(Boolean)
                      .join(" ")
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="site-header__actions">
              <Button to="/contact" variant="primary">
                Start Your Research
              </Button>

              <button
                className="site-header__menu-toggle"
                type="button"
                aria-label="Open navigation menu"
                aria-expanded={isMenuOpen}
                aria-controls="mobile-menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </Container>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={closeMenu}
        navigation={navigation}
      />
    </>
  );
};

export default Header;
