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
      <section className="section-spacing bg-gradient-to-br from-primary via-primary/95 to-primary text-white safe-px">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
            <div className="inline-block w-20 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
            
            <h2
              className="heading-display text-3xl sm:text-5xl lg:text-6xl leading-tight text-balance"
              style={{ fontSize: "var(--heading-fluid-lg)" }}
            >
              This Christmas, one act of kindness becomes 
              <span className="block text-gold mt-2">food, hope, and dignity</span>
              <span className="block mt-2">for 5,000 families.</span>
            </h2>

            <p className="text-lg sm:text-xl text-white/90 leading-relaxed text-balance">
              Join us in celebrating this season of giving. Learn more about our work or get in touch with the foundation.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center pt-6 sm:pt-8">
              <Button 
                onClick={scrollToTop}
                className="btn-gold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 h-auto w-full sm:w-auto"
              >
                View Full Plan
              </Button>
              <Button 
                variant="outline"
                className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 h-auto border border-white/80 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm w-full sm:w-auto"
              >
                Contact the Foundation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-foreground text-background py-10 sm:py-12">
        <div className="section-container">
          <div className="grid gap-8 md:grid-cols-3 mb-8">
            {/* About */}
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-bold text-gold mb-3 sm:mb-4">
                Seyi Ogundimu Foundation
              </h3>
              <p className="text-background/80 leading-relaxed text-sm sm:text-base">
                Transforming lives through community support, education, and sustainable development initiatives across Nigeria.
              </p>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Get in Touch</h4>
              <div className="space-y-3">
                <a href="mailto:info@seyiogundimu.org" className="flex items-center gap-2 text-background/80 hover:text-gold transition-colors text-sm sm:text-base">
                  <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>info@seyiogundimu.org</span>
                </a>
                <a href="tel:+2348107714553" className="flex items-center gap-2 text-background/80 hover:text-gold transition-colors text-sm sm:text-base">
                  <Phone className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span>+2348107714553</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-gold">Follow Us</h4>
              <div className="flex gap-3 sm:gap-4 flex-wrap">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-gold/10 flex items-center justify-center hover:bg-gold hover:text-foreground transition-all duration-300"
                    >
                      <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
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
