import { useState, useEffect } from 'react';
import { Laptop, Smartphone, Monitor, Code, Settings, Wrench, CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Clock, Star, TrendingUp, Cpu, HardDrive, Shield, ChevronUp, MessageCircle, Facebook } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useSmoothScroll } from './components/SmoothScroll';

export default function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeService, setActiveService] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useSmoothScroll();

  useEffect(() => {
    setIsVisible(true);

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const stats = [
    { label: 'Devices Repaired', value: '50+', icon: Wrench },
    { label: 'Happy Customers', value: '50+', icon: Star },
    { label: 'Years Experience', value: '4+', icon: TrendingUp },
    { label: 'Same Day Repairs', value: '85%', icon: Clock },
  ];

  const process = [
    { step: '1', title: 'Diagnose', description: 'Free assessment of your device', icon: Cpu },
    { step: '2', title: 'Quote', description: 'Transparent pricing, no hidden fees', icon: CheckCircle },
    { step: '3', title: 'Repair', description: 'Expert repair with quality parts', icon: Wrench },
    { step: '4', title: 'Test', description: 'Rigorous quality check', icon: Shield },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="border-b border-border bg-card/80 backdrop-blur-md sticky top-0 z-50 shadow-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Wrench className="w-5 h-5 text-white" />
              </div>
              <span className="font-semibold text-lg">Emadawini IT Services</span>
            </motion.div>
            <div className="hidden md:flex gap-8">
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors relative group">
                Services
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#process" className="text-muted-foreground hover:text-primary transition-colors relative group">
                Process
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
             
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors relative group">
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </a>
            </div>
            
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5"></div>
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * 600,
              }}
              animate={{
                y: [null, Math.random() * 600],
                x: [null, Math.random() * window.innerWidth],
              }}
              transition={{
                duration: Math.random() * 10 + 10,
                repeat: Infinity,
                repeatType: 'reverse',
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" />
                Fast, Reliable, Professional
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Your Complete Tech Solutions Partner
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              From hardware repairs to custom software development, we've got all your technology needs covered
            </p>
            
          </motion.div>
          -
          {/* Floating Icons */}
          <div className="mt-20 flex justify-center gap-8 flex-wrap">
            {[
              { icon: Laptop, label: 'Laptops', color: 'from-blue-500 to-blue-600' },
              { icon: Smartphone, label: 'Phones', color: 'from-green-500 to-green-600' },
              { icon: Monitor, label: 'Computers', color: 'from-purple-500 to-purple-600' },
              { icon: Code, label: 'Software', color: 'from-orange-500 to-orange-600' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 + 0.5 }}
                whileHover={{ y: -10, scale: 1.1 }}
                className="flex flex-col items-center gap-2 cursor-pointer"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center text-white"
              >
                <stat.icon className="w-10 h-10 mx-auto mb-2 opacity-80" />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 + 0.3 }}
                  className="text-4xl mb-1"
                >
                  {stat.value}
                </motion.div>
                <div className="text-white/80">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Our Services</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive technology solutions for individuals and businesses
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Wrench,
                title: 'Hardware Repair',
                description: 'Expert repair services for all your devices',
                color: 'from-blue-500 to-blue-600',
                items: [
                  'Laptop repairs and upgrades',
                  'Smartphone screen replacement',
                  'Desktop computer servicing',
                  'Hardware component replacement'
                ]
              },
              {
                icon: Settings,
                title: 'Software Services',
                description: 'Operating system and software solutions',
                color: 'from-green-500 to-green-600',
                items: [
                  'OS installation (Windows, macOS, Linux)',
                  'System upgrades and optimization',
                  'Software troubleshooting',
                  'Data recovery and backup'
                ]
              },
              {
                icon: Code,
                title: 'Web Development',
                description: 'Custom websites and applications',
                color: 'from-purple-500 to-purple-600',
                items: [
                  'Custom website design & development',
                  'Web application development',
                  'Mobile app development',
                  'E-commerce solutions'
                ]
              }
            ].map((service, i) => (
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
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                <motion.div
                  animate={{ rotate: activeService === i ? 360 : 0 }}
                  transition={{ duration: 0.5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </motion.div>
                <h3 className="text-2xl mb-4">{service.title}</h3>
                <p className="text-muted-foreground mb-6">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.items.map((item, j) => (
                    <motion.li
                      key={j}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 + j * 0.05 }}
                      className="flex items-start gap-2"
                    >
                      <CheckCircle className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-6 w-full bg-gradient-to-r from-primary to-accent text-white py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">How It Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Simple, transparent process from start to finish
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative"
              >
                <div className="bg-card border-2 border-primary/20 rounded-2xl p-6 text-center hover:border-primary transition-all hover:shadow-xl">
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 + 0.2, type: 'spring' }}
                    className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl shadow-lg"
                  >
                    {step.step}
                  </motion.div>
                  <step.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {i < process.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="w-8 h-8 text-primary/30" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
   

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/50 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Why Choose TechFix Pro</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: CheckCircle, title: 'Expert Technicians', description: 'Certified professionals with years of experience', color: 'from-blue-500 to-blue-600' },
              { icon: Zap, title: 'Fast Service', description: 'Quick turnaround time on all repairs', color: 'from-yellow-500 to-yellow-600' },
              { icon: HardDrive, title: 'Quality Parts', description: 'Only genuine and high-quality components', color: 'from-green-500 to-green-600' },
              { icon: Shield, title: 'Warranty', description: 'All repairs backed by warranty', color: 'from-purple-500 to-purple-600' }
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="text-center group cursor-pointer"
              >
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className={`w-20 h-20 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-2xl transition-all`}
                >
                  <feature.icon className="w-10 h-10 text-white" />
                </motion.div>
                <h3 className="text-xl mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl mb-4">Get In Touch</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ready to fix your tech or start your project? Contact us today
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: Phone, title: 'Phone', info: '0768653096 or 0825817623', color: 'from-blue-500 to-blue-600' },
                { icon: Mail, title: 'Email', info: 'techteamsolutions466@gmail.com', color: 'from-green-500 to-green-600' },
                { icon: MapPin, title: 'Location', info: '1638 Maphotla, Siyabuswa 0472', color: 'from-purple-500 to-purple-600' },
                { icon: Clock, title: 'Hours', info: 'Mon-Sat: 9AM - 6PM', color: 'from-orange-500 to-orange-600' }
              ].map((contact, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all cursor-pointer group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform`}>
                    <contact.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-1">{contact.title}</h4>
                    <p className="text-muted-foreground">{contact.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl mb-6">Send us a message</h3>
              <form className="space-y-4">
                <div>
                  <label className="block mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm">Service</label>
                  <select className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all">
                    <option>Hardware Repair</option>
                    <option>Software Services</option>
                    <option>Web Development</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-2 text-sm">Message</label>
                  <textarea
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                    rows={4}
                    placeholder="Tell us about your tech needs..."
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>


      {/* Footer */}
      <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-muted/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                  <Wrench className="w-5 h-5 text-white" />
                </div>
                <span className="font-semibold text-lg">Emadawini IT Services</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Your trusted partner for all technology solutions.
              </p>
            </div>

            <div>
              <h4 className="mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Hardware Repair</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Software Services</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Web Development</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">OS Installation</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Our Team</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="mb-4">Connect</h4>
            <div className="flex gap-3">
              {[
               { icon: MessageCircle, href: 'https://wa.me/0768653096' },
                { icon: Facebook, href: 'https://facebook.com/Sbongiseni Motau' },
                { icon: Mail, href: 'mailto:techteamsolutions466@gmail.com' },
                { icon: Phone, href: 'tel:0825817623' },
              ].map((item, i) => (
               <motion.a
                 key={i}
                  href={item.href}
                 whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
              className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-white transition-all"
            >
        <item.icon className="w-5 h-5" />
      </motion.a>
    ))}
  </div>
</div>
          </div>

          <div className="border-t border-border pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2025 Emadawini IT Services. All rights reserved. Made with 💙 for your tech needs.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg flex items-center justify-center z-50 hover:shadow-2xl transition-shadow"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}