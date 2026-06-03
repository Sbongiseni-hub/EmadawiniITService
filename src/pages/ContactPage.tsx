import { useState } from 'react';
import { Phone, Mail, MapPin, Clock, MessageCircle, Facebook, Send } from 'lucide-react';
import { motion } from 'motion/react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', service: 'Hardware Repair', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactInfo = [
    { icon: Phone, title: 'Phone', info: '0768653096 or 0825817623', href: 'tel:0768653096', color: 'from-blue-500 to-blue-600' },
    { icon: Mail, title: 'Email', info: 'techteamsolutions466@gmail.com', href: 'mailto:techteamsolutions466@gmail.com', color: 'from-green-500 to-green-600' },
    { icon: MapPin, title: 'Location', info: '1638 Maphotla, Siyabuswa 0472', href: '#', color: 'from-purple-500 to-purple-600' },
    { icon: Clock, title: 'Business Hours', info: 'Mon–Sat: 9AM – 6PM', href: '#', color: 'from-orange-500 to-orange-600' },
  ];

  const socials = [
    { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/0768653096', color: 'bg-green-500' },
    { icon: Facebook, label: 'Facebook', href: 'https://facebook.com/Sbongiseni Motau', color: 'bg-blue-600' },
    { icon: Mail, label: 'Email', href: 'mailto:techteamsolutions466@gmail.com', color: 'bg-red-500' },
    { icon: Phone, label: 'Call', href: 'tel:0825817623', color: 'bg-primary' },
  ];

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />

      {/* Hero */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-block mb-4 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm">
              We're Here to Help
            </div>
            <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent">
              Get In Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to fix your tech or start a new project? Reach out and we'll get back to you fast.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 flex-1">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">

          {/* Left: Contact Info + Socials */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ x: 8 }}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-4 hover:shadow-lg transition-all group"
                >
                  <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center shadow-md group-hover:scale-110 transition-transform shrink-0`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h4 className="mb-0.5">{item.title}</h4>
                    <p className="text-muted-foreground text-sm">{item.info}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-card border border-border rounded-xl p-6"
            >
              <h4 className="mb-4">Connect With Us</h4>
              <div className="grid grid-cols-2 gap-3">
                {socials.map((s, i) => (
                  <motion.a
                    key={i}
                    href={s.href}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`${s.color} text-white rounded-xl px-4 py-3 flex items-center gap-3 text-sm font-medium transition-opacity hover:opacity-90`}
                  >
                    <s.icon className="w-4 h-4" />
                    {s.label}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border rounded-2xl p-8 shadow-lg"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center h-full text-center py-12"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mb-6 shadow-lg">
                  <Send className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-2xl mb-2">Message Sent!</h3>
                <p className="text-muted-foreground mb-6">We'll get back to you as soon as possible.</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-primary hover:underline text-sm"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl mb-6">Send Us a Message</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div>
                    <label className="block mb-2 text-sm">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={e => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Service Needed</label>
                    <select
                      value={formData.service}
                      onChange={e => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                    >
                      <option>Hardware Repair</option>
                      <option>Software Services</option>
                      <option>Web Development</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 text-sm">Message</label>
                    <textarea
                      required
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                      rows={4}
                      placeholder="Describe your tech issue or project..."
                    />
                  </div>
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-3 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send Message
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
