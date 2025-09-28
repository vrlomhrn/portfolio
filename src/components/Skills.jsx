import { motion } from "framer-motion";
import { Card, Section } from "./UI";

export const Skills = ({ skills }) => {
  return (
    <Section id="skills" className="bg-tertiary/10">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Skills & Technologies
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Technologies I've mastered through 4 years of programming
            experience, certifications, and real-world projects.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillCategory, index) => (
            <Card
              key={skillCategory.category}
              delay={index * 0.1}
              className="group hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-accent-primary mb-4 group-hover:glow transition-all duration-300">
                  {skillCategory.category}
                </h3>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.1 + skillIndex * 0.05,
                      }}
                      className="px-3 py-2 glass-effect rounded-lg text-sm text-primary hover:text-accent-primary hover:glow transition-all duration-300 cursor-default twinkle-animation"
                      style={{
                        animationDelay: `${skillIndex * 0.2}s`,
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Highlight */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-accent-primary mb-6">
            Certifications & Achievements
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="text-center p-4">
              <div className="text-accent-primary font-semibold mb-2">
                AWS Cloud Practitioner
              </div>
              <div className="text-sm text-secondary">
                March 2023 - March 2026
              </div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-accent-primary font-semibold mb-2">
                React Development
              </div>
              <div className="text-sm text-secondary">Dicoding Indonesia</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-accent-primary font-semibold mb-2">
                Responsive Web Design
              </div>
              <div className="text-sm text-secondary">freeCodeCamp</div>
            </Card>
            <Card className="text-center p-4">
              <div className="text-accent-primary font-semibold mb-2">
                Best Member Award
              </div>
              <div className="text-sm text-secondary">
                Alkademi Bootcamp 2023
              </div>
            </Card>
          </div>
        </motion.div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Card className="p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Experience Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-accent-primary mb-2">
                  4 Years
                </div>
                <div className="text-secondary">Programming Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-primary mb-2">
                  1 Year
                </div>
                <div className="text-secondary">Machine Operation</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent-primary mb-2">
                  6+
                </div>
                <div className="text-secondary">Certifications</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
