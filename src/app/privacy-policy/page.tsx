'use client'

import { motion } from 'framer-motion';
import { openCookieSettings } from '../lib/consent';

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
};

const Section = ({ children }: { children: React.ReactNode }) => (
  <motion.div {...fadeUp} viewport={{ once: true, amount: 0.2 }} className="mb-10">
    {children}
  </motion.div>
);

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-3xl mx-auto px-4 sm:px-8 py-20 text-[15px] leading-7 text-gray-800 dark:text-gray-200">
      <motion.h1 {...fadeUp} viewport={{ once: true }} className="text-3xl sm:text-4xl font-bold mb-12 text-center">
        Privacy Policy
      </motion.h1>

      <Section>
        <p>
          This policy explains which personal data is processed when you visit axorizen.com and why,
          in line with the EU General Data Protection Regulation (GDPR) and the German
          Telecommunications Digital Services Data Protection Act (TDDDG).
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">1. Controller</h2>
        <p>
          Milad Mahdipour, Axorizen<br />
          Email: <strong>hello@axorizen.com</strong><br />
          Phone: +49 151 5339 6437
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">2. Hosting and server logs</h2>
        <p>
          This website is hosted by Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.
          When you open a page, Vercel automatically processes technical data such as your IP address,
          date and time of the request, the page requested, referrer, browser and operating system.
          This is necessary to deliver the website securely and to prevent misuse. Legal basis:
          Art. 6(1)(f) GDPR (legitimate interest in a secure, working website). Vercel acts as our
          processor under a data processing agreement. Transfers to the USA are based on the
          EU&ndash;US Data Privacy Framework and the EU Standard Contractual Clauses.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">3. Cookies and similar storage</h2>
        <p className="mb-3">
          Storing or reading information on your device is only done without your consent where it is
          strictly necessary for the service you requested (&sect;25(2) TDDDG). Everything else
          requires your prior consent (&sect;25(1) TDDDG, Art. 6(1)(a) GDPR).
        </p>
        <ul className="list-disc pl-5 space-y-2">
          <li>
            <strong>axorizen_consent</strong> (cookie, strictly necessary): stores your cookie choice.
            Kept for 6 months.
          </li>
          <li>
            <strong>admin-theme</strong> (local storage, strictly necessary): remembers your light/dark
            theme. Kept until you clear your browser data.
          </li>
          <li>
            <strong>_ga, _ga_*</strong> (cookies, analytics, only with your consent): see section 4.
          </li>
        </ul>
        <p className="mt-3">
          You can change or withdraw your consent at any time with effect for the future:{" "}
          <button type="button" onClick={openCookieSettings} className="underline font-medium">
            Open cookie settings
          </button>
          .
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">4. Google Analytics</h2>
        <p>
          If you consent, we use Google Analytics 4, provided by Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Ireland. It helps us understand how visitors use the website
          (for example pages viewed and time on page). GA4 does not store full IP addresses.
          Google Signals and ad personalisation are switched off. Data may be transferred to Google LLC
          in the USA; Google is certified under the EU&ndash;US Data Privacy Framework. Legal basis:
          your consent, Art. 6(1)(a) GDPR and &sect;25(1) TDDDG. Analytics data is retained for
          14 months. Google&apos;s privacy policy: policies.google.com/privacy.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">5. Fonts</h2>
        <p>
          All fonts are served from our own server. No connection to Google Fonts or other font
          providers is made when you visit the website.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">6. Contacting us</h2>
        <p>
          If you contact us by email, phone, WhatsApp or Telegram, we process the details you send us
          to answer your request (Art. 6(1)(b) GDPR for project enquiries, otherwise Art. 6(1)(f) GDPR).
          WhatsApp (Meta Platforms Ireland Ltd.) and Telegram process data under their own privacy
          policies; if you prefer, please use email. We delete your messages once they are no longer
          needed, unless legal retention periods apply.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">7. External links</h2>
        <p>
          This website links to other websites (for example client projects and messaging services).
          No data is transferred to them until you click such a link.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">8. Your rights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Access to your data (Art. 15 GDPR)</li>
          <li>Correction (Art. 16) and deletion (Art. 17)</li>
          <li>Restriction of processing (Art. 18) and data portability (Art. 20)</li>
          <li>Objection to processing based on legitimate interest (Art. 21)</li>
          <li>Withdrawal of consent at any time, with effect for the future (Art. 7(3))</li>
          <li>Complaint to a data protection supervisory authority (Art. 77), for example the authority of the German federal state where you live</li>
        </ul>
        <p className="mt-3">To exercise your rights, email <strong>hello@axorizen.com</strong>.</p>
      </Section>

      <motion.p {...fadeUp} viewport={{ once: true }} className="text-xs text-gray-500 mt-16 text-center">
        Last updated: November 2026
      </motion.p>
    </main>
  );
}
