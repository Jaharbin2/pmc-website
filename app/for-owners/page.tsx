import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'For Property Owners | Property Management Consultants',
  description:
    'Full-service property management for North Alabama landlords. Learn what\'s included, how onboarding works, and how Property Management Consultants handles every detail so you don\'t have to.',
};

const services = [
  {
    category: 'Leasing',
    items: [
      'Professional listing photos and descriptions',
      'Syndication to Zillow, Trulia, Apartments.com, and 20+ sites',
      'AI-powered 24/7 lead response via text',
      'Showing coordination and scheduling',
      'Thorough tenant screening: credit (600+ min), income verification (3x rent), eviction history, criminal background',
      'Lease drafting and execution',
      'Move-in inspection with photos',
      'Security deposit collection and escrow',
    ],
  },
  {
    category: 'You never deal with this',
    items: [
      'Monthly rent collection',
      'Direct deposit to owner account at end of month',
      'Tenant communication and issue resolution',
      'Maintenance request intake and coordination',
      'Maintenance paid from your funds at exact invoice cost — no markups, no billing you separately',
      'Emergency maintenance handled 24/7',
      'Lease renewals coordinated at no additional fee',
    ],
  },
  {
    category: 'Inspections & Compliance',
    items: [
      'Move-in and move-out condition reports with photos',
      'Bi-annual interior inspections',
      'Alabama landlord-tenant law compliance',
      'Notice preparation (late rent, lease violations)',
      'Eviction management via attorney (~$680 typical cost)',
    ],
  },
  {
    category: 'Financial Reporting',
    items: [
      'Monthly itemized owner statements',
      'Real-time owner portal access',
      'Annual profit & loss report',
      '1099 preparation and delivery',
      'Maintenance expense tracking',
    ],
  },
];

const faqs = [
  {
    q: 'What happens if a tenant needs to be evicted?',
    a: 'Property Management Consultants coordinates eviction proceedings through a licensed Alabama attorney. The typical cost is approximately $680. We handle all communication, paperwork coordination, and court scheduling on your behalf. You are never alone in the process.',
  },
  {
    q: 'How often do you inspect my property?',
    a: 'We conduct move-in and move-out inspections for every tenancy. Additionally, we perform bi-annual interior inspections during occupancy to catch any maintenance issues early and verify lease compliance.',
  },
  {
    q: 'What property types do you manage?',
    a: 'We manage all residential property types: single-family homes, townhouses, condos, and small multifamily (duplexes, triplexes, quadplexes). No portfolio minimum — we work with owners who have one property or several.',
  },
  {
    q: 'Is there a minimum number of properties required?',
    a: 'No. We work with owners of a single property. Whether you have one rental or a growing portfolio, you receive the same personal attention and full-service management.',
  },
  {
    q: 'How quickly can Property Management Consultants get my property rented?',
    a: 'Most properties are rented within 2–4 weeks of listing, depending on condition and market conditions. Our AI-powered leasing system responds to inquiries 24/7, which significantly reduces time-to-lease.',
  },
  {
    q: 'Do you mark up maintenance costs?',
    a: 'Never. When a maintenance issue arises, Property Management Consultants pays the vendor directly from your owner funds at the exact invoice amount. You never receive a separate invoice or get billed through us — we handle the payment on your behalf and it shows up on your monthly statement at cost. Our only compensation is our management fee.',
  },
  {
    q: 'When do I receive my owner disbursement?',
    a: 'Owner disbursements are sent by direct deposit toward the end of each month, after rent collection and any maintenance expenses are reconciled. We prefer end-of-month disbursements so any repair costs during the month can be handled without requiring a separate contribution from you, but timing is flexible.',
  },
  {
    q: 'What is the Owner Playbook Call?',
    a: 'After your initial 15-minute intro call and signing your management agreement, we schedule a dedicated Owner Playbook Call to walk through your property in detail, set rent, discuss any make-ready work needed, and align on your goals. After that, Property Management Consultants takes it from there.',
  },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
};

