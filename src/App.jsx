import { usePortfolio } from "./hooks/usePortfolio";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Experience } from "./components/Experience";
import { Education } from "./components/Education";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { AdminPanel } from "./components/AdminPanel";
import { ThemeProvider } from "./contexts/ThemeContext";
import { ThemeToggle } from "./components/ThemeToggle";

function App() {
  const { data } = usePortfolio();

  return (
    <ThemeProvider>
      <div className="min-h-screen theme-transition">
        <ThemeToggle />
        <Navigation />

        <main>
          <section id="home">
            <Hero data={data} />
          </section>

          <section id="experience">
            <Experience experience={data.experience} />
          </section>

          <section id="education">
            <Education />
          </section>

          <section id="projects">
            <Projects projects={data.projects} />
          </section>

          <section id="skills">
            <Skills skills={data.skills} />
          </section>

          <section id="contact">
            <Contact personal={data.personal} />
          </section>
        </main>

        <AdminPanel />
      </div>
    </ThemeProvider>
  );
}

export default App;
