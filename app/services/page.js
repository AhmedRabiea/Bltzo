import Ambitious from "@/pages/home/Ambitious";
import Footer from "@/pages/home/Footer";
import Mobile from "@/pages/services/main/Mobile";
import MobileDevServices from "@/pages/services/main/MobileDevServices";
import Slider from "@/pages/services/main/Slider";
import Technologies from "@/pages/services/main/Technologies";
import Unleash from "@/pages/services/main/Unleash";
import React from "react";

const Page = () => {
  return (
    <div className="container mx-auto">
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
