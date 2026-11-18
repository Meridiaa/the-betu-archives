const awards = [
  ["🏆", "BEST BOYFRIEND", "Jury suspiciously biased"],
  ["💋", "MOST KISSABLE HUMAN", "No further explanation"],
  ["🥇", "PROFESSIONAL ANNOYER", "Lifetime achievement"],
  ["💗", "FAVOURITE HUMAN", "Awarded by Lovee"],
];

export default function Awards() {
  return (
    <section className="section" id="awards">
      <div className="section-heading">
        <span>04 / PRESTIGIOUS ACHIEVEMENTS</span>
        <h2>THE AWARD CEREMONY</h2>
        <p>THE ACADEMY HAS ONE VERY BIASED JUDGE.</p>
      </div>
      <div className="awards-grid">
        {awards.map(([emoji, title, description]) => (
          <article className="award-card" key={title}>
            <div>{emoji}</div>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}