import Ambitious from "@/pages/home/Ambitious";
import Footer from "@/pages/home/Footer";
import Slider from "@/pages/services/main/Slider";
import Unleash from "@/pages/services/main/Unleash";
import Categories from "@/pages/services/web_services/Categories";
import CooperationProcess from "@/pages/services/web_services/CooperationProcess";
import Explore from "@/pages/services/web_services/Explore";
import Identification from "@/pages/services/web_services/Identification";
import Technologies from "@/pages/services/web_services/Technologies";
import WebTeam from "@/pages/services/web_services/WebTeam";

const Page = () => {
  return (
    <div className="container mx-auto">
      <Slider />
      <Identification />
      <Technologies />
      <Categories />
      <Explore />
      <Unleash />
      <WebTeam />
      <CooperationProcess />
      <Ambitious />
      <Footer />
    </div>
  );
};

export default Page;
