import Community from "@/about_components/Community";
import CompanyCEO from "@/about_components/CompanyCEO";
import Inception from "@/about_components/Inception";
import About from "@/about_components/about";
import Ambitious from "@/components/Ambitious";
import Clients from "@/components/Clients";
import Footer from "@/components/Footer";
import Categories from "@/web_services/Categories";
import Explore from "@/web_services/Explore";
import Technologies from "@/web_services/Technologies";
import React from "react";

const Page = () => {
  return (
    <main className="lg:p-24 pt-14 px-2">
      <About />
      <Inception />
      <Community />
      <Clients />
      <CompanyCEO />
      <Ambitious />
      <Footer />
      <Technologies />
      <Categories />
      <Explore />
    </main>
  );
};

export default Page;
