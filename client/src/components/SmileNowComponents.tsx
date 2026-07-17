/**
 * SMILENOW LANDING PAGE COMPONENTS — MARSH COVE DENTAL
 *
 * Design: Video-hero, dark teal background, Marsh Cove green CTAs
 * Source design: fixasmileguide.com/rosydental/smilenow/
 * Branding: marshcovedental.com
 *
 * Color tokens:
 *   Dark teal bg:   #0D2B2B  (hero, candidacy, before/after, FAQ, footer)
 *   Light bg:       #FFFFFF  (intro, treatment options, doctor, steps)
 *   Marsh Cove green CTA: #1A6B3A
 *   Marsh Cove green hover: #155730
 *   Accent teal:    #0ABFBC  (checkmarks, section labels, borders)
 *   Text on dark:   #FFFFFF
 *   Text on light:  #1A1A1A
 *   Muted on light: #555555
 *
 * Phone: (239) 291-0807
 * Location: Naples & Fort Myers, FL
 */

import { useState, useEffect } from "react";

// ─── GLOBAL MOBILE RESPONSIVE STYLES ─────────────────────────────────────────
// Injected once via a <style> tag in the root layout
export const MOBILE_STYLES = `
  @media (max-width: 768px) {
    .sn-grid-2col { grid-template-columns: 1fr !important; gap: 32px !important; }
    .sn-grid-4col { grid-template-columns: 1fr 1fr !important; gap: 16px !important; }
    .sn-grid-3col { grid-template-columns: 1fr !important; gap: 20px !important; }
    .sn-doctor-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
    .sn-section { padding: 52px 16px !important; }
    .sn-hero-content { padding: 100px 16px 48px !important; }
    .sn-hero-logo { width: 200px !important; }
    .sn-hero-h1 { font-size: 2rem !important; }
    .sn-cta-row { flex-direction: column !important; align-items: stretch !important; }
    .sn-cta-row a, .sn-cta-row button { text-align: center !important; justify-content: center !important; }
    .sn-nav-phone { display: none !important; }
    .sn-footer-inner { flex-direction: column !important; align-items: center !important; text-align: center !important; }
    .sn-doctor-photo { height: 300px !important; }
    .sn-ba-img { height: 220px !important; }
  }
  @media (max-width: 480px) {
    .sn-grid-4col { grid-template-columns: 1fr !important; }
    .sn-trust-badges { gap: 10px !important; }
    .sn-trust-badges span { font-size: 0.72rem !important; }
  }
`;
import { Phone, CheckCircle, ChevronDown, ChevronUp, Shield, Star, Clock, Award, Users, MapPin } from "lucide-react";

// ─── CONSTANTS ────────────────────────────────────────────────────────────────

export const PHONE_DISPLAY = "(239) 291-0807";
export const PHONE_HREF = "tel:+12392910807";
export const PRACTICE_NAME = "Marsh Cove Dental & Implant Center";
export const LOCATION = "Naples & Fort Myers, FL";
export const LOCATION_SHORT = "Naples & Fort Myers";

// ─── ASSETS ───────────────────────────────────────────────────────────────────
// All images sourced from marshcovedental.com and fixasmileguide.com/rosydental/

export const ASSETS = {
  // Marsh Cove branding — all assets served locally from /assets/ (client/public/assets/)
  logo:               "/assets/logo.webp",
  footerLogo:         "/assets/logo.webp",
  favicon:            "/assets/favicon-32.png",

  // Hero video — local copy served from client/public/assets/
  heroVideo:          "/assets/hero-bg.mp4",

  // Hero fallback images (used as poster on video)
  heroConsult:        "/assets/hero-consult.jpg",
  heroFinancing:      "/assets/hero-financing.jpg",
  heroSameDay:        "/assets/hero-same-day.jpg",

  // Doctor photos — Marsh Cove Drs. Titov (from marshcovedental.com)
  doctorCouple:       "/assets/doctor-couple.jpg",
  doctorWithPatient:  "/assets/doctor-with-patient.jpg",
  doctorKathleen:     "/assets/doctor-patient-after.jpg",

  // Patient photos — diverse adults 50+ (from marshcovedental.com)
  patientCouple:         "/assets/doctor-with-patient.jpg",
  patientBlackMan:       "/assets/ba-corrado.jpg",
  patientHispanicWoman:  "/assets/ba-donna.jpg",
  patientAsianWoman:     "/assets/ba-linda.jpg",
  patientWhiteWoman:     "/assets/ba-deborah.jpg",

  // Implant type images — from marshcovedental.com/what-are-dental-implants/
  implantSingle:      "/assets/implant-single.jpg",
  implantBridge:      "/assets/implant-bridge.jpg",
  implantDentures:    "/assets/implant-dentures.jpg",
  implantFullArch:    "/assets/implant-full-mouth.jpg",

  // Before/after photos — real Marsh Cove patients from marshcovedental.com/before-after-gallery/
  baDeborah:  "/assets/ba-deborah.jpg",
  baJim:      "/assets/ba-jim.jpg",
  baBob:      "/assets/ba-bob.jpg",
  baLinda:    "/assets/ba-linda.jpg",
  baDonna:    "/assets/ba-donna.jpg",
  baGrant:    "/assets/ba-grant.jpg",
  baSarah:    "/assets/ba-corrado.jpg",
  baAntonio:  "/assets/ba-david.jpg",
  baClinton:  "/assets/ba-gerry.jpg",
  baPaul:     "/assets/ba-matthew.jpg",
  baRandy:    "/assets/ba-deborah.jpg",
  baMatthew:  "/assets/ba-matthew.jpg",
};

