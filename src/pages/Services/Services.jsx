import AcademicWork from "./AcademicWork";
import ResearchJourney from "./ResearchJourney";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import ServicesHero from "./ServicesHero";

import "./Services.css";

function Services() {
  return (
    <main className="services-page">
      <ServicesHero />
      <AcademicWork />
      <ResearchJourney />
      <FinalCTA />
    </main>
  );
}

export default Services;
