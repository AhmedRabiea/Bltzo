import Slider from "@/pages/services/main/Slider";
import Unleash from "@/pages/services/main/Unleash";
import Categories from "@/pages/services/web_services/Categories";
import Explore from "@/pages/services/web_services/Explore";
import Identification from "@/pages/services/web_services/Identification";
import Technologies from "@/pages/services/web_services/Technologies";

const Page = () => {
  return (
    <div className="container mx-auto">
      <Slider />
      <Identification />
      <Technologies />
      <Categories />
      <Explore />
      <Unleash />
    </div>
  );
};

export default Page;
