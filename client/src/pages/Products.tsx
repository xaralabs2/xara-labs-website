import { motion } from "framer-motion";
import { Link } from "wouter";
import { Shield, Eye, Workflow, FileCheck, Activity, CheckCircle2 } from "lucide-react";

export default function Products() {
  const cortexFeatures = [
    { icon: <Shield className="w-5 h-5" />, title: "Model Control", description: "Which AI is allowed" },
    { icon: <Eye className="w-5 h-5" />, title: "Agent Control", description: "What AI can do" },
    { icon: <Workflow className="w-5 h-5" />, title: "Workflow Control", description: "Execution order" },
    { icon: <FileCheck className="w-5 h-5" />, title: "Policy Control", description: "Non-negotiable constraints" },
    { icon: <Activity className="w-5 h-5" />, title: "Full Audit", description: "Observability and logging" }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">Products Built by Xara Labs</span>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary mt-2" data-testid="text-products-title">Xara Cortex™</h1>
          <p className="text-2xl text-foreground font-medium mb-4">
            AI Decision & Control Infrastructure
          </p>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Xara Cortex is a standalone platform that sits between applications and AI execution, enforcing control before any AI action is allowed to run.
          </p>
        </div>
      </section>

      {/* Cortex Features */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" data-testid="text-cortex-provides">Cortex Provides</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cortexFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-card border border-border rounded-lg p-6 text-center hover:shadow-lg transition-shadow"
                data-testid={`card-cortex-feature-${index}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mx-auto mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 text-foreground" data-testid={`text-feature-title-${index}`}>{feature.title}</h3>
                <p className="text-muted-foreground text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How Cortex Fits Diagram */}
      <section className="bg-secondary/30 py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center" data-testid="text-how-cortex-fits">How Cortex Fits (When Needed)</h2>
            
            <div className="bg-background rounded-lg border border-border p-8 shadow-lg">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-full bg-secondary/50 rounded-sm p-4 text-center font-medium">Application / User</div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-border"></div>
                    <div className="text-muted-foreground text-xs">↓</div>
                    <div className="w-0.5 h-4 bg-border"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-primary/10 border-2 border-primary/30 rounded-sm p-4 text-center font-bold text-primary">Cortex Control Layer</div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-border"></div>
                    <div className="text-muted-foreground text-xs">↓</div>
                    <div className="w-0.5 h-4 bg-border"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-accent/10 border border-accent/20 rounded-sm p-4 text-center font-medium text-accent">Approved AI Execution</div>
                </div>
                <div className="flex justify-center">
                  <div className="flex flex-col items-center">
                    <div className="w-0.5 h-4 bg-border"></div>
                    <div className="text-muted-foreground text-xs">↓</div>
                    <div className="w-0.5 h-4 bg-border"></div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-full bg-secondary/30 rounded-sm p-4 text-center font-medium text-muted-foreground">Logged, bounded outcomes</div>
                </div>
              </div>
            </div>

            <p className="text-center text-muted-foreground mt-8 text-sm">
              Xara Labs services do not require Cortex. Cortex is available where reusable, governed AI decision infrastructure is needed.
            </p>
          </div>
        </div>
      </section>

      {/* Licensing Note */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-lg text-muted-foreground mb-8">
            Cortex is optional and licensed separately.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-sm hover:bg-primary/90 transition-all" data-testid="button-learn-cortex">
              Learn About Xara Cortex
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
