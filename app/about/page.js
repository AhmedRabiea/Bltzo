import Community from "@/pages/about/Community";
import CompanyCEO from "@/pages/about/CompanyCEO";
import Inception from "@/pages/about/Inception";
import Portfolio from "@/pages/about/Portfolio";
import About from "@/pages/about/about";
import Ambitious from "@/pages/home/Ambitious";
import Clients from "@/pages/home/Clients";
import Footer from "@/pages/home/Footer";
import React from "react";

const Page = () => {
  return (
    <main className="container mx-auto">
      <About />
      <Inception />
      <Community />
      <Clients />
      <CompanyCEO />
      <Portfolio />
      <Ambitious />
      <Footer />
    </main>
  );
};

export default Page;
