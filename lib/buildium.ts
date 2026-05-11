import axios from 'axios';

const BASE_URL = 'https://api.buildium.com/v1';

function getHeaders() {
  return {
    'x-buildium-client-id': process.env.BUILDIUM_CLIENT_ID ?? '',
    'x-buildium-client-secret': process.env.BUILDIUM_CLIENT_SECRET ?? '',
    'Content-Type': 'application/json',
  };
}

export interface BuildiumUnit {
  Id: number;
  UnitNumber: string;
  Address: {
    AddressLine1: string;
    AddressLine2: string | null;
    City: string;
    State: string;
    PostalCode: string;
  };
  Bedrooms: number | null;
  Bathrooms: number | null;
  SquareFeet: number | null;
  IsUnitListed: boolean;
}

export interface BuildiumListing {
  Rent: number | null;
  Description: string | null;
  AvailableDate: string | null;
  Photos: Array<{ Url: string; Caption: string | null }>;
}

export interface ListingWithUnit extends BuildiumUnit {
  listing: BuildiumListing | null;
}

const EXCLUDED_ADDRESS_RE = /758 ed spears/i;

export async function getListedUnits(): Promise<ListingWithUnit[]> {
  const response = await axios.get<BuildiumUnit[]>(`${BASE_URL}/rentals/units`, {
    headers: getHeaders(),
    params: { pagesize: 100, pagenumber: 1 },
  });

  const units = response.data.filter((u) => {
    if (!u.IsUnitListed) return false;
    const addr = `${u.Address.AddressLine1} ${u.Address.AddressLine2 ?? ''}`;
    if (EXCLUDED_ADDRESS_RE.test(addr)) return false;
    return true;
  });

  const results = await Promise.all(
    units.map(async (unit) => {
      try {
        const listingRes = await axios.get<BuildiumListing>(`${BASE_URL}/rentals/units/${unit.Id}/listing`, {
          headers: getHeaders(),
        });
        return { ...unit, listing: listingRes.data };
      } catch {
        return { ...unit, listing: null };
      }
    })
  );

  return results;
}
