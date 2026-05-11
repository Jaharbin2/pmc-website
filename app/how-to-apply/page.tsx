import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'How to Apply | Property Management Consultants Tenant Guide',
  description:
    'Everything you need to know about applying for a Property Management Consultants rental in North Alabama. Screening criteria, move-in costs, pet policy, and the application process.',
};

const TENANT_TURNER_URL = 'https://app.tenantturner.com/listings/propertymanagementconsultants';

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'What credit score do I need to rent from Property Management Consultants?',
      acceptedAnswer: { '@type': 'Answer', text: 'A credit score of 600 or above is preferred. Lower scores are reviewed on a case-by-case basis and may require an additional deposit.' },
    },
    {
      '@type': 'Question',
      name: 'What income do I need to qualify for a rental?',
      acceptedAnswer: { '@type': 'Answer', text: 'Applicants must demonstrate income of at least 3 times the monthly rent, verified via pay stubs, bank statements, or tax returns.' },
    },
    {
      '@type': 'Question',
      name: 'What is the application fee?',
      acceptedAnswer: { '@type': 'Answer', text: 'The application fee is $40 per adult (18+). It is non-refundable and covers credit, background, and eviction checks.' },
    },
    {
      '@type': 'Question',
      name: 'What are the move-in costs for a Property Management Consultants rental?',
      acceptedAnswer: { '@type': 'Answer', text: 'Move-in costs include a security deposit equal to one month\'s rent (due at lease signing), first month\'s rent (due 7 business days before move-in), and a $20 Resident Benefits Package fee.' },
    },
    {
      '@type': 'Question',
      name: 'Do you allow pets?',
      acceptedAnswer: { '@type': 'Answer', text: 'Pets are welcome at most properties. There is a one-time non-refundable pet fee of $200 per pet and a monthly pet rent of $30 per pet. Service animals and emotional support animals are accommodated per Fair Housing Act requirements with no pet fees.' },
    },
    {
      '@type': 'Question',
      name: 'How long does the application review take?',
      acceptedAnswer: { '@type': 'Answer', text: 'Once all documents are submitted, applications are reviewed within 1–2 business days.' },
    },
    {
      '@type': 'Question',
      name: 'When is rent due and what are the late fees?',
      acceptedAnswer: { '@type': 'Answer', text: 'Rent is due on the 1st of each month with a grace period through the 5th. A $50 late fee is applied on the 6th, plus $10 per day until paid.' },
    },
  ],
};

