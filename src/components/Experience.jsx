import { motion } from "framer-motion";
import { Calendar, MapPin, Briefcase } from "lucide-react";
import { Card, Section } from "./UI";

export const Experience = ({ experience }) => {
  return (
    <Section id="experience" className="bg-secondary/10">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Professional Experience
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            My journey through diverse roles in technology and industrial
            operations, building expertise across multiple domains.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-accent-primary/30"></div>

          {experience.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative mb-12"
            >
              {/* Timeline dot */}
              <div className="absolute left-6 w-4 h-4 bg-accent-primary rounded-full border-4 border-bg-primary glow"></div>

              <div className="ml-20">
                <Card className="group hover:scale-105 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-accent-primary group-hover:glow transition-all duration-300">
                        {job.position}
                      </h3>
                      <div className="flex items-center text-primary mt-1">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span className="font-semibold">{job.company}</span>
                      </div>
                    </div>

                    <div className="flex items-center text-secondary mt-2 md:mt-0">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(job.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        -
                        {job.endDate
                          ? new Date(job.endDate).toLocaleDateString("en-US", {
                              month: "short",
                              year: "numeric",
                            })
                          : "Present"}
                      </span>
                    </div>
                  </div>

                  <p className="text-secondary mb-4 leading-relaxed">
                    {job.description}
                  </p>

                  {job.technologies && job.technologies.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 glass-effect rounded-lg text-xs text-accent-primary twinkle-animation"
                          style={{ animationDelay: `${techIndex * 0.1}s` }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16"
        >
          <Card className="text-center p-8">
            <h3 className="text-2xl font-bold gradient-text mb-6">
              Experience Highlights
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <div className="text-accent-primary text-xl font-bold mb-2">
                  Industrial Operations
                </div>
                <div className="text-secondary text-sm">
                  Machine operation, quality control, and process optimization
                  in manufacturing environment
                </div>
              </div>
              <div>
                <div className="text-accent-primary text-xl font-bold mb-2">
                  Web Development
                </div>
                <div className="text-secondary text-sm">
                  Full-stack development with modern frameworks, freelance
                  projects, and client collaboration
                </div>
              </div>
              <div>
                <div className="text-accent-primary text-xl font-bold mb-2">
                  Technical Training
                </div>
                <div className="text-secondary text-sm">
                  Intensive bootcamp training with recognition as best
                  performing member
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
