'use client';

import { useState, useMemo } from 'react';

type Market = 'shoals' | 'huntsville' | 'athens' | 'madison';
type PropertyType = 'sfh' | 'townhouse' | 'multifamily';

const RATES: Record<Market, Record<PropertyType, number[]>> = {
  shoals:     { sfh: [950, 1050, 1175, 1350, 1550], townhouse: [825, 925, 1050, 1200, 1375], multifamily: [700, 800, 925, 1075, 1250] },
  huntsville: { sfh: [1150, 1300, 1475, 1700, 1975], townhouse: [975, 1100, 1275, 1475, 1700], multifamily: [850, 975, 1125, 1300, 1525] },
  athens:     { sfh: [1000, 1125, 1275, 1475, 1700], townhouse: [875, 975, 1125, 1300, 1500], multifamily: [750, 850, 1000, 1175, 1375] },
  madison:    { sfh: [1200, 1350, 1525, 1750, 2025], townhouse: [1025, 1150, 1325, 1525, 1750], multifamily: [875, 1000, 1150, 1325, 1550] },
};

const BUMPS: Record<string, number> = {
  garage: 40,
  pets: 35,
  washer: 50,
  yard: 30,
  newkitchen: 60,
  hvac: 45,
};

const CONDITION_MULT: Record<number, number> = {
  1: 0.82,
  2: 0.91,
  3: 1.0,
  4: 1.07,
  5: 1.16,
};

const MARKET_LABELS: Record<Market, string> = {
  shoals: 'Shoals (Florence / Sheffield / Muscle Shoals)',
  huntsville: 'Huntsville',
  athens: 'Athens',
  madison: 'Madison',
};

// Zip code → market mapping for North Alabama
const ZIP_TO_MARKET: Record<string, Market> = {
  // Huntsville
  '35801': 'huntsville', '35802': 'huntsville', '35803': 'huntsville',
  '35804': 'huntsville', '35805': 'huntsville', '35806': 'huntsville',
  '35807': 'huntsville', '35808': 'huntsville', '35809': 'huntsville',
  '35810': 'huntsville', '35811': 'huntsville', '35812': 'huntsville',
  '35813': 'huntsville', '35814': 'huntsville', '35815': 'huntsville',
  '35816': 'huntsville', '35824': 'huntsville',
  // Madison
  '35756': 'madison', '35757': 'madison', '35758': 'madison', '35759': 'madison',
  // Athens
  '35611': 'athens', '35612': 'athens', '35613': 'athens', '35614': 'athens',
  // Shoals (Florence, Sheffield, Muscle Shoals, Tuscumbia)
  '35630': 'shoals', '35631': 'shoals', '35632': 'shoals', '35633': 'shoals',
  '35634': 'shoals', '35660': 'shoals', '35661': 'shoals', '35662': 'shoals',
  '35674': 'shoals',
};

