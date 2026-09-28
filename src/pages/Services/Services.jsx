import AcademicWork from "./AcademicWork";
import ResearchJourney from "./ResearchJourney";
import FinalCTA from "../../sections/FinalCTA/FinalCTA";
import ServicesHero from "./ServicesHero";

import "./Services.css";
import SEO from "../../components/common/SEO/seo";

function Services() {
  return (
    <main className="services-page">
      <SEO
        title="Services & Academic Advisory"
        description="Explore our specialized thesis services: research proposal development, literature review synthesis, methodology design, and defense coaching."
        keywords="Thesis Services, Research Proposal Help, Dissertation Coaching, Viva Preparation"
      />
      <ServicesHero />
      <AcademicWork />
      <ResearchJourney />
      <FinalCTA />
    </main>
  );
}

export default Services;
