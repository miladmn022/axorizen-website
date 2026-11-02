// Cookie consent state (GDPR + German TDDDG §25).
// Analytics may only load after an explicit, active opt-in.

export const CONSENT_COOKIE = "axorizen_consent";
export const CONSENT_VERSION = 2; // bump when the cookie categories change, so everyone is asked again
export const CONSENT_EVENT = "axorizen:consent-changed";
export const OPEN_SETTINGS_EVENT = "axorizen:open-cookie-settings";

export type Consent = {
  v: number;
  analytics: boolean;
  ts: string;
};

export function readConsent(): Consent | null {
  if (typeof document === "undefined") return null;
  const match = document.cookie.match(new RegExp("(^| )" + CONSENT_COOKIE + "=([^;]+)"));
  if (!match) return null;
  try {
    const parsed = JSON.parse(decodeURIComponent(match[2])) as Consent;
    if (parsed.v !== CONSENT_VERSION) return null;
    return parsed;
  } catch {
    return null;
  }
}

export function saveConsent(analytics: boolean) {
  const value: Consent = { v: CONSENT_VERSION, analytics, ts: new Date().toISOString() };
  // 6 months, then we ask again
  const expires = new Date(Date.now() + 182 * 864e5).toUTCString();
  const secure = location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${CONSENT_COOKIE}=${encodeURIComponent(JSON.stringify(value))}; expires=${expires}; path=/; SameSite=Lax${secure}`;
  if (!analytics) removeAnalyticsCookies();
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_SETTINGS_EVENT));
}

// Delete Google Analytics cookies when consent is withdrawn
function removeAnalyticsCookies() {
  const host = location.hostname;
  const domains = ["", host, "." + host, "." + host.replace(/^www\./, "")];
  document.cookie
    .split(";")
    .map((c) => c.trim().split("=")[0])
    .filter((name) => name === "_ga" || name.startsWith("_ga_") || name === "_gid")
    .forEach((name) => {
      domains.forEach((d) => {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${d ? "; domain=" + d : ""}`;
      });
    });
}
