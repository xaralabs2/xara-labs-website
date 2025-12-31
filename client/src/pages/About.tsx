import { motion } from "framer-motion";
import { Link } from "wouter";
import { Award, Briefcase, Users, Target } from "lucide-react";

export default function About() {
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
          <h1 className="text-4xl md:text-6xl font-bold  mb-8 text-primary">
            Engineering Excellence for the Enterprise
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Xara Labs was founded on a simple premise: complex problems require elegant, robust solutions. We are a collective of senior engineers, architects, and strategists dedicated to pushing the boundaries of what's possible with technology.
          </p>
        </motion.div>
      </section>

      {/* Values/Mission */}
      <section className="bg-secondary/30 py-20 border-y border-border">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: <Target />, title: "Precision", text: "We believe in exactitude. Every line of code serves a purpose; every architectural decision is deliberate." },
              { icon: <Award />, title: "Quality", text: "We do not compromise on quality. Our systems are built to last, scale, and perform under pressure." },
              { icon: <Briefcase />, title: "Business Focus", text: "Technology is a tool for business growth. We align every technical deliverable with your ROI." },
              { icon: <Users />, title: "Partnership", text: "We are not just vendors; we are extension of your team, invested in your long-term success." }
            ].map((val, i) => (
              <div key={i} className="bg-background p-8 rounded-lg border border-border shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center text-primary mb-6">
                  {val.icon}
                </div>
                <h3 className="text-xl font-bold  mb-3">{val.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{val.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership/Team focus */}
      <section className="container mx-auto px-6 py-24">
        <div className="flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            {/* Using a placeholder image with Unsplash source comment */}
            {/* corporate office modern architecture building */}
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
            <h2 className="text-3xl md:text-4xl font-bold  text-primary">Our Expertise</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Our team consists of industry veterans who have led technical initiatives at Fortune 500 companies and high-growth startups. We understand the unique challenges of operating at scale.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We specialize in bridging the gap between visionary executive strategy and rigorous technical execution. Whether you need a CTO-level consultation or a SWAT team of engineers to rescue a project, Xara Labs brings the necessary firepower.
            </p>
            <div className="pt-4">
              <Link href="/services">
                <button className="text-accent font-semibold hover:text-primary transition-colors flex items-center gap-2">
                  View our capabilities <span className="text-xl">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
