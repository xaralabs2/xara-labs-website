import { motion } from "framer-motion";
import { ArrowRight, Brain, Code, Database, LineChart, Globe, Zap } from "lucide-react";
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
            <h1 className="text-5xl md:text-7xl font-bold  leading-tight mb-8 text-foreground">
              Building the Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">Intelligent Systems</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-2xl leading-relaxed">
              Xara Labs partners with visionary enterprises to engineer scalable platforms, sophisticated AI solutions, and digital strategies that drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact">
                <button className="px-8 py-4 rounded-sm bg-primary text-primary-foreground font-semibold hover:bg-primary/90 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 flex items-center gap-2 group">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </Link>
              <Link href="/services">
                <button className="px-8 py-4 rounded-sm bg-white border border-border text-foreground font-semibold hover:bg-secondary/50 hover:border-accent/30 transition-all duration-200">
                  Explore Services
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats/Trust Bar */}
      <div className="border-y border-border bg-white/50 backdrop-blur-sm">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: "Technical Excellence", value: "100%" },
              { label: "Enterprise Clients", value: "50+" },
              { label: "Systems Deployed", value: "200+" },
              { label: "Global Reach", value: "24/7" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-3xl md:text-4xl font-bold  text-primary mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Services Overview */}
      <section className="py-24 bg-background">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-4xl font-bold  mb-4">Core Competencies</h2>
              <p className="text-lg text-muted-foreground">
                We deliver end-to-end technical capabilities designed for resilience, scalability, and long-term value.
              </p>
            </div>
            <Link href="/services" className="text-accent font-medium hover:text-accent/80 flex items-center gap-2 group">
              View All Services <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
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
                title="AI & Intelligent Systems"
                description="Leverage machine learning and predictive analytics to automate complex decision-making processes."
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                icon={<Code className="w-6 h-6" />}
                title="Custom Development"
                description="Bespoke software solutions architected for high-performance and seamless integration."
              />
            </motion.div>
            <motion.div variants={item}>
              <ServiceCard 
                icon={<Database className="w-6 h-6" />}
                title="Platform Engineering"
                description="Robust data infrastructure and cloud-native platforms that scale with your business."
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Feature/Approach Section */}
      <section className="py-24 bg-secondary/30 border-t border-border/50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="w-16 h-16 bg-primary rounded-sm flex items-center justify-center text-white mb-8 shadow-xl shadow-primary/20">
                <Globe className="w-8 h-8" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold  mb-6">Engineered for Impact</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Xara Labs, we don't just write code; we solve fundamental business challenges through technology. Our approach combines rigorous engineering standards with strategic business insight.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Architecture-first methodology",
                  "Security and compliance at the core",
                  "Future-proof scalability",
                  "Rapid iteration and deployment"
                ].map((point, i) => (
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
                  Learn about our philosophy <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-primary/20 rounded-lg blur-2xl opacity-50" />
              {/* Abstract Technical Visual */}
              <div className="relative bg-white rounded-lg border border-border p-8 shadow-2xl">
                <div className="space-y-6">
                  <div className="h-2 w-1/3 bg-secondary rounded" />
                  <div className="h-32 w-full bg-secondary/30 rounded border border-dashed border-border" />
                  <div className="grid grid-cols-3 gap-4">
                    <div className="h-20 bg-primary/5 rounded" />
                    <div className="h-20 bg-primary/5 rounded" />
                    <div className="h-20 bg-primary/5 rounded" />
                  </div>
                  <div className="h-2 w-2/3 bg-secondary rounded" />
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
          <h2 className="text-3xl md:text-5xl font-bold  mb-6 text-white">Ready to Transform Your Business?</h2>
          <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Let's discuss how Xara Labs can help you build the intelligent systems of tomorrow, today.
          </p>
          <Link href="/contact">
            <button className="px-10 py-5 rounded-sm bg-white text-primary font-bold text-lg hover:bg-accent hover:text-white transition-all duration-300 shadow-xl shadow-black/20 hover:-translate-y-1">
              Start the Conversation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
