import { TrendingDown, Home, Heart } from "lucide-react";

const ProblemStatement = () => {
  const problems = [
    {
      icon: TrendingDown,
      title: "Rising Food Inflation",
      description: "Food prices continue to surge, making basic meals unaffordable for many Nigerian families."
    },
    {
      icon: Home,
      title: "Festive Season Hardship",
      description: "The holiday season intensifies financial pressure, with families struggling to celebrate with dignity."
    },
    {
      icon: Heart,
      title: "Basic Meal Struggles",
      description: "Thousands of families face daily uncertainty about their next meal, especially during this season."
    }
  ];

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="heading-display text-4xl sm:text-5xl lg:text-6xl text-primary mb-6">
            The Challenge We're Addressing
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Understanding the urgent need behind this initiative
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <div 
                key={index}
                className="card-elegant text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold text-primary mb-4">
                  {problem.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProblemStatement;
