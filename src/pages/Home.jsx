import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import HowItWorks3D from "../components/HowItWorks3D";
import Capabilities from "../components/Capabilities"
import Stakeholders from "../components/Stakeholders";
import CTA from "../components/CTA";
import Team from "../components/Team"
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About/>
      <HowItWorks3D />
      <Capabilities/>
      <Stakeholders />
      <Team/>
      <CTA />
      <Footer />
    </>
  );
}