// ─── SURVEY IDs ───────────────────────────────────────────────────────────────
// Marsh Cove GHL LeadConnector survey IDs

export const SURVEYS = {
  googleFreeConsult: "mKWOx0AwEPzswPS0x7mn",   // Google Search — Free Consultation
  googlePmax:        "mKWOx0AwEPzswPS0x7mn",   // Google PMAX
  metaAffordable:    "IxOrkIagtZmPfIDvTvnx",   // Meta — Price / Affordable Implants
  metaSameDay:       "z2Fo0JJOtLK5R7HD5GM5",   // Meta — Symptomatic / Same-Day
  metaTrust:         "jT3Ik2Cp2pTsEF6tXVGb",   // Meta — Trust + Experience
};

// ─── DESIGN TOKENS ────────────────────────────────────────────────────────────

const C = {
  darkBg:      "#0D2B2B",
  darkBgAlt:   "#0A2323",
  lightBg:     "#FFFFFF",
  lightBgAlt:  "#F5F9F7",
  green:       "#1A6B3A",   // Marsh Cove primary green — CTA buttons
  greenHover:  "#155730",
  teal:        "#0ABFBC",   // Accent teal — checkmarks, labels, borders
  tealDark:    "#089A97",
  textDark:    "#FFFFFF",
  textDarkMuted: "rgba(255,255,255,0.70)",
  textLight:   "#1A1A1A",
  textMuted:   "#555555",
  border:      "rgba(255,255,255,0.12)",
  borderLight: "#E0EDE8",
  gold:        "#F0B429",
};

// ─── SURVEY EMBED ─────────────────────────────────────────────────────────────

export function SurveyEmbed({ surveyId, id }: { surveyId: string; id?: string }) {
  return (
    <div style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}>
      <iframe
        src={`https://api.leadconnectorhq.com/widget/survey/${surveyId}`}
        style={{ border: "none", width: "100%", minHeight: "480px", display: "block" }}
        scrolling="no"
        id={id}
        title="Consultation Survey"
      />
    </div>
  );
}

// ─── NAV BAR ──────────────────────────────────────────────────────────────────

