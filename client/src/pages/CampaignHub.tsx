/**
 * Campaign Hub — /marshcove/smilenow/
 * Lists all 5 LPs + 5 TY pages with survey IDs and channel info.
 */

import { SURVEYS, ASSETS, PHONE_DISPLAY, PHONE_HREF, LOCATION } from "../components/SmileNowComponents";

const C = {
  darkBg: "#0D2B2B",
  green: "#1A6B3A",
  teal: "#0ABFBC",
  gold: "#F0B429",
};

const CAMPAIGNS = [
  {
    channel: "Google Search",
    badge: "#4285F4",
    label: "LP 1",
    title: "Free Consultation",
    lpUrl: "/marshcove/smilenow/google/free-consultation",
    tyUrl: "/marshcove/smilenow/thank-you/google-search",
    surveyId: SURVEYS.googleFreeConsult,
    notes: "Search traffic. Free consultation angle.",
  },
  {
    channel: "Google PMAX",
    badge: "#34A853",
    label: "LP 2",
    title: "PMAX",
    lpUrl: "/marshcove/smilenow/google/pmax",
    tyUrl: "/marshcove/smilenow/thank-you/google-pmax",
    surveyId: SURVEYS.googlePmax,
    notes: "PMAX traffic. General dental implants angle.",
  },
  {
    channel: "Meta",
    badge: "#1877F2",
    label: "LP 3",
    title: "Affordable Implants",
    lpUrl: "/marshcove/smilenow/meta/affordable-implants",
    tyUrl: "/marshcove/smilenow/thank-you/meta-price",
    surveyId: SURVEYS.metaAffordable,
    notes: "$0 down / financing angle.",
  },
  {
    channel: "Meta",
    badge: "#1877F2",
    label: "LP 4",
    title: "Same-Day Implants",
    lpUrl: "/marshcove/smilenow/meta/same-day-implants",
    tyUrl: "/marshcove/smilenow/thank-you/meta-symptomatic",
    surveyId: SURVEYS.metaSameDay,
    notes: "Problem-aware / symptomatic / same-day angle.",
  },
  {
    channel: "Meta",
    badge: "#1877F2",
    label: "LP 5",
    title: "Trust + Experience",
    lpUrl: "/marshcove/smilenow/meta/trust-experience",
    tyUrl: "/marshcove/smilenow/thank-you/meta-trust",
    surveyId: SURVEYS.metaTrust,
    notes: "Trust and experience angle. Dr. Titov credentials.",
  },
];

export default function CampaignHub() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: C.darkBg, minHeight: "100vh", padding: "40px 20px" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "8px" }}>
          <img src={ASSETS.logo} alt="Marsh Cove Dental" style={{ height: "36px", objectFit: "contain", filter: "brightness(0) invert(1)" }} />
        </div>
        <h1 style={{ fontFamily: "Inter, sans-serif", fontWeight: 900, fontSize: "1.6rem", color: "white", margin: "0 0 4px" }}>
          SmileNow Landing Pages v2
        </h1>
        <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.55)", margin: "0 0 32px" }}>
          Marsh Cove Dental &amp; Implant Center — {LOCATION} — {PHONE_DISPLAY}
        </p>

        {/* Campaign table */}
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          {CAMPAIGNS.map(({ channel, badge, label, title, lpUrl, tyUrl, surveyId, notes }) => (
            <div key={lpUrl} style={{ backgroundColor: "rgba(255,255,255,0.06)", borderRadius: "12px", padding: "20px 24px", border: "1px solid rgba(255,255,255,0.08)" }}>
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "10px", marginBottom: "12px" }}>
                <span style={{ backgroundColor: badge, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.7rem", padding: "3px 10px", borderRadius: "4px" }}>{channel}</span>
                <span style={{ fontFamily: "Inter, sans-serif", fontWeight: 800, fontSize: "1rem", color: "white" }}>{label} — {title}</span>
              </div>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)", margin: "0 0 14px" }}>{notes}</p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px", marginBottom: "12px" }}>
                <a href={lpUrl} style={{ backgroundColor: C.green, color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.8rem", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", textAlign: "center" }}>
                  View Landing Page
                </a>
                <a href={tyUrl} style={{ backgroundColor: "rgba(255,255,255,0.1)", color: "white", fontFamily: "Inter, sans-serif", fontWeight: 700, fontSize: "0.8rem", padding: "10px 16px", borderRadius: "6px", textDecoration: "none", textAlign: "center", border: "1px solid rgba(255,255,255,0.15)" }}>
                  View Thank-You Page
                </a>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "12px" }}>
                <div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>LP URL</span>
                  <p style={{ fontFamily: "monospace", fontSize: "0.78rem", color: C.teal, margin: "2px 0 0" }}>{lpUrl}</p>
                </div>
                <div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>TY URL</span>
                  <p style={{ fontFamily: "monospace", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", margin: "2px 0 0" }}>{tyUrl}</p>
                </div>
                <div>
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.08em" }}>Survey ID</span>
                  <p style={{ fontFamily: "monospace", fontSize: "0.78rem", color: C.gold, margin: "2px 0 0" }}>{surveyId}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