export default function HowToApplyPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">How to Apply</h1>
          <p className="text-xl text-blue-100">
            Everything you need to know about renting with Property Management Consultants — from screening criteria to move-in day.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Screening Criteria */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl text-brand-navy mb-6">Screening Criteria</h2>
            <p className="text-gray-600 mb-6">All applicants are screened fairly and consistently in compliance with Fair Housing laws.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: 'Credit Score', value: '600 or above', detail: 'Lower scores reviewed on a case-by-case basis with additional deposit.' },
                { label: 'Income', value: '3× monthly rent', detail: 'Verified via pay stubs, bank statements, or tax returns.' },
                { label: 'Eviction History', value: 'None in 7 years', detail: 'Evictions within 7 years are an automatic denial.' },
                { label: 'Criminal Background', value: 'Reviewed individually', detail: 'Nature, date, and relevance are all considered.' },
                { label: 'Application Fee', value: '$40 per adult', detail: 'Non-refundable. Covers credit, background, and eviction checks.' },
                { label: 'Rental History', value: 'Positive references', detail: 'We contact previous landlords when applicable.' },
              ].map((item) => (
                <div key={item.label} className="bg-brand-cream rounded-xl p-5 border border-gray-100">
                  <div className="text-sm text-gray-500 font-medium mb-1">{item.label}</div>
                  <div className="text-lg font-semibold text-brand-navy mb-1">{item.value}</div>
                  <div className="text-sm text-gray-600">{item.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Move-In Costs */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl text-brand-navy mb-6">Move-In Costs</h2>
            <div className="space-y-4">
              {[
                { item: 'Security Deposit', amount: '1 month\'s rent', note: 'Due at lease signing. Held in escrow and returned within 60 days of move-out, minus any documented deductions.' },
                { item: 'First Month\'s Rent', amount: '1 month\'s rent', note: 'Due 7 business days before move-in.' },
                { item: 'Resident Benefit Package', amount: '$20', note: 'Due with first month\'s rent. Required for all residents — covers credit reporting, identity protection, utility concierge, and 24/7 portal access.' },
                { item: 'Total Due at Lease Signing', amount: '1 month\'s rent', note: 'Security deposit only. First month\'s rent and RBP are due 7 business days before move-in.' },
              ].map((row) => (
                <div key={row.item} className="flex items-start justify-between border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                  <div>
                    <div className="font-semibold text-brand-navy">{row.item}</div>
                    <div className="text-sm text-gray-500 mt-0.5">{row.note}</div>
                  </div>
                  <div className="text-right font-bold text-brand-blue ml-4 shrink-0">{row.amount}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Pet Policy */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl text-brand-navy mb-2">Pet Policy</h2>
            <p className="text-gray-600 mb-6">Pets are welcome at most Property Management Consultants properties. Pet permissions are specified on each listing.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-cream rounded-xl p-5 border border-gray-100">
                <div className="text-sm text-gray-500 font-medium mb-1">Non-Refundable Pet Fee</div>
                <div className="text-2xl font-bold text-brand-blue">$200</div>
                <div className="text-sm text-gray-600 mt-1">One-time fee per pet, due at move-in.</div>
              </div>
              <div className="bg-brand-cream rounded-xl p-5 border border-gray-100">
                <div className="text-sm text-gray-500 font-medium mb-1">Monthly Pet Rent</div>
                <div className="text-2xl font-bold text-brand-blue">$30/mo</div>
                <div className="text-sm text-gray-600 mt-1">Per pet, added to your monthly rent.</div>
              </div>
            </div>
            <p className="text-sm text-gray-500 mt-4">Service animals and emotional support animals are accommodated in accordance with Fair Housing Act requirements. No pet fees apply for verified service animals.</p>
          </div>

          {/* Application Process */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl text-brand-navy mb-8">Application Process</h2>
            <div className="space-y-6">
              {[
                {
                  step: '1',
                  title: 'Find a property on Tenant Turner',
                  desc: 'Browse available listings at our Tenant Turner portal. When you find a property you want, click through to apply — you\'ll be directed to our Buildium portal to complete your application and pay the $40 fee. All adults 18+ in the household must apply separately.',
                },
                {
                  step: '2',
                  title: 'Screening email',
                  desc: "You'll receive an automated screening email with a link to submit your background and credit check. Check your spam folder if you don't see it within a few minutes.",
                },
                {
                  step: '3',
                  title: 'Document submission',
                  desc: 'You\'ll receive a second email requesting supporting documents: proof of income (recent pay stubs or bank statements), government-issued ID, and any pet documentation.',
                },
                {
                  step: '4',
                  title: '1–2 business day review',
                  desc: "Once we have everything, our team reviews your full application within 1–2 business days. The only reason it takes longer is if we\'re still waiting on documents from you — once all info is in, we move quickly.",
                },
                {
                  step: '5',
                  title: 'Approval + Move-In Coordination',
                  desc: "Approved applicants receive a lease for signature and instructions for move-in costs. We'll coordinate your move-in inspection and key handoff.",
                },
              ].map((item) => (
                <div key={item.step} className="flex gap-5">
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-white font-bold flex items-center justify-center shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="font-semibold text-brand-navy mb-1">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RBP */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl text-brand-navy mb-2">Resident Benefits Package</h2>
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl font-bold text-brand-blue">$20/mo</span>
              <span className="text-gray-500">included with all leases</span>
            </div>
            <p className="text-gray-600 mb-5">All Property Management Consultants residents are enrolled in our Resident Benefits Package, which includes:</p>
            <ul className="space-y-2">
              {[
                'Credit reporting — on-time rent payments reported to build your credit',
                'Identity protection — 24/7 identity monitoring',
                'Utility concierge — help setting up utilities at move-in',
                '24/7 resident portal access — pay rent, submit maintenance requests, view documents',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-700 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Late Fees */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            <h2 className="text-3xl text-brand-navy mb-6">Late Fees</h2>
            <p className="text-gray-600 mb-5">Rent is due on the 1st of each month. A grace period applies through the 5th.</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-brand-cream rounded-xl p-5 border border-gray-100">
                <div className="text-sm text-gray-500 font-medium mb-1">Initial Late Fee</div>
                <div className="text-2xl font-bold text-red-500">$50</div>
                <div className="text-sm text-gray-600 mt-1">Applied once if rent is not received by the 5th.</div>
              </div>
              <div className="bg-brand-cream rounded-xl p-5 border border-gray-100">
                <div className="text-sm text-gray-500 font-medium mb-1">Daily Late Fee</div>
                <div className="text-2xl font-bold text-red-500">$10/day</div>
                <div className="text-sm text-gray-600 mt-1">Applied each day rent remains unpaid after the 5th.</div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl text-brand-navy mb-4">Ready to apply?</h2>
            <p className="text-gray-600 mb-6">Browse available properties on Tenant Turner — you&apos;ll be directed from there to our application portal.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={TENANT_TURNER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg text-lg hover:bg-brand-navy transition-colors"
              >
                Browse Listings &amp; Apply Now
              </a>
              <Link
                href="/rentals"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg text-lg hover:bg-brand-navy hover:text-white transition-colors"
              >
                Browse Available Rentals
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
