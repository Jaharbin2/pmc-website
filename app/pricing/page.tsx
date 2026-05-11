import type { Metadata } from 'next';
import Link from 'next/link';
import NetIncomeCalculator from '@/components/NetIncomeCalculator';

export const metadata: Metadata = {
  title: 'Pricing | Property Management Consultants',
  description:
    'Simple, transparent property management pricing. $250 one-time leasing fee + 10% monthly management. No renewal fees, no inspection fees, no hidden charges.',
};

const noFees = [
  { label: 'Lease Renewal Fee', value: '$0' },
  { label: 'Inspection Fee', value: '$0' },
  { label: 'Maintenance Markup', value: '$0' },
  { label: 'Admin / Setup Fee', value: '$0' },
  { label: 'Move-In Fee', value: '$0' },
  { label: 'Move-Out Fee', value: '$0' },
  { label: 'Eviction Setup Fee', value: '$0' },
  { label: 'Annual Review Fee', value: '$0' },
  { label: 'Photography Fee', value: '$0' },
  { label: 'Listing Fee', value: '$0' },
  { label: 'Early Termination Penalty (owner)', value: '$0' },
  { label: 'Portal Access Fee', value: '$0' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does property management cost in Huntsville AL?',
      acceptedAnswer: { '@type': 'Answer', text: 'Property Management Consultants charges a one-time $250 leasing fee when a new tenant is placed, and a 10% monthly management fee based on rent collected. There are no renewal fees, inspection fees, maintenance markups, or any other charges.' },
    },
    {
      '@type': 'Question',
      name: 'Is there a lease renewal fee?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Property Management Consultants charges $0 for lease renewals. Many competitors charge $150–$300 per renewal.' },
    },
    {
      '@type': 'Question',
      name: 'Do you mark up maintenance costs?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. There is a $0 maintenance markup. You are billed at the exact vendor invoice cost.' },
    },
    {
      '@type': 'Question',
      name: 'What is the leasing fee for property management in Huntsville AL?',
      acceptedAnswer: { '@type': 'Answer', text: 'The leasing fee at Property Management Consultants is a flat $250, charged once when a new tenant is placed. This covers listing, marketing, showings, screening, lease drafting, and move-in coordination. Most competitors charge 50–100% of the first month\'s rent ($700–$1,400 on a $1,400/mo property).' },
    },
    {
      '@type': 'Question',
      name: 'Are there any hidden fees?',
      acceptedAnswer: { '@type': 'Answer', text: 'No. Property Management Consultants charges two fees only: a $250 one-time leasing fee and a 10% monthly management fee. There are no admin fees, setup fees, inspection fees, photography fees, portal fees, or early termination penalties for owners.' },
    },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">Simple pricing. No surprises.</h1>
          <p className="text-xl text-blue-100">
            Two line items. That&apos;s all you&apos;ll ever see on a Property Management Consultants statement.
          </p>
        </div>
      </section>

      {/* Main Pricing Cards */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
              <div className="text-6xl font-bold text-brand-blue mb-2">$250</div>
              <div className="text-xl font-semibold text-brand-navy mb-4">One-Time Leasing Fee</div>
              <p className="text-gray-600">
                Charged once when we place a new tenant. Covers listing, marketing, showings, screening, lease drafting, and move-in coordination. No charge at renewal.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-10 shadow-sm border border-gray-100 text-center">
              <div className="text-6xl font-bold text-brand-blue mb-2">10%</div>
              <div className="text-xl font-semibold text-brand-navy mb-4">Monthly Management Fee</div>
              <p className="text-gray-600">
                10% of monthly rent collected. Covers rent collection, maintenance coordination, tenant communication, inspections, financial reporting, and everything in between.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <div className="inline-block bg-brand-navy text-white px-6 py-3 rounded-full text-lg font-semibold">
              Example: $1,400/mo rent → $140/mo fee + $250 once at lease signing
            </div>
          </div>
        </div>
      </section>

      {/* No-fee table */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-4">Fees Property Management Consultants will never charge you</h2>
          <p className="text-gray-600 text-center text-lg mb-12 max-w-2xl mx-auto">
            Most property managers layer on fees for every task. We don&apos;t. Here&apos;s what you&apos;ll never see on a Property Management Consultants statement.
          </p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="bg-brand-cream">
                  <th className="text-left px-4 sm:px-6 py-4 text-brand-navy font-semibold">Fee Type</th>
                  <th className="text-right px-4 sm:px-6 py-4 text-brand-navy font-semibold">Our Charge</th>
                  <th className="text-right px-4 sm:px-6 py-4 text-gray-500 font-semibold">Typical Competitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {noFees.map((row, i) => (
                  <tr key={row.label} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 sm:px-6 py-4 text-gray-700 text-sm sm:text-base">{row.label}</td>
                    <td className="px-4 sm:px-6 py-4 text-right font-bold text-green-600">{row.value}</td>
                    <td className="px-4 sm:px-6 py-4 text-right text-gray-400 text-sm">$50–$500+</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Annual Cost Comparison */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-4">What the difference actually costs you</h2>
          <p className="text-gray-600 text-center text-lg mb-4 max-w-2xl mx-auto">
            At $1,400/month rent, here&apos;s how Property Management Consultants&apos; fees compare to what you might pay at a typical property management company.
          </p>
          <p className="text-gray-400 text-center text-sm mb-12">Competitor estimates based on common industry fee structures. Actual fees vary by company.</p>
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm bg-white">
            <table className="w-full min-w-[520px]">
              <thead>
                <tr className="bg-brand-navy text-white">
                  <th className="text-left px-4 sm:px-6 py-4 font-semibold">Fee</th>
                  <th className="text-right px-4 sm:px-6 py-4 font-semibold text-brand-blue">Us</th>
                  <th className="text-right px-4 sm:px-6 py-4 font-semibold text-gray-300">Typical Competitor</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {[
                  { fee: 'Monthly management (10% vs. 8–12%)', pmc: '$1,680/yr', comp: '$1,680/yr' },
                  { fee: 'Leasing fee (new tenant)', pmc: '$250', comp: '$700–$1,400' },
                  { fee: 'Lease renewal fee', pmc: '$0', comp: '$150–$300' },
                  { fee: 'Inspection fees (2×/year)', pmc: '$0', comp: '$100–$300' },
                  { fee: 'Maintenance coordination markup', pmc: '$0', comp: '10–20% of invoice' },
                  { fee: 'Admin / setup fee', pmc: '$0', comp: '$100–$300' },
                  { fee: 'Photography / listing fee', pmc: '$0', comp: '$100–$250' },
                ].map((row, i) => (
                  <tr key={row.fee} className={i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'}>
                    <td className="px-4 sm:px-6 py-4 text-gray-700 text-sm">{row.fee}</td>
                    <td className="px-4 sm:px-6 py-4 text-right font-bold text-green-600">{row.pmc}</td>
                    <td className="px-4 sm:px-6 py-4 text-right text-red-500 text-sm font-medium">{row.comp}</td>
                  </tr>
                ))}
                <tr className="bg-brand-navy text-white font-bold">
                  <td className="px-4 sm:px-6 py-5 text-lg">Year 1 Total Cost</td>
                  <td className="px-4 sm:px-6 py-5 text-right text-xl text-brand-blue">$1,930</td>
                  <td className="px-4 sm:px-6 py-5 text-right text-xl text-gray-300">$3,030–$4,230+</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-center text-gray-500 text-sm mt-6">
            At $1,400/mo, Property Management Consultants saves the average owner <span className="font-semibold text-brand-navy">$1,100–$2,300+</span> in year one alone. Year 2+ the gap is even larger — no renewal fees, ever.
          </p>
        </div>
      </section>

      {/* Net Income Calculator */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl text-brand-navy text-center mb-4">See your numbers</h2>
          <p className="text-gray-600 text-center text-lg mb-4">
            See exactly what you keep — enter your rent below.
          </p>
          <p className="text-gray-500 text-center text-sm mb-12">
            Enter your rent and see exactly how much you keep after Property Management Consultants&apos; fees — with all the zero-fee line items shown.
          </p>
          <NetIncomeCalculator />
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4">Ready to run the real numbers on your property?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute owner call. We&apos;ll look at your specific situation and show you exactly what your net income looks like with Property Management Consultants.
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
