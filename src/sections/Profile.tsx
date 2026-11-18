import { UserRound } from "lucide-react";
import RetroWindow from "../components/RetroWindow";

export default function Profile() {
  return (
    <section className="section" id="profile">
      <div className="section-heading">
        <span>01 / SUBJECT INFORMATION</span>
        <h2>THE SUBJECT FILE</h2>
        <p>CONFIDENTIAL INFORMATION. HANDLE WITH CARE, PAHAD.</p>
      </div>
      <RetroWindow title="boyfriend_profile.dat">
        <div className="profile-content">
          <div className="profile-avatar"><UserRound size={66} /></div>
          <div className="profile-details">
            <div className="profile-name">SUBJECT: BETU ♡</div>
            <p><b>Full name:</b> Bacchi Singh</p>
            <p><b>Occupation:</b> Professional rage baiter</p>
            <p><b>Relationship status:</b> Could have been very much taken</p>
            <p><b>Special abilities:</b> Annoying Pahad & being very protective</p>
            <p><b>Weakness:</b> OPPO / vivo</p>
            <p><b>Known side effect:</b> Pahad's patience mysteriously disappears</p>
          </div>
        </div>
        <div className="profile-footer">STATUS: UNDER PAHAD'S VERY CLOSE OBSERVATION ♡</div>
      </RetroWindow>
    </section>
  );
}