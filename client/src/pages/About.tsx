import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Layers, Settings, Eye, Zap } from "lucide-react";

export default function About() {
  const whyXaraLabs = [
    { icon: <Settings className="w-5 h-5" />, text: "Enterprise-grade engineering" },
    { icon: <Layers className="w-5 h-5" />, text: "Platform-agnostic AI solutions" },
    { icon: <Shield className="w-5 h-5" />, text: "Optional proprietary infrastructure" },
    { icon: <Eye className="w-5 h-5" />, text: "Governance built into every system" },
    { icon: <Zap className="w-5 h-5" />, text: "Designed for scale, audit, and longevity" }
  ];

  const industries = [
    "Logistics & Mobility",
    "Real Estate & PropTech",
    "Enterprise Operations",
    "Financial & Risk Platforms"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-8 text-primary" data-testid="text-about-title">
            Enterprise Engineering for Intelligent Systems
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed mb-6">
            Xara Labs builds AI solutions for real businesses and develops Xara Cortex — a standalone AI decision infrastructure platform.
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We partner with enterprises to design, engineer, and operate intelligent systems that scale, remain governed, and deliver measurable outcomes.
          </p>
        </motion.div>
      </section>

      {/* Why Xara Labs */}
      <section className="bg-secondary/30 py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Xara Labs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {whyXaraLabs.map((item, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background p-6 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow flex items-center gap-4"
              >
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center text-primary flex-shrink-0">
                  {item.icon}
                </div>
                <span className="font-medium text-foreground">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industries.map((industry, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: i % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <h3 className="text-xl font-bold text-foreground">{industry}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-primary/5 py-20 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-16 items-center max-w-5xl mx-auto">
            <div className="flex-1">
              <div className="relative">
                <div className="absolute -inset-4 bg-accent/20 rounded-lg transform rotate-3" />
                <img 
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Office Architecture" 
                  className="relative rounded-lg shadow-2xl w-full h-auto object-cover aspect-[4/3]"
                />
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-primary">Our Approach</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We work inside your environment, with your tools, and your constraints. Our team brings hands-on engineering expertise for enterprises building or modernizing AI-powered systems.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every system we build is designed for scale, audit, and longevity — with governance built in from day one.
              </p>
              <div className="pt-4">
                <Link href="/services">
                  <button className="text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2">
                    Explore our solutions <span className="text-xl">→</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Build Something Real</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Whether you need a custom AI solution, engineering expertise, or a decision infrastructure platform, Xara Labs meets you where you are.
        </p>
        <Link href="/contact">
          <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all" data-testid="button-talk-to-us">
            Talk to Xara Labs
          </button>
        </Link>
      </section>
    </div>
  );
}
