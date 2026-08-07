import { Users, Target, Award, Heart, MapPin } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
const MotionLink = motion(Link);

const values = [
  {
    icon: Heart,
    title: 'Honest Service',
    desc: 'No inflated quotes, no unnecessary repairs. We tell you exactly what\'s wrong and what it costs — before we touch your device.',
    color: 'from-red-500 to-red-600',
  },
  {
    icon: Award,
    title: 'Quality Work',
    desc: 'Every repair is backed by a warranty, and every website we build is tested thoroughly before handover.',
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Target,
    title: 'Fast Turnaround',
    desc: 'Most hardware repairs are completed the same day. We know how much you rely on your devices.',
    color: 'from-green-500 to-green-600',
  },
  {
    icon: Users,
    title: 'Community Focused',
    desc: 'We\'re part of the Siyabuswa community, not a faceless call centre. You can walk in, talk to us, and know who\'s fixing your device.',
    color: 'from-purple-500 to-purple-600',
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block mb-4 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
              Who We Are
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              About Emadawini IT Service
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A local tech solutions team built on honesty, speed, and genuine care for the community we serve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg"
          >
            <h2 className="text-3xl mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Emadawini IT Service was founded in Siyabuswa, Mpumalanga, out of a simple frustration: too many
                people in our community had nowhere reliable to take a broken phone, a slow laptop, or an idea for
                a website. Big-city repair shops were far away, expensive, or treated customers like just another
                ticket number.
              </p>
              <p>
                Over the past 4+ years, we've grown from fixing cracked phone screens and slow computers for
                friends and neighbours into a full technology partner — repairing hardware, troubleshooting
                software, recovering lost data, and building custom websites and web applications for small
                businesses across the area.
              </p>
              <p>
                We've now repaired over 50 devices and worked with dozens of happy customers, but our approach
                hasn't changed: look at the problem honestly, explain it in plain language, quote a fair price,
                and do the work properly the first time.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl mb-4">What We Stand For</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These aren't slogans — they're how every repair and every project actually gets handled.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="bg-card border border-border rounded-2xl p-6 shadow-md hover:shadow-xl transition-all text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md`}>
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="mb-2">{item.title}</h4>
                <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Where We Are */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-lg flex flex-col md:flex-row items-start gap-6"
          >
            <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center shadow-lg shrink-0">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl mb-3">Based in Siyabuswa, Serving the Surrounding Area</h3>
              <p className="text-muted-foreground leading-relaxed">
                Our workshop is located at 1638 Maphotla, Siyabuswa, 0472, in Mpumalanga. Whether you're dropping
                off a device for repair or looking for a local team to build your business a website, we're
                available Monday to Saturday, 9AM–6PM, and we're always just a call, WhatsApp, or visit away.
              </p>
            </div>
          </motion.div>
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
            <h2 className="text-3xl mb-4">Got a device that needs help, or a project in mind?</h2>
            <p className="text-white/80 mb-8">We'd love to hear from you — reach out for a free assessment.</p>
            <MotionLink
              to="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-white text-primary font-semibold px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all"
            >
              Contact Us
            </MotionLink>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
