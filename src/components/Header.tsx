import { Heart, Volume2, VolumeX } from "lucide-react";

type Props = { sound: boolean; onToggleSound: () => void };

export default function Header({ sound, onToggleSound }: Props) {
  return (
    <header className="top-bar">
      <a className="logo" href="#home" aria-label="The Betu Archives home">
        <Heart size={17} fill="currentColor" /> LOVEE.EXE
      </a>
      <div className="system-status"><span className="online-dot" /> SYSTEM ONLINE</div>
      <button className="sound-button" onClick={onToggleSound} aria-label="Toggle sound effects">
        {sound ? <Volume2 size={19} /> : <VolumeX size={19} />}
      </button>
    </header>
  );
}