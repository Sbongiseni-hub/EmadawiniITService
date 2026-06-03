import { Cpu, CheckCircle, Wrench, Shield, ArrowRight, Clock, Star, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const MotionLink = motion(Link);
import { Helmet } from 'react-helmet-async';

function App() {
  return (
    <>
      <Helmet>
       <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5493061002059813"
     crossOrigin="anonymous"/>
      </Helmet>
      {/* rest of your app */}
    </>
  );
}

const steps = [
  {
    step: '01',
    icon: Cpu,
    title: 'Diagnose',
    description: 'We perform a thorough assessment of your device to identify the root cause of the problem. No guesswork — just precise diagnostics.',
    detail: 'Our technicians use professional diagnostic tools to analyze hardware and software issues. You\'ll receive a clear explanation of what\'s wrong.',
    color: 'from-blue-500 to-blue-600',
    time: '15–30 min',
  },
  {
    step: '02',
    icon: CheckCircle,
    title: 'Quote',
    description: 'Receive a transparent, itemized quote with no hidden fees before any work begins. You decide — no pressure.',
    detail: 'We believe in honest pricing. Our quotes cover parts, labor, and turnaround time. We\'ll only proceed once you approve.',
    color: 'from-green-500 to-green-600',
    time: 'Same day',
  },
  {
    step: '03',
    icon: Wrench,
    title: 'Repair',
    description: 'Expert repairs carried out using quality parts and industry best practices, handled by our certified technicians.',
    detail: 'We source genuine or high-quality compatible parts. Most repairs are completed the same day or within 24 hours.',
    color: 'from-purple-500 to-purple-600',
    time: '1–24 hrs',
  },
  {
    step: '04',
    icon: Shield,
    title: 'Test & Return',
    description: 'Rigorous quality checks ensure everything works perfectly before your device is returned to you with a warranty.',
    detail: 'We run a comprehensive battery of tests before any handover. All repairs are backed by our service warranty.',
    color: 'from-orange-500 to-orange-600',
    time: '30–60 min',
  },
];

const whyUs = [
  { icon: CheckCircle, title: 'Expert Technicians', desc: 'Certified professionals with years of experience', color: 'from-blue-500 to-blue-600' },
  { icon: Zap, title: 'Fast Turnaround', desc: '85% of repairs completed same day', color: 'from-yellow-500 to-yellow-600' },
  { icon: Star, title: 'Quality Parts', desc: 'Genuine and high-quality components only', color: 'from-green-500 to-green-600' },
  { icon: Clock, title: 'Warranty Backed', desc: 'All repairs covered by our service warranty', color: 'from-purple-500 to-purple-600' },
];

export default function ProcessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block mb-4 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
              Simple &amp; Transparent
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              How It Works
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our streamlined 4-step process gets your device back to full health — quickly, affordably, and with zero stress.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Steps */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {steps.map((step, i) => (
              <MotionLink
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col md:flex-row items-start gap-6 bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all group"
              >
                {/* Number + Icon */}
                <div className="flex flex-col items-center gap-2 shrink-0">
                  <div className={`w-20 h-20 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-10 h-10 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-muted-foreground/20">{step.step}</span>
                </div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-2xl">{step.title}</h3>
                    <span className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {step.time}
                    </span>
                  </div>
                  <p className="text-foreground mb-2">{step.description}</p>
                  <p className="text-muted-foreground text-sm">{step.detail}</p>
                </div>

                {/* Arrow (not on last) */}
                {i < steps.length - 1 && (
                  <div className="hidden md:flex items-center self-center text-primary/30">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                )}
              </MotionLink>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">Why Choose Us?</h2>
            <p className="text-muted-foreground">The Emadawini IT difference</p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyUs.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05, rotate: 1 }}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:shadow-xl transition-all`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-1">{item.title}</h4>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-primary to-accent rounded-2xl p-12 text-center text-white"
          >
            <h2 className="text-3xl mb-4">Ready to bring your device back to life?</h2>
            <p className="text-white/80 mb-8">Get started with a free diagnostic assessment today.</p>
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us Now
            </MotionLink>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
