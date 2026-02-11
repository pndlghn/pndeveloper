import React from "react";
import ContactHero from "../components/section/contact/ContactHero";
import ContactCTA from "../components/section/contact/ContactCTA";
import ContactForm from "../components/section/contact/ContactForm";

const ContactPage = () => {
  return (
    <div className="bg-black min-h-screen text-white font-sans selection:bg-blue-500/30">
      {/* 1. Hero Section */}
      <ContactHero />

      {/* 2. Sales & Support Boxes */}
      <ContactCTA />

      {/* 3. Main Form Section */}
      <ContactForm />
    </div>
  );
};

export default ContactPage;
