import { Package2, Droplets, UtensilsCrossed } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import foodPackImg from "@/assets/food-pack.jpg";

const FoodPack = () => {
  const items = [
    { icon: Package2, name: "5kg Premium Rice", description: "Quality rice for family meals" },
    { icon: Droplets, name: "1L Vegetable Oil", description: "Essential cooking oil" },
    { icon: UtensilsCrossed, name: "4× Golden Penny Spaghetti", description: "Nutritious pasta meals" },
    { icon: Package2, name: "5× Tomato Paste Sachets", description: "Cooking essentials" }
  ];

  return (
    <section id="food-pack" className="section-spacing py-12 sm:py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          <Badge className="mb-3 sm:mb-4 text-sm sm:text-base px-4 sm:px-6 py-1.5 bg-gold text-gold-foreground">
            Each Family Receives
          </Badge>
          <h2
            className="heading-display text-3xl sm:text-4xl lg:text-6xl text-primary mb-3 sm:mb-5 text-balance"
            style={{ fontSize: "var(--heading-fluid-lg)" }}
          >
            The Christmas 2025 Food Pack
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A carefully curated selection of essential food items to bring joy and sustenance to families
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center max-w-6xl mx-auto">
          {/* Food Pack Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[220px] sm:min-h-[300px]">
            <img 
              src={foodPackImg} 
              alt="Christmas Food Pack Contents"
              className="w-full h-full object-cover aspect-[4/3] lg:aspect-auto"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          {/* Items List */}
          <div className="space-y-4 sm:space-y-5">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-4 sm:p-6 rounded-xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg flex-col sm:flex-row"
                >
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary mb-1">
                      {item.name}
                    </h3>
                    <p className="text-sm sm:text-base text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Value Badge */}
            <div className="mt-5 sm:mt-8 p-5 sm:p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/30 text-center">
              <p className="text-xs sm:text-sm text-muted-foreground mb-2 uppercase tracking-[0.2em]">Total Pack Value</p>
              <p className="text-4xl sm:text-5xl font-serif font-bold text-gold">₦18,150</p>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2">per family</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodPack;
