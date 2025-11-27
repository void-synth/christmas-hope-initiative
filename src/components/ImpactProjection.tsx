import { Users, MapPinned, Heart, FileText } from "lucide-react";
import outreach1 from "@/assets/outreach-1.jpg";
import outreach2 from "@/assets/outreach-2.jpg";
import outreach3 from "@/assets/outreach-3.jpg";
import outreach4 from "@/assets/outreach-4.jpg";

const ImpactProjection = () => {
  const metrics = [
    { icon: Users, value: "5,000", label: "Families Supported", color: "from-primary to-primary/80" },
    { icon: MapPinned, value: "30+", label: "Communities Reached", color: "from-gold to-gold-light" },
    { icon: Heart, value: "200+", label: "Active Volunteers", color: "from-primary to-primary/80" },
    { icon: FileText, value: "100%", label: "Transparent Documentation", color: "from-gold to-gold-light" }
  ];

  const images = [outreach1, outreach2, outreach3, outreach4];

  return (
    <section className="section-spacing py-12 sm:py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          <h2
            className="heading-display text-3xl sm:text-4xl lg:text-6xl text-primary mb-3 sm:mb-5 text-balance"
            style={{ fontSize: "var(--heading-fluid-lg)" }}
          >
            Projected Impact
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Measuring the reach and effectiveness of our Christmas 2025 initiative
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12 sm:mb-14 lg:mb-16">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div 
                key={index}
                className="card-elegant text-center group overflow-hidden relative"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
                  </div>
                <p className="text-4xl sm:text-5xl font-serif font-bold text-gold mb-1 sm:mb-2">{metric.value}</p>
                  <p className="text-muted-foreground">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Past Outreach Photos */}
        <div>
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold text-primary text-center mb-5 sm:mb-7 text-balance">
            Moments from Past Outreach Programs
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {images.map((img, index) => (
              <div 
                key={index}
                className="relative group overflow-hidden rounded-xl aspect-[4/3] shadow-lg hover:shadow-2xl transition-shadow duration-300"
              >
                <img 
                  src={img} 
                  alt={`Past outreach ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactProjection;
