import { motion } from "framer-motion";
import { Brain, Code, Database, Users, Shield, FileText, Headphones, TrendingUp, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const aiSolutions = [
    {
      title: "Intelligent Operations Automation",
      description: "Automate decisions, escalations, and approvals across complex workflows."
    },
    {
      title: "Risk, Trust & Compliance Systems",
      description: "AI-driven verification, trust scoring, and policy enforcement."
    },
    {
      title: "Predictive Intelligence & Optimization",
      description: "Forecast outcomes, optimize resources, and improve real-time decisions."
    },
    {
      title: "Document & Knowledge Intelligence",
      description: "Extract, validate, and reason over structured and unstructured documents."
    },
    {
      title: "Customer & Internal AI Assist Systems",
      description: "AI copilots for support teams, operations, and internal users."
    }
  ];

  const engineeringServices = [
    "AI system architecture & strategy",
    "AI product and platform engineering",
    "ML / LLM implementation & integration",
    "MLOps, monitoring & reliability engineering",
    "AI governance, audit & compliance controls"
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary" data-testid="text-services-title">Solutions & Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            We design and deploy AI solutions that operate inside real business workflows — not demos, not experiments.
          </p>
        </div>
      </section>

      {/* AI Solutions Section */}
      <section id="ai-solutions" className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 bg-primary/10 rounded-full">
              <Brain className="w-8 h-8 text-primary" />
            </div>
            <div>
              <span className="text-sm font-semibold text-accent uppercase tracking-wider">Outcome-Focused</span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">AI Solutions</h2>
            </div>
          </div>
          <p className="text-lg text-muted-foreground mb-12">
            We design and deploy AI solutions that operate inside real business workflows — not demos, not experiments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {aiSolutions.map((solution, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold mb-3 text-foreground">{solution.title}</h3>
              <p className="text-muted-foreground">{solution.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Engineering Services Section */}
      <section id="engineering-services" className="bg-secondary/30 py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-accent/10 rounded-full">
                <Code className="w-8 h-8 text-accent" />
              </div>
              <div>
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">Delivery-Focused</span>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground">Engineering Services</h2>
              </div>
            </div>
            <p className="text-lg text-muted-foreground mb-8">
              Xara Labs provides hands-on engineering services for enterprises building or modernizing AI-powered systems.
            </p>
            <p className="text-lg text-foreground font-medium italic">
              We work inside your environment, with your tools, and your constraints.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {engineeringServices.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3 bg-background p-4 rounded-lg border border-border"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="font-medium text-foreground">{service}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center py-20">
        <div className="bg-primary rounded-2xl p-12 shadow-2xl shadow-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">Ready to discuss your project?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Whether you need a custom AI solution or hands-on engineering expertise, we're ready to help.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-sm hover:bg-accent hover:text-white transition-all" data-testid="button-schedule-consultation">
              Talk to Xara Labs
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
