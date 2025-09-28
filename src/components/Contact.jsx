import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Card, Button, Section } from './UI';

export const Contact = ({ personal }) => {
  return (
    <Section id="contact" className="bg-white/5">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card delay={0.2}>
            <h3 className="text-2xl font-semibold text-primary mb-6">Get In Touch</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent-primary" />
                <span className="text-secondary">{personal.email}</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent-primary" />
                <span className="text-secondary">{personal.phone}</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent-primary" />
                <span className="text-secondary">{personal.location}</span>
              </div>
            </div>

            <Button variant="primary" className="w-full">
              <Mail className="w-4 h-4 mr-2" />
              Send Email
            </Button>
          </Card>

          <Card delay={0.4}>
            <h3 className="text-2xl font-semibold text-primary mb-6">Send a Message</h3>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-3 glass-effect border border-accent-primary/30 rounded-lg text-primary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-3 glass-effect border border-accent-primary/30 rounded-lg text-primary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                />
              </div>
              <div>
                <textarea
                  rows="4"
                  placeholder="Your Message"
                  className="w-full p-3 glass-effect border border-accent-primary/30 rounded-lg text-primary placeholder-secondary/60 focus:outline-none focus:ring-2 focus:ring-accent-primary"
                ></textarea>
              </div>
              <Button variant="primary" className="w-full">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </Section>
  );
};