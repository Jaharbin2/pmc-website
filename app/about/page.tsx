import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Us | Property Management Consultants, LLC',
  description:
    'Property Management Consultants was built by a North Alabama landlord who needed a management company he could trust — and couldn\'t find one. Personal service, transparent pricing, no surprises.',
};

const serviceAreas = [
  { city: 'Huntsville', slug: 'huntsville', note: 'County seat and largest city in North Alabama' },
  { city: 'Madison', slug: 'madison', note: 'Fast-growing suburb with strong rental demand' },
  { city: 'Athens', slug: 'athens', note: 'Growing community between Huntsville and Nashville' },
  { city: 'Florence', slug: 'florence', note: 'Cultural hub of the Shoals region' },
  { city: 'Sheffield', slug: null, note: 'Part of the greater Shoals area' },
  { city: 'Muscle Shoals', slug: null, note: 'Music heritage and strong workforce' },
  { city: 'Tuscumbia', slug: null, note: 'Historic city at the heart of the Shoals' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'Is Property Management Consultants a licensed property management company?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. Property Management Consultants, LLC is a licensed property management company based in Huntsville, AL and is a member of the National Association of Residential Property Managers (NARPM).',
      },
    },
    {
      '@type': 'Question',
      name: 'Who owns Property Management Consultants?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Property Management Consultants was founded by Jacob Harbin, a North Alabama real estate investor who started the company after experiencing firsthand the shortcomings of other property management companies.',
      },
    },
    {
      '@type': 'Question',
      name: 'What areas does Property Management Consultants serve?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Property Management Consultants serves Huntsville, Madison, Athens, Florence, Sheffield, Muscle Shoals, Tuscumbia, and surrounding North Alabama communities.',
      },
    },
    {
      '@type': 'Question',
      name: 'How is Property Management Consultants different from other property management companies?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'PMC offers completely transparent pricing with no hidden fees — just a $250 one-time leasing fee and 10% monthly management. The company was founded by a landlord who understands the investor perspective.',
      },
    },
  ],
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">We Built the Company We Wished We&apos;d Had</h1>
          <p className="text-xl text-blue-100">
            Most owners come to us after being let down somewhere else. We built Property Management Consultants so that wouldn&apos;t happen to you.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Left: Photo */}
            <Image
              src="/images/jacob.jpg"
              alt="Jacob Harbin, founder of Property Management Consultants"
              width={560}
              height={700}
              className="rounded-2xl object-cover w-full shadow-md"
              priority
            />
            {/* Right: Story + Differentiators */}
            <div className="space-y-10">
              <div>
                <h2 className="text-4xl text-brand-navy mb-6">Why We Exist</h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Most rental owners take one of two paths. They manage it themselves — and end up fielding tenant calls at midnight, chasing late rent, and wondering when passive income became a second job. Or they hire a management company and watch fees quietly eat into their margins until the property costs more than it makes. Some get so fed up they stop renting altogether.
                  </p>
                  <p>
                    Jacob Harbin heard both stories over and over as a North Alabama real estate investor. He managed his own properties for years — not because he had to, but because he&apos;d seen what bad management looked like up close and didn&apos;t trust the alternative. He knew the industry had a problem, and he knew owners deserved better.
                  </p>
                  <p>
                    Property Management Consultants exists for those owners. Simple process. Transparent pricing. Real communication. So your investment finally works the way it was supposed to.
                  </p>
                </div>
              </div>
              <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl text-brand-navy mb-4">What This Means For You</h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Investor-first mindset',
                      desc: "Jacob owns rental properties. He understands your goals, your margins, and why hidden fees hurt. Property Management Consultants is run with an owner's perspective.",
                    },
                    {
                      title: 'Transparent pricing',
                      desc: 'A one-time $250 leasing fee when we place a tenant. Then 10% of monthly rent — nothing else, ever.',
                    },
                    {
                      title: 'Personal relationships',
                      desc: "You work with real people who know your property. Not a ticketing system, not a call center.",
                    },
                    {
                      title: 'No minimum portfolio',
                      desc: "Whether you own one property or ten, you get the same full-service management experience.",
                    },
                    {
                      title: 'NARPM member',
                      desc: 'Property Management Consultants is a proud member of the National Association of Residential Property Managers — the professional standard in the industry.',
                    },
                  ].map((item) => (
                    <li key={item.title} className="flex gap-3">
                      <svg className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <div>
                        <div className="font-semibold text-brand-navy text-sm">{item.title}</div>
                        <div className="text-gray-600 text-sm mt-0.5">{item.desc}</div>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Office */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl text-brand-navy mb-4">Our Office</h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Property Management Consultants is headquartered in downtown Huntsville at the historic Old Times Building — 228 Holmes Avenue NE, 2nd Floor. We&apos;re proud to be based in the heart of the city we serve.
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>228 Holmes Avenue NE, 2nd Floor<br />Huntsville, AL 35801</span>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:9388674438" className="hover:text-brand-blue transition-colors">(938) 867-4438</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:Info@propertyconsultantsllc.com" className="hover:text-brand-blue transition-colors">Info@propertyconsultantsllc.com</a>
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-4 h-4 text-brand-blue shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>Mon–Fri 9am–5pm</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=228+Holmes+Avenue+NE,+Huntsville,+AL+35801&output=embed"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Property Management Consultants office location"
                className="rounded-xl"
              />
              <p className="text-xs text-gray-400 mt-3 text-center">228 Holmes Ave NE, 2nd Floor — Old Times Building, Downtown Huntsville</p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl text-brand-navy text-center mb-4">Where We Operate</h2>
          <p className="text-gray-600 text-center mb-10">Property Management Consultants manages properties throughout North Alabama, including the Huntsville metro and the Shoals region.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {serviceAreas.map(({ city, slug, note }) => (
              <div key={city} className="bg-brand-cream rounded-xl p-5 border border-gray-100">
                <div className="font-semibold text-brand-navy mb-1">
                  {slug ? (
                    <Link href={`/locations/${slug}`} className="hover:text-brand-blue transition-colors">
                      {city}, AL
                    </Link>
                  ) : (
                    <span>{city}, AL</span>
                  )}
                </div>
                <div className="text-sm text-gray-500">{note}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4">Let&apos;s connect</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute owner call or reach out directly. We&apos;re always happy to talk real estate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-blue text-white font-semibold rounded-lg text-lg hover:bg-white hover:text-brand-navy transition-colors"
            >
              Book a 15-Minute Owner Call
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-300 text-blue-100 font-semibold rounded-lg text-lg hover:border-white hover:text-white transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
