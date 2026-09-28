import { BrowserRouter, Route, Routes } from "react-router-dom";
import SEO from "./components/common/SEO/SEO";
import Footer from "./components/layout/Footer/Footer";

import Header from "./components/layout/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import ResourceDetail from "./pages/Resources/ResourceDetail";
import Resources from "./pages/Resources/Resources";
import Services from "./pages/Services/Services";
import FinalCTA from "./sections/FinalCTA/FinalCTA";
import Hero from "./sections/Hero/Hero";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import ResearchConstellation from "./sections/ResearchConstellation/ResearchConstellation";
import ResearchLab from "./sections/ResearchLab/ResearchLab";
import WhyThesisUniverse from "./sections/WhyThesisUniverse/WhyThesisUniverse";

const Home = () => (
  <main>
    <SEO
      title="Academic Research & Dissertation Guidance"
      description="Professional thesis consultation, proposal defense coaching, and research methodology support for graduate and postgraduate scholars."
      keywords="Thesis Services, Thesis in Nepal, Thesis Consulting, Dissertation Defense, Research Proposal, Academic Research Support"
    />
    <Hero />
    <ResearchConstellation />
    <HowItWorks />
    <WhyThesisUniverse />
    <ResearchLab />
    <FinalCTA />
  </main>
);

const PlaceholderPage = ({ title }) => (
  <main>
    <div className="container">
      <div style={{ paddingBlock: "6rem" }}>
        <h1 className="page-title">{title}</h1>
      </div>
    </div>
  </main>
);

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/services" element={<Services />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/about" element={<About />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/resources/:guideId" element={<ResourceDetail />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
