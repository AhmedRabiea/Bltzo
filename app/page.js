import About from "@/pages/home/About";
import Advantages from "@/pages/home/Advantages";
import Ambitious from "@/pages/home/Ambitious";
import Clients from "@/pages/home/Clients";
import Contact from "@/pages/home/Contact";
import Footer from "@/pages/home/Footer";
import Services from "@/pages/home/Services";
import Slider from "@/pages/home/Slider";
import Team from "@/pages/home/Team";

export default function Home() {
  return (
    <main className="container mx-auto">
      <Slider />
      <Clients />
      <About />
      <Advantages />
      <Services />
      <Team />
      <Ambitious />
      <Contact />
      <Footer />
    </main>
  );
}
