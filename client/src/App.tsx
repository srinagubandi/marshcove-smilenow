/**
 * MARSH COVE DENTAL — SMILENOW v2
 * App.tsx
 *
 * Routes:
 *   /marshcove/smilenow/                              → Campaign Hub
 *   /marshcove/smilenow/google/free-consultation      → LP 1
 *   /marshcove/smilenow/google/pmax                   → LP 2
 *   /marshcove/smilenow/meta/affordable-implants      → LP 3
 *   /marshcove/smilenow/meta/same-day-implants        → LP 4
 *   /marshcove/smilenow/meta/trust-experience         → LP 5
 *   /marshcove/smilenow/thank-you/google-search       → TY 1
 *   /marshcove/smilenow/thank-you/google-pmax         → TY 2
 *   /marshcove/smilenow/thank-you/meta-price          → TY 3
 *   /marshcove/smilenow/thank-you/meta-symptomatic    → TY 4
 *   /marshcove/smilenow/thank-you/meta-trust          → TY 5
 */

import { Route, Switch } from "wouter";
import { MOBILE_STYLES } from "./components/SmileNowComponents";

// ── SmileNow v2 Landing Pages ──
import LPGoogleFreeConsult from "./pages/LPGoogleFreeConsult";
import LPGooglePmax from "./pages/LPGooglePmax";
import LPMetaAffordable from "./pages/LPMetaAffordable";
import LPMetaSameDay from "./pages/LPMetaSameDay";
import LPMetaTrust from "./pages/LPMetaTrust";

// ── SmileNow v2 Thank-You Pages ──
import TYGoogleSearch from "./pages/TYGoogleSearch";
import TYGooglePmax from "./pages/TYGooglePmax";
import TYMetaPrice from "./pages/TYMetaPrice";
import TYMetaSymptomatic from "./pages/TYMetaSymptomatic";
import TYMetaTrust from "./pages/TYMetaTrust";

// ── Campaign Hub ──
import CampaignHub from "./pages/CampaignHub";

function NotFound() {
  return (
    <div style={{ fontFamily: "Inter, sans-serif", backgroundColor: "#0D2B2B", minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", color: "white", textAlign: "center", padding: "40px" }}>
      <div>
        <h1 style={{ fontSize: "3rem", fontWeight: 900, margin: "0 0 12px" }}>404</h1>
        <p style={{ fontSize: "1rem", color: "rgba(255,255,255,0.6)" }}>Page not found.</p>
        <a href="/marshcove/smilenow/" style={{ color: "#0ABFBC", fontSize: "0.9rem" }}>Go to Campaign Hub</a>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <>
      <style>{MOBILE_STYLES}</style>
      <Switch>
      {/* Campaign Hub */}
      <Route path="/" component={CampaignHub} />
      <Route path="/marshcove/smilenow" component={CampaignHub} />
      <Route path="/marshcove/smilenow/" component={CampaignHub} />

      {/* Landing Pages */}
      <Route path="/marshcove/smilenow/google/free-consultation" component={LPGoogleFreeConsult} />
      <Route path="/marshcove/smilenow/google/free-consultation/" component={LPGoogleFreeConsult} />
      <Route path="/marshcove/smilenow/google/pmax" component={LPGooglePmax} />
      <Route path="/marshcove/smilenow/google/pmax/" component={LPGooglePmax} />
      <Route path="/marshcove/smilenow/meta/affordable-implants" component={LPMetaAffordable} />
      <Route path="/marshcove/smilenow/meta/affordable-implants/" component={LPMetaAffordable} />
      <Route path="/marshcove/smilenow/meta/same-day-implants" component={LPMetaSameDay} />
      <Route path="/marshcove/smilenow/meta/same-day-implants/" component={LPMetaSameDay} />
      <Route path="/marshcove/smilenow/meta/trust-experience" component={LPMetaTrust} />
      <Route path="/marshcove/smilenow/meta/trust-experience/" component={LPMetaTrust} />

      {/* Thank-You Pages */}
      <Route path="/marshcove/smilenow/thank-you/google-search" component={TYGoogleSearch} />
      <Route path="/marshcove/smilenow/thank-you/google-search/" component={TYGoogleSearch} />
      <Route path="/marshcove/smilenow/thank-you/google-pmax" component={TYGooglePmax} />
      <Route path="/marshcove/smilenow/thank-you/google-pmax/" component={TYGooglePmax} />
      <Route path="/marshcove/smilenow/thank-you/meta-price" component={TYMetaPrice} />
      <Route path="/marshcove/smilenow/thank-you/meta-price/" component={TYMetaPrice} />
      <Route path="/marshcove/smilenow/thank-you/meta-symptomatic" component={TYMetaSymptomatic} />
      <Route path="/marshcove/smilenow/thank-you/meta-symptomatic/" component={TYMetaSymptomatic} />
      <Route path="/marshcove/smilenow/thank-you/meta-trust" component={TYMetaTrust} />
      <Route path="/marshcove/smilenow/thank-you/meta-trust/" component={TYMetaTrust} />

      {/* Fallback */}
      <Route component={NotFound} />
    </Switch>
    </>
  );
}