export default function ForOwnersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl sm:text-6xl mb-6">Full-Service Property Management</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            From your first showing to your year-end 1099, Property Management Consultants handles every aspect of managing your rental so you can focus on what matters.
          </p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-4">What&apos;s Included</h2>
          <p className="text-gray-600 text-center text-lg mb-14 max-w-2xl mx-auto">
            Here&apos;s what you hand off entirely when you work with us — all included in your 10% monthly management fee. No add-ons, no surprises.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {services.map((section) => (
              <div key={section.category} className="bg-brand-cream rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl text-brand-navy mb-5 pb-3 border-b border-gray-200">{section.category}</h3>
                <ul className="space-y-3">
                  {section.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Onboarding Process */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-4">How to Become a Client</h2>
          <p className="text-gray-600 text-center text-lg mb-14">
            Getting started with Property Management Consultants takes less than a week. Here&apos;s exactly what the process looks like from first call to fully managed.
          </p>
          <div className="space-y-6">
            {[
              {
                step: '1',
                title: 'Book a Free 15-Minute Owner Call',
                desc: "We spend 15 minutes learning about your property, your goals, and your current situation. No pressure, no pitch — just a real conversation. You'll leave with a clear picture of exactly what working with Property Management Consultants looks like.",
              },
              {
                step: '2',
                title: 'Sign the Management Agreement',
                desc: "If it's a good fit, we send you a straightforward management agreement. Everything we do and charge is spelled out clearly. Once signed, Property Management Consultants is officially your management team.",
              },
              {
                step: '3',
                title: 'Owner Playbook Call',
                desc: "We schedule a dedicated call to go over your property in detail: set the right rent, identify any make-ready items, discuss your preferences, and align on the plan. This is how we get everything set up correctly from day one.",
              },
              {
                step: '4',
                title: 'Property Management Consultants Handles Everything',
                desc: "We photograph and list your property, activate our AI-powered leasing system, screen applicants, execute the lease, collect rent, and manage your property on an ongoing basis. You get monthly statements and can check in via the owner portal anytime.",
              },
            ].map((item) => (
              <div key={item.step} className="bg-white rounded-2xl p-8 border border-gray-100 flex gap-6">
                <div className="w-12 h-12 rounded-full bg-brand-blue text-white font-bold text-lg flex items-center justify-center shrink-0">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl text-brand-navy mb-2">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Financials */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-4">Your Financials, Simplified</h2>
          <p className="text-gray-600 text-center text-lg mb-14 max-w-2xl mx-auto">
            Property Management Consultants gives you complete financial visibility with zero accounting headaches.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-brand-cream rounded-2xl border border-gray-100">
              <div className="text-4xl text-brand-gold mb-3">Monthly</div>
              <h3 className="text-brand-navy text-xl mb-2">Direct Deposit</h3>
              <p className="text-gray-600 text-sm">Net rent deposited to your account toward the end of each month, with a full itemized statement showing all income and expenses.</p>
            </div>
            <div className="text-center p-8 bg-brand-cream rounded-2xl border border-gray-100">
              <div className="text-4xl text-brand-gold mb-3">Monthly</div>
              <h3 className="text-brand-navy text-xl mb-2">Owner Statements</h3>
              <p className="text-gray-600 text-sm">Detailed statements showing rent received, management fee, repairs, and your net disbursement — all accessible in your owner portal.</p>
            </div>
            <div className="text-center p-8 bg-brand-cream rounded-2xl border border-gray-100">
              <div className="text-4xl text-brand-gold mb-3">Annual</div>
              <h3 className="text-brand-navy text-xl mb-2">P&L + 1099</h3>
              <p className="text-gray-600 text-sm">At year-end, you receive a full profit & loss report and your 1099 — everything you need for your tax preparer, neatly packaged.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-14">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-white rounded-xl p-7 border border-gray-100">
                <h3 className="text-lg font-semibold text-brand-navy mb-3">{faq.q}</h3>
                <p className="text-gray-600 leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4">Let&apos;s talk about your property</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute owner call. We&apos;ll discuss your property, answer your questions, and help you decide if Property Management Consultants is the right fit.
          </p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg text-lg hover:bg-white hover:text-brand-navy transition-colors"
          >
            Book a 15-Minute Owner Call
          </Link>
        </div>
      </section>
    </>
  );
}
