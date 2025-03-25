
import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import HowItWorks from "../components/HowItWorks";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import AiToolsCard from "../components/AiToolsCard";
import Footer from "../components/Footer";
import DisclaimerModal from "../components/DisclaimerModal";
import SupportChat from "../components/SupportChat";
import ResumeSpecialistSection from "../components/ResumeSpecialistSection";
import JobFinderSection from "../components/JobFinderSection";

const Index = () => {
  useEffect(() => {
    // Update page title
    document.title = "Resume GPT | AI-Powered Resume Optimization";
  }, []);

  return (
    <div className="min-h-screen bg-cyber-dark text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <ResumeSpecialistSection />
      <JobFinderSection />
      <Testimonials />
      <AiToolsCard />
      <FAQ />
      <Footer />
      <DisclaimerModal />
      <SupportChat />
    </div>
  );
};

export default Index;
