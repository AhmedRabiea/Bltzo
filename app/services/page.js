import Ambitious from "@/components/Ambitious";
import Footer from "@/components/Footer";
import Mobile from "@/services_components/Mobile";
import MobileDevServices from "@/services_components/MobileDevServices";
import Slider from "@/services_components/Slider";
import Technologies from "@/services_components/Technologies";
import Unleash from "@/services_components/Unleash";
import React from "react";

const Page = () => {
  return (
    <div className="p-24">
      <Slider />
      <Mobile />
      <Technologies />
      <MobileDevServices />
      <Unleash />
      <Ambitious />
      <Footer />
    </div>
  );
};

export default Page;
