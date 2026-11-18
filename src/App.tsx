import { useState } from "react";
import Header from "./components/Header";
import Popup from "./components/Popup";
import Certificate from "./components/Certificate";
import Welcome from "./sections/Welcome";
import Profile from "./sections/Profile";
import Evaluation from "./sections/Evaluation";
import Quiz from "./sections/Quiz";
import Awards from "./sections/Awards";
import "./App.css";

const funnyMessages = [
  "LIAR DETECTED. 🚨",
  "Your girlfriend strongly disagrees.",
  "Error 404: Humility not found.",
  "Stop arguing with the scientific evidence.",
  "This denial has been forwarded to Lovee.",
];

export default function App() {
  const [entered, setEntered] = useState(false);
  const [sound, setSound] = useState(false);
  const [popupMessage, setPopupMessage] = useState<string | null>(null);
  const [accepted, setAccepted] = useState(false);

  const denyCuteness = () => {
    const next = funnyMessages[Math.floor(Math.random() * funnyMessages.length)];
    setPopupMessage(next);
  };

  const enterDatabase = () => {
    setEntered(true);
    window.setTimeout(() => {
      document.getElementById("profile")?.scrollIntoView({ behavior: "smooth" });
    }, 120);
  };

  return (
    <main className="website">
      <div className="floating-decoration heart-one">♥</div>
      <div className="floating-decoration heart-two">♡</div>
      <div className="floating-decoration star-one">✦</div>
      <div className="floating-decoration star-two">✧</div>

      <Header sound={sound} onToggleSound={() => setSound((value) => !value)} />
      <Welcome entered={entered} onEnter={enterDatabase} />

      <nav className="navigation" aria-label="Main navigation">
        {[
          ["PROFILE", "profile"],
          ["REPORT", "evaluation"],
          ["QUIZ", "quiz"],
          ["AWARDS", "awards"],
          ["FINAL FILE", "finale"],
        ].map(([label, id]) => <a key={id} href={`#${id}`}>{label}</a>)}
      </nav>

      <Profile />
      <Evaluation onDenyCuteness={denyCuteness} />
      <Quiz />
      <Awards />

      <section className="section finale" id="finale">
        <div className="section-heading">
          <span>05 / FINAL CLASSIFIED DOCUMENT</span>
          <h2>THE OFFICIAL VERDICT</h2>
          <p>THE RESULTS ARE FINALLY IN.</p>
        </div>
        <Certificate accepted={accepted} onAccept={() => setAccepted(true)} />
        <div className="final-message">♡ MADE WITH PAHADE, FOR BETU ♡</div>
      </section>

      <footer>
        <p>© 2026 THE BETU ARCHIVES™</p>
        <p>POWERED BY PAHAD, CHAOS & TOO MANY HEARTS ♡</p>
        <p>BEST VIEWED WITH A HAPPY HEART.</p>
      </footer>

      {popupMessage && <Popup message={popupMessage} onClose={() => setPopupMessage(null)} />}
      <span className="sr-only" aria-live="polite">{sound ? "Sound toggle on" : "Sound toggle off"}</span>
    </main>
  );
}