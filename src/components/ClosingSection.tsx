import { Button } from "@/components/ui/button";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const ClosingSection = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Linkedin, href: "#", label: "LinkedIn" }
  ];

  return (
    <>
      {/* Closing Statement */}
      <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-primary text-white">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-block w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl leading-tight">
              This Christmas, one act of kindness becomes 
              <span className="block text-gold mt-2">food, hope, and dignity</span>
              <span className="block mt-2">for 5,000 families.</span>
            </h2>

            <p className="text-xl text-white/90 leading-relaxed">
              Join us in celebrating this season of giving. Learn more about our work or get in touch with the foundation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button 
                onClick={scrollToTop}
                className="btn-gold text-lg px-10 py-6 h-auto"
              >
                View Full Plan
              </Button>
              <Button 
                variant="outline"
                className="text-lg px-10 py-6 h-auto border-2 border-white text-white hover:bg-white/10 hover:text-white backdrop-blur-sm"
              >
                Contact the Foundation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-12">
        <div className="section-container">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* About */}
            <div>
              <h3 className="text-2xl font-serif font-bold text-gold mb-4">
                Seyi Ogundimu Foundation
              </h3>
              <p className="text-background/80 leading-relaxed">
                Transforming lives through community support, education, and sustainable development initiatives across Nigeria.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Get in Touch</h4>
              <div className="space-y-3">
                <a href="mailto:info@seyiogundimu.org" className="flex items-center gap-2 text-background/80 hover:text-gold transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>info@seyiogundimu.org</span>
                </a>
                <a href="tel:+2341234567890" className="flex items-center gap-2 text-background/80 hover:text-gold transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+234 123 456 7890</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gold">Follow Us</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-all duration-300"
                    >
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-background/20 text-center text-background/60 text-sm">
            <p>© 2025 Seyi Ogundimu Foundation. All rights reserved. | Christmas Food Support Initiative</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default ClosingSection;
