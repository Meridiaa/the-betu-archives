import type { ReactNode } from "react";

type Props = {
  title: string;
  children: ReactNode;
  className?: string;
};

export default function RetroWindow({ title, children, className = "" }: Props) {
  return (
    <div className={`retro-window ${className}`}>
      <div className="window-bar">
        <span className="window-title">♡ {title}</span>
        <span className="window-controls" aria-hidden="true">
          <i>_</i><i>□</i><i>×</i>
        </span>
      </div>
      {children}
    </div>
  );
}