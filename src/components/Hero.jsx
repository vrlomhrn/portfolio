import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Download,
} from "lucide-react";
import { Button, GradientText } from "./UI";

export const Hero = ({ data }) => {
  const { personal, social } = data;

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 space-background">
      <div className="stars"></div>
      <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/10 to-accent-secondary/10" />

      <div className="relative z-10 text-center text-primary max-w-4xl mx-auto px-6 mt-16 float-animation">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
          className="mb-8"
        >
          <img
            src={personal.profileImage}
            alt={personal.name}
            className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52 rounded-full mx-auto border-4 border-glass-border shadow-xl object-cover"
          />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-4"
        >
          <span
            className="text-primary drop-shadow-2xl"
            style={{
              textShadow:
                "0 0 20px var(--accent-primary), 0 0 40px var(--accent-primary), 2px 2px 4px rgba(0,0,0,0.5)",
            }}
          >
            {personal.name}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-6 text-secondary"
        >
          {personal.title}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg mb-8 text-muted max-w-2xl mx-auto"
        >
          {personal.bio}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          <Button
            variant="primary"
            size="lg"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 text-lg font-semibold"
          >
            View My Work
          </Button>
          <Button
            variant="secondary"
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 text-lg font-semibold"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Button>
          <Button
            variant="accent"
            size="lg"
            onClick={() => {
              // Try PDF first, fallback to HTML
              const pdfPath = "/documents/Virlo_Mahrian_Shaffari_CV.pdf";
              const htmlPath = "/documents/Virlo_Mahrian_Shaffari_CV.html";

              const link = document.createElement("a");
              link.href = pdfPath;
              link.download = "Virlo_Mahrian_Shaffari_CV.pdf";
              link.target = "_blank";

              // Test if PDF exists, otherwise open HTML
              fetch(pdfPath)
                .then((response) => {
                  if (response.ok) {
                    document.body.appendChild(link);
                    link.click();
                    document.body.removeChild(link);
                  } else {
                    // Fallback to HTML version
                    window.open(htmlPath, "_blank");
                  }
                })
                .catch(() => {
                  // Fallback to HTML version
                  window.open(htmlPath, "_blank");
                });
            }}
            className="px-8 py-4 text-lg font-semibold"
          >
            <Download className="w-5 h-5 mr-2" />
            Download CV
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex justify-center space-x-6 mb-16"
        >
          <a
            href={social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent-primary transition-colors p-2 hover:glow rounded-full"
            aria-label="GitHub Profile"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href={social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-secondary hover:text-accent-primary transition-colors p-2 hover:glow rounded-full"
            aria-label="LinkedIn Profile"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href={`mailto:${personal.email}`}
            className="text-secondary hover:text-accent-primary transition-colors p-2 hover:glow rounded-full"
            aria-label="Send Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </motion.div>
      </div>
    </div>
  );
};
