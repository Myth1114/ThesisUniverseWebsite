import AcademicWork from "./AcademicWork";
import ResearchJourney from "./ResearchJourney";
import "./Services.css";
import ServicesHero from "./ServicesHero";

function Services() {
  return (
    <main className="services-page">
      <ServicesHero />
      <AcademicWork />
      <ResearchJourney />
    </main>
  );
}

export default Services;
