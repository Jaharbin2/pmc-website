'use client';

import { useState, useMemo } from 'react';

type Period = 'monthly' | 'year1' | 'year2plus';

function fmt(n: number) {
  return n.toLocaleString('en-US', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
}

export default function NetIncomeCalculator() {
  const [rent, setRent] = useState(1400);
  const [units, setUnits] = useState(1);
  const [period, setPeriod] = useState<Period>('year1');

  const results = useMemo(() => {
    const r = Math.max(0, rent);
    const u = Math.max(1, units);

    if (period === 'monthly') {
      const gross = r * u;
      const mgmt = gross * 0.10;
      const lease = 0;
      const net = gross - mgmt;
      return { gross, mgmt, lease, net };
    } else if (period === 'year1') {
      const gross = r * u * 12;
      const mgmt = gross * 0.10;
      const lease = 250 * u;
      const net = gross - mgmt - lease;
      return { gross, mgmt, lease, net };
    } else {
      const gross = r * u * 12;
      const mgmt = gross * 0.10;
      const lease = 0;
      const net = gross - mgmt;
      return { gross, mgmt, lease, net };
    }
  }, [rent, units, period]);

  const periodLabels: Record<Period, string> = {
    monthly: 'Monthly',
    year1: 'Year 1',
    year2plus: 'Year 2+',
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="bg-brand-navy text-white px-8 py-6">
        <h3 className="text-2xl">Net Income Calculator</h3>
        <p className="text-blue-200 text-sm mt-1">See exactly what you keep after Property Management Consultants fees.</p>
      </div>
      <div className="p-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-6">
          {/* Monthly Rent */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Monthly Rent</label>
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 font-medium">$</span>
              <input
                type="number"
                min={0}
                step={50}
                value={rent}
                onChange={(e) => setRent(Number(e.target.value))}
                className="w-full border border-gray-300 rounded-lg pl-7 pr-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>
          </div>

          {/* Number of Properties */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Number of Properties</label>
            <input
              type="number"
              min={1}
              value={units}
              onChange={(e) => setUnits(Number(e.target.value))}
              className="w-full border border-gray-300 rounded-lg px-4 py-2.5 text-gray-800 focus:outline-none focus:ring-2 focus:ring-brand-blue"
            />
          </div>

          {/* Period Toggle */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">Time Period</label>
            <div className="flex rounded-lg overflow-hidden border border-gray-300">
              {(['monthly', 'year1', 'year2plus'] as Period[]).map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`flex-1 py-2.5 text-xs font-medium transition-colors ${period === p ? 'bg-brand-navy text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  {periodLabels[p]}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="bg-brand-cream rounded-xl p-6 border border-gray-200">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
              <div className="text-3xl font-bold text-brand-blue">{fmt(results.gross)}</div>
              <div className="text-sm text-gray-500 mt-1">Gross Rent ({period === 'monthly' ? 'monthly' : period === 'year1' ? 'Year 1' : 'Year 2+'})</div>
            </div>
            <div className="bg-white rounded-xl p-5 border border-gray-100 text-center">
              <div className="text-3xl font-bold text-green-600">{fmt(results.net)}</div>
              <div className="text-sm text-gray-500 mt-1">You Keep</div>
            </div>
          </div>

          <h5 className="text-sm font-semibold text-gray-700 mb-3">Full Breakdown</h5>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="text-gray-600">Gross Rent</span>
              <span className="font-medium">{fmt(results.gross)}</span>
            </div>
            <div className="flex justify-between text-red-600">
              <span>Management Fee (10%)</span>
              <span>− {fmt(results.mgmt)}</span>
            </div>
            <div className="flex justify-between">
              <span className={results.lease > 0 ? 'text-red-600' : 'text-green-700'}>
                Leasing Fee {units > 1 ? `(${units} × $250)` : '($250/property)'}
              </span>
              <span className={`font-semibold ${results.lease > 0 ? 'text-red-600' : 'text-green-700'}`}>
                {results.lease > 0 ? `− ${fmt(results.lease)}` : '$0'}
              </span>
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
            <div className="flex justify-between text-green-700">
              <span>Move-Out Fee</span>
              <span className="font-semibold">$0</span>
            </div>
            <div className="flex justify-between text-green-700">
              <span>Admin / Setup Fee</span>
              <span className="font-semibold">$0</span>
            </div>
            <div className="flex justify-between border-t border-gray-300 pt-2 mt-2 text-brand-navy font-bold text-base">
              <span>You Keep</span>
              <span className="text-green-600">{fmt(results.net)}</span>
            </div>
          </div>
          <p className="text-xs text-gray-400 mt-4">
            {period === 'year1'
              ? 'Year 1 includes the one-time $250 leasing fee per property. Year 2+ has no leasing fee unless re-tenanting.'
              : period === 'monthly'
              ? 'Monthly view excludes the one-time leasing fee (paid at lease signing).'
              : 'Year 2+ assumes existing tenants renew with no new leasing fee.'}
          </p>
        </div>
      </div>
    </div>
  );
}
