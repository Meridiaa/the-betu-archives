type Props = { onDenyCuteness: () => void };

const stats = [
  ["CUTENESS", "1000/10", "💗"],
  ["ANNOYINGNESS", "999/10", "🙄"],
  ["HANDSOMENESS", "CLASSIFIED", "😎"],
  ["RIZZ LEVEL", "UNDER REVIEW", "🕵️"],
  ["SUGAR DADDY", "UNDER INVESTIGATION", "💸"],
  ["BOYFRIEND QUALITY", "TOP TIER", "🏆"],
];

export default function Evaluation({ onDenyCuteness }: Props) {
  return (
    <section className="section" id="evaluation">
      <div className="section-heading">
        <span>02 / SCIENTIFIC RESEARCH</span>
        <h2>THE BOYFRIEND REPORT</h2>
        <p>PEER REVIEWED BY PAHAD. THE ONLY AUTHORITY THAT MATTERS.</p>
      </div>
      <div className="stats-grid">
        {stats.map(([label, value, emoji]) => (
          <article className="stat-card" key={label}>
            <div className="stat-emoji">{emoji}</div>
            <div className="stat-label">{label}</div>
            <div className="stat-value">{value}</div>
            <div className="stat-bar"><div className="stat-fill" /></div>
          </article>
        ))}
      </div>
      <button className="pixel-button secondary-button" onClick={onDenyCuteness}>
        I AM NOT CUTE 🙄
      </button>
    </section>
  );
}