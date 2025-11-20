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
    <section id="food-pack" className="section-spacing bg-background">
      <div className="section-container">
        <div className="text-center mb-16">
          <Badge className="mb-4 text-lg px-6 py-2 bg-gold text-gold-foreground">
            Each Family Receives
          </Badge>
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
            The Christmas 2025 Food Pack
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A carefully curated selection of essential food items to bring joy and sustenance to families
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Food Pack Image */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={foodPackImg} 
              alt="Christmas Food Pack Contents"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent" />
          </div>

          {/* Items List */}
          <div className="space-y-6">
            {items.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="flex items-start gap-4 p-6 rounded-xl bg-card border border-border/50 hover:border-gold/50 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-1">
                      {item.name}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              );
            })}

            {/* Value Badge */}
            <div className="mt-8 p-8 rounded-2xl bg-gradient-to-br from-gold/10 to-gold/5 border-2 border-gold/30">
              <div className="text-center">
                <p className="text-sm text-muted-foreground mb-2">Total Pack Value</p>
                <p className="text-5xl font-serif font-bold text-gold">₦18,150</p>
                <p className="text-sm text-muted-foreground mt-2">per family</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FoodPack;
