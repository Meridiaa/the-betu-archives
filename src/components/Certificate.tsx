import { Award, Heart, Sparkles } from "lucide-react";

type Props = { accepted: boolean; onAccept: () => void };

export default function Certificate({ accepted, onAccept }: Props) {
  return (
    <div className="certificate-wrap">
      <div className="certificate">
        <div className="certificate-border">
          <div className="certificate-stars">✦ ✧ ★ ✧ ✦</div>
          <p className="certificate-small">THE OFFICIAL PAHAD DEPARTMENT PRESENTS</p>
          <h2>BOYFRIEND</h2>
          <h1>CERTIFICATE</h1>
          <div className="certificate-heart"><Heart fill="currentColor" /></div>
          <p>This certificate is proudly awarded to</p>
          <div className="winner-name">BETU</div>
          <p>
            For outstanding achievements in being handsome, annoying,
            lovable and permanently occupying Pahad's heart.
          </p>
          <div className="certificate-stamp"><Award size={25} /> 100% APPROVED</div>
          <div className="signature">
            <span>PAHAD ♡</span><span>THE VERY BIASED JUDGE</span>
          </div>
          <p className="certificate-footer">NON-TRANSFERABLE • NO REFUNDS • FOREVER VALID</p>
        </div>
      </div>
      <button className="pixel-button certificate-button" onClick={onAccept}>
        <Sparkles size={16} /> {accepted ? "OFFICIALLY CERTIFIED ♡" : "ACCEPT YOUR AWARD"}
      </button>
      {accepted && <p className="certificate-success">Congratulations Betu! Lovee has officially claimed you. 💗</p>}
    </div>
  );
}