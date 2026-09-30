import { socialLinks } from "../../../data/socialLinks";
import "./FloatingWhatsapp.css";

const FloatingWhatsApp = () => {
  const whatsapp = socialLinks.find((social) => social.name === "WhatsApp");

  return (
    <a
      href={whatsapp.href}
      className="floating-whatsapp"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with Thesis Universe on WhatsApp"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path d="M20 4.1A10 10 0 0 0 3.5 16.2L2 22l5.9-1.5A10 10 0 1 0 20 4.1Zm-8 16a8.1 8.1 0 0 1-4.1-1.1l-.3-.2-3.5.9.9-3.4-.2-.3A8.1 8.1 0 1 1 12 20.1Zm4.4-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.1-.3.2-.5.1a6.6 6.6 0 0 1-3.3-2.9c-.1-.2 0-.3.1-.5l.4-.5c.1-.2.2-.3.1-.5l-.6-1.5c-.2-.4-.3-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 2.2.9 2.6.7 3.1.7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2-.1-.1-.2-.1-.4-.2Z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsApp;
