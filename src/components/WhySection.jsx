import './WhySection.css';
import whyBg from '../assets/why-cv-bg.svg';
import whySectionBg from '../assets/why-section-background.svg';

const leftColumnCards = [
  {
    title: 'Production Grade Engineering',
    titleParts: ['Production Grade', 'Engineering'],
    stat: '30–60%',
    body: "AI products engineered with enterprise rigor, tested, governed, audit-ready. Built by engineers who've shipped at scale.",
    label: 'Reduction in manual effort',
    variant: 'production',
  },
  {
    title: "Beyond Prototypes",
    titleParts: ["Beyond", 'Prototypes'],
    stat: '< 12 weeks',
    body: 'Most AI initiatives stall in pilot mode. Our products ship to production, and keep delivering.',
    label: 'to ship',
  },
];

const rightColumnCards = [
  {
    title: 'AI-Native by Design',
    titleParts: ['AI-Native by', 'Design'],
    stat: '100%',
    body: 'Products built by AI agents that analyse, architect, and review together. Humans approve what matters.',
    label: 'Decision traceability',
  },
  {
    title: 'Enterprise Governance & Reliability',
    titleParts: ['Enterprise Governance', '& Reliability'],
    stat: '24/7',
    body: 'Monitoring, drift detection, and continuous improvement. We keep your products accurate and resilient.',
    label: 'Operational monitoring',
  },
];

function WhyCard({ title, titleParts, stat, body, label, variant }) {
  const cardClassName =
    variant === 'production' ? 'why-card why-card-production' : 'why-card';

  return (
    <div className={cardClassName}>
      <div className="why-card-content">
        <h2 className="why-card-title">
          {titleParts ? (
            <>
              {titleParts[0]}
              <br />
              {titleParts[1]}
            </>
          ) : (
            title
          )}
        </h2>
        <p className="why-card-body">{body}</p>
      </div>
      <div className="why-card-footer">
        <div className="why-card-stat">{stat}</div>
        <div className="why-card-label">{label}</div>
      </div>
    </div>
  );
}

function WhySection({ variant }) {
  const sectionClass =
    variant === 'embedded' ? 'why-section why-section-embedded' : 'why-section';

  return (
    <section className={sectionClass}>
      {variant === 'embedded' && (
        <div className="why-figma-bg-wrapper">
          <img src={whySectionBg} alt="" className="why-figma-bg" />
        </div>
      )}

      <main className="why-main">
        <header className="why-header">
          <h1 className="why-title">
            Why organizations choose<br className="why-title-break" /> Chartered Vectorial
          </h1>
        </header>

        <div className="why-grid">
          <div className="why-column why-column-left">
            {leftColumnCards.map((card) => (
              <WhyCard key={card.title} {...card} />
            ))}
          </div>

          <div className="why-column why-column-right">
            {rightColumnCards.map((card) => (
              <WhyCard key={card.title} {...card} />
            ))}
          </div>
        </div>
      </main>
    </section>
  );
}

export default WhySection;
