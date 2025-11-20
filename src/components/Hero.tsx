import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden safe-px">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/80 to-primary/90" />
      </div>

      {/* Content */}
      <div className="relative z-10 section-container text-center text-white">
        <div className="animate-fade-in-up space-y-8 max-w-3xl sm:max-w-4xl mx-auto">
          <div className="inline-block px-4 sm:px-6 py-2 rounded-full border border-gold/40 bg-gold/10 backdrop-blur-sm mb-2 sm:mb-4">
            <span className="text-gold font-serif text-base sm:text-lg tracking-[0.2em] uppercase">
              Christmas 2025 Initiative
            </span>
          </div>
          
          <h1
            className="heading-display text-4xl sm:text-5xl lg:text-7xl leading-tight text-balance"
            style={{ fontSize: "var(--heading-fluid-xl)" }}
          >
            Feeding 5,000 Families
            <span className="block text-gold mt-2">This Christmas</span>
          </h1>
          
          <p className="text-lg sm:text-xl text-white/90 max-w-2xl sm:max-w-3xl mx-auto font-light leading-relaxed text-balance">
            A private initiative fully funded by one individual to support families across Southwestern Nigeria
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-6 sm:pt-8 w-full">
            <Button 
              onClick={() => scrollToSection('food-pack')}
              className="btn-gold text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 h-auto w-full sm:w-auto"
            >
              View Full Plan
            </Button>
            <Button 
              onClick={() => scrollToSection('contact')}
              variant="outline"
              className="text-base sm:text-lg px-8 sm:px-10 py-4 sm:py-6 h-auto border border-white/80 text-white hover:bg-white/10 hover:text-white backdrop-blur-sm w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </div>

          {/* Stats Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-8 pt-10 sm:pt-16 max-w-3xl mx-auto w-full">
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold">5,000</div>
              <div className="text-white/80 mt-2 text-sm sm:text-base">Families Supported</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold">6</div>
              <div className="text-white/80 mt-2 text-sm sm:text-base">States Covered</div>
            </div>
            <div className="backdrop-blur-sm bg-white/5 rounded-xl p-5 sm:p-6 border border-white/10">
              <div className="text-3xl sm:text-4xl font-serif font-bold text-gold">₦90.75M</div>
              <div className="text-white/80 mt-2 text-sm sm:text-base">Total Investment</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
