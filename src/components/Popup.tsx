import { AlertTriangle, X } from "lucide-react";

type Props = { message: string; onClose: () => void };

export default function Popup({ message, onClose }: Props) {
  return (
    <div className="popup-overlay" role="dialog" aria-modal="true" aria-labelledby="popup-title">
      <div className="popup-window">
        <div className="window-bar">
          <span className="window-title">system_alert.exe</span>
          <button className="close-button" onClick={onClose} aria-label="Close popup"><X size={16} /></button>
        </div>
        <div className="popup-content">
          <AlertTriangle size={42} className="popup-icon" />
          <h3 id="popup-title">CRITICAL ERROR!</h3>
          <p>{message}</p>
          <button className="pixel-button" onClick={onClose}>OKAY FINE ♡</button>
        </div>
      </div>
    </div>
  );
}