export function SmileNowNav({ onCtaClick }: { onCtaClick: () => void }) {
  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, backgroundColor: "rgba(13,43,43,0.96)", backdropFilter: "blur(8px)", borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 20px", height: "56px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        {/* Logo — white inverted in nav */}
        <img
          src={ASSETS.logo}
          alt="Marsh Cove Dental & Implant Center"
          style={{ height: "32px", objectFit: "contain", filter: "brightness(0) invert(1)" }}
        />
        {/* Right: phone + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <a
            href={PHONE_HREF}
            className="sn-nav-phone"
            style={{ color: "white", fontFamily: "Inter, sans-serif", fontSize: "0.82rem", fontWeight: 600, textDecoration: "none", display: "flex", alignItems: "center", gap: "6px", opacity: 0.9 }}
          >
            <Phone size={14} style={{ color: C.teal }} />
            {PHONE_DISPLAY}
          </a>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "9px 18px", borderRadius: "6px", border: "none", cursor: "pointer", whiteSpace: "nowrap" }}
          >
            Free Consultation
          </button>
        </div>
      </div>
    </nav>
  );
}

// ─── HERO SECTION ─────────────────────────────────────────────────────────────

export function SmileNowHero({
  headline,
  subheadline,
  ctaText,
  onCtaClick,
}: {
  headline: React.ReactNode;
  subheadline?: string;
  ctaText: string;
  onCtaClick: () => void;
}) {
  const trustBadges = [
    "5-Star Google Rating",
    "Implant Specialist",
    "Same-Day Available",
    "$0 Down Financing",
  ];

  return (
    <section style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", backgroundColor: C.darkBg }}>
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
      >
        <source src={ASSETS.heroVideo} type="video/mp4" />
      </video>
      {/* Dark overlay */}
      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(13,43,43,0.60) 0%, rgba(13,43,43,0.80) 100%)" }} />

      {/* Content */}
      <div className="sn-hero-content" style={{ position: "relative", zIndex: 5, textAlign: "center", padding: "120px 24px 64px", maxWidth: "820px", margin: "0 auto", width: "100%" }}>

        {/* Large color logo — top of hero, above location */}
        <div style={{ marginBottom: "28px" }}>
          <img
            src="/assets/logo-color.webp"
            alt="Marsh Cove Dental & Implant Center"
            className="sn-hero-logo"
            style={{ width: "260px", maxWidth: "80vw", objectFit: "contain", filter: "drop-shadow(0 2px 12px rgba(0,0,0,0.45))" }}
          />
        </div>

        {/* Location line */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "28px" }}>
          <div style={{ height: "1px", width: "40px", backgroundColor: C.teal, opacity: 0.6 }} />
          <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: C.teal }}>
            {LOCATION}
          </span>
          <div style={{ height: "1px", width: "40px", backgroundColor: C.teal, opacity: 0.6 }} />
        </div>

        {/* H1 */}
        <h1 className="sn-hero-h1" style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "clamp(2.2rem, 6vw, 4rem)", color: "white", lineHeight: 1.1, margin: "0 0 16px", textTransform: "uppercase", letterSpacing: "-0.01em" }}>
          {headline}
        </h1>

        {/* Subheadline */}
        {subheadline && (
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "clamp(0.95rem, 2vw, 1.15rem)", color: "rgba(255,255,255,0.80)", margin: "0 0 40px", lineHeight: 1.5 }}>
            {subheadline}
          </p>
        )}

        {/* CTA Buttons — centered with generous spacing */}
        <div className="sn-cta-row" style={{ display: "flex", flexWrap: "wrap", gap: "32px", justifyContent: "center", alignItems: "center", marginBottom: "40px" }}>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "18px 40px", borderRadius: "6px", border: "none", cursor: "pointer", boxShadow: "0 4px 24px rgba(26,107,58,0.5)", minWidth: "220px" }}
          >
            {ctaText}
          </button>
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "rgba(255,255,255,0.10)", color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.05rem", letterSpacing: "0.04em", padding: "18px 32px", borderRadius: "6px", border: "2px solid rgba(255,255,255,0.45)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "10px", minWidth: "220px", justifyContent: "center", backdropFilter: "blur(4px)" }}
          >
            <Phone size={18} />
            {PHONE_DISPLAY}
          </a>
        </div>

        {/* Trust badges */}
        <div className="sn-trust-badges" style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          {trustBadges.map(badge => (
            <div key={badge} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle size={14} style={{ color: C.teal, flexShrink: 0 }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.85)" }}>{badge}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── INTRO SECTION (2-col: copy + survey) ─────────────────────────────────────

export function SmileNowIntro({
  sectionLabel,
  headline,
  bullets,
  surveyId,
  surveyCardTitle,
  surveyCardSubtitle,
  onCtaClick,
}: {
  sectionLabel: string;
  headline: string;
  bullets: string[];
  surveyId: string;
  surveyCardTitle: string;
  surveyCardSubtitle: string;
  onCtaClick: () => void;
}) {
  return (
    <section style={{ backgroundColor: C.darkBg, padding: "80px 20px" }}>
        <div className="sn-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
        {/* Left: copy */}
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>{sectionLabel}</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", lineHeight: 1.15, margin: "0 0 24px" }}>{headline}</h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: C.textDarkMuted, lineHeight: 1.7, margin: "0 0 20px" }}>
            If you are living with missing or damaged teeth, you have been through enough stress. Let us take it from here.
          </p>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: C.textDarkMuted, lineHeight: 1.7, margin: "0 0 28px" }}>
            In just one day we can facilitate a life changing transformation with dental implants.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {bullets.map(b => (
              <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <CheckCircle size={16} style={{ color: C.teal, flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.5 }}>{b}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "6px", border: "none", cursor: "pointer" }}
          >
            Get Pricing and Options
          </button>
        </div>

        {/* Right: survey card */}
        <div>
          <div style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px", border: "1px solid rgba(255,255,255,0.1)" }}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "white", margin: "0 0 4px" }}>{surveyCardTitle}</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.teal, margin: 0 }}>{surveyCardSubtitle}</p>
            </div>
            <SurveyEmbed surveyId={surveyId} id="survey2" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── LIFE TRANSFORMED SECTION ─────────────────────────────────────────────────

export function SmileNowLifeTransformed({ onCtaClick }: { onCtaClick: () => void }) {
  const bullets = [
    "99% of function restored",
    "Eat, chew, and speak like normal",
    "Beautiful aesthetics that make you look and feel younger",
    "Long term treatment that will stand the test of time",
    "New teeth that are fixed, stable, and easy to maintain",
  ];

  return (
    <section style={{ backgroundColor: C.lightBg, padding: "80px 20px" }}>
      <div className="sn-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "center" }}>
        {/* Left: copy */}
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Results That Last</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: C.textLight, lineHeight: 1.15, margin: "0 0 24px" }}>Your Life, Transformed</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 24px" }}>
            {bullets.map(b => (
              <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "10px" }}>
                <CheckCircle size={16} style={{ color: C.green, flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textMuted, lineHeight: 1.5 }}>{b}</span>
              </li>
            ))}
          </ul>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textMuted, lineHeight: 1.7, margin: "0 0 28px" }}>
            At Marsh Cove Dental, you will receive personalized care from Dr. Eugene and Dr. Olga Titov, all in one convenient location. Our state-of-the-art facility ensures the highest standards of safety and comfort. Our team provides expert care in treatment planning and restorative solutions, ensuring the best possible outcomes.
          </p>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "6px", border: "none", cursor: "pointer" }}
          >
            Get Pricing
          </button>


        </div>

        {/* Right: patient photo */}
        <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}>
          <img
            src={ASSETS.patientCouple}
            alt="Happy patients after dental implants at Marsh Cove Dental"
            style={{ width: "100%", height: "480px", objectFit: "cover", objectPosition: "center top" }}
          />
        </div>
      </div>
    </section>
  );
}

