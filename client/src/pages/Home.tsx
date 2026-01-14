import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Box, Zap, Shield, Layers, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";
import { ServiceCard } from "@/components/ServiceCard";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const industries = [
    "Logistics & Mobility",
    "Real Estate & PropTech",
    "Enterprise Operations",
    "Financial & Risk Platforms"
  ];

  const whyXaraLabs = [
    "Enterprise-grade engineering",
    "Platform-agnostic AI solutions",
    "Optional proprietary infrastructure",
    "Governance built into every system",
    "Designed for scale, audit, and longevity"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-background">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[radial-gradient(circle_at_50%_120%,rgba(14,165,233,0.1),transparent_70%)]" />
        
        <div className="container mx-auto px-6 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-accent uppercase bg-accent/10 rounded-full border border-accent/20">
              Enterprise Engineering
            </div>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 text-foreground" data-testid="text-hero-title">
              Enterprise Engineering for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligent Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 max-w-3xl leading-relaxed" data-testid="text-hero-description">
              Xara Labs builds AI solutions for real businesses and develops Xara Cortex — a standalone AI decision infrastructure platform.
            </p>
            <p className="text-lg text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              We partner with enterprises to design, engineer, and operate intelligent systems that scale, remain governed, and deliver measurable outcomes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/services">
                <button className="px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group" data-testid="button-explore-solutions">
                  Explore Solutions
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/products">
                <button className="px-8 py-4 rounded-sm bg-white border border-border text-foreground font-semibold hover:bg-secondary/50 hover:border-accent/30 transition-all duration-200" data-testid="button-view-products">
                  View Products
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What We Do - Three Areas */}
      <section className="py-24 bg-background border-t border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="text-what-we-do-title">What We Do</h2>
            <p className="text-lg text-muted-foreground">
              Xara Labs operates across three distinct areas, allowing clients to engage us flexibly.
            </p>
          </div>

          <motion.div 
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div variants={item}>
              <ServiceCard 
                icon={<Brain className="w-6 h-6" />}
                title="AI Solutions"
                description="Outcome-driven intelligent systems tailored to specific business problems."
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                icon={<Code className="w-6 h-6" />}
                title="Engineering Services"
                description="Enterprise-grade AI and platform engineering, delivered end-to-end."
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                icon={<Box className="w-6 h-6" />}
                title="Products"
                description="Proprietary AI infrastructure platforms, including Xara Cortex."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-20 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Industries We Serve</h2>
              <p className="text-muted-foreground">Specialized expertise across key sectors</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, i) => (
                <span 
                  key={i} 
                  className="px-4 py-2 bg-background border border-border rounded-sm text-foreground font-medium text-sm"
                >
                  {industry}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Xara Labs */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/20">
                <Shield className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Xara Labs</h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We don't just build AI systems — we engineer them for the real world. Our approach combines rigorous engineering standards with deep business insight.
              </p>
              <ul className="space-y-4 mb-8">
                {whyXaraLabs.map((point, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground font-medium">
                    <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                      <Zap className="w-3 h-3" />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
              <Link href="/about">
                <button className="text-primary font-semibold hover:text-accent transition-colors flex items-center gap-2">
                  Learn more about us <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-2xl opacity-50" />
              {/* Cortex Control Flow Diagram */}
              <div className="relative bg-white rounded-lg border border-border p-8 shadow-2xl">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">How Cortex Fits</h4>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-secondary/50 rounded-sm p-4 text-center font-medium">Application / User</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-border"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-primary/10 border border-primary/20 rounded-sm p-4 text-center font-medium text-primary">Cortex Control Layer</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-border"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-accent/10 border border-accent/20 rounded-sm p-4 text-center font-medium text-accent">Approved AI Execution</div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-0.5 h-6 bg-border"></div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-full bg-secondary/30 rounded-sm p-4 text-center font-medium text-muted-foreground">Logged, bounded outcomes</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="container mx-auto px-6 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">Let's Build Something Real</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Whether you need a custom AI solution, engineering expertise, or a decision infrastructure platform, Xara Labs meets you where you are.
          </p>
          <Link href="/contact">
            <button className="px-10 py-5 rounded-sm bg-white text-primary font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1" data-testid="button-talk-to-xara">
              Talk to Xara Labs
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
