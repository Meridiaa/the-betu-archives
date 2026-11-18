import { Heart, Lock, Monitor } from "lucide-react";
import RetroWindow from "../components/RetroWindow";

type Props = { entered: boolean; onEnter: () => void };

export default function Welcome({ entered, onEnter }: Props) {
  return (
    <section className="hero" id="home">
      <RetroWindow title="betu_archives.exe" className="hero-window">
        <div className="hero-content">
          <div className="tiny-label">✦ A SPECIAL TRANSMISSION FROM PAHAD ✦</div>
          <p className="hero-pretitle">WELCOME TO THE OFFICIAL</p>
          <h1>BETU<br /><span>ARCHIVES</span><b>♡</b></h1>
          <div className="established">EST. 2026 • MADE WITH PAHAD</div>
          <div className="hero-image">
            <Monitor size={76} strokeWidth={1.4} />
            <span className="orbit-heart">💗</span>
            <span className="orbit-star">✨</span>
          </div>
          <h2>WARNING: BOYFRIEND DETECTED.</h2>
          <p className="hero-description">
            An extremely serious investigation into one very unserious boy.
          </p>
          <button className="pixel-button" onClick={onEnter}>
            <Lock size={15} /> {entered ? "ACCESS GRANTED ♡" : "ENTER THE DATABASE"} <Heart size={15} fill="currentColor" />
          </button>
          <p className="disclaimer">⚠ Excessive cuteness may cause system malfunction.</p>
        </div>
      </RetroWindow>
      <a className="scroll-hint" href="#profile">SCROLL TO EXPLORE ↓</a>
    </section>
  );
}