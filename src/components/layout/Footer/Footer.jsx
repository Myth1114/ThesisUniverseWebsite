import { Link } from "react-router-dom";

import Container from "../../common/Container/Container";

import "./Footer.css";

const footerLinks = [
  {
    title: "Explore",
    links: [
      { label: "Services", path: "/services" },
      { label: "How It Works", path: "/how-it-works" },
      { label: "Resources", path: "/resources" },
      { label: "About", path: "/about" },
    ],
  },
  {
    title: "Research",
    links: [
      { label: "Topic Selection", path: "/services/topic-selection" },
      { label: "Proposal", path: "/services/proposal" },
      { label: "Literature Review", path: "/services/literature-review" },
      { label: "Methodology", path: "/services/methodology" },
      { label: "Analysis", path: "/services/analysis" },
    ],
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <Container wide>
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <p className="eyebrow">Thesis Universe</p>

            <h2 className="card-title">
              Academic research support for every stage of the journey.
            </h2>

            <p className="body-text site-footer__brand-text">
              From topic selection and proposal development to analysis and
              final submission.
            </p>
          </div>

          <div className="site-footer__navigation">
            {footerLinks.map((group) => (
              <div key={group.title} className="site-footer__group">
                <span className="label">{group.title}</span>

                <ul className="site-footer__list">
                  {group.links.map((link) => (
                    <li key={link.path}>
                      <Link to={link.path} className="site-footer__link">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="site-footer__group">
              <span className="label">Connect</span>

              <ul className="site-footer__list">
                <li>
                  <a
                    href="https://www.instagram.com/thesisuniversenepal"
                    target="_blank"
                    rel="noreferrer"
                    className="site-footer__link"
                  >
                    Instagram
                  </a>
                </li>

                <li>
                  <Link to="/contact" className="site-footer__link">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <p className="body-text-small">
            © {year} Thesis Universe. All rights reserved.
          </p>

          <p className="body-text-small">Nepal</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
