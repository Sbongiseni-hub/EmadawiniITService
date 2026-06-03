import { useState } from 'react';
import { Wrench, Settings, Code, CheckCircle } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const services = [
  {
    icon: Wrench,
    title: 'Hardware Repair',
    description: 'Expert repair services for all your devices. We diagnose and fix hardware issues with genuine quality parts and a satisfaction guarantee.',
    color: 'from-blue-500 to-blue-600',
    items: [
      'Laptop screen replacement & keyboard repair',
      'Smartphone screen & battery replacement',
      'Desktop computer servicing & upgrades',
      'Hardware component replacement',
      'Motherboard-level repairs',
      'Power supply and charging port fixes',
    ],
  },
  {
    icon: Settings,
    title: 'Software Services',
    description: 'Operating system installations, software troubleshooting, and system optimization to keep your devices running at peak performance.',
    color: 'from-green-500 to-green-600',
    items: [
      'OS installation (Windows, macOS, Linux)',
      'System upgrades and optimization',
      'Virus & malware removal',
      'Software troubleshooting & configuration',
      'Data recovery and secure backup',
      'Driver installation & updates',
    ],
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Custom websites and web applications tailored to your business needs — from simple landing pages to full-featured e-commerce platforms.',
    color: 'from-purple-500 to-purple-600',
    items: [
      'Custom website design & development',
      'Web application development',
      'Mobile-responsive design',
      'E-commerce solutions',
      'Website maintenance & hosting support',
      'SEO & performance optimization',
    ],
  },
];

export default function ServicesPage() {
  const [activeService, setActiveService] = useState(0);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-block mb-4 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
              What We Offer
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions for individuals and businesses — delivered with expertise and care.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                onHoverStart={() => setActiveService(i)}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all cursor-pointer relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <motion.div
                  animate={{ rotate: activeService === i ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{service.description}</p>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="flex items-start gap-2 text-sm"
                    >
                      <CheckCircle className="w-4 h-4 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 text-center bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-white"
          >
            <h2 className="text-3xl mb-4">Ready to get started?</h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto">
              Contact us today for a free assessment and transparent quote on any of our services.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Get In Touch
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
