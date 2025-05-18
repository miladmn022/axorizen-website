'use client'

import { motion } from 'framer-motion';

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
          This Privacy Policy explains how Axorizen collects, uses, and protects your information when you interact with our website. By continuing to use our services, you agree to the terms below.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">1. What We Collect</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Cookies related to your theme (dark/light), language, and site preferences</li>
          <li>Anonymous usage data (e.g., page views, clicks) for analytics purposes</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">2. How We Use It</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>To provide a customized experience (e.g., saving your theme mode)</li>
          <li>To improve design and performance of our website</li>
          <li>To understand user behavior using third-party analytics (e.g., Vercel Insights or future Google Analytics)</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">3. Cookies & Consent</h2>
        <p>
          We use cookies to remember your preferences and optimize performance. You can manage or disable cookies anytime from your browser settings. Our site will ask for your consent on your first visit.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">4. Data Security</h2>
        <p>
          We do not collect personal identifying information (such as names or emails) through this website. All data used is anonymized and used solely for technical improvement.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">5. Third-Party Services</h2>
        <p>
          We may use third-party hosting (Vercel), analytics tools, and font providers (e.g., Vercel Fonts). These services may collect anonymous browser data in compliance with their respective privacy policies.
        </p>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>You can reject or revoke cookies at any time</li>
          <li>You may request deletion of any data tied to your usage (though none is stored personally)</li>
        </ul>
      </Section>

      <Section>
        <h2 className="text-xl font-semibold mb-3">7. Contact</h2>
        <p>
          For questions about this Privacy Policy or your data rights, email us at: <strong>support@axorizen.com</strong>
        </p>
      </Section>

      <motion.p {...fadeUp} viewport={{ once: true }} className="text-xs text-gray-500 mt-16 text-center">
        Last updated: May 2025
      </motion.p>
    </main>
  );
}
