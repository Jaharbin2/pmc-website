import type { Metadata } from 'next';
import { getListedUnits, type ListingWithUnit } from '@/lib/buildium';
import RentalsClient from './RentalsClient';

export const metadata: Metadata = {
  title: 'Available Rentals in North Alabama | Property Management Consultants',
  description:
    'Browse available rental properties managed by Property Management Consultants, LLC in Huntsville, Madison, Athens, and across North Alabama.',
};

export const revalidate = 300; // refresh every 5 minutes

async function fetchListings(): Promise<{ listings: ListingWithUnit[]; error: boolean }> {
  if (!process.env.BUILDIUM_CLIENT_ID || !process.env.BUILDIUM_CLIENT_SECRET) {
    return { listings: [], error: true };
  }
  try {
    const listings = await getListedUnits();
    return { listings, error: false };
  } catch {
    return { listings: [], error: true };
  }
}

export default async function RentalsPage() {
  const { listings, error } = await fetchListings();

  return (
    <>
      <section className="bg-gradient-to-br from-brand-navy to-brand-blue text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-5xl sm:text-6xl mb-4">Available Rentals</h1>
          <p className="text-xl text-blue-100">
            Browse our available properties across North Alabama. Updated in real time.
          </p>
        </div>
      </section>
      <RentalsClient listings={listings} error={error} />
    </>
  );
}
