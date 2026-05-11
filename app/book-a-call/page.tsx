import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Book a 15-Minute Owner Call | Property Management Consultants',
  description:
    'Schedule a free 15-minute call with Property Management Consultants. We\'ll discuss your property, answer your questions, and give you a clear picture of what working with us looks like.',
};

export default function BookACallPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-16 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">Book a 15-Minute Owner Call</h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto">
            Book a free 15-minute owner call. We&apos;ll talk through your property, answer your questions, and give you a clear picture of what working with Property Management Consultants looks like.
          </p>
        </div>
      </section>

      <section className="py-12 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* What to expect */}
            <div className="lg:col-span-1">
              <h2 className="text-2xl text-brand-navy mb-6">What to expect</h2>
              <ul className="space-y-5">
                {[
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: '15 minutes',
                    desc: "No pressure. No pitch. Just a real conversation about your property and goals.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'Rental analysis',
                    desc: "We'll walk through what your property could rent for and your projected net income.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    title: 'All your questions answered',
                    desc: "Evictions, maintenance, vacancies, fees — bring everything.",
                  },
                  {
                    icon: (
                      <svg className="w-5 h-5 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    ),
                    title: 'Next steps if it\'s a fit',
                    desc: "We'll walk you through exactly how onboarding works so there are no surprises.",
                  },
                ].map((item) => (
                  <li key={item.title} className="flex gap-3">
                    <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-brand-navy text-sm">{item.title}</div>
                      <div className="text-gray-600 text-sm mt-0.5">{item.desc}</div>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-5 bg-white rounded-xl border border-gray-200">
                <div className="text-sm font-semibold text-gray-700 mb-2">Prefer to call or email?</div>
                <a href="tel:9388674438" className="block text-brand-blue font-semibold hover:underline">(938) 867-4438</a>
                <a href="mailto:Info@propertyconsultantsllc.com" className="block text-brand-blue text-sm hover:underline mt-1">Info@propertyconsultantsllc.com</a>
              </div>
            </div>

            {/* Calendly embed */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
                <iframe
                  src="https://calendly.com/jacob-harbin-propertyconsultantsllc/30min"
                  width="100%"
                  height="700"
                  frameBorder="0"
                  title="Schedule a 15-minute call with Property Management Consultants"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
