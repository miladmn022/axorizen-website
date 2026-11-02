"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { OPEN_SETTINGS_EVENT, readConsent, saveConsent } from "../lib/consent";

export default function CustomCookieConsent() {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const current = readConsent();
    if (!current) setOpen(true);
    else setAnalytics(current.analytics);

    const reopen = () => {
      const c = readConsent();
      setAnalytics(c ? c.analytics : false);
      setDetails(true);
      setOpen(true);
    };
    window.addEventListener(OPEN_SETTINGS_EVENT, reopen);
    return () => window.removeEventListener(OPEN_SETTINGS_EVENT, reopen);
  }, []);

  if (!open) return null;

  const decide = (allowAnalytics: boolean) => {
    saveConsent(allowAnalytics);
    setAnalytics(allowAnalytics);
    setOpen(false);
    setDetails(false);
  };

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-title"
      aria-describedby="cookie-text"
      className="ax-cookie"
    >
      <style>{`
        .ax-cookie{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:9999;
          width:calc(100% - 32px);max-width:460px;box-sizing:border-box;padding:20px 22px;border-radius:14px;
          background:var(--background,#0b0b0d);color:var(--foreground,#f2f2f2);
          border:1px solid color-mix(in srgb,var(--foreground,#fff) 14%,transparent);
          box-shadow:0 18px 50px rgba(0,0,0,.35);font-size:14px;line-height:1.55;display:flex;flex-direction:column;gap:14px;
          animation:axCookieIn .3s ease}
        @keyframes axCookieIn{from{opacity:0;transform:translate(-50%,10px)}to{opacity:1;transform:translate(-50%,0)}}
        @media (prefers-reduced-motion:reduce){.ax-cookie{animation:none}}
        .ax-cookie h2{margin:0;font-size:15px;font-weight:600}
        .ax-cookie p{margin:0;opacity:.85}
        .ax-cookie a{color:inherit;text-decoration:underline;text-underline-offset:2px}
        .ax-row{display:flex;gap:10px;flex-wrap:wrap}
        .ax-btn{flex:1 1 140px;min-height:44px;padding:10px 16px;border-radius:999px;font:inherit;font-weight:600;cursor:pointer;
          border:1px solid var(--foreground,#f2f2f2);background:var(--foreground,#f2f2f2);color:var(--background,#0b0b0d)}
        .ax-btn:focus-visible,.ax-link:focus-visible,.ax-switch input:focus-visible+span{outline:2px solid #ed1e25;outline-offset:2px}
        .ax-link{background:none;border:0;padding:0;color:inherit;font:inherit;font-size:13px;text-decoration:underline;cursor:pointer;opacity:.8;align-self:flex-start}
        .ax-cat{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;padding:12px 0;
          border-top:1px solid color-mix(in srgb,var(--foreground,#fff) 12%,transparent)}
        .ax-cat strong{display:block;font-size:13.5px}
        .ax-cat small{display:block;opacity:.75;font-size:12.5px;line-height:1.5;margin-top:2px}
        .ax-switch{position:relative;flex:none;width:44px;height:26px}
        .ax-switch input{position:absolute;inset:0;opacity:0;margin:0;cursor:pointer}
        .ax-switch span{position:absolute;inset:0;border-radius:999px;background:color-mix(in srgb,var(--foreground,#fff) 25%,transparent);transition:.2s;pointer-events:none}
        .ax-switch span::after{content:"";position:absolute;top:3px;left:3px;width:20px;height:20px;border-radius:50%;background:var(--background,#0b0b0d);transition:.2s}
        .ax-switch input:checked+span{background:#ed1e25}
        .ax-switch input:checked+span::after{transform:translateX(18px);background:#fff}
        .ax-switch input:disabled{cursor:not-allowed}
        .ax-switch input:disabled+span{opacity:.55}
      `}</style>

      <h2 id="cookie-title">Your privacy</h2>
      <p id="cookie-text">
        We use strictly necessary storage to run this site. With your consent we also use Google
        Analytics to understand how visitors use it. You can change your choice at any time via
        &ldquo;Cookie settings&rdquo; in the footer. Details in our{" "}
        <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>

      {details && (
        <div id="cookie-details">
          <div className="ax-cat">
            <div>
              <strong>Strictly necessary</strong>
              <small>Saves your cookie choice and your light/dark theme. Always on.</small>
            </div>
            <label className="ax-switch" aria-label="Strictly necessary, always on">
              <input id="cookie-necessary" type="checkbox" checked disabled readOnly />
              <span></span>
            </label>
          </div>
          <div className="ax-cat">
            <div>
              <strong>Analytics</strong>
              <small>Google Analytics 4 (Google Ireland Ltd.). Anonymous visit statistics. Cookies: _ga, _ga_*. Storage up to 14 months.</small>
            </div>
            <label className="ax-switch" aria-label="Allow analytics">
              <input
                id="cookie-analytics"
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
              />
              <span></span>
            </label>
          </div>
        </div>
      )}

      {/* Equal-weight choices: rejecting must be as easy as accepting */}
      <div className="ax-row">
        <button type="button" className="ax-btn" onClick={() => decide(false)}>
          Reject all
        </button>
        <button type="button" className="ax-btn" onClick={() => decide(true)}>
          Accept all
        </button>
      </div>

      {details ? (
        <button type="button" className="ax-link" onClick={() => decide(analytics)}>
          Save my selection
        </button>
      ) : (
        <button
          type="button"
          className="ax-link"
          onClick={() => setDetails(true)}
          aria-expanded={details}
          aria-controls="cookie-details"
        >
          Customize
        </button>
      )}
    </div>
  );
}
