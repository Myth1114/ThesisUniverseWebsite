import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/layout/Footer/Footer";

import Header from "./components/layout/Header/Header";
import Services from "./pages/Services/Services";
import FinalCTA from "./sections/FinalCTA/FinalCTA";
import Hero from "./sections/Hero/Hero";
import HowItWorks from "./sections/HowItWorks/HowItWorks";
import ResearchConstellation from "./sections/ResearchConstellation/ResearchConstellation";
import ResearchLab from "./sections/ResearchLab/ResearchLab";
import WhyThesisUniverse from "./sections/WhyThesisUniverse/WhyThesisUniverse";

const Home = () => (
  <main>
    <Hero />
    <ResearchConstellation />
    <HowItWorks />
    <WhyThesisUniverse />
    <ResearchLab />
    <FinalCTA />
    <div className="container">
      <div style={{ paddingBlock: "6rem" }}>
        <p className="eyebrow">Thesis Universe</p>

        <h1 className="page-title" style={{ marginTop: "1rem" }}>
          Homepage
        </h1>
      </div>
    </div>
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

        <Route
          path="/how-it-works"
          element={<PlaceholderPage title="How It Works" />}
        />

        <Route
          path="/resources"
          element={<PlaceholderPage title="Resources" />}
        />
        <Route path="/about" element={<PlaceholderPage title="About" />} />
        <Route path="/contact" element={<PlaceholderPage title="Contact" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
