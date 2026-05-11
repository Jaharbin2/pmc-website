import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'About Property Management Consultants | Property Management Consultants, LLC',
  description:
    'Learn about Property Management Consultants, LLC — founded by investor Jacob Harbin in Huntsville, AL. Personal service, transparent pricing, investor-first mindset.',
};

const serviceAreas = [
  { city: 'Huntsville', slug: 'huntsville', note: 'County seat and largest city in North Alabama' },
  { city: 'Madison', slug: 'madison', note: 'Fast-growing suburb with strong rental demand' },
  { city: 'Athens', slug: 'athens', note: 'Growing community between Huntsville and Nashville' },
  { city: 'Florence', slug: 'florence', note: 'Cultural hub of the Shoals region' },
  { city: 'Sheffield', slug: null, note: 'Part of the greater Shoals area' },
  { city: 'Muscle Shoals', slug: 'muscle-shoals', note: 'Music heritage and strong workforce' },
  { city: 'Tuscumbia', slug: null, note: 'Historic city at the heart of the Shoals' },
];

export default function AboutPage() {
  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">About Property Management Consultants</h1>
          <p className="text-xl text-blue-100">
            Built by an investor, for investors. Personal service and transparent pricing — from day one.
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
                <h2 className="text-4xl text-brand-navy mb-6">Our Story</h2>
                <div className="space-y-5 text-gray-600 leading-relaxed">
                  <p>
                    Jacob Harbin has been a North Alabama real estate investor since before Property Management Consultants existed. He&apos;s owned rentals, dealt with unreliable vendors, paid fees he didn&apos;t understand, and gone weeks without hearing from management companies about his own properties.
                  </p>
                  <p>
                    He didn&apos;t start Property Management Consultants because he saw a business opportunity. He started it because he needed a management company he could trust — and couldn&apos;t find one.
                  </p>
                  <p>
                    If you own rental property in North Alabama, that&apos;s probably a familiar feeling. Property Management Consultants was built for you.
                  </p>
                </div>
              </div>
              <div className="bg-brand-cream rounded-2xl p-8 border border-gray-100">
                <h3 className="text-2xl text-brand-navy mb-4">What Makes Property Management Consultants Different</h3>
                <ul className="space-y-4">
                  {[
                    {
                      title: 'Investor-first mindset',
                      desc: "Jacob owns rental properties. He understands your goals, your margins, and why hidden fees hurt. Property Management Consultants is run with an owner's perspective.",
                    },
                    {
                      title: 'Transparent pricing',
                      desc: '$250 leasing fee. 10% management. The same two numbers every month, with no surprises.',
                    },
                    {
                      title: 'Personal relationships',
                      desc: "You work with real people who know your property. Not a ticketing system, not a call center.",
                    },
                    {
                      title: 'No minimum portfolio',
                      desc: "Whether you own one property or ten, you get the same full-service management experience.",
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
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3268.3!2d-86.5861!3d34.7304!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDQzJzQ5LjQiTiA4NsKwMzUnMDkuOSJX!5e0!3m2!1sen!2sus!4v1234567890"
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
