import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';

const cityData: Record<string, {
  display: string;
  state: string;
  intro: string;
  market: string;
  neighborhoods?: string[];
  metaDesc: string;
}> = {
  huntsville: {
    display: 'Huntsville',
    state: 'AL',
    metaDesc: 'Professional property management in Huntsville, AL. Property Management Consultants offers transparent pricing — $250 leasing fee + 10% monthly — with no hidden fees. Serving the Rocket City.',
    intro: "Huntsville, Alabama — the Rocket City — is one of the fastest-growing metros in the Southeast. Fueled by a booming aerospace, defense, and tech sector centered around Redstone Arsenal and Cummings Research Park, Huntsville consistently attracts high-earning professionals and a well-qualified rental population.",
    market: "Huntsville's rental market remains strong across all property types, from downtown condos to suburban single-family homes. Demand outpaces supply in many neighborhoods, especially those close to major employment corridors. Vacancy rates are low, lease-up times are fast, and rents have trended upward year over year.",
    neighborhoods: ['Downtown', 'Five Points', 'MidCity', 'Jones Valley', 'Hampton Cove', 'Meridianville'],
  },
  madison: {
    display: 'Madison',
    state: 'AL',
    metaDesc: 'Property management in Madison, AL. Property Management Consultants provides full-service management for landlords in Madison with transparent pricing and personal service.',
    intro: "Madison, Alabama is one of the most sought-after communities in the Tennessee Valley. Consistently ranked among the best small cities in America, Madison offers top-rated schools, a thriving town square, and convenient access to Huntsville's employment centers.",
    market: "Madison's rental market attracts families, professionals, and military families stationed at Redstone Arsenal. Rental demand is high and vacancy periods are typically short. Single-family homes and townhouses are the most common rental property types, with rents at the top of the North Alabama market.",
    neighborhoods: ['Old Town Madison', 'Town Madison', 'Balch Road Corridor', 'Ditto Landing area'],
  },
  athens: {
    display: 'Athens',
    state: 'AL',
    metaDesc: 'Property management in Athens, AL. Property Management Consultants manages rentals in Athens with simple pricing — $250 leasing fee + 10% monthly — and no hidden fees.',
    intro: "Athens, Alabama sits in Limestone County, midway between Huntsville and Nashville on I-65. The city has seen strong growth as affordability drives renters and buyers out of the more expensive Huntsville market. Athens offers a charming historic downtown, excellent schools, and a growing business community.",
    market: "Athens presents excellent value for landlords. Rents are favorable relative to purchase prices, and the proximity to Huntsville's job market drives steady rental demand from commuters seeking more affordable housing. The market has tightened considerably in recent years as the city has grown.",
    neighborhoods: ['Downtown Athens', 'Ardmore area', 'Limestone County communities'],
  },
  florence: {
    display: 'Florence',
    state: 'AL',
    metaDesc: 'Property management in Florence, AL. Property Management Consultants manages Shoals area rentals with transparent pricing and local expertise.',
    intro: "Florence, Alabama anchors the Shoals region alongside Sheffield, Muscle Shoals, and Tuscumbia. Home to the University of North Alabama and a vibrant arts and music scene, Florence has a diverse rental demographic ranging from students to long-term working professionals.",
    market: "The Shoals rental market offers some of the most favorable price-to-rent ratios in North Alabama. Lower property values and consistent rental demand — driven by UNA enrollment, manufacturing employment, and healthcare — make the region attractive for landlords. Property Management Consultants manages properties throughout the Shoals area.",
    neighborhoods: ['Downtown Florence', 'UNA area', 'Cox Creek area', 'Elgin area'],
  },
  'muscle-shoals': {
    display: 'Muscle Shoals',
    state: 'AL',
    metaDesc: 'Property management in Muscle Shoals, AL. Property Management Consultants provides full-service management for Shoals area landlords with transparent, straightforward pricing.',
    intro: "Muscle Shoals, Alabama is world-famous as the home of FAME Studios and a musical heritage that defined American soul and rock music. Today, Muscle Shoals is a growing community with a stable local economy, affordable housing, and strong community identity.",
    market: "Muscle Shoals offers landlords solid rental yields with relatively low barriers to entry. The rental market is stable with consistent demand from local workforce, healthcare workers, and residents who want the Shoals lifestyle at an accessible price point.",
    neighborhoods: ['Downtown Muscle Shoals', 'Avalon area', 'McFarland area'],
  },
};

export async function generateStaticParams() {
  return Object.keys(cityData).map((city) => ({ city }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = cityData[city];
  if (!data) return {};
  return {
    title: `Property Management in ${data.display}, ${data.state} | Property Management Consultants`,
    description: data.metaDesc,
  };
}

const services = [
  'Tenant marketing and listing syndication',
  'Thorough tenant screening (credit, income, background, evictions)',
  'Lease preparation and execution',
  'Move-in / move-out inspections with photos',
  'Monthly rent collection and owner disbursements',
  'Maintenance coordination with vetted local vendors',
  'Bi-annual property inspections',
  'Monthly financial statements and owner portal',
  'Annual P&L + 1099 preparation',
  'Lease renewals at no additional cost',
];

export default async function CityPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = cityData[city];
  if (!data) notFound();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-blue-200 text-sm font-medium mb-3 uppercase tracking-wide">Property Management</div>
          <h1 className="text-5xl sm:text-6xl mb-6">
            Property Management in {data.display}, {data.state}
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl">
            Local expertise. Transparent pricing. Full-service management for {data.display} landlords.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl text-brand-navy mb-5">Rentals in {data.display}</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>{data.intro}</p>
                <p>{data.market}</p>
              </div>
              {data.neighborhoods && (
                <div className="mt-6">
                  <div className="font-semibold text-brand-navy text-sm mb-3">Areas we serve in {data.display}:</div>
                  <div className="flex flex-wrap gap-2">
                    {data.neighborhoods.map((n) => (
                      <span key={n} className="px-3 py-1 bg-brand-cream border border-gray-200 rounded-full text-sm text-gray-600">
                        {n}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div>
              <h2 className="text-3xl text-brand-navy mb-5">Property Management Consultants Services in {data.display}</h2>
              <ul className="space-y-3">
                {services.map((s) => (
                  <li key={s} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-brand-blue mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700 text-sm">{s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing callout */}
      <section className="py-16 px-4 bg-brand-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl text-brand-navy mb-4">Simple pricing for {data.display} landlords</h2>
          <p className="text-gray-600 mb-10 text-lg">No hidden fees, no surprises. Just two numbers.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-xl mx-auto mb-10">
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-bold text-brand-blue mb-2">$250</div>
              <div className="text-brand-navy font-semibold">One-Time Leasing Fee</div>
              <div className="text-gray-500 text-sm mt-1">Paid once when we place a tenant</div>
            </div>
            <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm text-center">
              <div className="text-5xl font-bold text-brand-blue mb-2">10%</div>
              <div className="text-brand-navy font-semibold">Monthly Management</div>
              <div className="text-gray-500 text-sm mt-1">Of monthly rent collected</div>
            </div>
          </div>
          <Link href="/pricing" className="text-brand-blue font-semibold hover:underline text-sm">
            See full pricing breakdown with fee comparison →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-brand-navy text-white text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl mb-4">Manage your {data.display} rental with Property Management Consultants</h2>
          <p className="text-blue-100 text-lg mb-8">
            Book a free 15-minute call to discuss your {data.display} property and get a clear picture of what working with Property Management Consultants looks like.
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
