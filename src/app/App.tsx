import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Laptop, Smartphone, Monitor, Code, Wrench, Zap, Star, Clock, TrendingUp, ChevronUp, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSmoothScroll } from '../components/SmoothScroll';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ServicesPage from '../pages/ServicesPage';
import ProcessPage from '../pages/ProcessPage';
import ContactPage from '../pages/ContactPage';

// ─── Home Page ──────────────────────────────────────────────────────────────
function HomePage() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const stats = [
    { label: 'Devices Repaired', value: '50+', icon: Wrench },
    { label: 'Happy Customers', value: '50+', icon: Star },
    { label: 'Years Experience', value: '4+', icon: TrendingUp },
    { label: 'Same Day Repairs', value: '85%', icon: Clock },
  ];

  const quickLinks = [
    { href: '/services', label: 'Our Services', desc: 'Hardware, Software & Web Dev', color: 'from-blue-500 to-blue-600', icon: Wrench },
    { href: '/process', label: 'How It Works', desc: 'Our simple 4-step process', color: 'from-purple-500 to-purple-600', icon: Zap },
    { href: '/contact', label: 'Get In Touch', desc: 'Free assessment & quote', color: 'from-green-500 to-green-600', icon: ArrowRight },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="relative pt-16 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary/20 rounded-full"
              initial={{ x: Math.random() * 1200, y: Math.random() * 600 }}
              animate={{ y: [null, Math.random() * 600], x: [null, Math.random() * 1200] }}
              transition={{ duration: Math.random() * 10 + 10, repeat: Infinity, repeatType: 'reverse' }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.5, delay: 0.2 }} className="inline-block mb-6">
              <div className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm flex items-center gap-2">
                <Zap className="w-4 h-4" /> Fast, Reliable, Professional
              </div>
            </motion.div>
            <h1 className="text-5xl md:text-7xl mb-6 max-w-4xl mx-auto bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Your Complete Tech Solutions Partner
            </h1>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
              From hardware repairs to custom software development, we've got all your technology needs covered.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                href="/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all font-medium"
              >
                Explore Services
              </motion.a>
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-card border border-border text-foreground px-8 py-3 rounded-xl shadow hover:shadow-lg transition-all font-medium"
              >
                Get a Free Quote
              </motion.a>
            </div>
          </motion.div>

          {/* Floating icons */}
          <div className="mt-16 flex justify-center gap-8 flex-wrap">
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
                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                  <item.icon className="w-10 h-10 text-white" />
                </div>
                <span className="text-sm text-muted-foreground">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-10 px-4 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
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
              <div className="text-4xl mb-1">{stat.value}</div>
              <div className="text-white/80 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Quick Navigation Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">What Can We Help You With?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Explore our services, learn about our process, or contact us directly.
            </p>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-8">
            {quickLinks.map((link, i) => (
              <motion.a
                key={i}
                href={link.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all group relative overflow-hidden"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
                <div className={`w-14 h-14 bg-gradient-to-br ${link.color} rounded-xl flex items-center justify-center mb-4 shadow-md group-hover:scale-110 transition-transform`}>
                  <link.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl mb-2">{link.label}</h3>
                <p className="text-muted-foreground text-sm mb-4">{link.desc}</p>
                <div className="flex items-center gap-2 text-primary text-sm font-medium">
                  Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* About snippet */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl mb-6">About Emadawini IT Services</h2>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Based in Siyabuswa, Mpumalanga, we've been serving the community for over 4 years with honest, fast, and professional tech solutions. From a cracked phone screen to a brand-new website, we handle it all with care.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-gradient-to-r from-primary to-accent text-white px-8 py-3 rounded-xl shadow-lg font-medium"
            >
              Talk to Us Today
            </motion.a>
          </motion.div>
        </div>
      </section>

      <Footer />

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-primary to-accent text-white rounded-full shadow-lg flex items-center justify-center z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Root App with Router ────────────────────────────────────────────────────
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/process" element={<ProcessPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}
