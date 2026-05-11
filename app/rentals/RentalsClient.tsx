'use client';

import { useState, useMemo } from 'react';
import type { ListingWithUnit } from '@/lib/buildium';

const TENANT_TURNER_URL = 'https://app.tenantturner.com/listings/propertymanagementconsultants';

function fmt(n: number | null) {
  if (n == null) return 'Call for pricing';
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

function formatDate(dateStr: string | null) {
  if (!dateStr) return 'Available now';
  const d = new Date(dateStr);
  if (isNaN(d.getTime())) return 'Available now';
  const today = new Date();
  if (d <= today) return 'Available now';
  return `Available ${d.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}`;
}

interface Props {
  listings: ListingWithUnit[];
  error: boolean;
}

export default function RentalsClient({ listings, error }: Props) {
  const [bedsFilter, setBedsFilter] = useState<string>('all');
  const [cityFilter, setCityFilter] = useState<string>('all');

  const cities = useMemo(() => {
    const s = new Set(listings.map((l) => l.Address.City).filter(Boolean));
    return Array.from(s).sort();
  }, [listings]);

  const filtered = useMemo(() => {
    return listings.filter((l) => {
      if (bedsFilter !== 'all') {
        const beds = l.Bedrooms ?? 0;
        if (bedsFilter === '1' && beds !== 1) return false;
        if (bedsFilter === '2' && beds !== 2) return false;
        if (bedsFilter === '3' && beds !== 3) return false;
        if (bedsFilter === '4+' && beds < 4) return false;
      }
      if (cityFilter !== 'all' && l.Address.City !== cityFilter) return false;
      return true;
    });
  }, [listings, bedsFilter, cityFilter]);

  if (error) {
    return (
      <section className="py-20 px-4 bg-brand-cream text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl text-brand-navy mb-4">Check back soon</h2>
          <p className="text-gray-600 mb-6">
            We&apos;re having trouble loading our live listings right now. Please check our Tenant Turner page or give us a call to see what&apos;s available.
          </p>
          <a
            href={TENANT_TURNER_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors"
          >
            View Listings on Tenant Turner
          </a>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 px-4 bg-brand-cream min-h-[60vh]">
      <div className="max-w-6xl mx-auto">
        {/* Filters */}
        <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8 flex flex-wrap gap-4 items-center">
          <div>
            <label className="text-sm font-semibold text-gray-700 block mb-1">Bedrooms</label>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              {['all', '1', '2', '3', '4+'].map((b) => (
                <button
                  key={b}
                  onClick={() => setBedsFilter(b)}
                  className={`px-4 py-2 text-sm font-medium transition-colors ${bedsFilter === b ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {b === 'all' ? 'Any' : `${b} BR`}
                </button>
              ))}
            </div>
          </div>
          {cities.length > 0 && (
            <div>
              <label className="text-sm font-semibold text-gray-700 block mb-1">City</label>
              <select
                value={cityFilter}
                onChange={(e) => setCityFilter(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="all">All Cities</option>
                {cities.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
          )}
          <div className="ml-auto text-sm text-gray-500">
            {filtered.length} {filtered.length === 1 ? 'property' : 'properties'} found
          </div>
        </div>

        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <h2 className="text-2xl text-brand-navy mb-4">No properties match your filters</h2>
            <p className="text-gray-600 mb-6">Try adjusting your search or check our full listings page.</p>
            <a
              href={TENANT_TURNER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors"
            >
              View All on Tenant Turner
            </a>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((unit) => {
              const addr = [unit.Address.AddressLine1, unit.Address.AddressLine2].filter(Boolean).join(', ');
              const city = `${unit.Address.City}, ${unit.Address.State} ${unit.Address.PostalCode}`;
              const desc = unit.listing?.Description ?? '';
              const snippet = desc.length > 160 ? desc.slice(0, 157) + '…' : desc;

              return (
                <div key={unit.Id} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-brand-navy/5 px-6 py-5 border-b border-gray-100">
                    <div className="text-brand-navy font-semibold text-base leading-tight">{addr}</div>
                    <div className="text-gray-500 text-sm mt-0.5">{city}</div>
                  </div>
                  <div className="px-6 py-5 flex-1">
                    <div className="flex flex-wrap gap-3 mb-4">
                      {unit.Bedrooms != null && (
                        <span className="text-sm text-gray-600 flex items-center gap-1">
                          <svg className="w-4 h-4 text-brand-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                          {unit.Bedrooms} bed
                        </span>
                      )}
                      {unit.Bathrooms != null && (
                        <span className="text-sm text-gray-600">
                          {unit.Bathrooms} bath
                        </span>
                      )}
                      {unit.SquareFeet != null && (
                        <span className="text-sm text-gray-600">
                          {unit.SquareFeet.toLocaleString()} sqft
                        </span>
                      )}
                    </div>
                    <div className="text-2xl font-bold text-brand-blue mb-1">
                      {fmt(unit.listing?.Rent ?? null)}<span className="text-sm font-normal text-gray-500">/mo</span>
                    </div>
                    <div className="text-sm text-gray-500 mb-3">{formatDate(unit.listing?.AvailableDate ?? null)}</div>
                    {snippet && (
                      <p className="text-gray-600 text-sm leading-relaxed">{snippet}</p>
                    )}
                  </div>
                  <div className="px-6 pb-6">
                    <a
                      href={TENANT_TURNER_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center px-4 py-3 bg-brand-blue text-white font-semibold rounded-lg hover:bg-brand-navy transition-colors text-sm"
                    >
                      Schedule a Showing
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        <div className="mt-10 text-center text-sm text-gray-500">
          All showings scheduled through Tenant Turner.&nbsp;
          <a href={TENANT_TURNER_URL} target="_blank" rel="noopener noreferrer" className="text-brand-blue hover:underline">
            View full listings page
          </a>
        </div>
      </div>
    </section>
  );
}
