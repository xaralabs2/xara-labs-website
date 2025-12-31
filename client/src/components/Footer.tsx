import { Link } from "wouter";
import { Mail, MapPin, Linkedin, Twitter, Github } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="w-8 h-8 bg-white text-primary rounded-sm flex items-center justify-center font-bold  text-xl">
                X
              </div>
              <span className="text-xl font-bold  tracking-tight text-white">
                Xara Labs
              </span>
            </Link>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-xs">
              Building the future with intelligent systems, custom software, and strategic innovation for enterprise scale.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white ">Services</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/services" className="hover:text-white transition-colors">AI & Intelligent Systems</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Software Development</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Platform Engineering</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Technical Strategy</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white ">Company</h4>
            <ul className="space-y-3 text-sm text-primary-foreground/70">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
              <li><Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6 text-white ">Connect</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <Mail className="w-4 h-4" />
                <span>hello@xaralabs.xyz</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-primary-foreground/70">
                <MapPin className="w-4 h-4" />
                <span>San Jose, CA</span>
              </div>
              <div className="flex gap-4 pt-2">
                <a href="#" className="hover:text-accent transition-colors"><Linkedin className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Twitter className="w-5 h-5" /></a>
                <a href="#" className="hover:text-accent transition-colors"><Github className="w-5 h-5" /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/50">
          <p>&copy; {new Date().getFullYear()} Xara Labs LLC. All rights reserved.</p>
          <p>Designed for Excellence.</p>
        </div>
      </div>
    </footer>
  );
}
