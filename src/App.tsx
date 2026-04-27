import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import {
  Main,
  Timeline,
  Expertise,
  Project,
  Contact,
  Navigation,
  Footer,
} from "./components";
import PlasticBagAnalysis from "./components/PlasticBagAnalysis";
import FadeIn from "./components/FadeIn";
import "./index.scss";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [pathname]);
  return null;
}

function HomePage() {
  return (
    <FadeIn transitionDuration={700}>
      <Main />
      <Expertise />
      <Timeline />
      <Project />
      <Contact />
    </FadeIn>
  );
}

function AnalysisPage() {
  return (
    <FadeIn transitionDuration={500}>
      <PlasticBagAnalysis />
    </FadeIn>
  );
}

function App() {
  const [mode, setMode] = useState<string>("dark");

  const handleModeChange = () => {
    setMode((m) => (m === "dark" ? "light" : "dark"));
  };

  return (
    <Router>
      <ScrollToTop />
      <div className={`main-container ${mode === "dark" ? "dark-mode" : "light-mode"}`}>
        <Navigation parentToChild={{ mode }} modeChange={handleModeChange} />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/analysis/plastic-bag-charge" element={<AnalysisPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
