import Attract from "@/pages/services/product_design_services/Attract";
import Slider from "@/pages/services/product_design_services/Slider";
import Technologies from "@/pages/services/product_design_services/Technologies";

const Page = () => {
  return (
    <div className="container mx-auto">
      <Slider />
      <Attract />
      <Technologies />
    </div>
  );
};

export default Page;
