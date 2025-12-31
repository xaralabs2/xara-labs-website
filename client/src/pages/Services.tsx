import { motion } from "framer-motion";
import { Brain, Code, Database, Users, Map, CheckCircle2 } from "lucide-react";
import { Link } from "wouter";

export default function Services() {
  const sections = [
    {
      id: "ai",
      icon: <Brain className="w-10 h-10 text-accent" />,
      title: "AI & Intelligent Systems",
      description: "We design and deploy sophisticated AI models that automate processes, unlock insights, and create competitive advantages.",
      features: [
        "Predictive Analytics & Forecasting",
        "Natural Language Processing (NLP)",
        "Computer Vision Solutions",
        "Automated Decision Engines"
      ]
    },
    {
      id: "software",
      icon: <Code className="w-10 h-10 text-accent" />,
      title: "Custom Software Development",
      description: "Tailor-made software solutions built on robust, scalable architectures that grow with your enterprise.",
      features: [
        "Full-Stack Web Applications",
        "Microservices Architecture",
        "Legacy System Modernization",
        "High-Performance APIs"
      ]
    },
    {
      id: "platform",
      icon: <Database className="w-10 h-10 text-accent" />,
      title: "Data & Platform Engineering",
      description: "Building the foundation for your digital success with secure, scalable cloud infrastructure and data pipelines.",
      features: [
        "Cloud Infrastructure (AWS/Azure/GCP)",
        "Data Warehousing & Lakes",
        "DevOps & CI/CD Pipelines",
        "Security & Compliance Audits"
      ]
    },
    {
      id: "strategy",
      icon: <Map className="w-10 h-10 text-accent" />,
      title: "Technical Strategy & Roadmaps",
      description: "Aligning technology investments with business goals through comprehensive strategic planning.",
      features: [
        "Digital Transformation Strategy",
        "Technology Due Diligence",
        "Architecture Reviews",
        "Product Roadmapping"
      ]
    },
    {
      id: "team",
      icon: <Users className="w-10 h-10 text-accent" />,
      title: "Team Augmentation",
      description: "Injecting specialized expertise into your existing teams to accelerate delivery and upskill your workforce.",
      features: [
        "Embedded Senior Engineers",
        "Technical Leadership",
        "Specialized Skill Sets",
        "Agile Process Coaching"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      {/* Header */}
      <section className="bg-secondary/30 py-20 border-b border-border">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold font-display mb-6 text-primary">Our Services</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive technical capabilities designed to solve complex enterprise challenges. 
            From strategy to execution, we are your partners in innovation.
          </p>
        </div>
      </section>

      {/* Services List */}
      <div className="container mx-auto px-6 py-20 space-y-24">
        {sections.map((service, index) => (
          <motion.div 
            key={service.id}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className={`flex flex-col md:flex-row gap-12 items-start ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}
          >
            <div className="flex-1 bg-card border border-border rounded-lg p-10 shadow-lg hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110" />
              <div className="relative z-10">
                <div className="mb-6 p-4 bg-primary/5 rounded-full inline-block">
                  {service.icon}
                </div>
                <h2 className="text-3xl font-bold font-display mb-4 text-foreground">{service.title}</h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="font-medium text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Visual/Context side - purely decorative for now, could be images */}
            <div className="flex-1 flex flex-col justify-center h-full min-h-[300px] bg-secondary/20 rounded-lg p-10 border border-border/50">
              <div className="space-y-4 opacity-50">
                <div className="h-4 bg-foreground/10 rounded w-3/4"></div>
                <div className="h-4 bg-foreground/10 rounded w-full"></div>
                <div className="h-4 bg-foreground/10 rounded w-5/6"></div>
                <div className="h-32 bg-foreground/5 rounded w-full border border-foreground/10 mt-8 flex items-center justify-center font-mono text-xs">
                  // {service.id} visualization
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="container mx-auto px-6 text-center py-12">
        <div className="bg-primary rounded-2xl p-12 shadow-2xl shadow-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold font-display mb-6 text-white">Not sure what you need?</h2>
          <p className="text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our strategic consultants can help assess your current landscape and define a technical roadmap tailored to your business goals.
          </p>
          <Link href="/contact">
            <button className="px-8 py-4 bg-white text-primary font-bold rounded-sm hover:bg-accent hover:text-white transition-all">
              Schedule a Consultation
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}
