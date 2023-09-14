import About from "@/components/About";
import Advantages from "@/components/Advantages";
import Ambitious from "@/components/Ambitious";
import Clients from "@/components/Clients";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Team from "@/components/Team";

export default function Home() {
  return (
    <main className="min-h-screen p-24">
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