// ─── CANDIDACY ICONS ──────────────────────────────────────────────────────────

function IconLooseTeeth() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Tooth outline */}
      <path d="M16 8C12 8 9 11 9 15c0 3 1.5 5.5 2.5 8.5C12.5 27 13 32 14 38c.4 2.5 1.5 4 3 4s2.2-1.5 3-4l1-5c.3-1.5.7-1.5 1 0l1 5c.8 2.5 1.5 4 3 4s2.6-1.5 3-4c1-6 1.5-11 2.5-14.5C32.5 20.5 34 18 34 15c0-4-3-7-7-7-1.8 0-3.4.7-4.5 1.8A5.5 5.5 0 0016 8z" stroke="#0ABFBC" strokeWidth="2.2" strokeLinejoin="round" fill="rgba(10,191,188,0.12)"/>
      {/* Crack lines indicating looseness */}
      <path d="M22 14l-1.5 4 2 1-1.5 4" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round"/>
      {/* Motion lines */}
      <path d="M8 20l-3 0M7 16l-2.5-1.5M7 24l-2.5 1.5" stroke="#0ABFBC" strokeWidth="1.8" strokeLinecap="round" opacity="0.7"/>
    </svg>
  );
}

function IconPeriodontal() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Gum line */}
      <path d="M8 28 Q14 20 20 26 Q26 32 32 24 Q38 16 42 22" stroke="#0ABFBC" strokeWidth="2.2" strokeLinecap="round" fill="none"/>
      {/* Tooth 1 */}
      <rect x="12" y="14" width="8" height="14" rx="2" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="rgba(255,255,255,0.08)"/>
      {/* Tooth 2 — receded, lower */}
      <rect x="22" y="17" width="8" height="11" rx="2" stroke="rgba(255,255,255,0.5)" strokeWidth="2" fill="rgba(255,255,255,0.05)" strokeDasharray="3 2"/>
      {/* Tooth 3 */}
      <rect x="32" y="12" width="7" height="13" rx="2" stroke="rgba(255,255,255,0.8)" strokeWidth="2" fill="rgba(255,255,255,0.08)"/>
      {/* Inflammation dots */}
      <circle cx="20" cy="30" r="2.5" fill="#0ABFBC" opacity="0.8"/>
      <circle cx="26" cy="34" r="2" fill="#0ABFBC" opacity="0.6"/>
      <circle cx="32" cy="30" r="2.5" fill="#0ABFBC" opacity="0.8"/>
    </svg>
  );
}

function IconBoneLoss() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Jaw bone outline */}
      <path d="M10 14 Q10 8 16 8 L32 8 Q38 8 38 14 L38 32 Q38 40 24 40 Q10 40 10 32 Z" stroke="#0ABFBC" strokeWidth="2.2" fill="rgba(10,191,188,0.10)" strokeLinejoin="round"/>
      {/* Implant post */}
      <rect x="22" y="10" width="4" height="18" rx="2" fill="rgba(255,255,255,0.25)" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5"/>
      {/* Bone loss gaps — dotted areas */}
      <path d="M14 20 Q18 16 14 12" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      <path d="M34 20 Q30 16 34 12" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      {/* Downward arrows showing bone loss */}
      <path d="M14 34 l0 4 m-2-2 l2 2 2-2" stroke="#0ABFBC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
      <path d="M34 34 l0 4 m-2-2 l2 2 2-2" stroke="#0ABFBC" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" opacity="0.8"/>
    </svg>
  );
}

function IconDentures() {
  return (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Denture plate */}
      <path d="M8 22 Q8 14 24 14 Q40 14 40 22 L40 26 Q40 32 24 32 Q8 32 8 26 Z" stroke="#0ABFBC" strokeWidth="2.2" fill="rgba(10,191,188,0.12)" strokeLinejoin="round"/>
      {/* Teeth on denture */}
      <rect x="12" y="16" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <rect x="19" y="15" width="5" height="11" rx="1.5" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <rect x="26" y="15" width="5" height="11" rx="1.5" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      <rect x="33" y="16" width="5" height="10" rx="1.5" fill="rgba(255,255,255,0.85)" stroke="rgba(255,255,255,0.4)" strokeWidth="1"/>
      {/* Discomfort wavy line below */}
      <path d="M12 36 Q16 34 20 36 Q24 38 28 36 Q32 34 36 36" stroke="#0ABFBC" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.7"/>
    </svg>
  );
}

