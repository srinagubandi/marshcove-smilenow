/**
 * SMILENOW THANK-YOU PAGE COMPONENT — MARSH COVE DENTAL
 *
 * Shared TY page layout. Used by all 5 TY pages.
 * Design: dark teal, same branding as LP pages.
 */

import { CheckCircle, Phone, Star } from "lucide-react";
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  PRACTICE_NAME,
  LOCATION,
  ASSETS,
} from "./SmileNowComponents";

const C = {
  darkBg:     "#0D2B2B",
  darkBgAlt:  "#0A2323",
  lightBg:    "#FFFFFF",
  lightBgAlt: "#F5F9F7",
  green:      "#1A6B3A",
  teal:       "#0ABFBC",
  textDark:   "#FFFFFF",
  textDarkMuted: "rgba(255,255,255,0.70)",
  textLight:  "#1A1A1A",
  textMuted:  "#555555",
  gold:       "#F0B429",
};

interface TYPageProps {
  /** Which step 2 copy to show — varies by channel */
  step2Text: string;
}

export default function SmileNowTY({ step2Text }: TYPageProps) {
  const steps = [
    {
      num: "1",
      title: "We Review Your Info",
      desc: "A member of our team looks over what you shared so we can come prepared with answers specific to your situation.",
    },
    {
      num: "2",
      title: "We Give You a Call",
      desc: step2Text,
    },
    {
      num: "3",
      title: "Your Free Implant Consultation",
      desc: "You come in, meet Dr. Titov, and get a clear picture of your options with no pressure and no obligation.",
    },
  ];

  const beforeAfterPhotos = [
    { img: ASSETS.baZirconiaCloseup, label: "Zirconia Restoration", sub: "Actual Patient" },
    { img: ASSETS.baIonaPmma, label: "PMMA Full Smile Restoration", sub: "Actual Patient" },
    { img: ASSETS.baPmma, label: "PMMA Arch Restoration", sub: "Actual Patient" },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: C.darkBg, minHeight: "100vh" }}>
      {/* Nav */}
      <nav style={{ backgroundColor: "rgba(13,43,43,0.96)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.08)", padding: "0 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <img
            src={ASSETS.logo}
            alt="Marsh Cove Dental & Implant Center"
            style={{ height: "30px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
          />
          <a
            href={PHONE_HREF}
            style={{ color: "white", fontFamily: "Inter, sans-serif", fontSize: "0.85rem", fontWeight: 700, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px" }}
          >
            <Phone size={14} style={{ color: C.teal }} />
            {PHONE_DISPLAY}
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section style={{ backgroundColor: C.darkBg, padding: "60px 20px 40px", textAlign: "center" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <div style={{ display: "inline-flex", alignItems: "center", justifyContent: "center", width: "56px", height: "56px", borderRadius: "50%", backgroundColor: "rgba(10,191,188,0.15)", border: "2px solid rgba(10,191,188,0.4)", marginBottom: "20px" }}>
            <CheckCircle size={28} style={{ color: C.teal }} />
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>You Are All Set</p>
          <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(1.8rem, 5vw, 3rem)", color: "white", lineHeight: 1.1, margin: "0 0 20px" }}>
            Thank You — We Received Your Request!
          </h1>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: C.textDarkMuted, lineHeight: 1.7, margin: 0 }}>
            We received your consultation request and someone from our team will be reaching out to you shortly. In the meantime, take a few minutes to get to know Dr. Titov and hear from patients just like you.
          </p>
        </div>
      </section>

      {/* What Happens Next */}
      <section style={{ backgroundColor: C.darkBgAlt, padding: "60px 20px" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "white", textAlign: "center", margin: "0 0 40px" }}>What Happens Next</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {steps.map(({ num, title, desc }) => (
              <div key={num} style={{ display: "flex", gap: "20px", alignItems: "flex-start" }}>
                <div style={{ flexShrink: 0, width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "rgba(10,191,188,0.15)", border: "2px solid rgba(10,191,188,0.4)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1rem", color: C.teal }}>{num}</span>
                </div>
                <div>
                  <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem", color: "white", margin: "0 0 6px" }}>{title}</h3>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: C.textDarkMuted, lineHeight: 1.65, margin: 0 }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Section */}
      <section style={{ backgroundColor: C.lightBg, padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px", textAlign: "center" }}>Meet Your Doctor</p>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "48px", alignItems: "center" }}>
            {/* Photo */}
            <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}>
              <img
                src={ASSETS.doctorCouple}
                alt="Dr. Eugene Titov and Dr. Olga Titov — Marsh Cove Dental & Implant Center"
                style={{ width: "100%", height: "400px", objectFit: "cover", objectPosition: "center top" }}
              />
            </div>
            {/* Bio */}
            <div>
              <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1.6rem", color: C.green, margin: "0 0 4px" }}>Dr. Eugene Titov, DMD</h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: C.textMuted, margin: "0 0 16px" }}>Lead Implant Surgeon — Marsh Cove Dental &amp; Implant Center</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textMuted, lineHeight: 1.75, margin: "0 0 16px" }}>
                Dr. Titov received his dental degree from the University of Florida College of Dentistry and specializes in oral surgery, implantology, and fixed dental prosthetics. He is a Fellow of the International Congress of Oral Implantologists (ICOI) and has transformed thousands of smiles across Naples and Fort Myers.
              </p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textMuted, lineHeight: 1.75, margin: "0 0 20px" }}>
                Patients consistently describe their experience at Marsh Cove as warm, unhurried, and completely transparent. Dr. Titov takes the time to explain every option and make sure you feel fully informed before any treatment begins.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                {["Implant Specialist", "Advanced 3D Imaging", "Patient-First Philosophy", LOCATION].map(b => (
                  <span key={b} style={{ backgroundColor: "#F0F8F4", color: C.green, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.75rem", padding: "5px 12px", borderRadius: "20px", border: "1px solid #C8E6DA" }}>{b}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After */}
      <section style={{ backgroundColor: C.darkBg, padding: "60px 20px" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px", textAlign: "center" }}>Real Results</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "white", textAlign: "center", margin: "0 0 36px" }}>What to Expect</h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            {beforeAfterPhotos.map(({ img, label, sub }) => (
              <div key={label} style={{ borderRadius: "12px", overflow: "hidden" }}>
                <img src={img} alt={label} style={{ width: "100%", height: "240px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
                <div style={{ backgroundColor: "rgba(255,255,255,0.06)", padding: "12px 14px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "white", margin: "0 0 2px" }}>{label}</p>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.55)", margin: 0 }}>{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Can't Wait CTA */}
      <section style={{ backgroundColor: C.darkBgAlt, padding: "60px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: "white", margin: "0 0 16px" }}>Can Not Wait to Hear From Us?</h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textDarkMuted, margin: "0 0 28px" }}>Give us a call and we will get you on the schedule right away.</p>
          <a
            href={PHONE_HREF}
            style={{ display: "inline-flex", alignItems: "center", gap: "10px", backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1.1rem", padding: "18px 36px", borderRadius: "8px", textDecoration: "none", boxShadow: "0 4px 24px rgba(26,107,58,0.4)" }}
          >
            <Phone size={20} />
            {PHONE_DISPLAY}
          </a>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: C.textDarkMuted, marginTop: "16px" }}>
            Naples office (serving Naples and Fort Myers). Mon – Fri 8:00 AM – 5:00 PM.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ backgroundColor: "#061818", padding: "28px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
        <div style={{ maxWidth: "900px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "12px" }}>
          <img src={ASSETS.logo} alt="Marsh Cove Dental" style={{ height: "26px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.6 }} />
          <div style={{ display: "flex", gap: "20px" }}>
            <a href="/privacy-policy" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Privacy Policy</a>
            <a href="/terms-of-service" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.4)", textDecoration: "none" }}>Terms of Service</a>
          </div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.3)", margin: 0 }}>
            &copy; {new Date().getFullYear()} Marsh Cove Dental &amp; Implant Center
          </p>
        </div>
      </footer>
    </div>
  );
}
