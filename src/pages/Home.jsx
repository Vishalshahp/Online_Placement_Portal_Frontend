import React from "react";
import "./Home.css";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrustedCompanies from "../components/TrustedCompanies";
import Features from "../components/Features";
import FeaturedJobs from "../components/FeaturedJobs";
import Testimonials from "../components/Testimonials";
import FAQ from "../components/FAQ";
import CTA from "../components/CTA";
import Footer from "../components/Footer";

export function Home({ setPage }) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Navbar setPage={setPage} />
      <Hero setPage={setPage} />
      <TrustedCompanies />
      <Features setPage={setPage} />
      <FeaturedJobs setPage={setPage} />
      <Testimonials />
      <FAQ />
      <CTA setPage={setPage} />
      <Footer setPage={setPage} />
    </div>
  );
}
