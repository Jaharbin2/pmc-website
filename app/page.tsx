import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PropertyCarousel from '@/components/PropertyCarousel';

export const metadata: Metadata = {
  title: 'Property Management in Huntsville, AL | Property Management Consultants',
  description:
    'Property Management Consultants offers transparent residential property management in Huntsville and North Alabama. $250 leasing fee + 10% monthly — nothing else.',
};

const services = [
  'Tenant marketing & listing syndication',
  'Thorough tenant screening (credit, income, background)',
  'Lease preparation & signing',
  'Move-in / move-out inspections',
  'Rent collection & owner disbursements',
  'Maintenance coordination & vendor management',
  'Bi-annual property inspections',
  'Monthly financial statements',
  'Annual P&L report + 1099 preparation',
  'Eviction management (when needed)',
  'Online owner & tenant portals',
  'Renewals handled automatically',
];

const serviceAreas = [
  { name: 'Huntsville', slug: 'huntsville' },
  { name: 'Madison', slug: 'madison' },
  { name: 'Athens', slug: 'athens' },
  { name: 'Florence', slug: 'florence' },
  { name: 'Sheffield', slug: null },
  { name: 'Muscle Shoals', slug: null },
  { name: 'Tuscumbia', slug: null },
];

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Property Management Consultants, LLC',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '33',
    bestRating: '5',
  },
  review: [
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Caleb B.',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody:
        'Jacob and his team have proved to be very knowledgeable and capable. They have been very helpful in getting tenants into my rental property quickly and smoothly.',
    },
    {
      '@type': 'Review',
      author: {
        '@type': 'Person',
        name: 'Google Reviewer',
      },
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
      },
      reviewBody:
        'Property Management Consultants has been great from day one. Jacob Harbin has gone above and beyond.',
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      {/* Hero */}
      <section
        className="relative text-white py-24 px-4 overflow-hidden"
        style={{ backgroundImage: 'url(/images/hero.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-brand-navy/55" />
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-6xl lg:text-7xl mb-6 leading-tight">
            You Should Not Worry About Your Rental Property.
          </h1>
          <p className="text-xl sm:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Providing You Hassle-Free Property Management
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/book-a-call"
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-gold text-white font-semibold rounded-lg text-lg hover:bg-white hover:text-brand-navy transition-colors"
            >
              Book a 15-Minute Owner Call
            </Link>
            <a
              href="https://app.tenantturner.com/listings/propertymanagementconsultants"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 text-base font-medium hover:text-white transition-colors underline underline-offset-2"
            >
              Browse Rentals
            </a>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-24 px-4 bg-brand-navy">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl sm:text-5xl text-white mb-14 leading-tight text-center">
            If You&apos;re Tired of Dealing With
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white rounded-2xl p-10 flex flex-col gap-5 shadow-xl">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy">Hidden fees that quietly eat your returns.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Renewal fees, inspection charges, maintenance markups — charges you didn&apos;t see coming.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 flex flex-col gap-5 shadow-xl">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy">Midnight maintenance calls.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Emergency repairs on top of a full-time job and everything else life demands of you.</p>
            </div>
            <div className="bg-white rounded-2xl p-10 flex flex-col gap-5 shadow-xl">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center shrink-0">
                <svg className="w-8 h-8 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
              </div>
              <h3 className="text-2xl font-semibold text-brand-navy">Tenant issues.</h3>
              <p className="text-gray-600 leading-relaxed text-lg">Late rent, lease violations, or evictions — without a reliable system to handle them.</p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/20 text-center">
            <p className="text-4xl sm:text-5xl text-white leading-tight">
              You Don&apos;t Have to Anymore.
            </p>
          </div>
        </div>
      </section>

      <PropertyCarousel />

      {/* 3-Step Plan */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl text-brand-navy mb-4">Getting started is simple</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5">1</div>
              <h3 className="text-xl text-brand-navy mb-3">Book a free 15-minute call</h3>
              <p className="text-gray-600 leading-relaxed">
                We learn about your property and answer your questions. No pressure.
              </p>
            </div>
            <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5">2</div>
              <h3 className="text-xl text-brand-navy mb-3">We take care of everything</h3>
              <p className="text-gray-600 leading-relaxed">
                Leasing, maintenance, rent collection, reporting. All of it.
              </p>
            </div>
            <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100 text-center">
              <div className="w-12 h-12 bg-brand-blue text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-5">3</div>
              <h3 className="text-xl text-brand-navy mb-3">Collect your deposit every month</h3>
              <p className="text-gray-600 leading-relaxed">
                Direct deposit, full statement, zero landlord headaches.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Property Management Consultants — reframed as outcomes */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl text-brand-navy mb-4">Why property owners choose Property Management Consultants</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl text-brand-navy mb-3">No more surprise charges</h3>
              <p className="text-gray-600 leading-relaxed">
                You&apos;ll never open a statement and find a fee you didn&apos;t expect. One leasing fee. 10% monthly. Nothing else, ever.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-2xl text-brand-navy mb-3">You&apos;ll always know what&apos;s happening</h3>
              <p className="text-gray-600 leading-relaxed">
                Jacob Harbin built this company as a landlord himself. You work with people who treat your property like their own — not a call center ticket.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-5">
                <svg className="w-6 h-6 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-2xl text-brand-navy mb-3">Never take a maintenance call again</h3>
              <p className="text-gray-600 leading-relaxed">
                From the first showing to the year-end 1099, Property Management Consultants handles every detail of managing your rental.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guide — Authority + Empathy */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <Image
              src="/images/jacob.jpg"
              alt="Jacob Harbin, founder of Property Management Consultants"
              width={480}
              height={560}
              className="rounded-2xl object-cover w-full shadow-md"
            />
            <div>
              <div className="inline-flex items-center gap-2 bg-yellow-50 border border-yellow-200 rounded-full px-4 py-2 mb-6">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-700">33 five-star Google reviews</span>
              </div>
              <h2 className="text-4xl text-brand-navy mb-5">Built by an investor, not a manager.</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                We know what it&apos;s like to own rental property and not be able to find a management company you can actually trust. Jacob Harbin started Property Management Consultants as a real estate investor — not as a manager who decided to start a company.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                That means he understands your margins, your frustrations, and exactly what it costs when a management company doesn&apos;t do its job. Every policy we have was written from the owner&apos;s seat.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center text-brand-blue font-semibold hover:underline"
              >
                Our story →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Everything Handled For You */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl text-brand-navy mb-4">Everything handled for you.</h2>
              <p className="text-gray-600 text-lg mb-8">
                When you work with Property Management Consultants, you get a full-service management team — not a la carte billing for every task.
              </p>
              <Link
                href="/for-owners"
                className="inline-flex items-center px-6 py-3 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-blue transition-colors"
              >
                See full service details
              </Link>
            </div>
            <div>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{service}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Explanatory Paragraph — BrandScript */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl text-brand-navy mb-6">Property management in North Alabama, done right.</h2>
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
            <p>
              At Property Management Consultants, we know that you want a profitable investment. In order to do that, you need systems in place that create stress-free management and get your property rented to excellent tenants.
            </p>
            <p>
              The problem many property owners face is that they have to choose between paying multiple fees without really knowing what management is going to cost them each month, or managing it themselves on top of a full-time job. Which makes them feel like they&apos;re stuck — overpaying for subpar management or dedicating late nights to coordinate repairs and take showing calls.
            </p>
            <p>
              We believe property owners should never be nickel-and-dimed by their management company. You should know clearly what it costs every month, and exactly what service you&apos;ll receive. That&apos;s why Jacob Harbin created Property Management Consultants — as an investor himself, he watched too many property owners pay high prices for low-quality management and decided to build something different: transparent pricing, a consistent service, and a team that treats your property like their own.
            </p>
            <p>
              Here&apos;s how it works: schedule a free 15-minute owner call, then we hold an &ldquo;owner playbook call&rdquo; to build a gameplan and set expectations for your property, then we take over management and place a quality tenant. Everything is handled for you, every step of the way. So you can stop worrying about your property — and start being profitable.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-brand-cream">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl text-brand-navy mb-3">Frequently Asked Questions</h2>
            <p className="text-gray-500">Everything property owners want to know before getting started.</p>
          </div>
          <div className="space-y-3">
            {[
              {
                q: 'How much does property management cost?',
                a: 'Our fees are simple and transparent: a $250 one-time leasing fee when we place a tenant, and 10% of gross monthly rent for ongoing management. No renewal fees, no startup fees, no maintenance markups, no admin fees. Ever.',
              },
              {
                q: "What's included in the monthly management fee?",
                a: 'Everything. Rent collection, maintenance coordination, tenant communication, monthly financial statements, bi-annual inspections, lease renewals, and more. There are no à la carte charges — one fee covers the full service.',
              },
              {
                q: 'How quickly can you find a tenant?',
                a: 'Most of our properties are leased within 2–4 weeks of listing. We market across all major rental platforms, coordinate showings through Tenant Turner, and screen thoroughly to place qualified tenants quickly.',
              },
              {
                q: "What happens if a tenant doesn't pay rent?",
                a: "We follow a clear process: reminder notices, late fee enforcement, and eviction management if needed. You won't have to make a single phone call — we handle everything and keep you informed throughout.",
              },
              {
                q: 'Do you handle maintenance?',
                a: 'Yes. Tenants submit all requests through the Buildium portal. We coordinate with our vetted vendor network, get the work done, and send you documentation. You\'re never on the phone at midnight.',
              },
              {
                q: "Can I see my property's financials online?",
                a: 'Absolutely. You get access to the owner portal through Buildium where you can view monthly statements, maintenance records, and all activity on your property at any time.',
              },
              {
                q: 'How do I get started?',
                a: 'Book a free 15-minute owner call. We\'ll learn about your property, answer your questions, and give you a clear picture of what working together looks like. No pressure, no commitment.',
              },
            ].map((item) => (
              <details key={item.q} className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                <summary className="flex items-center justify-between gap-4 px-7 py-5 cursor-pointer list-none">
                  <span className="text-lg font-semibold text-brand-navy">{item.q}</span>
                  <svg className="w-5 h-5 text-brand-blue shrink-0 transition-transform group-open:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-7 pb-6 text-gray-600 leading-relaxed">{item.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Rent Estimator Teaser */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-brand-navy to-brand-blue rounded-2xl p-10 text-white">
            <h2 className="text-3xl mb-3">Curious what your property could rent for?</h2>
            <p className="text-blue-100 text-lg mb-6">
              Use our free Rent Estimator to get an instant market estimate based on location, property type, and condition — plus a full income projection with Property Management Consultants.
            </p>
            <Link
              href="/owner-tools"
              className="inline-flex items-center px-6 py-3 bg-white text-brand-navy font-semibold rounded-lg hover:bg-brand-cream transition-colors"
            >
              Try the Rent Estimator
              <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl text-brand-navy mb-4">Serving North Alabama</h2>
          <p className="text-gray-600 mb-8">We manage properties across North Alabama and surrounding communities.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((city) => (
              city.slug ? (
                <Link
                  key={city.name}
                  href={`/locations/${city.slug}`}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium hover:border-brand-blue hover:text-brand-blue transition-colors"
                >
                  {city.name}, AL
                </Link>
              ) : (
                <span
                  key={city.name}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-gray-700 font-medium"
                >
                  {city.name}, AL
                </span>
              )
            ))}
          </div>
        </div>
      </section>

      {/* Tenant Section — smaller, secondary */}
      <section className="py-12 px-4 bg-white border-t border-gray-200">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl text-brand-navy mb-2">Looking for a rental?</h2>
          <p className="text-gray-500 text-sm mb-5">
            Browse our available properties across North Alabama.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="https://app.tenantturner.com/listings/propertymanagementconsultants"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-brand-navy text-brand-navy font-semibold rounded-lg hover:bg-brand-navy hover:text-white transition-colors text-sm"
            >
              Browse Rentals
            </a>
            <a
              href="https://app.tenantturner.com/listings/propertymanagementconsultants"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 bg-brand-navy text-white font-semibold rounded-lg hover:bg-brand-blue transition-colors text-sm"
            >
              Apply Now
            </a>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-1 mb-3">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <h2 className="text-4xl text-brand-navy mb-2">What our owners say</h2>
            <p className="text-gray-500">All reviews from Google</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Lee Priest',
                text: 'Property Management Consultants have been great from day one. Mr. Jacob Harbin has gone above and beyond to accommodate both myself (owner) and the tenants. I highly recommend Property Management Consultants.',
              },
              {
                name: 'Matt G',
                text: 'Jacob and his team did a phenomenal job of securing tenants for my property in Huntsville. A+ in communication and patience. I will continue to use his team as my portfolio grows.',
              },
              {
                name: 'Michelle Scott',
                text: 'This is the first time that we have worked with a property manager and working with Jacob put our mind at ease — when we had questions, he had answers. Jacob is very professional, personable, and responsive.',
              },
              {
                name: 'Lila Harris',
                text: 'Jacob has been above and beyond in finding me a new tenant and assisting in preparing the house for move-in. I have been very happy with Jacob and his team!',
              },
              {
                name: 'Chad Howard',
                text: 'Jacob was a pleasure to work with and made renting our home stress free. He is in constant communication and always responsive. The best Property Manager I have had the pleasure of working with — across two rental properties over the past 13 years.',
              },
              {
                name: 'Caleb Beck',
                text: 'Jacob and his team have proved to be very knowledgeable and capable. They have been very helpful in getting tenants into my rental property quickly and smoothly. So far, my experience has been fantastic and I highly recommend utilizing the services of Property Management Consultants!',
              },
            ].map((review) => (
              <div key={review.name} className="bg-brand-cream rounded-2xl p-6 border border-gray-100 flex flex-col gap-4">
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-brand-gold" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">&ldquo;{review.text}&rdquo;</p>
                <div className="font-semibold text-brand-navy text-sm">{review.name}</div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/reviews"
              className="text-brand-blue font-medium hover:underline text-sm"
            >
              Read all Google reviews →
            </Link>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4">You shouldn&apos;t have to manage your rental property alone.</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute call. We&apos;ll talk through your property, answer every question, and give you a clear picture of what it looks like to hand this off entirely.
          </p>
          <Link
            href="/book-a-call"
            className="inline-flex items-center px-8 py-4 bg-brand-gold text-white font-semibold rounded-lg text-lg hover:bg-white hover:text-brand-navy transition-colors"
          >
            Book a 15-Minute Owner Call
          </Link>
        </div>
      </section>
    </>
  );
}
