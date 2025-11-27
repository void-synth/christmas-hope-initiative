import { ShoppingCart, Warehouse, Users, Package } from "lucide-react";

const ExecutionPlan = () => {
  const steps = [
    {
      icon: ShoppingCart,
      title: "Central Procurement",
      description: "Bulk purchase of quality food items from verified suppliers to ensure consistency and value."
    },
    {
      icon: Warehouse,
      title: "State Warehousing",
      description: "Strategic distribution centers established in each state for efficient inventory management."
    },
    {
      icon: Users,
      title: "Local Distribution Agents",
      description: "Trusted community partners coordinate the final distribution to ensure accountability."
    },
    {
      icon: Package,
      title: "Community Delivery",
      description: "Direct handover to families with proper documentation and verification processes."
    }
  ];

  return (
    <section className="section-spacing py-12 sm:py-16 md:py-24 bg-background">
      <div className="section-container">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 px-2 sm:px-0">
          <h2
            className="heading-display text-3xl sm:text-4xl lg:text-6xl text-primary mb-3 sm:mb-5 text-balance"
            style={{ fontSize: "var(--heading-fluid-lg)" }}
          >
            Execution Strategy
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-3xl mx-auto text-balance">
            A systematic four-step approach ensuring transparency and efficiency
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Desktop: Horizontal Flow */}
          <div className="hidden md:grid md:grid-cols-4 gap-5 lg:gap-6 relative">
            {/* Connection Lines */}
            <div className="absolute top-14 left-0 right-0 h-1 bg-gradient-to-r from-primary via-gold to-primary" style={{ width: '88%', left: '6%' }} />
            
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Number Circle */}
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-light text-gold-foreground flex items-center justify-center font-bold text-xl shadow-lg z-10 border-4 border-background">
                    {index + 1}
                  </div>
                  
                  {/* Card */}
                  <div className="card-elegant pt-12 text-center h-full bg-card">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 mb-6">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-3">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Mobile: Vertical Flow */}
          <div className="md:hidden space-y-5">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative pl-12 sm:pl-16">
                  {/* Step Number */}
                  <div className="absolute left-0 top-0 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-gold to-gold-light text-gold-foreground flex items-center justify-center font-bold text-lg sm:text-xl shadow-lg">
                    {index + 1}
                  </div>
                  
                  {/* Vertical Line */}
                  {index < steps.length - 1 && (
                    <div className="absolute left-5 sm:left-6 top-10 sm:top-12 bottom-0 w-0.5 bg-gradient-to-b from-primary to-gold" style={{ height: 'calc(100% + 1.25rem)' }} />
                  )}
                  
                  {/* Card */}
                  <div className="card-elegant">
                    <div className="flex items-start gap-4 flex-col sm:flex-row">
                    <div className="flex-shrink-0 w-11 h-11 sm:w-14 sm:h-14 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                      <Icon className="w-5 h-5 sm:w-7 sm:h-7 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl font-serif font-semibold text-primary mb-2">
                          {step.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionPlan;