// ─── CANDIDACY SECTION ────────────────────────────────────────────────────────

export function SmileNowCandidacy({ onCtaClick }: { onCtaClick: () => void }) {
  const cards = [
    { icon: <IconLooseTeeth />, title: "Loose or Missing Teeth", desc: "You are currently dealing with loose, damaged, or missing teeth" },
    { icon: <IconPeriodontal />, title: "Periodontal Disease", desc: "You suffer from moderate to severe periodontal disease" },
    { icon: <IconBoneLoss />, title: "Bone Loss", desc: "You have experienced bone loss in your jaw" },
    { icon: <IconDentures />, title: "Dentures or Partials", desc: "You are currently wearing a denture or partial that is uncomfortable" },
  ];

  return (
    <section style={{ backgroundColor: C.darkBg, padding: "80px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Candidacy</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", lineHeight: 1.15, margin: 0 }}>Who Is a Candidate?</h2>
        </div>
        <div className="sn-grid-4col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px", marginBottom: "40px" }}>
          {cards.map(({ icon, title, desc }) => (
            <div key={title} style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "32px 24px", textAlign: "center", border: "1px solid rgba(10,191,188,0.18)", transition: "border-color 0.2s" }}>
              <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "72px", height: "72px", borderRadius: "50%", backgroundColor: "rgba(10,191,188,0.10)", border: "1.5px solid rgba(10,191,188,0.25)", margin: "0 auto 20px" }}>
                {icon}
              </div>
              <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "white", margin: "0 0 10px" }}>{title}</h3>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: C.textDarkMuted, lineHeight: 1.6, margin: 0 }}>{desc}</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "16px 36px", borderRadius: "6px", border: "none", cursor: "pointer" }}
          >
            Find Out If You Are a Candidate — Free
          </button>
        </div>
      </div>
    </section>
  );
}

// ─── TREATMENT OPTIONS SECTION ────────────────────────────────────────────────

