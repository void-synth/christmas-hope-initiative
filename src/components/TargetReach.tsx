import { MapPin } from "lucide-react";

const TargetReach = () => {
  const states = [
    { name: "Lagos", families: 1500, color: "from-primary to-primary/80" },
    { name: "Oyo", families: 1000, color: "from-gold to-gold-light" },
    { name: "Ogun", families: 800, color: "from-primary to-primary/80" },
    { name: "Ondo", families: 700, color: "from-gold to-gold-light" },
    { name: "Osun", families: 600, color: "from-primary to-primary/80" },
    { name: "Ekiti", families: 400, color: "from-gold to-gold-light" }
  ];

  const totalFamilies = states.reduce((sum, state) => sum + state.families, 0);

  return (
    <section className="section-spacing py-12 sm:py-16 md:py-24 bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          <h2
            className="heading-display text-3xl sm:text-4xl lg:text-6xl text-primary mb-3 sm:mb-5 text-balance"
            style={{ fontSize: "var(--heading-fluid-lg)" }}
          >
            Geographic Reach
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            Supporting communities across six states in Southwestern Nigeria
          </p>
        </div>

        {/* Map Illustration */}
        <div className="max-w-4xl mx-auto mb-10 sm:mb-14 lg:mb-16 p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-primary/5 to-gold/5 border border-border/50">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
            {states.map((state, index) => (
              <div 
                key={index}
                className="text-center group cursor-pointer"
              >
                <div className="relative inline-block mb-3 sm:mb-4">
                  <div className={`w-[4.5rem] h-[4.5rem] sm:w-24 sm:h-24 rounded-full bg-gradient-to-br ${state.color} flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                    <MapPin className="w-7 h-7 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gold text-gold-foreground flex items-center justify-center text-xs font-bold">
                    {index + 1}
                  </div>
                </div>
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-primary mb-1 sm:mb-2">
                  {state.name}
                </h3>
                <p className="text-2xl sm:text-3xl font-bold text-gold mb-1">
                  {state.families.toLocaleString()}
                </p>
                <p className="text-sm text-muted-foreground">families</p>
              </div>
            ))}
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid gap-4 sm:gap-5 md:gap-6 sm:grid-cols-3 max-w-4xl mx-auto">
          <div className="card-elegant text-center bg-gradient-to-br from-primary/5 to-transparent py-5 sm:py-6">
            <p className="text-sm text-muted-foreground mb-2">Total Families</p>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary">{totalFamilies.toLocaleString()}</p>
          </div>
          <div className="card-elegant text-center bg-gradient-to-br from-gold/5 to-transparent py-5 sm:py-6">
            <p className="text-sm text-muted-foreground mb-2">Communities</p>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-gold">30+</p>
          </div>
          <div className="card-elegant text-center bg-gradient-to-br from-primary/5 to-transparent py-5 sm:py-6">
            <p className="text-sm text-muted-foreground mb-2">States Covered</p>
            <p className="text-3xl sm:text-4xl font-serif font-bold text-primary">6</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetReach;
