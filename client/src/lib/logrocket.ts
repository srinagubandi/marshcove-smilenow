/**
 * LogRocket Initialisation
 * ========================
 * App ID: zomlux/fixasmileguidecom
 *
 * Plugins active:
 *  - React plugin  (react detected)
 *  - mergeIframes  (iframes detected in LandingComponents, AffordableImplants, FreeConsultation, SameDayImplants)
 *
 * Conditional integrations NOT added (not detected in project):
 *  - Redux, GraphQL, MobX, MobX State Tree, NgRx, Vuex
 *
 * PII NOTE: This integration does not include automatic PII sanitization.
 * Before going live, review LogRocket's DOM redaction docs:
 * https://docs.logrocket.com/reference/dom
 */

import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";
// Note: logrocket-react v7 takes no arguments — it reads LogRocket from the global context

const APP_ID = "zomlux/fixasmileguidecom";

/**
 * init() — call once at app startup (main.tsx).
 * Enables iframe capture so GHL survey iframes and YouTube embeds are recorded.
 */
export function initLogRocket() {
  LogRocket.init(APP_ID, {
    // Capture content inside iframes (GHL survey, YouTube, etc.)
    mergeIframes: true,
  });

  // React plugin — records component render tree alongside sessions
  // logrocket-react v7 takes no arguments
  setupLogRocketReact();
}

/**
 * identify() — call when you know who the user is.
 * Currently not triggered automatically; call from a form submit handler if needed.
 *
 * Example:
 *   import { identifyUser } from "@/lib/logrocket";
 *   identifyUser("user-123", { name: "Jane Doe", email: "jane@example.com" });
 */
// IUserTraits: all values must be string | number | boolean
type UserTraits = { [key: string]: string | number | boolean };

export function identifyUser(userId: string, traits?: UserTraits) {
  LogRocket.identify(userId, traits);
}

/**
 * trackEvent() — track named custom events throughout the app.
 *
 * Usage:
 *   import { trackEvent } from "@/lib/logrocket";
 *   trackEvent("Survey Opened", { page: "/affordable-implants" });
 */
// TrackEventProperties: values must be string | number | boolean | array variants | null | undefined
type TrackProps = {
  revenue?: number;
  [key: string]: string | number | boolean | string[] | number[] | boolean[] | undefined | null;
};

export function trackEvent(eventName: string, properties?: TrackProps) {
  LogRocket.track(eventName, properties);
}

export default LogRocket;
