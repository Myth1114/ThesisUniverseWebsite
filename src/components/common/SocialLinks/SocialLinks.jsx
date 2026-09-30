import { socialLinks } from "../../../data/socialLinks";
import "./SocialLinks.css";

const icons = {
  Instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" className="social-links__icon-fill" />
    </svg>
  ),

  Facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M14 8h3V4h-3c-3.3 0-5 1.9-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1Z" />
    </svg>
  ),

  Email: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  ),

  WhatsApp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20 4.1A10 10 0 0 0 3.5 16.2L2 22l5.9-1.5A10 10 0 1 0 20 4.1Zm-8 16a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.5.9.9-3.4-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.4-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.2-.3.1-.5l-.6-1.5c-.2-.4-.3-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2Z" />
    </svg>
  ),
};

const SocialLinks = ({ className = "" }) => {
  return (
    <div className={`social-links ${className}`.trim()}>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.href}
          className="social-links__item"
          target={social.type === "external" ? "_blank" : undefined}
          rel={social.type === "external" ? "noreferrer" : undefined}
          aria-label={social.name}
        >
          {icons[social.name]}
          <span>{social.name}</span>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
