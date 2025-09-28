import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Card, Button, Section } from "./UI";
import { useState } from "react";

export const Projects = ({ projects }) => {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter((project) => project.featured);
  const displayProjects = showAll ? projects : featuredProjects;

  return (
    <Section id="projects" className="bg-secondary/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            {showAll ? "All Projects" : "Featured Projects"}
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            {showAll
              ? "Complete showcase of my development projects from GitHub repository."
              : "Here are some of my recent projects that showcase my skills and creativity."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <Card key={project.id} delay={index * 0.2} className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-xl font-semibold text-primary mb-2">
                {project.title}
              </h3>

              <p className="text-secondary mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 glass-effect rounded-md text-xs text-accent-primary twinkle-animation"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex space-x-3">
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.liveUrl, "_blank")}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  {project.liveUrl.includes("github")
                    ? "Repository"
                    : "Live Demo"}
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="flex-1"
                  onClick={() => window.open(project.githubUrl, "_blank")}
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              </div>
            </Card>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Button
            variant="secondary"
            size="lg"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll
              ? "Show Featured Only"
              : `View All ${projects.length} Projects`}
          </Button>
        </motion.div>
      </div>
    </Section>
  );
};
