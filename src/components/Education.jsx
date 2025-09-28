import { motion } from "framer-motion";
import { GraduationCap, Award, Calendar, ExternalLink } from "lucide-react";
import { Card, Section } from "./UI";

export const Education = () => {
  const education = [
    {
      id: 1,
      degree: "Bachelor's Degree in Data Science",
      institution: "Universitas Terbuka",
      startDate: "2025-08-01",
      endDate: null,
      status: "Expected Graduation 2029",
      description:
        "Pursuing comprehensive education in data science, statistics, machine learning, and analytical thinking to complement programming skills.",
      focus: [
        "Statistical Analysis",
        "Machine Learning",
        "Data Visualization",
        "Python Programming",
        "Research Methods",
      ],
    },
  ];

  const certifications = [
    {
      id: 1,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS & Dicoding Indonesia",
      date: "2023-03-01",
      expiry: "2026-03-01",
      credentialId: "81P28RW8JPOY",
      description:
        "Comprehensive cloud computing certification covering AWS services, architecture, and best practices.",
    },
    {
      id: 2,
      title: "Creating Web Application with React",
      issuer: "Dicoding Indonesia",
      date: "2022-09-01",
      description:
        "Advanced React development course covering component architecture, state management, and modern React patterns.",
    },
    {
      id: 3,
      title: "Responsive Web Design",
      issuer: "freeCodeCamp",
      date: "2022-05-01",
      description:
        "Comprehensive web design course covering HTML, CSS, responsive design principles, and modern web development practices.",
    },
    {
      id: 4,
      title: "Basic Frontend & Backend Web Development",
      issuer: "Dicoding Indonesia",
      date: "2022-08-01",
      description:
        "Full-stack development training covering both frontend and backend technologies and best practices.",
    },
    {
      id: 5,
      title: "Dojo Certificate PESILAT 2023 & Best Member Award",
      issuer: "Alkademi",
      date: "2023-09-01",
      description:
        "Intensive bootcamp training with recognition as Best Member of Alkademi Bootcamp 2023 for exceptional performance.",
    },
  ];

  return (
    <Section id="education" className="bg-tertiary/5">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Continuous learning journey through formal education and
            professional certifications in technology and data science.
          </p>
        </motion.div>

        {/* Education Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-accent-primary mb-8 text-center">
            Formal Education
          </h3>
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <Card className="group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <GraduationCap className="w-6 h-6 text-accent-primary mr-3" />
                      <h4 className="text-xl font-bold text-primary group-hover:glow transition-all duration-300">
                        {edu.degree}
                      </h4>
                    </div>
                    <div className="text-accent-primary font-semibold mb-2">
                      {edu.institution}
                    </div>
                    <p className="text-secondary mb-4">{edu.description}</p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center text-secondary mb-1">
                      <Calendar className="w-4 h-4 mr-2" />
                      <span className="text-sm">
                        {new Date(edu.startDate).toLocaleDateString("en-US", {
                          month: "short",
                          year: "numeric",
                        })}{" "}
                        - {edu.status}
                      </span>
                    </div>
                  </div>
                </div>

                {edu.focus && (
                  <div className="mt-4">
                    <h5 className="text-accent-primary font-semibold mb-2">
                      Key Focus Areas:
                    </h5>
                    <div className="flex flex-wrap gap-2">
                      {edu.focus.map((area, areaIndex) => (
                        <span
                          key={areaIndex}
                          className="px-3 py-1 glass-effect rounded-lg text-xs text-primary twinkle-animation"
                          style={{ animationDelay: `${areaIndex * 0.1}s` }}
                        >
                          {area}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Certifications Section */}
        <div>
          <h3 className="text-2xl font-bold text-accent-primary mb-8 text-center">
            Professional Certifications
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="h-full group hover:scale-105 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <Award className="w-5 h-5 text-accent-primary mr-2 flex-shrink-0" />
                      <h4 className="font-bold text-primary text-sm group-hover:glow transition-all duration-300">
                        {cert.title}
                      </h4>
                    </div>
                    {cert.credentialId && (
                      <ExternalLink className="w-4 h-4 text-secondary" />
                    )}
                  </div>

                  <div className="text-accent-primary font-semibold text-sm mb-2">
                    {cert.issuer}
                  </div>

                  <div className="flex items-center text-secondary text-xs mb-3">
                    <Calendar className="w-3 h-3 mr-1" />
                    <span>
                      {new Date(cert.date).toLocaleDateString("en-US", {
                        month: "short",
                        year: "numeric",
                      })}
                      {cert.expiry &&
                        ` - ${new Date(cert.expiry).toLocaleDateString(
                          "en-US",
                          { month: "short", year: "numeric" }
                        )}`}
                    </span>
                  </div>

                  <p className="text-secondary text-sm leading-relaxed mb-3">
                    {cert.description}
                  </p>

                  {cert.credentialId && (
                    <div className="mt-auto">
                      <div className="text-xs text-muted">
                        Credential ID:{" "}
                        <span className="text-accent-primary font-mono">
                          {cert.credentialId}
                        </span>
                      </div>
                    </div>
                  )}
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16"
        >
          <Card className="text-center p-8">
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Continuous Learning Philosophy
            </h3>
            <p className="text-secondary max-w-3xl mx-auto leading-relaxed">
              My educational journey reflects a commitment to continuous growth,
              combining formal academic pursuits in data science with practical,
              industry-recognized certifications. This blend of theoretical
              knowledge and hands-on skills enables me to bridge the gap between
              academic concepts and real-world applications in technology and
              data management.
            </p>
          </Card>
        </motion.div>
      </div>
    </Section>
  );
};
