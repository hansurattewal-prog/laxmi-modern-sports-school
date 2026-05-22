import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import MessageDesk from "./components/MessageDesk";
import SportsSection from "./components/SportsSection";
import AcademicsSection from "./components/AcademicsSection";
import FacilitiesExplorer from "./components/FacilitiesExplorer";
import AdmissionPortal from "./components/AdmissionPortal";
import SchoolAIHub from "./components/SchoolAIHub";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function App() {
  const [activeSection, setActiveSection] = useState("home");

  const handleScrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // height of sticky header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <div id="school-site-shell" className="min-h-screen flex flex-col justify-between selection:bg-blue-600 selection:text-white">
      {/* Sticky Top Navigation Bar */}
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Content Sections */}
      <main id="main-content-scroller" className="flex-1">
        {/* Hero Section */}
        <Hero onExploreClick={handleScrollToSection} />

        {/* Governing Messages (Poonam and Manjeet Desk) */}
        <MessageDesk />

        {/* Specialized Sports Disciplines Academy */}
        <SportsSection />

        {/* Board Syllabus Academic streams */}
        <AcademicsSection />

        {/* Virtual Campus Bento grid */}
        <FacilitiesExplorer />

        {/* Admissions Portal inquiry and calculators */}
        <AdmissionPortal />

        {/* AI Educational counseling FAQ */}
        <SchoolAIHub />

        {/* Contact info, hotlines and directions map */}
        <ContactUs />
      </main>

      {/* Structured Footer */}
      <Footer onNavClick={handleScrollToSection} />
    </div>
  );
}
