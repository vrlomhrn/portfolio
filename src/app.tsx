import Footer from "./components/footer/footer";
import Navbar from "./components/header/navigation-bar";
import AboutSection from "./components/section/about-section";
import PortfolioSection from "./components/section/portfolio-section";
import SkillsSection from "./components/section/skills-section";

const App = () => {
  return (
    <>
      {/* Navigation Bar */}
      <Navbar />
      {/* About Section */}
      <AboutSection />
      {/* Skills Section */}
      <SkillsSection />
      {/* Portfolio Section */}
      <PortfolioSection />
      {/* Footer */}
      <Footer />
    </>
  );
};

export default App;