function roundTo25(n: number) {
  return Math.round(n / 25) * 25;
}

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function RentEstimator() {
  const [market, setMarket] = useState<Market>('huntsville');
  const [type, setType] = useState<PropertyType>('sfh');
  const [units, setUnits] = useState(2);
  const [beds, setBeds] = useState(3);
  const [baths, setBaths] = useState(2);
  const [condition, setCondition] = useState(3);
  const [zipInput, setZipInput] = useState('');
  const [zipStatus, setZipStatus] = useState<'idle' | 'found' | 'notfound'>('idle');
  const [features, setFeatures] = useState<Record<string, boolean>>({
    garage: false,
    pets: false,
    washer: false,
    yard: false,
    newkitchen: false,
    hvac: false,
  });

  function handleZipChange(e: React.ChangeEvent<HTMLInputElement>) {
    const val = e.target.value.replace(/\D/g, '').slice(0, 5);
    setZipInput(val);
    if (val.length === 5) {
      const found = ZIP_TO_MARKET[val];
      if (found) {
        setMarket(found);
        setZipStatus('found');
      } else {
        setZipStatus('notfound');
      }
    } else {
      setZipStatus('idle');
    }
  }

  const results = useMemo(() => {
    const bedIndex = Math.min(beds - 1, 4);
    let basePerUnit = RATES[market][type][bedIndex];

    // Bath adjustments
    if (baths >= 3) basePerUnit += 40 + 30;
    else if (baths >= 2.5) basePerUnit += 40;

    // Condition multiplier
    basePerUnit = basePerUnit * CONDITION_MULT[condition];

    // Feature bumps
    for (const [key, active] of Object.entries(features)) {
      if (active) basePerUnit += BUMPS[key];
    }

    const numUnits = type === 'multifamily' ? units : 1;
    const base = basePerUnit * numUnits;

    const lo = roundTo25(base * 0.93);
    const hi = roundTo25(base * 1.07);
    const mid = roundTo25((lo + hi) / 2);
    const annual = mid * 12;
    const mgmt = mid * 0.10;
    const netYear1 = annual - mgmt * 12 - (250 * numUnits);

    return { lo, hi, mid, annual, mgmt, netYear1, numUnits, basePerUnit: roundTo25(basePerUnit) };
  }, [market, type, units, beds, baths, condition, features]);

  const conditionLabels: Record<number, string> = {
    1: 'Needs work',
    2: 'Below average',
    3: 'Average',
    4: 'Updated',
    5: 'Fully renovated',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-brand-navy text-white px-8 py-6">
        <h3 className="text-2xl">Rent Estimator</h3>
        <p className="text-blue-200 text-sm mt-1">Get an instant rent estimate for your North Alabama property.</p>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code <span className="font-normal text-gray-400">(optional)</span></label>
            <input
              type="text"
              inputMode="numeric"
              placeholder="e.g. 35801"
              value={zipInput}
              onChange={handleZipChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
            {zipStatus === 'found' && (
              <p className="text-xs text-green-600 mt-1">Market set to: {MARKET_LABELS[market]}</p>
            )}
            {zipStatus === 'notfound' && (
              <p className="text-xs text-amber-600 mt-1">Zip not recognized — select your market below.</p>
            )}
          </div>

          {/* Market */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Market / Location</label>
            <select
              value={market}
              onChange={(e) => { setMarket(e.target.value as Market); setZipStatus('idle'); setZipInput(''); }}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            >
              {(Object.keys(MARKET_LABELS) as Market[]).map((m) => (
                <option key={m} value={m}>{MARKET_LABELS[m]}</option>
              ))}
            </select>
          </div>

          {/* Property Type */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Property Type</label>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              {(['sfh', 'townhouse', 'multifamily'] as PropertyType[]).map((t) => (
                <button
                  key={t}
                  onClick={() => setType(t)}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors ${type === t ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {t === 'sfh' ? 'Single-Family' : t === 'townhouse' ? 'Townhouse / Duplex' : 'Multifamily'}
                </button>
              ))}
            </div>
          </div>

          {/* Multifamily unit count */}
          {type === 'multifamily' && (
            <div className="md:col-span-2">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Units</label>
              <div className="flex rounded-lg overflow-hidden border border-gray-300">
                {[2, 3, 4, 5, 6, 8, 10].map((n) => (
                  <button
                    key={n}
                    onClick={() => setUnits(n)}
                    className={`flex-1 py-2.5 text-sm font-medium transition-colors ${units === n ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                  >
                    {n === 10 ? '10+' : n}
                  </button>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-1">Estimate shown is total for all units combined. Per-unit estimate: {fmt(results.basePerUnit)}/mo</p>
            </div>
          )}

          {/* Bedrooms */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {type === 'multifamily' ? 'Bedrooms per Unit' : 'Bedrooms'}
            </label>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              {[1, 2, 3, 4, 5].map((n) => (
                <button
                  key={n}
                  onClick={() => setBeds(n)}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors ${beds === n ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {n === 5 ? '5+' : n}
                </button>
              ))}
            </div>
          </div>

          {/* Bathrooms */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              {type === 'multifamily' ? 'Bathrooms per Unit' : 'Bathrooms'}
            </label>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              {[1, 1.5, 2, 2.5, 3].map((n) => (
                <button
                  key={n}
                  onClick={() => setBaths(n)}
                  className={`flex-1 py-2.5 text-sm font-medium transition-colors ${baths === n ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {n === 3 ? '3+' : n}
                </button>
              ))}
            </div>
          </div>

          {/* Condition */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Property Condition: <span className="text-brand-blue">{condition} — {conditionLabels[condition]}</span>
            </label>
            <input
              type="range"
              min={1}
              max={5}
              value={condition}
              onChange={(e) => setCondition(Number(e.target.value))}
              className="w-full accent-brand-blue"
            />
            <div className="flex justify-between text-xs text-gray-400 mt-1">
              <span>Needs work</span>
              <span>Average</span>
              <span>Fully renovated</span>
            </div>
          </div>

          {/* Features */}
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-gray-700 mb-3">Property Features</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { key: 'garage', label: 'Garage (+$40)' },
                { key: 'washer', label: 'W/D Hookups (+$50)' },
                { key: 'yard', label: 'Fenced Yard (+$30)' },
                { key: 'pets', label: 'Pet-Friendly (+$35)' },
                { key: 'newkitchen', label: 'Updated Kitchen (+$60)' },
                { key: 'hvac', label: 'New HVAC (+$45)' },
              ].map(({ key, label }) => (
                <label key={key} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={features[key]}
                    onChange={(e) => setFeatures((f) => ({ ...f, [key]: e.target.checked }))}
                    className="w-4 h-4 rounded accent-brand-blue"
                  />
                  <span className="text-sm text-gray-700">{label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mt-8 bg-brand-cream rounded-xl p-6 border border-gray-200">
          <h4 className="text-lg font-semibold text-brand-navy mb-5">
            Estimated Results
            {type === 'multifamily' && <span className="text-sm font-normal text-gray-500 ml-2">({results.numUnits} units combined)</span>}
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-brand-blue">{fmt(results.mid)}/mo</div>
              <div className="text-sm text-gray-500 mt-1">Estimated Monthly Rent</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-semibold text-gray-700">{fmt(results.lo)} – {fmt(results.hi)}</div>
              <div className="text-sm text-gray-500 mt-1">Likely Range</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">{fmt(results.annual)}</div>
              <div className="text-sm text-gray-500 mt-1">Est. Annual Gross</div>
            </div>
          </div>
          <div className="border-t border-gray-200 pt-5">
            <h5 className="text-sm font-semibold text-gray-700 mb-3">Net Income Breakdown with Property Management Consultants</h5>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Gross Annual Rent</span>
                <span className="font-medium">{fmt(results.annual)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Management Fee (10% × 12 mo)</span>
                <span>− {fmt(results.mgmt * 12)}</span>
              </div>
              <div className="flex justify-between text-red-600">
                <span>Leasing Fee (one-time{results.numUnits > 1 ? `, ${results.numUnits} units` : ''})</span>
                <span>− {fmt(250 * results.numUnits)}</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Renewal Fee</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Inspection Fee</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex justify-between text-green-700">
                <span>Maintenance Markup</span>
                <span className="font-semibold">$0</span>
              </div>
              <div className="flex justify-between border-t border-gray-300 pt-2 mt-2 text-brand-navy font-bold text-base">
                <span>Year 1 Net Income (est.)</span>
                <span>{fmt(results.netYear1)}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            Estimates based on current North Alabama market data. Actual rents may vary based on property condition, seasonality, and market changes.
          </p>
        </div>
      </div>
    </div>
  );
}
