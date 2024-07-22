import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import FeatureSection from "./components/FeatureSection";
import Workflow from "./components/Workflow";
import Footer from "./components/Footer";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import SkillCrouser from "./components/SkillCrouser";

const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-2 lg:pt-20 px-6">
        <HeroSection id="heroSection" />
        <SkillCrouser id="skillCrouser" />
        <FeatureSection id="featureSection" />
        <Workflow id="workflow" />
        <Pricing id="pricing" />
        <Testimonials id="testimonials" />
        <Footer id="footer" />
      </div>
    </>
  );
};

export default App;
