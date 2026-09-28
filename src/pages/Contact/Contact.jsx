import { useState } from "react";
import { ArrowUpRight, Clock3, Mail, MessageCircle, Send } from "lucide-react";

import Section from "../../components/common/Section/Section";
import Container from "../../components/common/Container/Container";
import SectionHeader from "../../components/common/SectionHeader/SectionHeader";
import Button from "../../components/common/Button/Button";

import "./Contact.css";
import SEO from "../../components/common/SEO/SEO";

const supportAreas = [
  "Assignment",
  "Dissertation",
  "Thesis",
  "Topic Selection",
  "Research Proposal",
  "Literature Review",
  "Methodology",
  "Data Analysis",
  "Academic Writing",
];

const researchStages = [
  "I am choosing a topic",
  "I am preparing a proposal",
  "I am reviewing literature",
  "I am working on methodology",
  "I am collecting data",
  "I am analysing data",
  "I am writing my thesis/dissertation",
  "I am preparing the final submission",
  "I am not sure yet",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  academicLevel: "",
  supportArea: "",
  researchStage: "",
  message: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialForm);
  const [status, setStatus] = useState("idle");
  const [feedback, setFeedback] = useState("");

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((current) => ({
      ...current,
      [name]: value,
    }));

    if (status !== "idle") {
      setStatus("idle");
      setFeedback("");
    }
  }

  function handleSubmit(event) {
    event.preventDefault();

    setStatus("success");
    setFeedback(
      "Thanks for reaching out. Your request has been received. We’ll get back to you with the next step."
    );

    setFormData(initialForm);
  }

  return (
    <main className="contact-page">
      <SEO
        title="Contact Us"
        description="Get in touch with Thesis Universe academic advisors to discuss your research project, dissertation, or defense preparation."
        keywords="Contact Academic Consultant, Schedule Consultation, Thesis Inquiries"
      />
      {/* Hero */}
      <Section className="contact-hero" spacing="compact">
        <Container>
          <div className="contact-hero__grid">
            <div className="contact-hero__content">
              <p className="eyebrow">GET IN TOUCH</p>

              <h1 className="section-title">Let’s talk about your research.</h1>

              <p className="body-text">
                Whether you are choosing a topic, preparing a proposal,
                analysing data, or finishing your thesis, tell us where you are
                in your research journey and what you need help with.
              </p>

              <div className="contact-hero__actions">
                <a className="contact-page__text-link" href="#support-form">
                  Request support
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </a>

                <a
                  className="contact-page__text-link contact-page__text-link--muted"
                  href="https://www.instagram.com/thesisuniversenepal/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Instagram
                  <ArrowUpRight size={17} strokeWidth={1.8} />
                </a>
              </div>
            </div>

            <div className="contact-hero__panel">
              <div className="contact-hero__panel-top">
                <span className="label">RESEARCH SUPPORT</span>

                <span className="contact-hero__status">
                  <span />
                  ONLINE
                </span>
              </div>

              <div className="contact-hero__panel-body">
                <span className="contact-hero__panel-number">01</span>

                <h2 className="card-title">Start with where you are.</h2>

                <p className="body-text-small">
                  You do not need to have everything figured out before reaching
                  out. A clear description of your current stage is enough to
                  start the conversation.
                </p>
              </div>

              <div className="contact-hero__panel-footer">
                <Clock3 size={17} strokeWidth={1.7} />
                <span>Academic guidance • Online</span>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* Direct contact + form */}
      <Section className="contact-support" spacing="default">
        <Container>
          <div className="contact-support__grid">
            <div className="contact-support__info">
              <SectionHeader
                eyebrow="Contact"
                title="Reach out directly."
                subtitle="Choose whichever channel is most comfortable for you. For detailed academic requests, the support form helps us understand what you need before responding."
              />

              <div className="contact-support__channels">
                <a
                  className="contact-channel"
                  href="mailto:thesisuniversenepal@gmail.com"
                >
                  <span className="contact-channel__icon">
                    <Mail size={19} strokeWidth={1.7} />
                  </span>

                  <span className="contact-channel__content">
                    <span className="label">EMAIL</span>
                    <strong>thesisuniversenepal@gmail.com</strong>
                  </span>

                  <ArrowUpRight
                    className="contact-channel__arrow"
                    size={18}
                    strokeWidth={1.7}
                  />
                </a>

                <a
                  className="contact-channel"
                  href="https://wa.me/9779705428101"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-channel__icon">
                    <MessageCircle size={19} strokeWidth={1.7} />
                  </span>

                  <span className="contact-channel__content">
                    <span className="label">WHATSAPP</span>
                    <strong>Start a conversation</strong>
                  </span>

                  <ArrowUpRight
                    className="contact-channel__arrow"
                    size={18}
                    strokeWidth={1.7}
                  />
                </a>
              </div>

              <div className="contact-support__note">
                <span className="contact-support__note-mark" />

                <div>
                  <p className="card-title">Not sure what you need?</p>

                  <p className="body-text-small">
                    That is completely fine. Tell us what you are currently
                    working on and where you are stuck. We can start from there.
                  </p>
                </div>
              </div>
            </div>

            <div className="contact-form-card" id="support-form">
              <div className="contact-form-card__header">
                <p className="eyebrow">REQUEST SUPPORT</p>

                <h2 className="section-title">Tell us about your research.</h2>

                <p className="body-text-small">
                  Fields marked with * are required. Keep the message brief—we
                  can clarify the details afterwards.
                </p>
              </div>

              {status === "success" && (
                <div className="contact-form__feedback" role="status">
                  <strong>Request received.</strong>
                  <span>{feedback}</span>
                </div>
              )}

              {status === "error" && (
                <div
                  className="contact-form__feedback contact-form__feedback--error"
                  role="alert"
                >
                  <strong>Something went wrong.</strong>
                  <span>{feedback}</span>
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="contact-form__fields">
                  <div className="contact-form__field">
                    <label htmlFor="contact-name">
                      Name <span>*</span>
                    </label>

                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      value={formData.name}
                      onChange={handleChange}
                      autoComplete="name"
                      required
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-email">
                      Email <span>*</span>
                    </label>

                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-phone">WhatsApp / Phone</label>

                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                    />
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-level">Academic level</label>

                    <select
                      id="contact-level"
                      name="academicLevel"
                      value={formData.academicLevel}
                      onChange={handleChange}
                    >
                      <option value="">Select your level</option>
                      <option value="school">School</option>
                      <option value="undergraduate">Undergraduate</option>
                      <option value="postgraduate">Postgraduate</option>
                      <option value="mphil">MPhil / Research</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-support">
                      What do you need help with? <span>*</span>
                    </label>

                    <select
                      id="contact-support"
                      name="supportArea"
                      value={formData.supportArea}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select an area</option>

                      {supportAreas.map((area) => (
                        <option key={area} value={area}>
                          {area}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-form__field">
                    <label htmlFor="contact-stage">
                      Where are you in your research?
                    </label>

                    <select
                      id="contact-stage"
                      name="researchStage"
                      value={formData.researchStage}
                      onChange={handleChange}
                    >
                      <option value="">Select your stage</option>

                      {researchStages.map((stage) => (
                        <option key={stage} value={stage}>
                          {stage}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="contact-form__field contact-form__field--full">
                    <label htmlFor="contact-message">
                      Tell us a little more <span>*</span>
                    </label>

                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="6"
                      placeholder="For example: I have selected my topic but I am unsure how to develop the research questions."
                      required
                    />
                  </div>
                </div>

                <div className="contact-form__footer">
                  <p className="body-text-small">
                    Please do not include passwords, confidential documents, or
                    other sensitive information in this form.
                  </p>

                  <Button type="submit">
                    Send request
                    <Send size={16} strokeWidth={1.8} />
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Section>

      {/* Support areas */}
      <Section className="contact-areas" tone="surface" spacing="default">
        <Container>
          <SectionHeader
            eyebrow="What We Can Help With"
            title="Wherever you are in the research journey."
            subtitle="Start with the part of your academic work that needs attention. You can ask about one stage or describe the larger problem you are working through."
          />

          <div className="contact-areas__grid">
            {supportAreas.map((area, index) => (
              <div className="contact-area" key={area}>
                <span className="contact-area__number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <h3 className="card-title">{area}</h3>

                <ArrowUpRight
                  size={17}
                  strokeWidth={1.7}
                  className="contact-area__arrow"
                />
              </div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Process */}
      <Section className="contact-process" spacing="default">
        <Container>
          <SectionHeader
            eyebrow="What Happens Next"
            title="A simple conversation can clarify the next step."
            subtitle="There is no need to prepare a perfect explanation before contacting us."
          />

          <div className="contact-process__grid">
            <article className="contact-process__item">
              <span>01</span>
              <h3 className="card-title">Tell us where you are.</h3>
              <p className="body-text-small">
                Share your academic level, research stage, and the part you are
                currently working on.
              </p>
            </article>

            <article className="contact-process__item">
              <span>02</span>
              <h3 className="card-title">We understand the request.</h3>
              <p className="body-text-small">
                We review the information and clarify anything that needs more
                context.
              </p>
            </article>

            <article className="contact-process__item">
              <span>03</span>
              <h3 className="card-title">We discuss the next step.</h3>
              <p className="body-text-small">
                You can then decide how you want to proceed with your academic
                work.
              </p>
            </article>
          </div>
        </Container>
      </Section>

      {/* Final CTA */}
      <Section className="contact-final" tone="dark" spacing="compact">
        <Container narrow>
          <div className="contact-final__content">
            <p className="eyebrow">START HERE</p>

            <h2 className="section-title">Not sure where to begin?</h2>

            <p className="body-text">
              You do not need to have the entire research journey figured out.
              Tell us what you are working on and start with the next question.
            </p>

            <a className="contact-final__link" href="#support-form">
              Request research support
              <ArrowUpRight size={18} strokeWidth={1.8} />
            </a>
          </div>
        </Container>
      </Section>
    </main>
  );
}

export default Contact;