export function SmileNowTreatmentOptions({ onCtaClick }: { onCtaClick: () => void }) {
  const options = [
    {
      img: ASSETS.implantSingle,
      alt: "Single dental implant model — titanium post and crown",
      title: "Single Dental Implant",
      desc: "Replace one missing tooth with a titanium post and natural-looking crown. Dental implants have a success rate as high as 99% when placed by Dr. Titov.",
      popular: false,
    },
    {
      img: ASSETS.implantBridge,
      alt: "Implant supported bridge illustration — two implants supporting a bridge",
      title: "Implant Supported Bridge",
      desc: "Replace several missing teeth without modifying healthy adjacent teeth. Preserves bone and prevents the shifting that traditional bridges allow.",
      popular: false,
    },
    {
      img: ASSETS.implantFullArch,
      alt: "Full mouth dental implants — All-on-4 full arch illustration",
      title: "Full Mouth Dental Implants",
      desc: "Fully restore dental function and aesthetics with All-on-4 to 6, All-on-X, or Teeth Today. Same-day available. The only solution that prevents bone loss.",
      popular: true,
    },
    {
      img: ASSETS.implantDentures,
      alt: "Implant supported dentures illustration — snap-in denture over implants",
      title: "Implant Supported Dentures",
      desc: "Snap-in dentures stabilized over 2 to 4 implants eliminate slipping and discomfort. Prevents the 25% bone loss that occurs in the first year after tooth loss.",
      popular: false,
    },
  ];

  return (
    <section style={{ backgroundColor: C.lightBg, padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Treatment Options</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: C.textLight, lineHeight: 1.15, margin: "0 0 12px" }}>The Right Solution for Every Smile</h2>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: C.textMuted, margin: 0 }}>Explore our dental implant options, using the latest technology to restore your smile beautifully and functionally.</p>
        </div>
        <div className="sn-grid-4col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "24px" }}>
          {options.map(({ img, alt, title, desc, popular }) => (
            <div key={title} style={{ backgroundColor: "white", borderRadius: "12px", overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.08)", border: popular ? `2px solid ${C.teal}` : "2px solid transparent", position: "relative", display: "flex", flexDirection: "column" }}>
              {popular && (
                <div style={{ position: "absolute", top: "12px", left: "12px", backgroundColor: C.teal, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.68rem", letterSpacing: "0.08em", textTransform: "uppercase", padding: "4px 10px", borderRadius: "4px", zIndex: 2 }}>
                  Most Popular
                </div>
              )}
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img src={img} alt={alt} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top" }} />
              </div>
              <div style={{ padding: "20px", flex: 1, display: "flex", flexDirection: "column" }}>
                <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem", color: C.textLight, margin: "0 0 10px" }}>{title}</h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: C.textMuted, lineHeight: 1.6, margin: "0 0 16px", flex: 1 }}>{desc}</p>
                <button
                  onClick={onCtaClick}
                  style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.78rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "11px 20px", borderRadius: "6px", border: "none", cursor: "pointer", width: "100%" }}
                >
                  Get Pricing
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── BEFORE/AFTER SECTION ─────────────────────────────────────────────────────

export function SmileNowBeforeAfter({ onCtaClick }: { onCtaClick: () => void }) {
  const transformations = [
    { img: ASSETS.baDeborah, label: "Deborah's Full Arch Transformation", sub: "Actual Marsh Cove Patient" },
    { img: ASSETS.baJim, label: "Jim's Full Smile Restoration", sub: "Actual Marsh Cove Patient" },
    { img: ASSETS.baBob, label: "Bob's Complete Smile Makeover", sub: "Actual Marsh Cove Patient" },
    { img: ASSETS.baLinda, label: "Linda's Life-Changing Results", sub: "Actual Marsh Cove Patient" },
    { img: ASSETS.baDonna, label: "Donna's Full Arch Implants", sub: "Actual Marsh Cove Patient" },
    { img: ASSETS.baGrant, label: "Grant's Smile Transformation", sub: "Actual Marsh Cove Patient" },
  ];

  return (
    <section style={{ backgroundColor: C.darkBg, padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Transformations</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", lineHeight: 1.15, margin: 0 }}>Real Patient Results</h2>
        </div>
        <div className="sn-grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginBottom: "40px" }}>
          {transformations.map(({ img, label, sub }) => (
            <div key={label} style={{ borderRadius: "12px", overflow: "hidden" }}>
              <img src={img} alt={label} style={{ width: "100%", height: "280px", objectFit: "cover", objectPosition: "center top", display: "block" }} />
              <div style={{ backgroundColor: "rgba(255,255,255,0.06)", padding: "14px 16px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.88rem", color: "white", margin: "0 0 2px" }}>{label}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", color: C.textDarkMuted, margin: 0 }}>{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── DOCTOR SECTION ───────────────────────────────────────────────────────────

export function SmileNowDoctor({ onCtaClick }: { onCtaClick: () => void }) {
  const badges = ["Implant Specialist", "Advanced 3D Imaging", "Same-Day Procedures", "ICOI Fellow"];

  return (
    <section style={{ backgroundColor: C.lightBg, padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Your Doctor</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: C.textLight, lineHeight: 1.15, margin: 0 }}>Meet Your Implant Specialist</h2>
        </div>
        <div className="sn-doctor-grid" style={{ display: "grid", gridTemplateColumns: "400px 1fr", gap: "60px", alignItems: "flex-start" }}>
          {/* Photo */}
          <div style={{ borderRadius: "16px", overflow: "hidden", boxShadow: "0 16px 48px rgba(0,0,0,0.12)" }}>
            <img
              src={ASSETS.doctorCouple}
              alt="Dr. Eugene Titov and Dr. Olga Titov — Marsh Cove Dental & Implant Center"
              className="sn-doctor-photo" style={{ width: "100%", height: "460px", objectFit: "cover", objectPosition: "center top" }}
            />
          </div>
          {/* Info */}
          <div>
            <h3 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1.75rem", color: C.green, margin: "0 0 4px" }}>Dr. Eugene Titov, DMD</h3>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textMuted, margin: "0 0 20px" }}>Lead Implant Surgeon — Marsh Cove Dental &amp; Implant Center</p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: C.textMuted, lineHeight: 1.75, margin: "0 0 16px" }}>
              Dr. Titov received his dental degree from the University of Florida College of Dentistry and specializes in oral surgery, implantology, and fixed dental prosthetics. He is a Fellow of the International Congress of Oral Implantologists (ICOI) and has transformed thousands of smiles across Naples and Fort Myers.
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: C.textMuted, lineHeight: 1.75, margin: "0 0 28px" }}>
              Patients consistently describe their experience at Marsh Cove as warm, unhurried, and completely transparent. Dr. Titov takes the time to explain every option and make sure you feel fully informed before any treatment begins.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginBottom: "24px" }}>
              {badges.map(b => (
                <span key={b} style={{ backgroundColor: "#F0F8F4", color: C.green, fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.78rem", padding: "6px 14px", borderRadius: "20px", border: "1px solid #C8E6DA" }}>{b}</span>
              ))}
            </div>
            {/* Dr. Olga callout */}
            <div style={{ backgroundColor: C.lightBgAlt, borderRadius: "10px", padding: "16px 20px", border: `1px solid ${C.borderLight}` }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: C.textMuted, lineHeight: 1.65, margin: 0 }}>
                <strong style={{ color: C.textLight }}>Dr. Olga Titov, DDS</strong> — A graduate of Virginia Commonwealth University and former associate professor at UF College of Dentistry. Together, they lead a husband-and-wife team dedicated to exceptional patient care in Naples and Fort Myers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── REVIEWS SECTION ──────────────────────────────────────────────────────────

const REVIEWS = [
  {
    name: "Theresia M.",
    location: "Fort Myers, FL",
    text: "From the moment I arrived for my initial appointment I immediately knew that I had chosen the right implant center. All of the staff have been very supportive and helpful in answering my questions and concerns. I'm having my final permanent implants put in mid July. The entire process has gone smoothly and I'm extremely happy with the results so far.",
  },
  {
    name: "Shanice B.",
    location: "Naples, FL",
    text: "The best dental office in town! Our family gets all our services done here. They did my mother's implants and she has not stopped smiling since. Her confidence grew significantly. The staff is amazing and treats us like family. We look forward to every visit.",
  },
  {
    name: "Dionne P.",
    location: "Naples, FL",
    text: "I am actually terrified of dentists and even the slightest bit of work. But they made me feel comfortable, and after the whole implant procedure, it has made absolutely all the difference in the world. The staff was very professional and kind — I would recommend this dental office to anyone.",
  },
  {
    name: "Linda P.",
    location: "Naples, FL",
    text: "I would highly recommend Marsh Cove Dental and Implant Center. I felt comfortable through the whole process. The staff is friendly, knowledgeable and work well together. Dr. T was easy to talk to. I'm blessed to have found the office in Naples.",
  },
  {
    name: "Pam C.",
    location: "Bonita Springs, FL",
    text: "After interviewing many places in Bonita and Naples I chose Marsh Cove Dental. I am so grateful and thankful to Dr. Titov and his staff for my beautiful new smile!! I love everything about this place — from the first interview with David to my ongoing appointments.",
  },
];

export function SmileNowReviews() {
  return (
    <section style={{ backgroundColor: C.darkBg, padding: "80px 20px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Patient Stories</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", lineHeight: 1.15, margin: 0 }}>Real Patients, Real Results</h2>
        </div>
        <div className="sn-grid-3col" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px" }}>
          {REVIEWS.map(({ name, location, text }) => (
            <div key={name} style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "28px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", gap: "2px", marginBottom: "16px" }}>
                {[1,2,3,4,5].map(i => <Star key={i} size={16} style={{ color: C.gold, fill: C.gold }} />)}
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.85)", lineHeight: 1.7, margin: "0 0 20px", fontStyle: "italic" }}>"{text}"</p>
              <div>
                <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.88rem", color: "white", margin: "0 0 2px" }}>{name}</p>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: C.textDarkMuted, margin: 0 }}>{location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── HOW TO START SECTION ─────────────────────────────────────────────────────

export function SmileNowHowToStart({ surveyId, onCtaClick }: { surveyId: string; onCtaClick: () => void }) {
  const bullets = [
    "If you are a candidate",
    "Which treatment will give you the best outcome",
    "Everything you need to know about cost, financing, and insurance",
    "A complete timeline to get your new smile",
  ];

  return (
    <section style={{ backgroundColor: C.lightBg, padding: "80px 20px" }}>
        <div className="sn-grid-2col" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "60px", alignItems: "start" }}>
        {/* Left: copy */}
        <div>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>How Do I Start?</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.4rem, 3vw, 2rem)", color: C.textLight, lineHeight: 1.2, margin: "0 0 24px" }}>In One Quick, Risk-Free Consultation You Will Learn:</h2>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px" }}>
            {bullets.map(b => (
              <li key={b} style={{ display: "flex", alignItems: "flex-start", gap: "10px", marginBottom: "12px" }}>
                <CheckCircle size={16} style={{ color: C.green, flexShrink: 0, marginTop: "3px" }} />
                <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textMuted, lineHeight: 1.5 }}>{b}</span>
              </li>
            ))}
          </ul>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "14px 28px", borderRadius: "6px", border: "none", cursor: "pointer" }}
          >
            Book My Risk-Free Consultation
          </button>
        </div>

        {/* Right: survey */}
        <div>
          <div style={{ backgroundColor: C.lightBgAlt, borderRadius: "12px", padding: "20px", border: `1px solid ${C.borderLight}` }}>
            <div style={{ textAlign: "center", marginBottom: "16px" }}>
              <p style={{ fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1.05rem", color: C.textLight, margin: "0 0 4px" }}>Claim Your FREE Consultation</p>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.75rem", fontWeight: 600, letterSpacing: "0.08em", textTransform: "uppercase", color: C.teal, margin: 0 }}>Takes less than 60 seconds — {LOCATION}</p>
            </div>
            <SurveyEmbed surveyId={surveyId} id="survey" />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── FAQ SECTION ──────────────────────────────────────────────────────────────

const FAQS = [
  {
    q: "Am I a candidate for dental implants?",
    a: "Most adults with good general health are candidates. The key factors are sufficient jawbone density and healthy gums. Your free consultation will include a full assessment.",
  },
  {
    q: "How long do dental implants last?",
    a: "With proper care, dental implants can last a lifetime. Dr. Titov has placed over 2,000 implants with a 99% success rate, and proper home and professional care helps ensure their longevity.",
  },
  {
    q: "Is the procedure painful?",
    a: "Most patients are surprised by how comfortable the procedure is. Local anesthesia and sedation options ensure you feel minimal discomfort during treatment.",
  },
  {
    q: "How much do dental implants cost?",
    a: "The cost depends on your specific needs and treatment plan. We offer flexible financing with $0 down and low monthly payments. Your free consultation includes a full cost breakdown.",
  },
  {
    q: "What financing options are available?",
    a: "We offer $0 down financing with low monthly payment options. Our team will walk you through all available options during your free consultation.",
  },
  {
    q: "Can I get same-day implants?",
    a: "Yes. For qualifying patients, we offer same-day implant procedures where you can walk in with failing teeth and leave with a full smile the same day.",
  },
];

export function SmileNowFAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section style={{ backgroundColor: C.darkBg, padding: "80px 20px" }}>
      <div style={{ maxWidth: "760px", margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: C.teal, margin: "0 0 12px" }}>Common Questions</p>
          <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", lineHeight: 1.15, margin: 0 }}>Frequently Asked Questions</h2>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {FAQS.map(({ q, a }, i) => (
            <div key={q} style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "10px", border: "1px solid rgba(255,255,255,0.08)", overflow: "hidden" }}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                style={{ width: "100%", display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 20px", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "12px" }}
              >
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "white", lineHeight: 1.4 }}>{q}</span>
                {open === i ? <ChevronUp size={18} style={{ color: C.teal, flexShrink: 0 }} /> : <ChevronDown size={18} style={{ color: C.teal, flexShrink: 0 }} />}
              </button>
              {open === i && (
                <div style={{ padding: "0 20px 18px" }}>
                  <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: C.textDarkMuted, lineHeight: 1.7, margin: 0 }}>{a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FINAL CTA SECTION ────────────────────────────────────────────────────────

export function SmileNowFinalCTA({ headline, ctaText, onCtaClick }: { headline: string; ctaText: string; onCtaClick: () => void }) {
  const badges = ["Free Consultation", "No Obligation", "Same-Day Available", "$0 Down Financing", LOCATION];

  return (
    <section style={{ backgroundColor: C.darkBgAlt, padding: "80px 20px", textAlign: "center" }}>
      <div style={{ maxWidth: "700px", margin: "0 auto" }}>
        <h2 style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem, 3.5vw, 2.4rem)", color: "white", lineHeight: 1.2, margin: "0 0 16px" }}>{headline}</h2>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: C.textDarkMuted, lineHeight: 1.7, margin: "0 0 36px" }}>
          Do not let missing teeth hold you back any longer. Your free consultation with Dr. Titov is the first step toward a permanent, beautiful smile.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", justifyContent: "center", marginBottom: "32px" }}>
          <button
            onClick={onCtaClick}
            style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1rem", letterSpacing: "0.06em", textTransform: "uppercase", padding: "16px 36px", borderRadius: "6px", border: "none", cursor: "pointer" }}
          >
            {ctaText}
          </button>
          <a
            href={PHONE_HREF}
            style={{ backgroundColor: "transparent", color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "1rem", padding: "16px 28px", borderRadius: "6px", border: "2px solid rgba(255,255,255,0.4)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "8px" }}
          >
            <Phone size={16} />
            {PHONE_DISPLAY}
          </a>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px", justifyContent: "center" }}>
          {badges.map(b => (
            <div key={b} style={{ display: "flex", alignItems: "center", gap: "6px" }}>
              <CheckCircle size={13} style={{ color: C.teal }} />
              <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", fontWeight: 600, color: "rgba(255,255,255,0.75)" }}>{b}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── FOOTER ───────────────────────────────────────────────────────────────────

export function SmileNowFooter() {
  return (
    <footer style={{ backgroundColor: "#061818", padding: "32px 20px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      <div className="sn-footer-inner" style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "center", gap: "16px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <img src={ASSETS.logo} alt="Marsh Cove Dental" style={{ height: "28px", objectFit: "contain", filter: "brightness(0) invert(1)", opacity: 0.7 }} />
        </div>
        <div style={{ display: "flex", gap: "24px", alignItems: "center" }}>
          <a href={PHONE_HREF} style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}>{PHONE_DISPLAY}</a>
          <a href="/privacy-policy" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Privacy Policy</a>
          <a href="/terms-of-service" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.45)", textDecoration: "none" }}>Terms of Service</a>
        </div>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.72rem", color: "rgba(255,255,255,0.35)", margin: 0 }}>
          &copy; {new Date().getFullYear()} Marsh Cove Dental &amp; Implant Center. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
