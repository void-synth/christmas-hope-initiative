import { Target, Eye, BookOpen } from "lucide-react";

const AboutFoundation = () => {
  const pillars = [
    {
      icon: Target,
      title: "Our Mission",
      description: "To provide sustainable support to underserved communities through targeted interventions in food security, education, and community development."
    },
    {
      icon: Eye,
      title: "Our Vision",
      description: "A Nigeria where every family has access to basic necessities and opportunities for growth, dignity, and prosperity."
    },
    {
      icon: BookOpen,
      title: "Our History",
      description: "Since our founding, we have consistently delivered impactful programs, reaching thousands of families through food support, educational scholarships, and healthcare initiatives."
    }
  ];

  return (
    <section className="section-spacing bg-background">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
              About the Foundation
            </h2>
            <p className="text-xl text-muted-foreground">
              Dedicated to transforming lives and building stronger communities across Nigeria
            </p>
          </div>

          <div className="space-y-8">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div 
                  key={index}
                  className="card-elegant flex items-start gap-6 group"
                >
                  <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-serif font-semibold text-primary mb-3">
                      {pillar.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-gold/5 border border-border/50">
            <p className="text-center text-lg text-foreground leading-relaxed">
              The Seyi Ogundimu Foundation operates with full transparency and accountability, ensuring that every initiative directly impacts the communities we serve. Our Christmas 2025 Food Support program represents our commitment to immediate, tangible relief for families in need.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFoundation;
