import { ShieldCheck, UsersRound, ClipboardCheck, Siren, MapPinned } from "lucide-react";

const SecurityLogistics = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      title: "Layered Security Teams",
      description: "Professional security partners, civil defence officers, and community vigilantes coordinate per location with clear radio channels and defined zones."
    },
    {
      icon: UsersRound,
      title: "Crowd Flow Controls",
      description: "Participants are pre-scheduled in micro-batches of 50 families, with wristband color-coding, shaded waiting bays, and controlled entry/exit funnels."
    },
    {
      icon: ClipboardCheck,
      title: "Verification Protocols",
      description: "Digital beneficiary lists, QR-backed claim cards, and double sign-off (logistics + community rep) prevent duplicate pickups and keep queues moving."
    }
  ];

  const safeguards = [
    {
      icon: MapPinned,
      heading: "Site Layout & Routing",
      items: [
        "Perimeter fencing with single queue spine and emergency side gates",
        "Visible floor markings every 2m to maintain spacing",
        "Dedicated loading bays keeping trucks away from crowd lanes"
      ]
    },
    {
      icon: Siren,
      heading: "Emergency & Medical Cover",
      items: [
        "On-site medics with hydration stations and triage tent",
        "Rapid escalation tree linking security lead, convoy marshal, foundation HQ",
        "Weather-based pause protocol to halt distribution if conditions degrade"
      ]
    }
  ];

  return (
    <section className="section-spacing bg-secondary/30">
      <div className="section-container">
        <div className="text-center mb-12 sm:mb-16 px-3 sm:px-0">
          <p className="eyebrow text-sm tracking-[0.25em] text-gold mb-3">Safety First</p>
          <h2
            className="heading-display text-3xl sm:text-5xl text-primary mb-4 sm:mb-6 text-balance"
            style={{ fontSize: "var(--heading-fluid-lg)" }}
          >
            Security & Logistics Assurance
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto text-balance">
            Every distribution centre follows a disciplined security plan to keep families calm,
            queues efficient, and volunteers protected from crowd surges.
          </p>
        </div>

        <div className="grid gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-10">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <article key={pillar.title} className="card-elegant h-full bg-card">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-semibold text-primary mb-2">{pillar.title}</h3>
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">{pillar.description}</p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {safeguards.map((block) => {
            const Icon = block.icon;
            return (
              <div key={block.heading} className="card-elegant space-y-4 bg-card">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-gradient-to-br from-primary/10 to-gold/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-serif font-semibold text-primary">{block.heading}</h4>
                </div>
                <ul className="space-y-3 text-sm sm:text-base text-muted-foreground">
                  {block.items.map((item) => (
                    <li key={item} className="flex gap-2">
                      <span className="mt-1 inline-block h-2 w-2 rounded-full bg-gold" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SecurityLogistics;

