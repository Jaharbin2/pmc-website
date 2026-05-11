import type { Metadata } from 'next';
import Link from 'next/link';
import RentEstimator from '@/components/RentEstimator';
import NetIncomeCalculator from '@/components/NetIncomeCalculator';

export const metadata: Metadata = {
  title: 'Owner Tools | Rent Estimator & Income Calculator | Property Management Consultants',
  description:
    'Free tools for North Alabama property owners. Estimate your rental income and calculate your net cash flow with Property Management Consultants\' transparent pricing.',
};

export default function OwnerToolsPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">Owner Tools</h1>
          <p className="text-xl text-blue-100">
            Free resources to help you understand your property&apos;s income potential and net cash flow with Property Management Consultants.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">Tool 1</span>
            <h2 className="text-3xl text-brand-navy mb-2">Rent Estimator</h2>
            <p className="text-gray-600">
              Get an instant estimate of what your property could rent for in today&apos;s North Alabama market. Adjust for property type, bedrooms, bathrooms, condition, and features to fine-tune your number.
            </p>
          </div>
          <RentEstimator />
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-brand-blue/10 text-brand-blue text-sm font-semibold px-3 py-1 rounded-full mb-3">Tool 2</span>
            <h2 className="text-3xl text-brand-navy mb-2">Net Income Calculator</h2>
            <p className="text-gray-600">
              Enter your expected rent and see your exact net income after Property Management Consultants fees — with all zero-fee line items shown so you can compare us to other management companies fairly.
            </p>
          </div>
          <NetIncomeCalculator />
        </div>
      </section>

      <section className="py-16 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl mb-4">Want to run these numbers on your actual property?</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free call and we&apos;ll walk through a detailed income analysis together.
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
